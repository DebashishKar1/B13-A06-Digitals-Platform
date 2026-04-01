// src/GetStartedSteps.jsx

const GetStartedSteps = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading - exact Figma style */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900">
            Get Started In 3 Steps
          </h2>
          <p className="mt-3 text-lg text-gray-600">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        {/* 3 Steps Grid - exact PDF design */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Step 01 */}
          <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all relative">
            <div className="absolute top-6 right-6 bg-violet-600 text-white text-xs font-bold px-4 py-1 rounded-3xl">
              01
            </div>
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-violet-100 rounded-2xl flex items-center justify-center text-5xl">
                👤
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-center mb-3">Create Account</h3>
            <p className="text-gray-600 text-center leading-relaxed">
              Sign up for free in seconds. No credit card required to get started.
            </p>
          </div>

          {/* Step 02 */}
          <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all relative">
            <div className="absolute top-6 right-6 bg-violet-600 text-white text-xs font-bold px-4 py-1 rounded-3xl">
              02
            </div>
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-violet-100 rounded-2xl flex items-center justify-center text-5xl">
                📦
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-center mb-3">Choose Products</h3>
            <p className="text-gray-600 text-center leading-relaxed">
              Browse our catalog and select the tools that fit your needs.
            </p>
          </div>

          {/* Step 03 */}
          <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all relative">
            <div className="absolute top-6 right-6 bg-violet-600 text-white text-xs font-bold px-4 py-1 rounded-3xl">
              03
            </div>
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-violet-100 rounded-2xl flex items-center justify-center text-5xl">
                🚀
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-center mb-3">Start Creating</h3>
            <p className="text-gray-600 text-center leading-relaxed">
              Download and start using your premium tools immediately.
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default GetStartedSteps