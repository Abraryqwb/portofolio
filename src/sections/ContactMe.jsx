import React, { useState } from 'react';

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div id="contact" className="flex justify-center items-center min-h-screen bg-gray-100">
      <form className="bg-white shadow-lg rounded-lg p-8 w-[90%] md:w-[50%] lg:w-[30%] mx-auto flex flex-col gap-6" onSubmit={handleSubmit}>
        <h1 className="text-center text-blue-800 font-extrabold text-2xl">Contact Me</h1>
        
        <input 
          type="text" 
          placeholder="Your Name" 
          className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500" 
          name="name" 
          id="name" 
          value={formData.name}
          onChange={handleChange}
          required
        />
        
        <input 
          type="email" 
          placeholder="Email" 
          className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500" 
          name="email" 
          id="email" 
          value={formData.email}
          onChange={handleChange}
          required
        />
        
        <textarea 
          placeholder="Message" 
          className="border border-gray-300 rounded-lg w-full p-3 focus:outline-none focus:ring-2 focus:ring-blue-500" 
          name="message" 
          id="message" 
          value={formData.message}
          onChange={handleChange}
          rows="5"
          required
        />
        
        <button type="submit" className="bg-blue-600 p-3 text-white w-full rounded-xl hover:bg-blue-700 transition duration-200">Submit</button>
      </form>
    </div>
  );
};

export default ContactMe;
