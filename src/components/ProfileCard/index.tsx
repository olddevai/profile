import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import ProfileImage from './ProfileImage';
import SkillBar from './SkillBar';
import SocialLinks from './SocialLinks';
import ContactButton from './ContactButton';

const skills = [
  { label: 'React', level: 90 },
  { label: 'TypeScript', level: 85 },
  { label: 'Node.js', level: 80 },
  { label: 'UI/UX Design', level: 75 },
];

const ProfileCard: React.FC = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), {
    damping: 30,
    stiffness: 200,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), {
    damping: 30,
    stiffness: 200,
  });

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    mouseX.set((clientX - left) / width - 0.5);
    mouseY.set((clientY - top) / height - 0.5);
  }

  function onMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-violet-100 via-white to-fuchsia-100 p-4 sm:p-8 flex items-center justify-center perspective-1000">
      <motion.div
        className="w-full max-w-md"
        style={{ transformStyle: 'preserve-3d' }}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
      >
        <motion.div
          className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-white/20"
          style={{
            rotateX,
            rotateY,
            transformStyle: 'preserve-3d',
          }}
        >
          <ProfileImage
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=300&h=300"
            alt="John Doe"
            rotationX={rotateX.get()}
            rotationY={rotateY.get()}
          />

          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-3xl font-bold bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent mb-2">
              John Doe
            </h1>
            <p className="text-gray-600 font-medium">Senior Software Engineer</p>
          </motion.div>

          <motion.p
            className="text-gray-600 text-center mb-8 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Crafting exceptional digital experiences through innovative code and design.
            Passionate about creating elegant solutions to complex problems.
          </motion.p>

          <div className="space-y-4 mb-8">
            {skills.map((skill, index) => (
              <SkillBar
                key={skill.label}
                label={skill.label}
                level={skill.level}
                index={index}
              />
            ))}
          </div>

          <SocialLinks />
          <ContactButton />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProfileCard;