import React from 'react'
// import { Link } from 'react-scroll'
import Link from 'next/link'

type Props = {}

const Sidebar = (props: Props) => {
  return (
    <div className="bg-gray-800 text-white min-h-screen w-1/5 p-4">
      <h2 className=" font-bold text-center text-xl my-4">Dashboard Menu</h2>
      <ul className='mt-8 '>
        <li className="mb-2 mt-4 border-2 rounded-xl text-xl text-center bg-slate-900 text-white " > <Link href="/dashboard"> Dashboard </Link> </li>
        <li className="mb-2 mt-8 border-2 rounded-xl text-xl text-center bg-slate-900 text-white "> <Link href="/profile">Profile </Link></li>
        <li className="mb-2 mt-8 border-2 rounded-xl text-xl text-center bg-slate-900 text-white "> <Link href='/'>Settings </Link></li>
      </ul>
    </div>
  )
}

export default Sidebar