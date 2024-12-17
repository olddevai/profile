import React from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Link } from 'lucide-react';

const socialLinks = [
  { Icon: Github, href: '#', label: 'GitHub', color: '#333' },
  { Icon: Twitter, href: '#', label: 'Twitter', color: '#1DA1F2' },
  { Icon: Linkedin, href: '#', label: 'LinkedIn', color: '#0A66C2' },
  { Icon: Link, href: '#', label: 'Portfolio', color: '#6D28D9' },
];

const SocialLinks: React.FC = () => {
  return (
    <div className="flex justify-center space-x-4 mb-8">
      {socialLinks.map(({ Icon, href, label, color }, index) => (
        <motion.a
          key={label}
          href={href}
          className="group relative w-12 h-12 flex items-center justify-center rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
          whileHover={{ y: -5, scale: 1.1 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          aria-label={label}
        >
          <Icon
            size={24}
            className="transition-colors duration-300 group-hover:text-white"
            style={{ color: color }}
          />
          <div
            className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ backgroundColor: color }}
          />
          <Icon
            size={24}
            className="absolute text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
          />
        </motion.a>
      ))}
    </div>
  );
};

export default SocialLinks;