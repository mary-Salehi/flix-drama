import React from 'react'
import useFetch from '../../hooks/useFetch';
import { Link, useLocation } from 'react-router-dom';
import {UserCircleIcon, UserIcon} from '@heroicons/react/24/outline'

function CastAndCrewTab() {
  const {state} = useLocation();
  const {data, error, isLoading} = useFetch(`https://api.jikan.moe/v4/anime/${state.mal_id}/characters`);
  console.log('characters are  ',data);
  
  
  return (
    <div className='dark:text-white p-6'>
      <h1 className='dark:text-white text-xl font-bold mb-8'>actors</h1>
      <div className='flex flex-wrap justify-center sm:justify-start gap-6'>
        {data.map((item) => {
          return(
            <div key={item.character.mal_id} className='w-[140px] rounded-3xl overflow-hidden bg-white dark:bg-primary-1-dark'>
              <div className='w-full h-[150px] flex items-center justify-center bg-purple-800'>
                <img src={item?.images?.optimized_url} alt="" />
                {item?.images?.optimized_url && <UserCircleIcon className='w-20'/>}
              </div>
              <Link className='flex flex-col px-8 py-5'>
                <span className='font-bold dark:text-white text-center mb-2'>{item.character.name}</span>
                <span className='text-[#858585] dark:text-[#DEDEDE]'>{item.role  === 'Main' ? 'کاراکتر اصلی' : 'کاراکتر فرعی'}</span>
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CastAndCrewTab