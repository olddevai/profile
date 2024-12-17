import React from 'react';
import { motion } from 'framer-motion';

interface SkillBarProps {
  label: string;
  level: number;
  index: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ label, level, index }) => {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-700">{label}</span>
        <span className="text-sm text-gray-500">{level}%</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-violet-500 to-fuchsia-500"
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 1, delay: index * 0.2 }}
        />
      </div>
    </motion.div>
  );
};

export default SkillBar;