// src/FooterCTA.jsx

const PreFooterCTA = () => {
  return (
    <div className="bg-linear-to-r from-violet-600 to-purple-600 py-20 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        {/* Headline */}
        <h2 className="text-5xl md:text-6xl font-bold tracking-tight leading-none mb-6">
          Ready To Transform Your Workflow?
        </h2>
        
        {/* Subtext */}
        <p className="text-xl md:text-2xl text-violet-100 max-w-2xl mx-auto mb-4">
          Join thousands of professionals who are already using Digitools to work smarter.
        </p>
        <p className="text-lg text-violet-100 mb-12">
          Start your free trial today.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="px-10 py-5 bg-white text-violet-700 hover:bg-violet-100 font-semibold text-lg rounded-3xl transition-all">
            Explore Products
          </button>
          
          <button className="px-10 py-5 border-2 border-white hover:bg-white/10 font-semibold text-lg rounded-3xl transition-all">
            View Pricing
          </button>
        </div>

        {/* Trust line */}
        <p className="mt-10 text-violet-200 text-base flex items-center justify-center gap-4">
          <span>14-day free trial</span>
          <span className="w-1.5 h-1.5 bg-violet-200 rounded-full"></span>
          <span>No credit card required</span>
          <span className="w-1.5 h-1.5 bg-violet-200 rounded-full"></span>
          <span>Cancel anytime</span>
        </p>

      </div>
    </div>
  )
}

export default PreFooterCTA