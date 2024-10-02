import React from 'react'
import Image from 'next/image'

function InputItem({type}){
  return (
    <div className='bg-slate-300 p-3 rounded-lg mt-3 flex items-center gap-4'>
      <Image src={type=='pickup'?'/my_location.png ':'/place.png'}width={15} height={15}/>
      <input type='text' 
      placeholder={type=='pickup'?'Your location':'Your destination'}
      className='bg-transparent w-full outline-none'/>
    </div>
  )
}

export default InputItem