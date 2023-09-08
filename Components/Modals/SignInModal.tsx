// import React, { useState } from 'react';
'use client'
import { Modal } from 'antd';
import { redirect, useRouter } from 'next/navigation';
import { ChangeEvent, FormEvent, useState } from 'react';



const SigninModal = ({ setIsSignInModalOpen }: { setIsSignInModalOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const [loading,setLoading]= useState(false)
  const handleOk = () => {
    setIsSignInModalOpen(false)
  };
  const handleCancel = () => {
    setIsSignInModalOpen(false)
  };
  const router = useRouter()
  
  const [data, setData] = useState({
    email: '',
    password:''
  })
 const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setData((prevData) => ({ ...prevData, [name]: value }));
  };
  
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true)
    let obj = {
      ...data
    };
    
    const res = await fetch('api/auth/login', {
      method: 'POST',
      body: JSON.stringify(obj)
    });

    if (res.ok) {
      const  data = await res.json()
      console.log(data)
      if (typeof window !== 'undefined') {
        localStorage.setItem('user', JSON.stringify(data))
      }
      setLoading(false);
      alert('Sign in successful')
      setIsSignInModalOpen(false)
      router.push('/dashboard')
      return
    }
      setLoading(false);
    alert('Sign in failed')
  }

  return (
    <div className=''>
    <div className=''>
      <Modal
        title={<h1 className='ml-44 text-2xl font-bold'>Login form</h1>}
        open={true}
        onOk={handleOk}
        okText="Login"
        onCancel={handleCancel}
        okButtonProps={{
          disabled: false,
          style: {
            background: '#000',  
            borderColor: '#1890ff',  
            color: '#fff', 
            fontSize: '16px'          
          },
        }}
        cancelButtonProps={{
          disabled: false,
         
        }}
       footer={null}
      >
       <form onSubmit={handleSubmit} className=''>
      
        <div>
          <label className='text-lg font-bold'>EMAIL</label> <br />
          <input className='w-full text-xl'  type='email' placeholder='Enter Your Email' name='email' onChange={handleInputChange} />
        </div>
        <div>
          <label className='text-lg font-bold'>PASSWORD</label> <br />
          <input className='w-full text-xl' type='password' placeholder='Enter Your Password' name='password' onChange={handleInputChange} />
            </div>
            
             <button disabled={loading} type='submit' className='w-full rounded-lg bg-blue-900 text-white text-lg hover:bg-slate-600 p-3 mt-4'>
              
            {loading ? 'Loading...' : 'submit'}
            </button>
        </form>
      </Modal>
      {/* <div className='bg-white max-w-[10rem]'>
        <div>
          <p>This is a modalform</p>
        </div>
      </div> */}
    </div>
    </div>
  );
}

export default SigninModal;
