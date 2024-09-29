import React, { useState } from "react";
import Button from "../components/RippleBtn";

function Register() {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);


  const handleSubmit = async (e) => {};
  return (
    <div className=' h-[88vh]'>
      <div className='flex items-center justify-center bg-white py-5 shadow-sm mb-4'>
        <img alt='Duniyar Mata' src='/1.png' className='w-20' />
      </div>
      <h1 className='text-center font-semibold text-2xl text-brand'>
        Register New Account
      </h1>
      <form
        onSubmit={handleSubmit}
        className='w-full md:w-1/2 px-6 mt-6 flex flex-col gap-4'
      >
        <div>
          <label htmlFor='email'>Enter Email Address</label>
          <input
            type='text'
            id='email'
            required
            className='border-gray-300 mt-2 border w-full p-3'
            placeholder='Enter Email'
          />
        </div>
        <div>
          <label htmlFor='username'>Username</label>
          <input
            type='text'
            id='username'
            required
            className='border-gray-300 mt-2 border w-full p-3'
            placeholder='Enter username'
          />
        </div>
        <div>
          <label htmlFor='phone'>Enter Phone Number</label>
          <input
            type='text'
            id='phone'
            required
            className='border-gray-300 mt-2 border w-full p-3'
            placeholder='Enter Phone'
          />
        </div>
        <div>
          <label htmlFor='password'>Enter Phone Number</label>
          <input
            type={showPassword? "text": "password"}
            id='password'
            required
            className='border-gray-300 mt-2 border w-full p-3'
            placeholder='Enter Password'
          />
          <button type="button" onClick={()=>setShowPassword(!showPassword)} className="mt-3 outline-none border-none p-1 text-blue-600 font-semibold">{showPassword? "Hide": "Show"} Password</button>
        </div>
        <button
        //   onClick={handleRegisterOpen}
          className='text-md font-semibold text-white mt-3 bg-brand w-full text-center  py-3 rounded'
        >
          <p>Register</p>
        </button>
      </form>
    </div>
  );
}

export default Register;
