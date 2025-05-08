import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const generateCaptcha = () => {
  const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let captcha = "";
  for (let i = 0; i < 6; i++) {
    captcha += chars[Math.floor(Math.random() * chars.length)];
  }
  return captcha;
};

const formSchema = z.object({
  email: z.string().email("ایمیل نامعتبر است"),
  password: z.string().min(8, "حداقل 8 کاراکتر وارد کنید"),
  captchaInput: z.string().min(1, "کد کپچا را وارد کنید"),
});

function Form({ theme, page }) {
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(formSchema),
    mode: 'onBlur'
  });

  const refreshCaptcha = () => {
    setCaptcha(generateCaptcha());
  };

  const onSubmit = async (data) => {
    if (data.captchaInput !== captcha) {
      setError("captchaInput", {
        type: "manual",
        message: "کپچا وارد شده اشتباه است",
      });
      refreshCaptcha();
      return;
    }

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Form submitted:", data);
      setIsSubmitted(true);
      reset();
      refreshCaptcha();
    } catch (error) {
      setError("root", {
        type: "manual",
        message: "خطا در ارسال فرم. لطفاً دوباره تلاش کنید.",
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-6 w-full text-sm"
    >
      <div className="w-full space-y-3">
        <label className="flex items-center gap-3" htmlFor="email">
          <span className="">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.51 3.85L11.57 0.42C10.6 -0.14 9.40004 -0.14 8.42004 0.42L2.49004 3.85C1.52004 4.41 0.920044 5.45 0.920044 6.58V13.42C0.920044 14.54 1.52004 15.58 2.49004 16.15L8.43004 19.58C9.40004 20.14 10.6 20.14 11.58 19.58L17.52 16.15C18.49 15.59 19.09 14.55 19.09 13.42V6.58C19.08 5.45 18.48 4.42 17.51 3.85ZM10 5.34C11.29 5.34 12.33 6.38 12.33 7.67C12.33 8.96 11.29 10 10 10C8.71004 10 7.67004 8.96 7.67004 7.67C7.67004 6.39 8.71004 5.34 10 5.34ZM12.68 14.66H7.32004C6.51004 14.66 6.04004 13.76 6.49004 13.09C7.17004 12.08 8.49004 11.4 10 11.4C11.51 11.4 12.83 12.08 13.51 13.09C13.96 13.75 13.48 14.66 12.68 14.66Z"
                fill={` ${theme === "dark" ? "#ffff" : "#292D32"}`}
              ></path>
            </svg>
          </span>
          <span className="text-[#292D32] dark:text-white font-bold">
            نام کاربری یا ایمیل
          </span>
        </label>
        <input
          className="w-full rounded-xl p-3 font-semibold dark:bg-primary-1-dark bg-[#F8F8F8] placholder-[#717171] placeholder:text-xs dark:text-white focus:outline-0"
          type="text"
          id="email"
          {...register("email")}
          placeholder="نام کاربری یا ایمیل خود را وارد نمایید"
        />
        {errors.email && (
          <div className="p-1 px-3 text-xs bg-red-700 rounded-md text-white">
            {errors.email.message}
          </div>
        )}
      </div>
      <div className="w-full space-y-3">
        <label className="flex items-center gap-3" htmlFor="password">
          <span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 22 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.7901 2.22C15.8301 -0.73 11.0301 -0.73 8.09015 2.22C6.02015 4.27 5.40015 7.22 6.20015 9.82L1.50015 14.52C1.17015 14.86 0.940146 15.53 1.01015 16.01L1.31015 18.19C1.42015 18.91 2.09015 19.59 2.81015 19.69L4.99015 19.99C5.47015 20.06 6.14015 19.84 6.48015 19.49L7.30015 18.67C7.50015 18.48 7.50015 18.16 7.30015 17.96L5.36015 16.02C5.07015 15.73 5.07015 15.25 5.36015 14.96C5.65015 14.67 6.13015 14.67 6.42015 14.96L8.37015 16.91C8.56015 17.1 8.88015 17.1 9.07015 16.91L11.1901 14.8C13.7801 15.61 16.7301 14.98 18.7901 12.93C21.7401 9.98 21.7401 5.17 18.7901 2.22ZM13.5001 10C12.1201 10 11.0001 8.88 11.0001 7.5C11.0001 6.12 12.1201 5 13.5001 5C14.8801 5 16.0001 6.12 16.0001 7.5C16.0001 8.88 14.8801 10 13.5001 10Z"
                fill={` ${theme === "dark" ? "#ffff" : "#292D32"}`}
              ></path>
            </svg>
          </span>
          <span className="text-[#292D32] dark:text-white font-bold">
            رمز عبور
          </span>
        </label>
        <input
          className="w-full rounded-xl p-3 font-semibold dark:bg-primary-1-dark bg-[#F8F8F8] placholder-[#717171] placeholder:text-xs dark:text-white focus:outline-0"
          type="text"
          id="password"
          {...register("password")}
          placeholder="رمز عبور خود را وارد نمایید"
        />
        {errors.password && (
          <div className="p-1 px-3 text-xs bg-red-700 rounded-md text-white">
            {errors.password.message}
          </div>
        )}
      </div>
      <div>
        <div className="flex gap-3 items-center mb-3">
          <div className="w-28 h-4/5 p-1 tracking-widest bg-[#753590] text-white dark:text-background-dark dark:bg-white flex items-center justify-center font-bold">
            {captcha}
          </div>
          <input
            className="w-full rounded-xl p-2 font-semibold dark:bg-primary-1-dark bg-[#F8F8F8] placholder-[#717171] placeholder:text-xs dark:text-white focus:outline-0"
            type="text"
            id="captchaInput"
            {...register("captchaInput")}
            placeholder="عبارت کپجا"
          />
        </div>
        {errors.captchaInput && (
          <div className="p-1 px-3 text-xs bg-red-700 rounded-md text-white">
            {errors.captchaInput.message}
          </div>
        )}
      </div>
      <button
      disabled={isSubmitting}
        type="submit"
        className={`w-full flex justify-center py-4 rounded-xl bg-[#03D0D0] font-bold text-white ${isSubmitting ? 'opacity-50' : ''}`}
      >
        {page === "login" ? "ورود به حساب کاربری" : "ایجاد حساب کاربری"}
      </button>
    </form>
  );
}

export default Form;
