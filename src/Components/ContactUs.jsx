import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';

const ContactUs = () => {

  const navigate = useNavigate()

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
    const { name, email, message } = formData;
    if (name && email && message) {
      toast.success('Your message has been sent successfully!');
      setFormData({ name: '', email: '', message: '' });
      navigate('/');
      
    } else {
      toast.error('Please fill in all fields!');
    }
  };



  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">Contact Us</h2>

      <div className="bg-white shadow-lg rounded-lg p-8">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-semibold text-gray-700">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="input input-bordered w-full mt-2 bg-gray-100 text-black"
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-semibold text-gray-700">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="input input-bordered w-full mt-2 bg-gray-100 text-black"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-lg font-semibold text-gray-700">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="textarea textarea-bordered w-full mt-2 bg-gray-100 text-black"
              rows="6"
              placeholder="Type your message"
            ></textarea>
          </div>

          <div className="flex justify-center mt-6">
            <button  type="submit" className="btn btn-primary w-1/2">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
