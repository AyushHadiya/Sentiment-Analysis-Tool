import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaDocker, FaCloudUploadAlt, FaCogs, FaRocket, FaArrowRight } from 'react-icons/fa';

const steps = [
    {
        icon: <FaCode className="text-5xl text-indigo-600" />,
        title: 'Train Model',
        description: 'Train sentiment model with scikit-learn.',
    },
    {
        icon: <FaServer className="text-5xl text-indigo-600" />,
        title: 'Build Lambda',
        description: 'Create Lambda function to predict sentiment.',
    },
    {
        icon: <FaDocker className="text-5xl text-indigo-600" />,
        title: 'Containerize',
        description: 'Package with Docker.',
    },
    {
        icon: <FaCloudUploadAlt className="text-5xl text-indigo-600" />,
        title: 'Push to ECR',
        description: 'Upload to Amazon ECR.',
    },
    {
        icon: <FaCogs className="text-5xl text-indigo-600" />,
        title: 'Deploy Lambda',
        description: 'Deploy to AWS Lambda.',
    },
    {
        icon: <FaRocket className="text-5xl text-indigo-600" />,
        title: 'Set Up API',
        description: 'Expose via API Gateway.',
    },
];

const ProcessFlow = () => {
    return (
        <motion.div
            className="w-full max-w-6xl flex flex-col items-center h-[300px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <motion.h1
                className="text-5xl font-extrabold text-white text-center mb-12"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                Project Process Flow
            </motion.h1>

            {/* Flowchart */}
            <div className="flex items-center justify-center w-full h-[450px]">
                {steps.map((step, index) => (
                    <div className='flex justify-center items-center h-full'>
                        <motion.div
                            key={index}
                            className="flex items-center h-[250px] border-3 border-white rounded-lg justify-center"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            {/* Step Card */}
                            <div className="flex flex-col items-center w-40">
                                <div className="bg-white p-5 rounded-full shadow-lg mb-3">
                                    {step.icon}
                                </div>
                                <h2 className="text-base font-semibold text-white text-center">
                                    {step.title}
                                </h2>
                                <p className="text-sm text-gray-200 text-center mt-2">
                                    {step.description}
                                </p>
                            </div>

                        </motion.div>
                        {/* Arrow (except for the last step) */}
                        {index < steps.length - 1 && (
                            <motion.div
                                className="text-white text-3xl flex w-14 justify-center items-center h-full"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.6, delay: (index + 0.5) * 0.2 }}
                            >
                                <FaArrowRight />
                            </motion.div>
                        )}
                    </div>
                ))
                }
            </div >

            <motion.div
                className="mt-12 text-center text-gray-200 text-base"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
            >
                <p>A serverless sentiment analysis pipeline using AWS.</p>
            </motion.div>
        </motion.div >
    );
};

export default ProcessFlow;