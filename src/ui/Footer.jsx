function Footer() {
  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap justify-center items-center mt-10">
      <div className="px-8 py-4 w-[330px] rounded-2xl bg-gradient-to-tr from-purple-800 to-fuchsia-500">
        <a className="flex items-center gap-5" href="">
          <img src="https://flix3drama.com/_app/immutable/assets/instagram-1483e58d.svg" alt="instagram-logo" />
          <div className="text-white">
            <p className="font-bold">ما را در اینستاگرام دنبال کنید.</p>
            <p className="opacity-60">FlixDrama.Official</p>
          </div>
        </a>
      </div>
      <div className="px-8 py-4 w-[330px] rounded-2xl bg-gradient-to-tr from-blue-800 to-sky-300">
        <a className="flex items-center gap-5" href="">
          <img src="https://flix3drama.com/_app/immutable/assets/send-2-2fb1adc7.svg" alt="instagram-logo" />
          <div className="text-white">
            <p className="font-bold">ما را در تلگرام دنبال کنید.</p>
            <p className="opacity-60">FlixDrama.Official</p>
          </div>
        </a>
      </div>
      <div className="px-8 py-4 w-[330px] rounded-2xl bg-gradient-to-tr from-teal-300 to-emerald-700">
        <a className="flex items-center gap-5" href="">
          <img src="https://flix3drama.com/_app/immutable/assets/android-10bc200c.svg" alt="instagram-logo" />
          <div className="text-white">
            <p className="font-bold">دانلود اپلیکیشن اندروید</p>
            <p className="opacity-60">FlixDrama.Official</p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Footer;