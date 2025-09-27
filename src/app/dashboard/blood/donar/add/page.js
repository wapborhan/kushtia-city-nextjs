import BloodAddForm from "./BloodAddForm";

const page = () => {
  return (
    <div>
      <section className="w-11/12 mx-auto">
        {/* title */}
        <div className="w-full flex flex-col items-center justify-center">
          <h1 className="text-[2rem] font-bold text-[#3B9DF8] leading-[36px]">
            রক্তদাতা নিবন্ধন ফরম
          </h1>
          <p className="text-[1rem] dark:text-slate-400 text-[#424242]">
            রক্তদাতা হওয়ার আগ্রহের জন্য ধন্যবাদ। অনুগ্রহ করে নিচের ফর্মটি পূরণ
            করুন।
          </p>
        </div>

        {/* form area */}
        <BloodAddForm />
      </section>
    </div>
  );
};

export default page;
