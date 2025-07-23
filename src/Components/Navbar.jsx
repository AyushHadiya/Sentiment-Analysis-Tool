import React from 'react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaHome, FaInfoCircle } from 'react-icons/fa';

const Navbar = () => {
  return (
    <motion.nav
      className="bg-white shadow-lg p-4 flex justify-between items-center sticky top-0 z-50"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Link to="/" className="text-2xl font-bold text-indigo-600">
        Sentiment Analysis
      </Link>
      <div className="flex space-x-6">
        <Link
          to="/"
          className="flex items-center text-gray-700 hover:text-indigo-600 transition-colors"
        >
          <FaHome className="mr-2" />
          Home
        </Link>
        <Link
          to="/process"
          className="flex items-center text-gray-700 hover:text-indigo-600 transition-colors"
        >
          <FaInfoCircle className="mr-2" />
          Process Flow
        </Link>
      </div>
    </motion.nav>
  );
};

export default Navbar;