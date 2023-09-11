'use client';
import React, { ChangeEvent, FormEvent, HtmlHTMLAttributes, useState } from 'react';

const MainContent = ({data}:{data: any}) => {
  const [selectedOption1, setSelectedOption1] = useState('');
  const [loading,setLoading]=useState(false);
  const [selectedOption2, setSelectedOption2] = useState('');
  const userData= data
  const [dataObj, setDataObj] = useState({
    meterNumber: '',
    phoneNumber: '',
    amount: 0,
    prepaid: '',
    postPaid: '',
  })
  

  const handleOption1Change = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption1(event.target.value);
  };

  const handleOption2Change = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption2(event.target.value);
  };

 const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setDataObj((prevData) => ({ ...prevData, [name]: value }));
  };
  
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!(dataObj.meterNumber || dataObj.amount || dataObj.phoneNumber)) {
      return alert('all field required')
    }
    if (selectedOption1 && selectedOption2) {
      return alert('You are to select just one option')
    }
    setLoading(true)
    let obj = {
      ...dataObj,
      accountOwner: userData?._id,
      prepaid: selectedOption1,
      postPaid: selectedOption2,
      email: userData?.email
    };
    console.log(obj)
    const res = await fetch('api/billing', {
      method: 'POST',
      body: JSON.stringify(obj)
    });

    if (res.ok) {
      const  body = await res.json()
      alert('Payment successful')
    }
    setSelectedOption1('')
    setSelectedOption2('')
    setDataObj({meterNumber:'',phoneNumber:'',amount:0.00, prepaid:'',postPaid:''})
    setLoading(false)
  }  
  return (
    <div className="p-4 w-[80%] h-[80%] mx-auto ">
      <h2 className="text-xl font-bold mb-4 mt-6">Welcome {userData?.userName}</h2>
      <div className='flex justify-center gap-4'>
      <div className="mb-4">
        <label className="block text-sm font-medium">Prepaid</label>
        <select
          className="mt-1 block w-full p-2 border rounded-md"
          value={selectedOption1}
          onChange={handleOption1Change}
        >
          <option value="">Select Your PHC </option>
          <option value="option1">JED</option>
          <option value="option2">BED </option>
          <option value="option2">EKO </option>
          <option value="option2">KED </option>
          <option value="option2">ABJ </option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">Pospaid</label>
        <select
          className="mt-1 block w-full p-2 border rounded-md"
          value={selectedOption2}
          onChange={handleOption2Change}
        >
          <option value="">Select Your PHC</option>
          <option value="optionA">JED</option>
          <option value="optionB">KED</option>
          <option value="optionB">BED</option>
          <option value="optionB">ABJ</option>
          <option value="optionB">EKO</option>
        </select>
      </div>

      </div>
      
      
      <form  onSubmit={handleSubmit}>
         <div>
            <label>Meter No:</label>
            <br />
            <input type='text' placeholder='Enter Your Meter Number' name='meterNumber' onChange={handleInputChange}/>
        </div> 
        <div>
            <label>Phone No:</label>
            <br />
            <input type='text' placeholder='Enter Your Phone Number' name='phoneNumber' onChange={handleInputChange}/>
        </div> 
        <div>
            <label>Amount</label>
            <br />
            <input type='number' placeholder='Enter Amount' name='amount' onChange={handleInputChange}/>
        </div> 
        <button
          type="submit"
          disabled={loading}
          className="bg-gray-800 w-1/3 text-white p-2 rounded-md mt-4 text-xl"
        >
        {loading? 'Loading....':'Make Payment'}
        </button>
      </form>
    </div>
  );
};

export default MainContent;
