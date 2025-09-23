"use client";

import { useForm } from "react-hook-form";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import useSingleUser from "@/hooks/useSingleUser";
import { useParams } from "next/navigation";

const UpdateUser = () => {
  const [preview, setPreview] = useState("");
  const params = useParams();
  const { username } = params;
  const [singleUser, isLoading, isError] = useSingleUser(username);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
    watch,
  } = useForm();

  // 🔹 When singleUser data changes, update the form
  useEffect(() => {
    if (singleUser) {
      reset({
        photo: singleUser.photo || "",
        userName: singleUser.userName || "",
        email: singleUser.email || "",
        contNum: singleUser.contNum || "",
        address: singleUser.address || "",
        gender: singleUser.gender || "",
        bloodGroup: singleUser.bloodGroup || "",
      });
      setPreview(singleUser.photo || "");
    }
  }, [singleUser, reset]);

  const onSubmit = (data) => {
    console.log("Updated User Data:", data);
    // 🔥 API call to update user goes here
  };

  if (isLoading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-md mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Update User</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Group 1: Personal Info */}
        <div className="flex gap-4">
          <div className="flex items-center justify-center mb-4 border-2 rounded-full w-24 h-24">
            {preview && (
              <img
                src={preview}
                alt="Profile Preview"
                className="w-20 h-20 object-cover rounded-full border"
              />
            )}
          </div>

          <div className="flex-1">
            <label className="block font-medium mb-1">
              Profile Picture URL
            </label>
            <input
              type="url"
              {...register("photo")}
              onChange={(e) => {
                setPreview(e.target.value);
                setValue("photo", e.target.value);
              }}
              className="w-full p-2 border rounded"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium mb-1">Username</label>
            <div className="relative">
              <input
                type="text"
                {...register("userName")}
                disabled
                className="w-full p-2 border rounded"
              />
              <Link
                className="absolute top-1/2 text-white hover:text-red -translate-y-1/2 right-0 rounded-e-lg p-[15px] bg-[#101840]"
                href={`/dashboard/user/update/username/${username}`}
              >
                Change
              </Link>
            </div>
          </div>

          <div>
            <label name="email" className="block font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              {...register("email")}
              disabled
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Contact Number</label>
            <input
              type="text"
              {...register("contNum")}
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Address</label>
            <input
              type="text"
              {...register("address")}
              className="w-full p-2 border rounded"
            />
          </div>
        </div>

        {/* Group 2: Profile Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium mb-1">Gender</label>
            <select
              {...register("gender")}
              className="w-full p-2 border rounded"
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="Others">Others</option>
            </select>
          </div>

          <div>
            <label className="block font-medium mb-1">Blood Group</label>
            <select
              {...register("bloodGroup")}
              className="w-full p-2 border rounded"
            >
              <option value="">Select</option>
              {["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"].map(
                (group) => (
                  <option key={group} value={group}>
                    {group}
                  </option>
                )
              )}
            </select>
          </div>
        </div>

        {/* Submit */}
        <div className="pt-4">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Update User
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateUser;
