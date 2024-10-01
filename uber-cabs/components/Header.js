import React from 'react';
import Image from 'next/image';
import { UserButton } from '@clerk/nextjs';

function Header(){
    const headerMenu =[
      {
        id : 1,
        name:'Ride'        
      },
      {
        id : 2,
        name:'Package'        
      }
    ]
    return (
      <div className='p-4 pb3 pl-10 border-b-[4px]border-gray-200 flex justify-between'>
        <div className='flex gap-24 items-center'>
          <Image src='/trans_bg.png' width={80} height={80} alt='Logo'/> 
          
          {/* We will have to design our own logo bruhhh! */}
          
          <div className='flex gap-6 items-center'>
            {headerMenu.map((item)=>(
              <div className='flex gap-2 items-center'>
                <h2 className='text-[14px] font-medium cursor-pointer'>{item.name}</h2>
              </div>
            ))}
          </div>
        </div>
        <UserButton/>
      </div>
    )
  }
export default Header