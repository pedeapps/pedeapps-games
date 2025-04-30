'use client';

import { useState } from 'react';
import { User, Settings, LogOut } from 'lucide-react';

interface UserMenuProps {
  isScrolled: boolean;
}

const UserMenu = ({ isScrolled }: UserMenuProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className={`cursor-pointer rounded-full border border-gray-300 hover:bg-blue-100 focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out ${
          isScrolled ? 'p-2' : 'p-3'
        }`}
        aria-label="Menu do usuário"
        aria-expanded={isDropdownOpen}
      >
        <User
          className={`transition-all duration-300 ease-in-out ${
            isScrolled ? 'h-6 w-6' : 'h-8 w-8'
          }`}
        />
      </button>
      {isDropdownOpen && (
        <div
          className={`absolute right-0 mt-2 animate-fade-in rounded-lg border border-gray-300 bg-white shadow-lg transition-all duration-300 ease-in-out ${
            isScrolled ? 'w-48' : 'w-56'
          }`}
        >
          <button
            onClick={() => setIsDropdownOpen(false)}
            className={`flex w-full cursor-pointer items-center gap-2 text-left hover:bg-blue-50 transition-all duration-300 ease-in-out ${
              isScrolled ? 'px-4 py-2' : 'px-6 py-3'
            }`}
          >
            <User className="h-5 w-5" /> Perfil
          </button>
          <button
            onClick={() => setIsDropdownOpen(false)}
            className={`flex w-full cursor-pointer items-center gap-2 text-left hover:bg-blue-50 transition-all duration-300 ease-in-out ${
              isScrolled ? 'px-4 py-2' : 'px-6 py-3'
            }`}
          >
            <Settings className="h-5 w-5" /> Configurações
          </button>
          <button
            onClick={() => setIsDropdownOpen(false)}
            className={`flex w-full cursor-pointer items-center gap-2 text-left hover:bg-blue-50 transition-all duration-300 ease-in-out ${
              isScrolled ? 'px-4 py-2' : 'px-6 py-3'
            }`}
          >
            <LogOut className="h-5 w-5" /> Sair
          </button>
        </div>
      )}
    </div>
  );
};

export default UserMenu;