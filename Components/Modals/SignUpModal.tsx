// import React, { useState } from 'react';
import { Modal } from 'antd';
import React, { ChangeEvent, FormEvent, useState } from 'react';



const SignUpModal = ({setIsSignUpModalOpen}:{setIsSignUpModalOpen: React.Dispatch<React.SetStateAction<boolean>>}) => {
  const handleOk = () => {
    setIsSignUpModalOpen(false)
  };
  const handleCancel = () => {
    setIsSignUpModalOpen(false)
  };
  
  const [data, setData] = useState({
    userName: '',
    email: '',
    password:''
  })
 const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setData((prevData) => ({ ...prevData, [name]: value }));
  };
  
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let obj = {
      ...data
    };
    
    const res = await fetch('api/auth/new', {
      method: 'POST',
      body: JSON.stringify(obj)
    });

    if (res.ok) {
      alert('Sign Up successful')
      return
    }
  }
  return (
    <div className=''>
    <div className=''>
      <Modal
        title={<h1 className=' ml-24 text-2xl font-bold'>Registratio Form</h1>}
        open={true}
        onOk={handleOk}
        okText="Submit"
        onCancel={handleCancel}
        okButtonProps={{
          disabled: false,
          style: {
            background: '#000',  
            borderColor: '#1890ff',  
            color: '#fff', 
            fontSize: '18px'          
          },
        }}
        cancelButtonProps={{
          disabled: false,
         
        }}
       footer={null}
       
      >
        <form onSubmit={handleSubmit}>
        <div>
          <label className=' text-lg font-bold'>FULL NAME</label> <br />
          <input  name='userName'className='w-full text-xl' type='text' placeholder='Enter Your Name' onChange={handleInputChange}/>
        </div>
        <div>
          <label className='text-lg font-bold'>EMAIL</label> <br />
          <input name='email' className='w-full text-xl'  type='email' placeholder='Enter Your Email' onChange={handleInputChange}/>
        </div>
        <div>
          <label className='text-lg font-bold'>PASSWORD</label> <br />
          <input  name='password'className='w-full text-xl' type='password' placeholder='Enter Your Password'onChange={handleInputChange} />
        </div>
        <button type='submit' className='w-full rounded-lg bg-blue-900 text-white text-lg hover:bg-slate-600 p-3 mt-4'>
              submit
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

export default SignUpModal;
