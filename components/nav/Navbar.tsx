'use client';
import Image from 'next/image';
import { useState } from 'react';
// import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false); // Close mobile menu if open
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <button 
              onClick={() => scrollToSection('home')} 
              className="text-2xl font-bold text-blue-600 font-xenois"
            >
              <Image src="/logo/Aufit Logo.png" alt="Aufit Logo" width={96} height={32} className="h-8" />
            </button>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="hover:text-blue-600 px-3 py-2 font-xenois"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="hover:text-blue-600 px-3 py-2 font-xenois"
              >
                About Aufit
              </button>

              <button 
                onClick={() => scrollToSection('dx-group')}
                className="hover:text-blue-600 px-3 py-2"
              >
                DX Group
              </button>

              <button 
                onClick={() => scrollToSection('products')}
                className="hover:text-blue-600 px-3 py-2"
              >
                Products
              </button>

              <button 
                onClick={() => scrollToSection('contact')}
                className="hover:text-blue-600 px-3 py-2"
              >
                Contact Us
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-blue-600"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button 
              onClick={() => scrollToSection('home')}
              className="block hover:text-blue-600 px-3 py-2 w-full text-left"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="block hover:text-blue-600 px-3 py-2 w-full text-left"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('products')}
              className="block hover:text-blue-600 px-3 py-2 w-full text-left"
            >
              Products
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block hover:text-blue-600 px-3 py-2 w-full text-left"
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;