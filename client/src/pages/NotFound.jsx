import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center pt-24">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass rounded-3xl p-12 max-w-xl mx-auto border border-pink-500/20"
        >
          <motion.h1
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring" }}
            className="text-9xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent mb-4"
          >
            404
          </motion.h1>
          <h2 className="text-3xl font-bold mb-4 text-white">Page Not Found</h2>
          <p className="text-light-blue/70 mb-8 text-lg">
            Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
          </p>
          <Link
            to="/"
            className="inline-block bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-pink-500/30 transition-all duration-300"
          >
            Go Back Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
