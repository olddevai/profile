import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const ContactButton: React.FC = () => {
  return (
    <motion.button
      className="w-full py-4 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white rounded-xl shadow-lg hover:shadow-xl group relative overflow-hidden"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="absolute inset-0 bg-white/20 transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
      <div className="relative flex items-center justify-center space-x-2">
        <Mail className="w-5 h-5" />
        <span className="font-semibold">Get in Touch</span>
      </div>
    </motion.button>
  );
};

export default ContactButton;