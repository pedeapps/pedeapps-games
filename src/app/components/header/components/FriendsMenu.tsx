'use client';

import { useState } from 'react';
import { Users, Link as LinkIcon } from 'lucide-react';

interface Friend {
  name: string;
  image: string;
  status: 'online' | 'offline' | 'away';
}

interface FriendsMenuProps {
  isScrolled: boolean;
}

const FriendsMenu = ({ isScrolled }: FriendsMenuProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [inviteLink, setInviteLink] = useState<string | null>(null);

  const friends: Friend[] = [
    { name: 'Antan Menef', image: 'https://via.placeholder.com/40?text=A', status: 'online' },
    { name: 'Haria Ohluy', image: 'https://via.placeholder.com/40?text=H', status: 'offline' },
    { name: 'Hem Minhon', image: 'https://via.placeholder.com/40?text=M', status: 'away' },
    { name: 'Phodea Irelner', image: 'https://via.placeholder.com/40?text=P', status: 'online' },
    { name: 'Babyu Manic', image: 'https://via.placeholder.com/40?text=B', status: 'offline' },
  ];

  const handleInviteFriend = () => {
    const link = 'https://crazygames.com/invite/123456';
    setInviteLink(link);
    navigator.clipboard.writeText(link);
    setTimeout(() => setInviteLink(null), 2000);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className={`cursor-pointer flex items-center gap-2 rounded-full border border-gray-300 hover:bg-blue-100 focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out ${
          isScrolled ? 'p-2' : 'p-3'
        }`}
        aria-label="Menu de amigos"
        aria-expanded={isDropdownOpen}
      >
        <Users
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
          <div className="flex justify-between p-2">
            <button
              onClick={() => setIsDropdownOpen(false)}
              className={`cursor-pointer rounded-md bg-blue-500 px-3 py-1 text-white hover:bg-blue-600 transition-all duration-300 ease-in-out ${
                isScrolled ? 'text-sm' : 'text-base'
              }`}
            >
              Adicionar Amigo
            </button>
            
            <button
              onClick={handleInviteFriend}
              className={`cursor-pointer rounded-md bg-blue-500 px-3 py-1 text-white hover:bg-blue-600 transition-all duration-300 ease-in-out ${
                isScrolled ? 'text-sm' : 'text-base'
              }`}
            >
              {inviteLink ? 'Link Copiado!' : 'Convidar Amigo'}
            </button>
          </div>
          
          <div className="max-h-48 overflow-y-auto">
            {friends.map((friend, index) => (
              <div
                key={index}
                className={`flex items-center gap-3 border-t border-gray-200 transition-all duration-300 ease-in-out ${
                  isScrolled ? 'px-4 py-2' : 'px-6 py-3'
                }`}
              >
                <img
                  src={friend.image}
                  alt={friend.name}
                  className="h-10 w-10 rounded-full object-cover"
                />
                
                <span className="flex-1">{friend.name}</span>
                
                <span
                  className={`h-4 w-4 rounded-full ${
                    friend.status === 'online'
                      ? 'bg-green-500'
                      : friend.status === 'offline'
                      ? 'bg-red-500'
                      : 'bg-yellow-500'
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FriendsMenu;