"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState } from "react";
import SocialSignIn from "../signin/SocialSignIn";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import useAuth from "@/hooks/useAuth";

const SignUp = () => {
  const axiosPublic = useAxiosPublic();
  const [loading, setLoading] = useState(false);
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile } = useAuth();
  const router = useRouter();

  const password = watch("password");
  const confirmPassword = watch("confirmPassword");

  const isPasswordMismatch = confirmPassword && password !== confirmPassword;

  const onSubmit = async (formData) => {
    if (formData.password !== formData.confirmPassword) {
      console.error("Confirm password does not match.");
      return;
    }

    setLoading(true);

    try {
      // Create user with email & password
      const result = await createUser(formData.email, formData.password);
      const loggedUser = result.user;

      // Update display name
      await updateUserProfile(formData.username);

      // Prepare user info to save in DB
      const userInfo = {
        userName: formData.username,
        name: "",
        email: formData.email,
        photo: "",
        gender: "",
        badge: "",
        contNum: "",
        address: "",
        role: "user",
        status: "inactive",
        bloodGroup: "",
      };

      await axiosPublic
        .post("/api/users", userInfo)
        .then((response) => {
          if (response.status === 200) {
            router.push("/");
          } else {
            console.error("Failed to create user:", response.data.error);
          }
        })
        .catch((error) => {
          console.error("Error creating user:", error);
        });
    } catch (error) {
      console.error("Signup error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="contact-sec5 spaces auth"
      style={{
        backgroundImage: "url(/assets/img/bg/contact_bg_7.png)",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundPosition: "right",
      }}
    >
      <div className="container">
        <div className="grid grid-cols-12">
          <div className="col-span-7 offset-xl-1 text-left">
            <Link
              href="/"
              className="flex items-center justify-center gap-2 mb-5"
            >
              <img
                src="/assets/img/logo.png"
                alt="logo"
                className="w-[150px] h-[150px]"
              />
            </Link>

            <h2 className="text-2xl font-bold text-white text-center">
              সাইন আপ
            </h2>

            <div className="title-area">
              <span className="sub-title2 flex gap-2">
                <img
                  src="/assets/img/theme-img/title_icon5_white.svg"
                  alt="shape"
                />
                আগে অ্যাকাউন্ট করেছেন?{" "}
                <Link
                  href="/auth/signin"
                  className="underline"
                  style={{ color: "#fff" }}
                >
                  লগইন করুন!
                </Link>
              </span>
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="input-transparent ajax-contact"
            >
              <div className="row grid grid-cols-12 gap-4">
                {/* Line 1: Username and Email */}
                <div className="form-group col-span-6">
                  <div className="flex justify-between items-center">
                    {" "}
                    <label className="text-sm font-semibold">
                      ইউজারনেম
                    </label>{" "}
                    {errors.username && (
                      <p className="!text-red-600 text-sm !m-0">
                        ইউজারনেম আবশ্যক
                      </p>
                    )}
                  </div>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="ইউজারনেম"
                    {...register("username", { required: true })}
                  />
                </div>

                <div className="form-group col-span-6">
                  <div className="flex justify-between items-center">
                    <label className="text-sm font-semibold">ইমেল</label>{" "}
                    {errors.email && (
                      <p className="!text-red-600 text-sm !m-0">ইমেল আবশ্যক</p>
                    )}
                  </div>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="ইমেল"
                    {...register("email", { required: true })}
                  />
                </div>

                {/* Line 2: First Name, Last Name, Password, Confirm Password */}

                <div className="form-group col-span-6">
                  <div className="flex gap-2 justify-between items-center">
                    <label className="text-sm font-semibold">পাসওয়ার্ড</label>
                    {errors.password && (
                      <p className="!text-red-600 text-sm !m-0">
                        অবশ্যই বড় হাতের অক্ষর, ছোট হাতের অক্ষর, সংখ্যা ও বিশেষ
                        অক্ষর (!@#$&*) থাকতে হবে।
                      </p>
                    )}
                  </div>

                  <input
                    type="password"
                    className="form-control"
                    placeholder="পাসওয়ার্ড"
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      maxLength: 12,
                      pattern:
                        /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                    })}
                  />
                </div>

                <div className="form-group col-span-6">
                  <div className="flex justify-between items-center">
                    <label className="text-sm font-semibold">
                      পুনরায় পাসওয়ার্ড
                    </label>{" "}
                    {errors.confirmPassword?.type === "required" && (
                      <p className="!text-red-600 text-sm  mb-1 ">
                        পুনরায় পাসওয়ার্ড আবশ্যক
                      </p>
                    )}
                    {isPasswordMismatch && !errors.confirmPassword && (
                      <p className="!text-red-600 text-sm mb-1">
                        পাসওয়ার্ড মিলছে না।
                      </p>
                    )}
                  </div>

                  <input
                    type="password"
                    className="form-control"
                    placeholder="পুনরায় পাসওয়ার্ড"
                    {...register("confirmPassword", {
                      required: true,
                    })}
                  />
                </div>

                {/* Submit + Social Login */}
                <div className="form-btn col-span-6">
                  <button
                    className="th-btn rounded-10 w-full cursor-pointer"
                    type="submit"
                  >
                    {loading ? "সাইন আপ হচ্ছে" : "সাইন আপ"}
                  </button>
                </div>

                <div className="col-span-6">
                  <SocialSignIn path="signup" />
                </div>
              </div>
            </form>
          </div>
          <div className="col-span-1"></div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
