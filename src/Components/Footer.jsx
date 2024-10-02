import React from 'react'
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaTwitter, FaPinterest } from 'react-icons/fa'; // Importing icons

const Footer = () => {
  return (
    <div>
      <section className="bg-black text-white py-10">
  <div className="container mx-auto px-4">
    <motion.div 
      className="flex flex-col md:flex-row justify-between items-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      {/* Brand Section */}
      <div className="mb-6 md:mb-0">
        <h1 className="text-3xl font-bold pl-8">PERSPECTIVE</h1>
        <p className="text-gray-400 lg:pl-8">Capturing the world through a lens.</p>
      </div>

      {/* Social Media Icons */}
      <div className="flex space-x-4 lg:pr-8">
        <motion.a 
          href="https://www.facebook.com" 
          target="_blank" 
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.3 }}
        >
          <FaFacebook className="text-2xl" />
        </motion.a>
        <motion.a 
          href="https://www.instagram.com" 
          target="_blank" 
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.3 }}
        >
          <FaInstagram className="text-2xl" />
        </motion.a>
        <motion.a 
          href="https://www.twitter.com" 
          target="_blank" 
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.3 }}
        >
          <FaTwitter className="text-2xl" />
        </motion.a>
        <motion.a 
          href="https://www.pinterest.com" 
          target="_blank" 
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.3 }}
        >
          <FaPinterest className="text-2xl" />
        </motion.a>
      </div>
    </motion.div>
  </div>
</section>

    </div>
  )
}

export default Footer
