"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import SocialSignIn from "./SocialSignIn";
import useAuth from "@/hooks/useAuth";

const SignIn = () => {
  const { logIn } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = ({ email, password }) => {
    setLoading(true);
    logIn(email, password)
      .then((result) => {
        const user = result.user;
        if (user) {
          router.push("/");
          setLoading(false);
        }
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };

  return (
    <div
      className="contact-sec5 spaces auth"
      style={{
        backgroundImage: "url(/assets/img/bg/contact_bg_5.png)",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="container">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-5"></div>
          <div className="col-span-6 order-1 text-left">
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
            <h2 className="text-2xl font-bold text-white text-center">লগইন</h2>
            <div className="title-area">
              <span className="sub-title2 flex gap-2 items-center">
                <img
                  src="/assets/img/theme-img/title_icon5_white.svg"
                  alt="shape"
                />
                কোন অ্যাকাউন্ট নেই?{" "}
                <Link
                  href="/auth/signup"
                  className="underline"
                  style={{ color: "#fff" }}
                >
                  শুরু করুন!
                </Link>
              </span>
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="input-transparent ajax-contact"
            >
              <div className="row">
                <div className="form-group col-md-12">
                  <label className="text-sm font-semibold">ইমেল</label>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="form-control"
                    {...register("email", {
                      required: "ইমেল আবশ্যক",
                    })}
                    defaultValue="test@gmail.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div className="form-group col-md-12">
                  <div
                    className="flex items-center justify-between"
                    style={{ width: "100%" }}
                  >
                    <label
                      htmlFor="password"
                      className="text-sm font-semibold text-gray-500"
                    >
                      পাসওয়ার্ড
                    </label>
                    <a
                      href="#"
                      className="text-sm text-primary hover:underline focus:text-secondary"
                    >
                      পাসওয়ার্ড ভুলে গেছেন?
                    </a>
                  </div>
                  <input
                    type="password"
                    placeholder="Password"
                    className="form-control"
                    {...register("password", {
                      required: "পাসওয়ার্ড আবশ্যক",
                    })}
                    defaultValue="Abc@123"
                  />
                  {errors.password && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                <div className="form-btn grid grid-cols-12 gap-4">
                  <div className="col-span-6">
                    <button
                      className="th-btn style3 rounded-10 w-full"
                      type="submit"
                    >
                      {loading ? (
                        <>
                          লগইন হচ্ছে...
                          {/* <TbLoader3 className="text-[1.8rem] animate-spin ms-2" /> */}
                        </>
                      ) : (
                        <>
                          লগইন <i className="far fa-arrow-right ms-2"></i>
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

export default SignIn;
