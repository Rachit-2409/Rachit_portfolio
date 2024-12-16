import React from 'react'

const Footer = () => {
  return (
    <div className='mt-3'>
        <div className='p-2 w-full bg-zinc-950'>
            <div className='container flex items-center md:justify-between w-full ' >
              <div className='hidden md:block'>
              <figure >
                <img src='/src/Assests/logo.svg' alt="" className='h-[50px] '/>
             </figure>
              </div>
          <div>
          <p className='text-center'> Made with  <span className='text-red-700 text-2xl'>&hearts;</span> by Rachit </p>
          </div>

            </div>
             
        </div>
        <div>

        </div>
        
    </div>
  )
}

export default Footer