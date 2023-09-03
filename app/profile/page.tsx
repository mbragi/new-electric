'use client'
import { Table } from 'antd'
import { data } from 'autoprefixer'
import React, { FormEvent, useEffect, useState } from 'react'

type Props = {}

function ProfilePage({ }: Props) {
  const [bill, setBill] = useState([])
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const user = localStorage.getItem('user')
      if (!user) {
        return
      }
      const data = JSON.parse(user)
      getAllPayments(data._id)
    }
  },[])
  async function getAllPayments(id: string) { 
   
    let data = {
      accountOwner: id
    }
    const res = await fetch(`api/billing?accountOwner=${data.accountOwner}`, {
      method: 'GET',
    })

    const newData = await res.json()
    setBill(newData)
    console.log(newData)
    return
  }
  const handleSubmit = (e: FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
  }
//   const dataSource = [
//   {
//     key: '1',
//     phoneNumber: 'Mike',
//     : 32,
//     address: '10 Downing Street',
//   },
// ];

const columns = [
  {
    title: 'Phone Number',
    dataIndex:'phoneNumber',
    key: 'phoneNumber',
  },
  {
    title: 'Meter Number',
    dataIndex:'meterNumber',
    key: 'meterNumber',
  },
  {
    title: 'Amount',
    dataIndex:'amount',
    key: 'amount',
  },
   {
     title: 'Transaction Date',
    dataIndex:'createdAt',
    key: 'createdAt',
  },
];

  return (
   <div className='space-y-6'>
      <h2 className="text-xl font-bold mb-4 mt-6">Welcome to Your Profile</h2>
   
      <Table className='w-full' dataSource={bill} columns={columns} />;
      

    </div>
  )
}

export default ProfilePage