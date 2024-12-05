import React from 'react'
import { Button, ButtonOutline } from '../Button/BUtton';
import Rocket from '../../Assests/images/Rocket.png'

const Hero = () => {
    return (
        <section id='home' className='pt-28 lg:pt-36'>

            <div className='container lg:grid lg:grid-cols-2 items-center lg:gap-10'>
                <div>
                    <div className='flex items-center gap-3'>
                        <figure className='img-box w-9 h-9 rounded-lg'>
                            <img src="/images/avatar-1.jpg" alt="" height={40} width={40} className='img-cover' />
                        </figure>


                        <div className='flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide'>
                            <span className='relative w-2 h-2 rounded-full bg-emerald-400'>
                                <span className='absolute inset-0 rounded-full bg-emerald-400 animate-ping'></span>
                            </span>
                            Available for Work
                        </div>
                    </div>

                    <h2 className='headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w[15ch] mt-5 mb-8 lg:mb-10'> <span className='text-2xl'>Passionate Frontend Developer </span><br / >
Turning Designs into Digital Masterpieces</h2>

                    <div className='flex items-center gap-3'>
                       <Button label="Download Resume" icon="download" />
                        <ButtonOutline  label="Scroll Down" href='#about' icon="arrow_downward" />
                    </div>
                </div>

                <div className='hidden lg:block'>
                    <figure className='w-full max-w-[600px] ml-auto  rounded-[60px] overflow-hidden'>
                        <img src={Rocket} alt="Hero Image" width={656} height={900}
                            className='scale-x-[-1]' />
                    </figure>
                </div>
            </div>

        </section>

    )
}

export default Hero