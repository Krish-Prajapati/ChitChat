import React from 'react'
import InputItem from './InputItem'

function SearchSection() {
  return (
    <div className='p-2  md:pd-5
    border-[2px]  border-zinc-600 rounded-xl'>
        <p className='text-[20px] mb-7 mt-7  font-bold flex items-center justify-center '>Get a Ride!</p>
          <InputItem type='pickup'/>
          <InputItem type='destination'/>
          <button className='p-3 bg-black w-full mt-5 text-white rounded-lg '>Search</button>
    </div>
  )
}

export default SearchSection