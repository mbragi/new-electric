'use client';
import React from 'react';
//use phosphor icons
// import { CheckIcon } from '@heroicons/react/solid';



const Princing = () => {

  return (
    <div  id='PRICING' className='w-full text-white my-24'>
      <div className='w-full h-[800px] bg-slate-900 absolute mix-blend-overlay'></div>

      <div className='max-w-[1240px] mx-auto py-12'>
            <div className='text-center py-8 text-slate-300'>
                {/* <h2 className='text-3xl uppercase'>Princing</h2> */}
                <h3 className='text-5xl font-bold text-white py-8'>The Right Price for your Light</h3>
                <p className='text-3xl'>This platforms exist to give out the easiest and flexible pricing to access Light at the comfort of your zone</p>
            </div>
      </div>

      {/* <div className='grid md:grid-cols-2'>
          <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
            <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>Standard</span>
            <div>
              <p className='text-6xl font-bold py-4 flex'>$49<span className='text-xl text-slate-500 flex flex-col justify-end'>/mo</span></p>
          </div>
            <p className='text-2xl py-8 text-slate-500'>These prices ranges from your subscription plans</p>
              <div className='text-2xl '>
                
                <p className='flex py-4'>Premium plans</p>
                <p className='flex py-4'>standard plans</p>
                <p className='flex py-4'>private plans</p>
                <p className='flex py-4'>normal plans</p>
                <button className='w-full py-4 my-4 border-2 text-white rounded-xl bg-blue-700'>Suscribe</button>

              </div>
        </div>
        <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
            <span className='uppercasen px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>Premium</span>
            <div>
              <p className='text-6xl font-bold py-4 flex'>$99<span className='text-xl text-slate-500 flex flex-col justify-end'>/mo</span></p>
          </div>
            <p className='text-2xl py-8 text-slate-500'>these prices ranges from your subscription plans</p>
              <div className='text-2xl '>
                <p className='flex py-4'>Premium plans</p>
                <p className='flex py-4'>standard plans</p>
                <p className='flex py-4'>private plans</p>
                <p className='flex py-4'>normal plans</p>
                <button className='w-full py-4 my-4 border-2 text-white rounded-xl bg-blue-700'>Suscribe</button>
              </div>
        </div>

      </div> */}
    </div>
  );
}

export default Princing;
