import React from 'react';
import { motion } from 'framer-motion';

interface ProfileImageProps {
  src: string;
  alt: string;
  rotationX: number;
  rotationY: number;
}

const ProfileImage: React.FC<ProfileImageProps> = ({ src, alt, rotationX, rotationY }) => {
  return (
    <div className="relative mb-8 z-10">
      <motion.div
        className="w-40 h-40 mx-auto relative"
        animate={{
          rotateX: rotationX * 0.5,
          rotateY: rotationY * 0.5,
          z: 50
        }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="absolute -inset-4 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full blur-lg opacity-75 animate-pulse" />
        <img
          src={src}
          alt={alt}
          className="w-full h-full rounded-full object-cover shadow-xl relative z-10 border-4 border-white"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/20 to-fuchsia-500/20 rounded-full z-20" />
      </motion.div>
    </div>
  );
};

export default ProfileImage;