
import React from 'react';

const StatsBar = () => {
  return (
    <div className="bg-linear-to-r from-purple-600 to-violet-600 py-10 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-8 md:gap-0">
          
          {/* Stat 1 */}
          <div className="flex-1 text-center md:text-left">
            <div className="text-5xl md:text-6xl font-bold">50K+</div>
            <div className="text-sm md:text-base uppercase tracking-[2px] mt-1 text-purple-200">
              Active Users
            </div>
          </div>

          {/* Separator */}
          <div className="hidden md:block h-12 w-px bg-white/30"></div>

          {/* Stat 2 */}
          <div className="flex-1 text-center">
            <div className="text-5xl md:text-6xl font-bold">200+</div>
            <div className="text-sm md:text-base uppercase tracking-[2px] mt-1 text-purple-200">
              Premium Tools
            </div>
          </div>

          {/* Separator */}
          <div className="hidden md:block h-12 w-px bg-white/30"></div>

          {/* Stat 3 */}
          <div className="flex-1 text-center md:text-right">
            <div className="text-5xl md:text-6xl font-bold">4.9</div>
            <div className="text-sm md:text-base uppercase tracking-[2px] mt-1 text-purple-200">
              Rating
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default StatsBar;