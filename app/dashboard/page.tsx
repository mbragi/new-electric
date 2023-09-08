'use client'
import Navbar from '@/Components/Navbar'
import React, { use, useEffect, useState } from 'react'
import Princing from '@/Components/Princing'
import Header from '@/Components/Dashboard/Header'
import MainContent from '@/Components/Dashboard/MainContent'
import Sidebar from '@/Components/Dashboard/Sidebar'
import { redirect } from 'next/navigation'


type Props = {}

const DashboardPage = (props: Props) => {
  const [currentUser,  setCurrentUser]= useState<any>()
  useEffect(() => {
  if (typeof window !== 'undefined') {
  // Perform localStorage action
  const user = localStorage.getItem('user')
  if (!user) {
    redirect('/')
    }
    let parse = JSON.parse(user)
    setCurrentUser(parse)
}
  },[])
  
  return (
    <div>
      <Navbar />
      <Header />
      <div className='flex'>
      <Sidebar/>
      <MainContent data={currentUser}/>
      </div>
      <Princing />
    </div>
  )
}

export default DashboardPage