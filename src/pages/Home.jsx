/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';
import SentimentForm from '../components/SentimentForm';
import { FaStar, FaSpinner, FaExclamationTriangle, FaLightbulb, FaSmile, FaBrain } from 'react-icons/fa';

const Home = () => {
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const analyzeSentiment = async (text) => {
        setLoading(true);
        setError(null);
        setResponse(null);

        try {
            const res = await axios.post(
                'https://fykiwcu98f.execute-api.us-east-1.amazonaws.com/prod/sentiment',
                { review: text },
                {
                    headers: { 'Content-Type': 'application/json' },
                }
            );
            setResponse(res.data);
        } catch (error) {
            console.error('Error analyzing sentiment:', error);
            setError('Failed to analyze sentiment. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    // Determine if the form has been submitted (i.e., loading, error, or response exists)
    const isFormSubmitted = loading || error || response;

    return (
        <motion.div
            className="min-h-screen flex flex-col items-center p-6 pt-16 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
        >
            {/* Header Section */}
            <motion.header
                className="text-center mb-12"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg">
                    Sentiment Analysis Tool
                </h1>
                <p className="mt-4 text-lg md:text-xl text-gray-100 max-w-2xl mx-auto leading-relaxed">
                    Discover the emotions behind your text! Enter a review or any message to see if it’s positive or negative with our AI-powered tool.
                </p>
            </motion.header>

            {/* Form and Result/Fun Content Section (Side by Side) */}
            <motion.div
                className="w-full max-w-5xl flex flex-col md:flex-row items-start justify-center space-y-6 md:space-y-0 md:space-x-6 h-[360px]"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
            >
                {/* Sentiment Form */}
                <div className="w-full md:w-1/2 h-full">
                    <SentimentForm onAnalyze={analyzeSentiment} loading={loading} />
                </div>

                {/* Right Side: Fun Content (before submission) or Result (after submission) */}
                <div className="w-full md:w-1/2 h-full">
                    <AnimatePresence mode="wait">
                        {!isFormSubmitted ? (
                            <motion.div
                                key="fun-content"
                                className="bg-white px-8 py-4 rounded-xl shadow-2xl h-full"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.5 }}
                            >
                                <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                                    Learn About Sentiment Analysis
                                </h2>
                                <div className="space-y-4">
                                    <div className="flex items-start space-x-3">
                                        <FaLightbulb className="text-3xl text-yellow-500" />
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-800">
                                                Did You Know?
                                            </h3>
                                            <p className="text-gray-600">
                                                Sentiment analysis helps companies understand customer feedback on social media and reviews.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <FaSmile className="text-3xl text-green-500" />
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-800">
                                                Fun Fact
                                            </h3>
                                            <p className="text-gray-600">
                                                Early sentiment analysis systems started in the 2000s for online reviews.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <FaBrain className="text-3xl text-purple-500" />
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-800">
                                                How It Works
                                            </h3>
                                            <p className="text-gray-600">
                                                Our tool uses a machine learning model trained on thousands of reviews.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="result"
                                className="h-full"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.5 }}
                            >
                                {loading && (
                                    <motion.div
                                        className="bg-white p-8 rounded-xl shadow-2xl flex items-center justify-center space-x-3 text-gray-700 h-full"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 20 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <FaSpinner className="animate-spin text-3xl" />
                                        <p className="text-lg font-medium">Analyzing sentiment...</p>
                                    </motion.div>
                                )}

                                {error && (
                                    <motion.div
                                        className="bg-red-100 border-l-4 border-red-500 text-red-700 p-8 rounded-xl shadow-2xl h-full"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 20 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <div className="flex items-center">
                                            <FaExclamationTriangle className="text-2xl mr-3" />
                                            <p className="text-lg">{error}</p>
                                        </div>
                                    </motion.div>
                                )}

                                {response && !loading && !error && (
                                    <motion.div
                                        className="bg-white p-8 rounded-xl shadow-2xl text-center h-full border border-gray-200"
                                        initial={{ scale: 0.8, opacity: 0, y: 20 }}
                                        animate={{ scale: 1, opacity: 1, y: 0 }}
                                        exit={{ scale: 0.8, opacity: 0, y: 20 }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        {/* Header with Icon */}
                                        <div className="flex items-center justify-center mb-6">
                                            <h2 className="text-3xl font-bold text-gray-800">Analysis Result</h2>
                                            {response.sentiment === 'positive' ? (
                                                <FaStar className="ml-3 text-3xl text-yellow-400 animate-bounce" />
                                            ) : (
                                                <FaExclamationTriangle className="ml-3 text-3xl text-red-500 animate-pulse" />
                                            )}
                                        </div>

                                        {/* Result Content */}
                                        <div className="space-y-6">
                                            {/* Review Section */}
                                            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                                                <p className="text-lg text-gray-700 flex items-center justify-center">
                                                    <span className="font-semibold text-gray-800 mr-2">Review:</span>
                                                    <span className="text-gray-600 italic">"{response.review}"</span>
                                                </p>
                                            </div>

                                            {/* Sentiment Section */}
                                            <div className="flex items-center justify-center">
                                                <p className="text-lg text-gray-700 flex items-center">
                                                    <span className="font-semibold text-gray-800 mr-2">Sentiment:</span>
                                                    <span
                                                        className={`inline-flex items-center px-5 py-2 rounded-full text-white text-lg font-semibold shadow-md transition-all duration-300 ${response.sentiment === 'positive'
                                                                ? 'bg-green-500 hover:bg-green-600'
                                                                : 'bg-red-500 hover:bg-red-600'
                                                            }`}
                                                    >
                                                        {response.sentiment === 'positive' ? (
                                                            <FaStar className="mr-2 text-yellow-200" />
                                                        ) : (
                                                            <FaExclamationTriangle className="mr-2 text-red-100" />
                                                        )}
                                                        {response.sentiment.charAt(0).toUpperCase() + response.sentiment.slice(1)}
                                                    </span>
                                                </p>
                                            </div>
                                        </div>

                                        {/* Decorative Element */}
                                        <div className="mt-6">
                                            <div className="h-1 w-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto"></div>
                                        </div>
                                    </motion.div>
                                )}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>

            {/* Fun and Educational Content Section (Moves Below After Submission) */}
            <AnimatePresence>
                {isFormSubmitted && (
                    <motion.section
                        className="w-full max-w-5xl mt-12"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl font-bold text-white text-center mb-8">
                            Learn More About Sentiment Analysis
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Fun Fact 1 */}
                            <motion.div
                                className="bg-white p-6 rounded-xl shadow-lg flex items-start space-x-4"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            >
                                <FaLightbulb className="text-4xl text-yellow-500" />
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                        Did You Know?
                                    </h3>
                                    <p className="text-gray-600">
                                        Sentiment analysis is used by companies to analyze customer reviews, social media posts, and even movie scripts to gauge public opinion!
                                    </p>
                                </div>
                            </motion.div>

                            {/* Fun Fact 2 */}
                            <motion.div
                                className="bg-white p-6 rounded-xl shadow-lg flex items-start space-x-4"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            >
                                <FaSmile className="text-4xl text-green-500" />
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                        Fun Fact
                                    </h3>
                                    <p className="text-gray-600">
                                        The first sentiment analysis systems were developed in the early 2000s, primarily for analyzing online product reviews.
                                    </p>
                                </div>
                            </motion.div>

                            {/* Educational Fact */}
                            <motion.div
                                className="bg-white p-6 rounded-xl shadow-lg flex items-start space-x-4"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            >
                                <FaBrain className="text-4xl text-purple-500" />
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                        How It Works
                                    </h3>
                                    <p className="text-gray-600">
                                        Our tool uses a machine learning model trained on thousands of reviews to predict whether your text is positive or negative.
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.section>
                )}
            </AnimatePresence>

            {/* Footer Section */}
            <motion.footer
                className="mt-16 text-gray-100 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
            >
                <p className="text-lg">
                    Powered by AWS Lambda & API Gateway | Built with ❤️ by Kartik
                </p>
                <p className="mt-3 text-lg">
                    Learn more about sentiment analysis{' '}
                    <a
                        href="https://en.wikipedia.org/wiki/Sentiment_analysis"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-white transition-colors"
                    >
                        here
                    </a>.
                </p>
            </motion.footer>
        </motion.div>
    );
};

export default Home;