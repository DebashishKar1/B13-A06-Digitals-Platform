
import React from 'react';
import banner from '../assets/banner.png'; // ✅ import your image

const Hero = () => {
  return (
    <section className="pt-16 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Text Content */}
          <div className="space-y-8">
            
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 text-sm font-medium px-5 py-2 rounded-full">
              <div className="w-2 h-2 bg-purple-600 rounded-full animate-pulse"></div>
              New: AI-Powered Tools Available
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight tracking-[-1px] text-gray-900">
              Supercharge Your<br />Digital Workflow
            </h1>

            <p className="text-xl text-gray-600 max-w-lg">
              Access premium AI tools, design assets, templates, and productivity 
              software—all in one place. Start creating faster today.
            </p>

            <a 
              href="#" 
              className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium text-lg group"
            >
              Explore Products
              <span className="ml-2 text-2xl leading-none transition-transform group-hover:translate-x-1">→</span>
            </a>

            <div className="flex flex-wrap gap-4">
              <button className="bg-[#8B00FF] hover:bg-[#7A00E6] text-white font-semibold px-8 py-4 rounded-full text-lg flex items-center gap-2 transition-all duration-200 shadow-lg shadow-purple-500/30">
                Explore Products
              </button>

              <button className="border-2 border-[#8B00FF] text-[#8B00FF] hover:bg-purple-50 font-semibold px-8 py-4 rounded-full text-lg flex items-center gap-2 transition-all duration-200">
                <span className="text-2xl leading-none">▶</span>
                Watch Demo
              </button>
            </div>
          </div>

          {/* Right Side - Image (UPDATED) */}
          <div className="relative">
            <img 
              src={banner}   // ✅ your new image here
              alt="AI Digital Banner"
              className="w-full rounded-3xl shadow-2xl"
            />
            
            <div className="absolute -inset-4 bg-linear-to-r from-purple-400/20 to-blue-400/20 blur-3xl -z-10 rounded-[3rem]"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;