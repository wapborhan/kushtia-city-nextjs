"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

const UpdateUserName = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      userName: "wapborhan",
    },
  });

  const onSubmit = (data) => {
    console.log("Updated User Data:", data);
    // You can make an API call here to update the user in DB
  };

  return (
    <>
      <button
        onClick={() => router.back()}
        className="text-blue-600 shadow-lg px-8 border-2 py-3 flex items-center rounded-md cursor-pointer"
      >
        <i class="far fa-arrow-left me-2"></i>
        Back
      </button>
      <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-md mt-10">
        <h2 className="text-2xl font-bold mb-6 text-center">Update Username</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Group 1: Personal Info */}
          <div className="grid grid-cols-1 ">
            <div>
              <input
                type="text"
                {...register("userName", { required: true })}
                className="w-full p-2 border rounded"
              />
              {errors.userName && (
                <p className="text-red-500">Username is required</p>
              )}
            </div>
          </div>

          {/* Submit */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              Update Username
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default UpdateUserName;
