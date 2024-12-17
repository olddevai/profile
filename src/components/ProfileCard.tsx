import React, { useState, useEffect } from 'react';
import { Github, Twitter, Linkedin, Mail, Code, Briefcase, User } from 'lucide-react';

const ProfileCard = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 20;
    const rotateY = -(x - centerX) / 20;
    
    setRotation({ x: rotateX, y: rotateY });
  };
  
  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 p-4 sm:p-8 flex items-center justify-center">
      <div
        className="profile-card w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 transform transition-transform duration-300 ease-out"
        style={{
          transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="relative mb-8">
          <div className="w-32 h-32 mx-auto relative">
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=300&h=300"
              alt="Profile"
              className="w-full h-full rounded-full object-cover shadow-lg transform hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500/20 to-pink-500/20 animate-pulse" />
          </div>
        </div>

        <div className="text-center mb-6 reveal-text">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">John Doe</h1>
          <p className="text-purple-600 font-medium">Senior Software Engineer</p>
        </div>

        <p className="text-gray-600 text-center mb-6 leading-relaxed">
          Passionate about creating elegant solutions to complex problems. Specializing in web technologies and user experience design.
        </p>

        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            { label: 'React', level: 90 },
            { label: 'TypeScript', level: 85 },
            { label: 'Node.js', level: 80 },
          ].map((skill) => (
            <div key={skill.label} className="text-center">
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-purple-500 rounded-full transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
              <p className="text-sm text-gray-600 mt-1">{skill.label}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center space-x-4 mb-6">
          {[
            { Icon: Github, href: '#', label: 'GitHub' },
            { Icon: Twitter, href: '#', label: 'Twitter' },
            { Icon: Linkedin, href: '#', label: 'LinkedIn' },
          ].map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-purple-500 hover:text-white transition-colors duration-300"
              aria-label={label}
            >
              <Icon size={20} />
            </a>
          ))}
        </div>

        <button className="w-full py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-300 flex items-center justify-center space-x-2">
          <Mail size={20} />
          <span>Contact Me</span>
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;