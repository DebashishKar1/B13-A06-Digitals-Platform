// src/components/Navbar.jsx
import React, { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-[#8B00FF] text-3xl font-bold tracking-tight">
              DigiTools
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-x-8 text-base font-medium">
            <a 
              href="#" 
              className="text-gray-700 hover:text-[#8B00FF] transition-colors duration-200"
            >
              Products
            </a>
            <a 
              href="#" 
              className="text-gray-700 hover:text-[#8B00FF] transition-colors duration-200"
            >
              Features
            </a>
            <a 
              href="#" 
              className="text-gray-700 hover:text-[#8B00FF] transition-colors duration-200"
            >
              Pricing
            </a>
            <a 
              href="#" 
              className="text-gray-700 hover:text-[#8B00FF] transition-colors duration-200"
            >
              Testimonials
            </a>
            <a 
              href="#" 
              className="text-gray-700 hover:text-[#8B00FF] transition-colors duration-200"
            >
              FAQ
            </a>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-x-6">
            
            {/* Cart Icon */}
            <button 
              className="text-gray-700 hover:text-[#8B00FF] transition-colors duration-200 relative"
              aria-label="Cart"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="w-6 h-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" 
                />
              </svg>
            </button>

            {/* Login */}
            <a 
              href="#" 
              className="text-gray-700 hover:text-[#8B00FF] font-medium transition-colors duration-200 hidden sm:block"
            >
              Login
            </a>

            {/* Get Started Button */}
            <button 
              className="bg-[#8B00FF] hover:bg-[#7A00E6] text-white font-semibold px-6 py-2.5 rounded-full transition-all duration-200 text-sm"
            >
              Get Started
            </button>

            {/* Mobile Hamburger */}
            <button 
              className="md:hidden text-gray-700 hover:text-[#8B00FF]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="w-6 h-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M6 18L18 6M6 6h12v12" 
                  />
                ) : (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4 6h16M4 12h16M4 18h16" 
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-6 space-y-4 text-base font-medium">
            <a href="#" className="block text-gray-700 hover:text-[#8B00FF]">Products</a>
            <a href="#" className="block text-gray-700 hover:text-[#8B00FF]">Features</a>
            <a href="#" className="block text-gray-700 hover:text-[#8B00FF]">Pricing</a>
            <a href="#" className="block text-gray-700 hover:text-[#8B00FF]">Testimonials</a>
            <a href="#" className="block text-gray-700 hover:text-[#8B00FF]">FAQ</a>
            
            <div className="pt-4 border-t flex flex-col gap-3">
              <a href="#" className="text-gray-700 hover:text-[#8B00FF]">Login</a>
              <button className="bg-[#8B00FF] hover:bg-[#7A00E6] text-white font-semibold py-3 rounded-full w-full">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;