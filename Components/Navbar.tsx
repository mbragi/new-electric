'use client'
import React, { useState } from 'react';
//i cant install this try phosphor icons
// import { MenuIcon, XIcon } from "@heroicons/react/outline";
import SignUpModal from '@/Components/Modals/SignUpModal';
import SignInModal from '@/Components/Modals/SignInModal';
// // eslint-disable-next-line no-unused-vars
// import { Link, animateScroll as scroll, } from 'react-scroll';
import Link from 'next/link';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false)

  const handleClick = () => setNav(!nav);

  // const closeSignUpModal = () => setIsSignUpModalOpen(false);
  const handleSignInClick = () => setIsSignInModalOpen(true);
  const handleSignUpClick = () => setIsSignUpModalOpen(true)
  // const closeSignInModal = () => setIsSignInModalOpen(false)

  const handleScrollTo = () => {
    const section = document.getElementById('PRICING')
     if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
}
  return (
    <div className='w-screen  md:h-[80px] z-30 bg-slate-200 fixed drop-shadow-lg'>
      <div className='w-full h-full flex justify-between items-center px-2'>
        <div className='flex items-center'>
          <h1 className='text-3xl font-bold mr-6 sm:text-4xl'>E-Billing</h1>
          <ul className='hidden gap-4 md:flex'>
            <li><Link href='/home' className='font-bold text-lg'>Home</Link></li>
            <li onClick={handleScrollTo} className='font-bold text-lg cursor-pointer'>Princing</li>
          </ul>
        </div>
        <div className='hidden md:flex pr-4'>
          <button onClick={handleSignInClick} className=' bg-blue-600 text-white rounded-xl mr-8 px-8 py-3'>Sign In</button>
          <button onClick={handleSignUpClick} className='px-8 py-3 text-white bg-blue-600 rounded-xl'>Sign Up</button>
        </div>
      </div>
      <div className='md:hidden' onClick={handleClick}>
        {isSignUpModalOpen && <SignUpModal setIsSignUpModalOpen={setIsSignInModalOpen} />}
        {isSignInModalOpen && <SignInModal setIsSignInModalOpen={setIsSignInModalOpen}  />}
        {!nav ? "menu" : 'X'
        }
      </div>
      {nav &&
        <div className='w-full h-full bg-slate-300 flex md:hidden flex-col justify-between items-center px-2'>
          <div className='flex items-center'>
            {/* <h1 className='text-3xl font-bold mr-6 sm:text-4xl'>E-Billing</h1> */}
            <ul className='flex flex-col'>
              <li><a href="/" className='font-bold text-lg'>Home</a></li>
              <li><Link href=" " className='font-bold text-lg'>Princing</Link></li>
            </ul>
          </div>
          <div className='flex justify-between pr-4'>
            <button onClick={handleSignInClick} className=' bg-blue-600 text-white rounded-xl px-8 py-3 mr-8'>Sign In</button>
            <button onClick={handleSignUpClick} className='px-8 py-3 text-white bg-blue-600 rounded-xl'>Sign Up</button>
          </div>
        </div>}
      { isSignUpModalOpen && <SignUpModal setIsSignUpModalOpen={setIsSignUpModalOpen} />}
      { isSignInModalOpen && <SignInModal setIsSignInModalOpen={setIsSignInModalOpen} />}
    </div>
  );
}

export default Navbar;
