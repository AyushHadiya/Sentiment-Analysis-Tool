import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';

const SentimentForm = ({ onAnalyze, loading }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAnalyze(text);
      setText(''); // Clear the textarea after submission
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-xl shadow-2xl w-full"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Enter Your Text
      </h2>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type your review or text here (e.g., 'I love this movie!')..."
        className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none h-40 text-gray-700 text-lg"
        required
        disabled={loading}
      />
      <motion.button
        type="submit"
        className={`mt-6 w-full py-3 rounded-lg text-white font-semibold flex items-center justify-center space-x-3 text-lg ${
          loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'
        } transition-colors`}
        disabled={loading}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaPaperPlane />
        <span>{loading ? 'Analyzing...' : 'Analyze Sentiment'}</span>
      </motion.button>
    </motion.form>
  );
};

export default SentimentForm;