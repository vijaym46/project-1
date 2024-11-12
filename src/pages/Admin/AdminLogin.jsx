import React, { useState } from 'react'
import logo from '../../assets/Stalbanslogo.png'

const AdminLogin = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  const [incorrectPassword, setIncorrectPassword] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value.replace(/\s+/g, '') // Restrict spaces
    }));
    if (name === 'password') {
      setIncorrectPassword('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className='w-full h-screen bg-blue-50 flex items-center justify-center'>
      <div className='bg-white py-8 px-10 rounded-lg shadow-[0px_2px_10px_0px_rgba(0,0,0,0.2)] shadow-blue-300'>
        <div className='mb-6 flex flex-col gap-4 items-center justify-center'>
          <img src={logo} alt="logo" className='w-36'/>
          <h1 className='font-medium text-neutral-500'>Stalbans printing Admin Panel</h1>
        </div>
        <form onSubmit={handleSubmit} className='w-64'>
          <input
            type="email"
            name="email"
            value={loginData.email}
            onChange={handleChange}
            placeholder='Username'
            required
            className="focus:outline-none text-neutral-600 px-2 py-1 sm:py-2 rounded w-full border-neutral-300 border mb-4"
          />

          <input
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleChange}
            placeholder='Password'
            required
            className={`focus:outline-none relative text-neutral-600 px-2 py-1 sm:py-2 rounded w-full border-neutral-300 border ${incorrectPassword ? 'mb-0' : 'mb-4'}`}
          />
          {incorrectPassword && (
            <p className="text-red-500 text-sm">{incorrectPassword}</p>
          )}

          <button
            type="submit"
            className="block rounded focus:border-opacity-100 border-neutral-400 border-[3px] border-opacity-0 w-full px-2 py-1 text-white bg-blue-400 hover:bg-blue-600 duration-200 mb-2"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  )
}

export default AdminLogin
