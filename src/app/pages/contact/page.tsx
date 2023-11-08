"use client"

import { motion } from 'framer-motion';
import { useState } from 'react';
import { BiMailSend } from 'react-icons/bi';
import './style.css';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };


  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const request = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
  
      if (!request.ok) {
        throw new Error(`Errore nella richiesta: ${request.statusText}`);
      }
  
      const response = await request.json();
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  

  

  return (
    <motion.div
      key="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <section id='contact'>
        <div className='flex flex-md-row justify-between p-5 sm:p-10 mt-5 sm:mt-0 title'>
          <h1>Contact me</h1>
          <BiMailSend size={36} />
        </div>
        <div className='flex justify-center items-center h-full'>
          <form onSubmit={handleSubmit}>

            <div className='flex flex-col sm:flex-row gap-5 sm:gap-10'>
              <div>

                <input
                  placeholder='Nome'
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div>

                <input
                  placeholder='Email'
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>

              <input
                placeholder='Messaggio'
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className='message'
              />
            </div>
            <button className='btn-contact' type="submit">Invia</button>
          </form>
        </div>

      </section>


    </motion.div>

  );
};

export default Contact;
