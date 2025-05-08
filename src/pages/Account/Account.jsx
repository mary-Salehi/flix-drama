import React from 'react'
import { useTheme } from '../../contexts/ThemeContext.';
import Form from './Form';
import { Link } from 'react-router-dom';

function Account({page}) {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-24">
      <div className="w-full !max-w-[360px] bg-white dark:bg-[#2e1f38]  p-4 xl:px-9 xl:pt-6 xl:pb-8 overflow-auto flex flex-col items-center rounded-[40px] z-50 mb-5">
        <div className="w-[100px] bg-[#DEDEDE] h-1 rounded-2xl"></div>
        <div className="py-5">
          <img
            className="w-[136px]"
            src={
              theme === "dark"
                ? "https://flix3drama.com/_app/immutable/assets/logo-dark-2b843ca3.svg"
                : "https://flix3drama.com/_app/immutable/assets/logo-light-d17b3f8b.svg"
            }
            alt="flix-drama-logo"
          />
        </div>
        <div className="bg-[#8E44AD] dark:bg-[#6C3483]  flex items-center text-center gap-1 p-2 rounded-md text-xs font-extrabold leading-5 text-white mb-6">
          <img
            className="w-4"
            src="https://flix3drama.com/_app/immutable/assets/info-8bf67566.svg"
            alt="info-icon"
          />
          <p>
            اگر قبلا از اپلیکیشن اندروید استفاده کرده اید با همان مشخصات
            میتوانید وارد شوید و یا از بخش فراموشی رمز عبور اکانت خود را
            برگردانید
          </p>
        </div>
        <Form theme={theme} page='signUp'/>
      </div>
      <div className='w-full flex flex-col items-center gap-5'>
        <Link className=' !max-w-[360px] flex items-center justify-center text-sm w-full h-[70px] z-50 bg-white rounded-[19px] dark:bg-[#2E1F38]'>
          <p className='text-[#434343] dark:text-white font-semibold'>
          {page === 'login' ? 'حساب کاربری ندارید؟ ثبت نام کنید!' : 'حساب کاربری دارید؟ وارد شوید!'}</p>
        </Link>
        <Link className=' !max-w-[360px] flex items-center justify-center text-sm w-full h-[70px] z-50 bg-white rounded-[19px] dark:bg-[#2E1F38]'>
          <p className='text-[#434343] dark:text-white font-semibold'>
          رمزعبور خود را فراموش کرده اید؟
          </p>
        </Link>
        <Link to={'/'} className=' !max-w-[360px] flex items-center justify-center text-sm w-full h-[70px] z-50 bg-white rounded-[19px] dark:bg-[#2E1F38]'>
          <span  className='text-[#434343] dark:text-white font-semibold'>بازگشت</span>
        </Link>
      </div>
    </div>
  );
}

export default Account