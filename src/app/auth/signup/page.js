"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState } from "react";
import SocialSignIn from "../signin/SocialSignIn";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import useAuth from "@/hooks/useAuth";
// import { TbLoader3 } from "react-icons/tb";

const SignUp = () => {
  const axiosPublic = useAxiosPublic();
  const [loading, setLoading] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile } = useAuth();
  const router = useRouter();

  const onSubmit = (formData) => {
    setLoading(true);
    createUser(formData.email, formData.password)
      .then((result) => {
        const loggedUser = result.user;
        updateUserProfile(
          formData.username,
          "https://raw.githubusercontent.com/wapborhan/kushtiabd-client/refs/heads/main/public/images/avatar.png"
        )
          .then(() => {
            const userInfo = {
              username: formData.username,
              photo: formData.photoURL,
              email: formData.email,
              badge: "bronze",
              role: "user",
            };
            setLoading(false);
            console.log(userInfo);
            router.push("/");
          })
          .catch((error) => {
            console.error(error);
            setLoading(false);
          });
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
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
          <div className="col-span-1"></div>
          <div className="col-span-6 offset-xl-1 text-left">
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
              <div className="row">
                <div className="form-group col-md-12">
                  <div className="flex justify-between items-center">
                    <label className="text-sm font-semibold">ইউজারনেম</label>
                    {errors.username && (
                      <span className="text-red-600">ইউজারনেম আবশ্যক</span>
                    )}
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="ইউজারনেম"
                    {...register("username", { required: true })}
                    autoFocus
                  />
                </div>

                <div className="form-group col-md-12">
                  <label className="text-sm font-semibold">ইমেল</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="ইমেল"
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <span className="text-red-600">ইমেল আবশ্যক</span>
                  )}
                </div>

                <div className="form-group col-md-12">
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="text-sm font-semibold text-gray-500"
                    >
                      পাসওয়ার্ড
                    </label>
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

                  {errors.password?.type === "required" && (
                    <p className="text-red-600">পাসওয়ার্ড আবশ্যক</p>
                  )}
                  {errors.password?.type === "minLength" && (
                    <p className="text-red-600">
                      পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের হতে হবে।
                    </p>
                  )}
                  {errors.password?.type === "maxLength" && (
                    <p className="text-red-600">
                      পাসওয়ার্ড অবশ্যই ১২ অক্ষরের কম হতে হবে।
                    </p>
                  )}
                  {errors.password?.type === "pattern" && (
                    <p className="text-red-600">
                      অবশ্যই বড় হাতের অক্ষর, ছোট হাতের অক্ষর, সংখ্যা ও বিশেষ
                      অক্ষর (!@#$&*) থাকতে হবে।
                    </p>
                  )}
                </div>

                <div className="form-btn grid grid-cols-12 gap-4">
                  <div className="col-span-6">
                    <button className="th-btn rounded-10 w-full" type="submit">
                      {loading ? (
                        <>
                          সাইন আপ হচ্ছে
                          <TbLoader3 className="text-[1.8rem] animate-spin ms-2" />
                        </>
                      ) : (
                        <>
                          সাইন আপ <i className="far fa-arrow-right ms-2"></i>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="col-span-6">
                    <SocialSignIn />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
