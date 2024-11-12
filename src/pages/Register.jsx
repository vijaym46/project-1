import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { registerUserAPI } from '../serverApi/server';

const Register = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    flat: '',
    street: '',
    zipCode: '',
    city: '',
    state: '',
    companyName: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const [apiMessage, setApiMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: (['firstName', 'lastName', 'phoneNumber', 'flat', 'street', 'zipCode', 'city', 'state', 'companyName'].includes(name))
        ? value.replace(/\s{2,}/g, ' ')
        : value.replace(/\s+/g, '')
    }));
    if (name === 'confirmPassword' || name === 'password') {
      setPasswordError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (formData.password === formData.confirmPassword) {
      try {
        const response = await registerUserAPI(formData);
  
        if (response.client_status_code === 200) {
          setApiMessage(response.message);
          setFormSubmitted(true);
          navigate(`/login/${id}`);
        } else {
          setApiMessage(response.message || 'Unable to create the user.');
        }
      } catch (error) {
        setApiMessage('An error occurred. Please try again.');
        console.error('Registration error:', error);
      }
    } else {
      setPasswordError('Passwords do not match');
      document.getElementsByName("confirmPassword")[0].focus();
    }
  };
  
  return (
    <div className="px-5 sm:px-10 md:px-20 pb-16 flex justify-center">
      <div className="shadow-xl w-11/12 sm:w-3/4 lg:w-2/5">
        <form onSubmit={handleSubmit} className="w-full pt-6 md:pt-16 pb-8 px-5">
          <h1 className="text-center text-orange-400 mb-5 font-bold text-2xl tracking-wide">Register</h1>

          <label htmlFor="firstName" className="block text-neutral-700 font-medium mb-4 text-lg">First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="focus:outline-none text-neutral-600 px-2 py-1 sm:py-2 rounded w-full border-neutral-300 border mb-2"
          />

          <label htmlFor="lastName" className="block text-neutral-700 font-medium mb-4 text-lg">Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="focus:outline-none text-neutral-600 px-2 py-1 sm:py-2 rounded w-full border-neutral-300 border mb-2"
          />

          <label htmlFor="email" className="block text-neutral-700 font-medium mb-4 text-lg">Email:</label>
          <input 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            required 
            className="focus:outline-none text-neutral-600 px-2 py-1 sm:py-2 rounded w-full border-neutral-300 border mb-2"/>

          <label htmlFor="password" className="block text-neutral-700 font-medium mb-4 text-lg">Password:</label>
          <input 
            type="password" 
            name="password"
            value={formData.password}
            onChange={handleChange}
            required 
            className="focus:outline-none text-neutral-600 px-2 py-1 sm:py-2 rounded w-full border-neutral-300 border mb-2"/>

          <label htmlFor="confirmPassword" className="block text-neutral-700 font-medium mb-4 text-lg">Confirm Password:</label>
          <input 
            type="password" 
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required 
            className={`focus:outline-none relative text-neutral-600 px-2 py-1 sm:py-2 rounded w-full border-neutral-300 border ${ passwordError ? 'mb-0' : 'mb-2' }`}/>
          { passwordError && (
            <p className="text-red-500 text-sm">{passwordError}</p> // Display error message
          )}

          <label htmlFor="phoneNumber" className="block text-neutral-700 font-medium mb-4 text-lg">Phone Number:</label>
          <input 
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange} 
            required 
            className="focus:outline-none text-neutral-600 px-2 py-1 sm:py-2 rounded w-full border-neutral-300 border mb-2"/>

          <label htmlFor="flat" className="block text-neutral-700 font-medium mb-4 text-lg">Flat, Building, Company, House no:</label>
          <input 
            type="text" 
            name="flat"
            value={formData.flat}
            onChange={handleChange}
            required 
            className="focus:outline-none text-neutral-600 px-2 py-1 sm:py-2 rounded w-full border-neutral-300 border mb-2"/>
          
          <label htmlFor="street" className="block text-neutral-700 font-medium mb-4 text-lg">Street, Area, Village:</label>
          <input 
            type="text"  
            name="street"
            value={formData.street}
            onChange={handleChange}
            required 
            className="focus:outline-none text-neutral-600 px-2 py-1 sm:py-2 rounded w-full border-neutral-300 border mb-2"/>

          <label htmlFor="zipCode" className="block text-neutral-700 font-medium mb-4 text-lg">Zip Code:</label>
          <input 
            type="number"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleChange} 
            required 
            className="focus:outline-none text-neutral-600 px-2 py-1 sm:py-2 rounded w-full border-neutral-300 border mb-2"/>

          <label htmlFor="city" className="block text-neutral-700 font-medium mb-4 text-lg">City:</label>
          <input 
            type="text" 
            name="city"
            value={formData.city}
            onChange={handleChange}
            required 
            className="focus:outline-none text-neutral-600 px-2 py-1 sm:py-2 rounded w-full border-neutral-300 border mb-2"/>

          <label htmlFor="state" className="block text-neutral-700 font-medium mb-4 text-lg">State:</label>
          <input 
            type="text" 
            name="state"
            value={formData.state}
            onChange={handleChange}
            required 
            className="focus:outline-none text-neutral-600 px-2 py-1 sm:py-2 rounded w-full border-neutral-300 border mb-2"/>

          <label htmlFor="companyName" className="block text-neutral-700 font-medium mb-4 text-lg">Company Name (optional):</label>
          <input 
            type="text" 
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className="focus:outline-none text-neutral-600 px-2 py-1 sm:py-2 rounded w-full border-neutral-300 border mb-6"/>
          {apiMessage && <p className="text-center text-red-500 text-sm">{apiMessage}</p>}
          
          <button
            type="submit"
            className="block rounded focus:border-opacity-100 border-neutral-400 border-[3px] border-opacity-0 w-full px-2 py-1 bg-orange-400 hover:text-white hover:bg-orange-600 duration-200 mb-2"
          >
            Register
          </button>

          <p className="text-center">Already have an account? <Link to={`/login/${id}`} className="text-green-600">Login now</Link></p>
        </form>
      </div>
    </div>
  );
};

export default Register;