import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import { loginWithGoogle, logout } from '../firebase';
import { Menu, X, LogIn, LogOut } from 'lucide-react';
import { cn } from '../lib/utils';

const navItems = [
  { name: 'HOME', path: '/' },
  { name: 'ABOUT', path: '/about' },
  { name: 'SERVICE', path: '/service' },
  { name: 'PORTFOLIO', path: '/portfolio' },
  { name: 'CONTACT', path: '/contact' },
];

export default function Navbar() {
  const { user, isAuthReady } = useAuth();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2">
              <span className="text-2xl font-bold text-orange-600 tracking-tighter">SINSIN SIGN</span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-orange-600",
                  location.pathname === item.path ? "text-orange-600" : "text-gray-700"
                )}
              >
                {item.name}
              </Link>
            ))}
            
            {isAuthReady && (
              user ? (
                <button 
                  onClick={logout}
                  className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-orange-600"
                >
                  <LogOut size={16} /> Logout
                </button>
              ) : (
                <button 
                  onClick={loginWithGoogle}
                  className="flex items-center gap-2 text-sm font-medium text-white bg-orange-600 px-4 py-2 rounded-md hover:bg-orange-700 transition-colors"
                >
                  <LogIn size={16} /> Login
                </button>
              )
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-orange-600 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-3 py-2 rounded-md text-base font-medium",
                  location.pathname === item.path 
                    ? "text-orange-600 bg-orange-50" 
                    : "text-gray-700 hover:text-orange-600 hover:bg-orange-50"
                )}
              >
                {item.name}
              </Link>
            ))}
            {isAuthReady && (
              user ? (
                <button 
                  onClick={() => { logout(); setIsOpen(false); }}
                  className="w-full text-left flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50"
                >
                  <LogOut size={16} /> Logout
                </button>
              ) : (
                <button 
                  onClick={() => { loginWithGoogle(); setIsOpen(false); }}
                  className="w-full text-left flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium text-orange-600 hover:bg-orange-50"
                >
                  <LogIn size={16} /> Login
                </button>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
