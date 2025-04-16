import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from "axios";
import getBaseUrl from '../utils/baseURL';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [message, setMessage] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(`${getBaseUrl()}/api/auth/admin`, data, {
        headers: {
          'Content-Type': 'application/json',
        }
      });
      const auth = response.data;

      if (auth.token) {
        localStorage.setItem('token', auth.token);
        setTimeout(() => {
          localStorage.removeItem('token');
          alert('Token has been expired! Please login again.');
          navigate("/");
        }, 3600 * 1000);
      }

      alert("Admin Login successful!");
      navigate("/dashboard");

    } catch (error) {
      setMessage("Please provide a valid email and password");
      console.error(error);
    }
  };

  return (
    <div className='h-screen flex justify-center items-center bg-gray-900'>
      <div className='w-full max-w-sm mx-auto bg-[#1A202C] shadow-xl rounded-xl px-8 pt-6 pb-8 mb-4'>
        <h2 className='text-2xl font-semibold text-white mb-6 text-center'>Admin Dashboard Login</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='mb-6'>
            <label className='block text-gray-300 text-sm font-bold mb-2' htmlFor="username">Username</label>
            <input
              {...register("username", { required: true })}
              type="text" name="username" id="username" placeholder='Username'
              className='w-full py-3 px-4 border border-gray-700 bg-[#2D3748] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>

          <div className='mb-6'>
            <label className='block text-gray-300 text-sm font-bold mb-2' htmlFor="password">Password</label>
            <input
              {...register("password", { required: true })}
              type="password" name="password" id="password" placeholder='Password'
              className='w-full py-3 px-4 border border-gray-700 bg-[#2D3748] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>

          {message && <p className='text-red-500 text-sm mb-3'>{message}</p>}

          <div className='w-full'>
            <button className='w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-800 focus:outline-none'>
              Login
            </button>
          </div>
        </form>

        <p className='mt-6 text-center text-gray-400 text-sm'>© 2025 E Book. All rights reserved.</p>
      </div>
    </div>
  );
}

export default AdminLogin;
