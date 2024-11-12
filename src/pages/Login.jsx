import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { loginUserAPI } from '../serverApi/server';

const Login = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const [loginSuccessful, setLoginSuccessful] = useState(false);
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
    try {
      const response = await loginUserAPI(
        loginData.email,
        loginData.password,
        id
      );

      const { client_status_code, message } = response.data;

      if (client_status_code === 200) {
        console.log('Login successful');
        setLoginSuccessful(true);
        navigate(`/shopdetails/${id}`);
      } else {
        setIncorrectPassword(message || 'Incorrect email (or) password');
      }
    } catch (error) {
      setIncorrectPassword('An error occurred. Please try again.');
      console.error('Login error:', error);
    }
  };

  return (
    <div className="px-5 sm:px-10 md:px-20 pb-16 flex justify-center">
      <div className="shadow-xl w-11/12 sm:w-3/4 lg:w-2/5">
        <form onSubmit={handleSubmit} className="w-full pt-6 md:pt-16 pb-8 px-5">
          <h1 className="text-center text-orange-400 mb-5 font-bold text-2xl tracking-wide">Login</h1>

          <label htmlFor="email" className="block text-neutral-700 font-medium mb-4 text-lg">Email:</label>
          <input
            type="email"
            name="email"
            value={loginData.email}
            onChange={handleChange}
            required
            className="focus:outline-none text-neutral-600 px-2 py-1 sm:py-2 rounded w-full border-neutral-300 border mb-2"
          />

          <label htmlFor="password" className="block text-neutral-700 font-medium mb-4 text-lg">Password:</label>
          <input
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleChange}
            required
            className={`focus:outline-none relative text-neutral-600 px-2 py-1 sm:py-2 rounded w-full border-neutral-300 border ${incorrectPassword ? 'mb-0' : 'mb-2'}`}
          />
          {incorrectPassword && (
            <p className="text-red-500 text-sm">{incorrectPassword}</p>
          )}

          <p className="text-orange-600 mb-1">Forget Password?</p>

          <button
            type="submit"
            className="block rounded focus:border-opacity-100 border-neutral-400 border-[3px] border-opacity-0 w-full px-2 py-1 bg-orange-400 hover:text-white hover:bg-orange-600 duration-200 mb-2"
          >
            Login
          </button>

          <p className="text-center">
            Don’t have an account? <Link to={`/register/?${id}`} className="text-green-600">Register now</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;





























/* import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const serverUrl = process.env.REACT_APP_SERVER_URL;

  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const [loginSuccessful, setLoginSuccessful] = useState(false);
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
    try {
      const response = await axios.get(`${serverUrl}/api/login_panel/login_user`, {
        email: loginData.email,
        password: loginData.password,
        category_menu_option_id: id
      });

      if (response.data.success) {
        console.log('loginSuccess');
        setLoginSuccessful(true);
        navigate(`/shopdetails/${id}`)
      } else {
        setIncorrectPassword('Incorrect email or password');
      }
    } catch (error) {
      setIncorrectPassword('An error occurred. Please try again.');
      console.error('Login error:', error);
    }
  };

  return (
    <div className="px-5 sm:px-10 md:px-20 pb-16 flex justify-center">
      <div className="shadow-xl w-11/12 sm:w-3/4 lg:w-2/5">
        <form onSubmit={handleSubmit} className="w-full pt-6 md:pt-16 pb-8 px-5">
          <h1 className="text-center text-orange-400 mb-5 font-bold text-2xl tracking-wide">Login</h1>

          <label htmlFor="email" className="block text-neutral-700 font-medium mb-4 text-lg">Email:</label>
          <input
            type="email"
            name="email"
            value={loginData.email}
            onChange={handleChange}
            required
            className="focus:outline-none text-neutral-600 px-2 py-1 sm:py-2 rounded w-full border-neutral-300 border mb-2"
          />

          <label htmlFor="password" className="block text-neutral-700 font-medium mb-4 text-lg">Password:</label>
          <input
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleChange}
            required
            className={`focus:outline-none relative text-neutral-600 px-2 py-1 sm:py-2 rounded w-full border-neutral-300 border ${incorrectPassword ? 'mb-0' : 'mb-2'}`}
          />
          {incorrectPassword && (
            <p className="text-red-500 text-sm">{incorrectPassword}</p>
          )}

          <p className="text-orange-600 mb-1">Forget Password?</p>

          <button
            type="submit"
            className="block rounded focus:border-opacity-100 border-neutral-400 border-[3px] border-opacity-0 w-full px-2 py-1 bg-orange-400 hover:text-white hover:bg-orange-600 duration-200 mb-2"
          >
            Login
          </button>

          <p className="text-center">
            Don’t have an account? <Link to={`/register/${id}`} className="text-green-600">Register now</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login; */