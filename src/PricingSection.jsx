

const PricingSection = () => 
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-3 text-lg text-gray-600">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Starter Card */}
          <div className="bg-white border border-gray-200 rounded-3xl p-8 flex flex-col">
            <h3 className="text-2xl font-semibold mb-1">Starter</h3>
            <p className="text-gray-500 text-sm">Perfect for getting started</p>
            
            <div className="mt-6 mb-8">
              <span className="text-5xl font-bold">$0</span>
              <span className="text-gray-500 text-xl">/Month</span>
            </div>

            <ul className="space-y-4 mb-10 flex-1">
              <li className="flex items-center gap-2"><span className="text-green-500 text-xl">✅</span> Access to 10 free tools</li>
              <li className="flex items-center gap-2"><span className="text-green-500 text-xl">✅</span> Basic templates</li>
              <li className="flex items-center gap-2"><span className="text-green-500 text-xl">✅</span> Community support</li>
              <li className="flex items-center gap-2"><span className="text-green-500 text-xl">✅</span> 1 project per month</li>
            </ul>

            <button className="mt-auto w-full bg-violet-600 hover:bg-violet-700 text-white font-medium py-4 rounded-3xl transition text-lg">
              Get Started Free
            </button>
          </div>

          {/* Pro Card - Most Popular */}
          <div className="bg-violet-600 text-white rounded-3xl p-8 flex flex-col relative shadow-xl scale-105">
            {/* Most Popular Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-300 text-amber-800 text-xs font-bold px-6 py-1 rounded-3xl">
              Most Popular
            </div>

            <h3 className="text-2xl font-semibold mb-1">Pro</h3>
            <p className="text-violet-200 text-sm">Best for professionals</p>
            
            <div className="mt-6 mb-8">
              <span className="text-5xl font-bold">$29</span>
              <span className="text-violet-200 text-xl">/Month</span>
            </div>

            <ul className="space-y-4 mb-10 flex-1">
              <li className="flex items-center gap-2"><span className="text-white text-xl">✅</span> Access to all premium tools</li>
              <li className="flex items-center gap-2"><span className="text-white text-xl">✅</span> Unlimited templates</li>
              <li className="flex items-center gap-2"><span className="text-white text-xl">✅</span> Priority support</li>
              <li className="flex items-center gap-2"><span className="text-white text-xl">✅</span> Unlimited projects</li>
              <li className="flex items-center gap-2"><span className="text-white text-xl">✅</span> Cloud sync</li>
              <li className="flex items-center gap-2"><span className="text-white text-xl">✅</span> Advanced analytics</li>
            </ul>

            <button className="mt-auto w-full bg-white text-violet-600 hover:bg-violet-100 font-medium py-4 rounded-3xl transition text-lg">
              Start Pro Trial
            </button>
          </div>

          {/* Enterprise Card */}
          <div className="bg-white border border-gray-200 rounded-3xl p-8 flex flex-col">
            <h3 className="text-2xl font-semibold mb-1">Enterprise</h3>
            <p className="text-gray-500 text-sm">For teams and businesses</p>
            
            <div className="mt-6 mb-8">
              <span className="text-5xl font-bold">$99</span>
              <span className="text-gray-500 text-xl">/Month</span>
            </div>

            <ul className="space-y-4 mb-10 flex-1">
              <li className="flex items-center gap-2"><span className="text-green-500 text-xl">✅</span> Everything in Pro</li>
              <li className="flex items-center gap-2"><span className="text-green-500 text-xl">✅</span> Team collaboration</li>
              <li className="flex items-center gap-2"><span className="text-green-500 text-xl">✅</span> Custom integrations</li>
              <li className="flex items-center gap-2"><span className="text-green-500 text-xl">✅</span> Dedicated support</li>
              <li className="flex items-center gap-2"><span className="text-green-500 text-xl">✅</span> SLA guarantee</li>
              <li className="flex items-center gap-2"><span className="text-green-500 text-xl">✅</span> Custom branding</li>
            </ul>

            <button className="mt-auto w-full bg-violet-600 hover:bg-violet-700 text-white font-medium py-4 rounded-3xl transition text-lg">
              Contact Sales
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default PricingSection