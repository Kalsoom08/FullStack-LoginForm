import React, { use, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { loginUser } from "../API's/authAPI";
import {useNavigate} from 'react-router-dom';


export const LoginUser = () => {
 
  const [data , setData] = useState({
    email:"",
    password: "" 
  })
  
  const Navigate = useNavigate()

  const mutation = useMutation({
    mutationFn: loginUser,
    onSuccess: (data)=>{
      console.log('Login Successfully', data);
    },
    onError: (error)=>{
      console.log('Login Failed', error);
    }
  })

    const handleChange = (e) => {
    const { name, value } = e.target;
    setData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e)=>{
    e.preventDefault();
    mutation.mutate(data)
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-white relative">
      
     
      <div className="absolute top-0 left-0 w-full h-1/2 bg-[#AB3DFF] z-0"></div>

    
      <form onSubmit={handleSubmit} className="bg-white p-8 shadow-md lg:w-2/5 md:w-3/5 w-8/12 rounded-tl-2xl rounded-tr-2xl z-10 mt-32">
        <h1 className="text-center text-2xl font-bold mb-4">LOGIN</h1>

        <label className="text-[#AB3DFF] text-sm font-semibold">EMAIL</label>
        <input
          type="email"
          className="w-full border-b border-gray-400 py-1 mb-4 text-gray-700 outline-none"
          placeholder="example@domain.com"
          value={data.email}
          name='email'
          onChange={handleChange}
          required
        />

        <label className="text-[#AB3DFF] text-sm font-semibold">PASSWORD</label>
        <input
          type="password"
          className="w-full border-b border-gray-400 py-1 mb-6 text-gray-700 outline-none"
          value={data.password}
          name='password'
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          className="bg-[#AB3DFF] text-white w-full py-2 rounded-xl hover:bg-white hover:text-[#AB3DFF] hover:border hover:border-[#AB3DFF] transition">
          Login
        </button>

        <p className="text-center text-xs mt-4 text-[#3d3737b4]">
          Don’t have an account?{' '}
          <span className="text-[#AB3DFF] font-semibold cursor-pointer"
           onClick={() => Navigate('/register')}
          >
            Sign Up
          </span>
        </p>
      </form>

    </div>
  );
}


