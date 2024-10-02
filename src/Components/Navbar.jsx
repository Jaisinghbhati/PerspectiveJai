import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const linkVariants = {
        hover: {
            scale: 1.1,
            textShadow: "",
            transition: { duration: 0.3 },
        },
    };

    return (
        <nav className="flex items-center justify-between p-4  text-black shadow-lg Set z-20">
            <div className=" lg:text-3xl text-2xl  transition duration-200 lg:pl-8 ">
                <Link to="/">PERSPECTIVE.</Link>
            </div>
            <div className="hidden md:flex space-x-8 lg:pr-12">
                <motion.div variants={linkVariants} whileHover="hover">
                    <Link to="/" className="transition duration-300">HOME</Link>
                </motion.div>
                <motion.div variants={linkVariants} whileHover="hover">
                    <Link to="/about" className="transition duration-300">ABOUT</Link>
                </motion.div>
                <motion.div variants={linkVariants} whileHover="hover">
                    <Link to="/login" className="transition duration-300">LOGIN</Link>
                </motion.div>
            </div>
            {/* Mobile Menu Button */}
            <div className="md:hidden">
                <button onClick={toggleMobileMenu} className="text-2xl focus:outline-none">
                    {isMobileMenuOpen ? 'x' : '☰'}
                </button>
            </div>
            {/* Mobile Dropdown Menu */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-14 left-0 w-full bg-white rounded-md shadow-lg z-10 md:hidden"
                >
                    <motion.div whileHover={{ scale: 1.05 }}>
                        <Link to="/" className="block px-4 py-2   transition duration-300 ">HOME</Link>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }}>
                        <Link to="/about" className="block px-4 py-2  transition duration-300">ABOUT</Link>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }}>
                        <Link to="/login" className="block px-4 py-2   transition duration-300">LOGIN</Link>
                    </motion.div>
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;
