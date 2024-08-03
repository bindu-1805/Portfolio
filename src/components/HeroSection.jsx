"use client";
import React from 'react'
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
    return (
        <section>
        <div className='grid grid-cols-1 sm:grid-cols-12'>
        <div className='col-span-7 place-self-center text-center sm:text-left'>
           <h1 className ='text-white mb-4 text-4l sm:text-5xl lg:text-6xl font-extrabold'>
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-600'>Hello, I&apos;m {" "} </span>
              <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Bindu Madhavi',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'A Front-end developer',
        1000,
        'An ML Enthusiast',
        1000
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
           </h1>
           <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
           A showcase of technical proficiencies and creative problem-solving through projects, experiences, and skills. 

           </p>
           <div>
            <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-red-600 via-orange-600 hover:bg-slate-300 text-white'>
            Hire me 
            </button>
            <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-red-600 via-orange-600 hover:bg-slate-800 text-white mt-3'>
            <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download CV</span>
            </button>
           </div>
        </div>
        <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
            <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
            <Image src='/images/profile.jpg' 
            alt='hero-img' 
            className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 '
            width={300} 
            height={300} 

            />
            </div>
            
        </div>

        </div>
        </section>
    );

};

export default HeroSection;
