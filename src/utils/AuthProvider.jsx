"use client";

import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  deleteUser,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "./firebase.config";
import useAxiosPublic from "../hooks/useAxiosPublic";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const axiosPublic = useAxiosPublic();

  const ONE_HOUR = 60 * 60 * 1000;

  // ===== Helpers =====
  const getUserFromLocal = () => {
    const stored = localStorage.getItem("auth-user");
    if (!stored) return null;

    const parsed = JSON.parse(stored);
    if (Date.now() - parsed.timestamp > ONE_HOUR) {
      localStorage.removeItem("auth-user");
      return null;
    }
    return parsed.data;
  };

  const setUserToLocal = (data) => {
    const obj = {
      data,
      timestamp: Date.now(),
    };
    localStorage.setItem("auth-user", JSON.stringify(obj));
  };

  const clearUserLocal = () => {
    localStorage.removeItem("auth-user");
  };

  // ===== Auth methods =====
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = async () => {
    clearUserLocal();
    setUser(null);
    setLoading(true);
    return signOut(auth);
  };

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  const deleteUserFromFRB = () => {
    return deleteUser(auth.currentUser);
  };

  // ===== Effect: Initialize from localStorage =====
  useEffect(() => {
    const localUser = getUserFromLocal();
    if (localUser) {
      setUser(localUser);
      setLoading(false);
    }
  }, []);

  // ===== Effect: Always listen for Firebase auth changes =====
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        try {
          const res = await axiosPublic.get(
            `/api/user/${currentUser.displayName}` // 🔑 better to use email, not displayName
          );

          const fullUser = {
            firebase: currentUser,
            ...res.data?.data,
          };

          setUser(fullUser);
          setUserToLocal(fullUser);
        } catch (err) {
          console.error("Failed to fetch DB user:", err);
          setUser(currentUser);
          setUserToLocal(currentUser);
        }
      } else {
        setUser(null);
        clearUserLocal();
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [axiosPublic]);

  // ===== Effect: Auto logout after 1 hour =====
  useEffect(() => {
    const interval = setInterval(() => {
      const stored = localStorage.getItem("auth-user");
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Date.now() - parsed.timestamp > ONE_HOUR) {
          logOut();
        }
      }
    }, 60 * 1000); // check every 1 min

    return () => clearInterval(interval);
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    logIn,
    googleSignIn,
    logOut,
    updateUserProfile,
    deleteUserFromFRB,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
