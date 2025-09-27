"use client";
import { useForm, FormProvider } from "react-hook-form";
import InputText from "@/components/shared/InputText";

const BloodAddForm = () => {
  const methods = useForm();
  const { handleSubmit } = methods;

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <FormProvider {...methods}>
      <form
        className="w-full mt-[30px] space-y-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <InputText
            type="text"
            name="fullName"
            title="সম্পূর্ণ নাম"
            placeholder="সম্পূর্ণ নাম লিখুন"
            required
          />
          <InputText
            type="text"
            name="mobile"
            title="মোবাইল নাম্বার"
            placeholder="মোবাইল নাম্বার লিখুন"
            required
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <InputText
            type="url"
            name="photo"
            title="ছবির লিংক"
            placeholder="ছবির লিংক দিন"
          />
          <InputText
            type="text"
            name="whatsapp"
            title="WhatsApp নাম্বার"
            placeholder="WhatsApp নাম্বার লিখুন"
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <InputText
            type="text"
            name="address"
            title="ঠিকানা"
            placeholder="ঠিকানা লিখুন"
          />
          <InputText
            type="text"
            name="emergencyContact"
            title="জরুরি যোগাযোগ"
            placeholder="জরুরি যোগাযোগের নাম্বার"
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="w-full sm:w-1/2">
            <label className="block mb-1">লিঙ্গ</label>
            <select
              {...methods.register("gender", {
                required: "লিঙ্গ নির্বাচন করুন",
              })}
              className="border rounded-md px-3 py-2 w-full dark:bg-transparent dark:border-slate-700"
            >
              <option value="">লিঙ্গ নির্বাচন করুন</option>
              <option value="male">পুরুষ</option>
              <option value="female">মহিলা</option>
              <option value="other">অন্যান্য</option>
            </select>
            {methods.formState.errors.gender && (
              <p className="text-red-500 text-sm">
                {methods.formState.errors.gender.message}
              </p>
            )}
          </div>

          <div className="w-full sm:w-1/2">
            <label className="block mb-1">ব্লাড গ্রুপ</label>
            <select
              {...methods.register("bloodGroup", {
                required: "ব্লাড গ্রুপ নির্বাচন করুন",
              })}
              className="border rounded-md px-3 py-2 w-full dark:bg-transparent dark:border-slate-700"
            >
              <option value="">ব্লাড গ্রুপ নির্বাচন করুন</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
            </select>
            {methods.formState.errors.bloodGroup && (
              <p className="text-red-500 text-sm">
                {methods.formState.errors.bloodGroup.message}
              </p>
            )}
          </div>
        </div>
        {/* <div className="flex flex-col sm:flex-row gap-4">
          <InputText type="date" name="lastDonation" title="শেষ রক্তদান" />

        </div> */}
        <div className="flex flex-col sm:flex-row gap-4">
          <InputText
            type="number"
            name="height"
            title="উচ্চতা (ফুট)"
            placeholder="উচ্চতা লিখুন"
          />
          <InputText
            type="number"
            name="weight"
            title="ওজন (কেজি)"
            placeholder="ওজন লিখুন"
          />
        </div>

        <div>
          <label className="block mb-1">
            বর্তমান চিকিৎসা অবস্থা (যদি থাকে)
          </label>
          <textarea
            {...methods.register("medicalCondition")}
            className="w-full min-h-[120px] border rounded-md px-3 py-2 dark:bg-transparent dark:border-slate-700"
          ></textarea>
        </div>

        <div>
          <label className="block mb-1">বর্তমান ঔষধ (যদি থাকে)</label>
          <textarea
            {...methods.register("currentMedicine")}
            className="w-full min-h-[120px] border rounded-md px-3 py-2 dark:bg-transparent dark:border-slate-700"
          ></textarea>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="py-2 px-6 border border-[#818181]  rounded font-[500] mt-4 w-full hover:!bg-red-500 hover:text-white cursor-pointer"
        >
          রক্তদাতা যোগ করুণ
        </button>
      </form>
    </FormProvider>
  );
};

export default BloodAddForm;
