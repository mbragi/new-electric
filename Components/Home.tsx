import React from 'react';
import Image from 'next/image';
import meter from '@/public/Images/meter.jpg'

const HomepageComponent = () => {
  return (
    <div id='HOME' className='w-full h-screen bg-zinc-300 flex flex-col justify-center items-center cursor-pointer'>
      <div className='max-w-[1240px] m-auto pt-4'>
        <div className='grid md:grid-cols-2'>
          <div className='flex flex-col justify-center w-full items-center md:items-start '>
            <h1 className='py-3 text-3xl md:text-4xl font-bold'>Electricity Billing System</h1>
            <p className='text-2xl'>Makes Billing Accessible and Simple</p>
            {/* <button className='bg-blue-600 ml-16 w-44 text-white px-4 py-2 mt-4 rounded-md'>Subscribe</button> */}
          </div>
          <div>
            <Image className=' ml-4 w-full ' src={meter} width={400} height={300} alt='backgroundimage' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomepageComponent;
