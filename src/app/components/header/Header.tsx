'use client';

import { useState, useEffect } from 'react';
import UserMenu from '@/app/components/header/components/UserMenu';
import FriendsMenu from '@/app/components/header/components/FriendsMenu';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 flex items-center justify-between border-b border-gray-300 bg-gradient-to-r from-gray-100 to-gray-200 px-4 shadow-md transition-all duration-300 ease-in-out ${
        isScrolled ? 'h-16' : 'h-40'
      }`}
    >
      <div className="flex flex-1 items-center justify-center gap-3 transition-all duration-300 ease-in-out">
        <svg
          className={`fill-none stroke-current transition-all duration-300 ease-in-out ${
            isScrolled ? 'h-8 w-8' : 'h-20 w-20'
          }`}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
        <h1
          className={`font-bold transition-all duration-300 ease-in-out ${
            isScrolled ? 'text-xl' : 'text-4xl'
          }`}
        >
          Pede Apps
        </h1>
      </div>
      <div className="flex items-center gap-2">
        <FriendsMenu isScrolled={isScrolled} />
        <UserMenu isScrolled={isScrolled} />
      </div>
    </header>
  );
};

export default Header;