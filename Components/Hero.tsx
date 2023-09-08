import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className='w-full h-screen bg-zinc-300 flex flex-col justify-center items-center'>
      <div className='max-w-[1240px] m-auto pt-4'>
        <div className='grid md:grid-cols-2'>
          <div className='flex flex-col justify-center w-full items-center md:items-start '>
            <h1 className='py-3 text-3xl md:text-4xl font-bold'>Electricity Billing System</h1>
            <p className='text-2xl'>Makes Billing Accessible and Simple</p>
          </div>
          <div>
            {/* <Image className='w-full h-[80%]' src={'/meter.jpg'} width={200} height={100} alt='/' /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
