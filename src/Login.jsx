// src/LoginPage.js
import React from 'react';
import { motion } from 'framer-motion';

const LoginPage = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#B85042] text-white overflow-hidden">
      {/* Left Side with PERSPECTIVE Text */}
      <div className="flex-1 flex flex-col  p-8 md:p-16 lg:p-24 ">
        <motion.h1
          className="lg:text-5xl text-4xl   mb-4"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          PERSPECTIVE
        </motion.h1>
        <motion.p
          className="text-sm lg:text-xl mb-8 pt-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
PHOTOGRAPHY IS AN ART THAT CAPTURES FLEETING MOMENTS, TURNING THEM INTO TIMELESS STORIES. WITH PERSPECTIVE, WE STRIVE TO SHOWCASE THE UNSEEN BEAUTY THROUGH OUR LENSES, BRINGING EMOTIONS AND MEMORIES TO LIFE. WHETHER YOU'RE A PHOTOGRAPHY ENTHUSIAST OR SIMPLY APPRECIATE THE CRAFT, YOU'RE IN THE RIGHT PLACE. LOG IN TO ACCESS YOUR PERSONALIZED EXPERIENCE, EXPLORE OUR LATEST PROJECTS, AND JOIN A COMMUNITY THAT SHARES A PASSION FOR STORYTELLING THROUGH IMAGES.
  

 

        </motion.p>
        <hr/>
        <p className='pt-4'>By - JAI SINGH BHATI</p>
      </div>

      {/* Right Side with Form */}
      <div className="flex-1 flex items-center justify-center p-4">
        <motion.div
          className="w-full max-w-md border-white p-6 rounded-lg border border-black "
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <form>
            <h2 className="text-2xl font-bold mb-4 text-white">Feel Free To Talk</h2>
            <div className="mb-4">
              <label className="block text-sm mb-2 text-white text-xl" htmlFor="username">
                Username
              </label>
              <input
                className="w-full p-2 border border-white rounded bg-transparent text-white focus:outline-none focus:border-white"
                type="text"
                name='text'
                placeholder="Enter your username"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm mb-2 text-white text-xl" htmlFor="email">
                Email
              </label>
              <input
                className="w-full p-2 border border-white rounded bg-transparent text-white focus:outline-none focus:border-white"
                type="email"
                name="Email"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-xl text-sm mb-2 text-white" htmlFor="message">
                Message
              </label>
              <textarea
                className="w-full p-2 border border-white rounded bg-transparent text-white focus:outline-none focus:border-white"
                id="message"
                name='message'
                placeholder="Enter your message"
                rows="4"
              ></textarea>
            </div>
            <div>
              <button
                className="w-full py-2 px-4 border border-white text-white bg-transparent rounded hover:bg-white hover:text-black transition duration-300"
                type="submit"
              >
                SEND
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default LoginPage;
