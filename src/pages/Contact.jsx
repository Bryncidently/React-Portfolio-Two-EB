import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [emailError, setEmailError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === 'email') {
      validateEmail(value);
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailError(emailRegex.test(email) ? '' : 'Please enter a valid email address');
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    console.log('Form Data:', formData);
  };

  return (
    <div>
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit} className='contactForm' name="Contact" method="POST" data-netlify="true">
        <div className='mb-4'>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className='form-control'
            required
          />
        </div>
        <div className='mb-4'>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className='form-control'
            required
          />
          {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
        </div>
        <div className='mb-4'>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            className='form-control'
            rows="10"
            required
          />
        </div>
        <button type="submit" className='btn btn-primary'>Submit</button>
      </form>


    </div>
  );
}


