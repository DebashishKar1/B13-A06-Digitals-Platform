import { useState, useContext } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { CartContext } from '../context/CartContext'
import 'react-toastify/dist/ReactToastify.css'

const PremiumDigitalTools = () => {
  const [activeTab, setActiveTab] = useState('products')
  const { cart, addToCart, removeFromCart, clearCart, totalPrice } = useContext(CartContext)

  const products = [
    { id: 1, title: "AI Writing Pro", price: 29, period: "/Mo", badge: "Best Seller", emoji: "📝", color: "blue", desc: "Generate high-quality content, blogs, and marketing copy in seconds with advanced AI.", features: ["Unlimited AI generations", "50+ writing templates", "Grammar checker"] },
    { id: 2, title: "Design Templates Pack", price: 49, period: "/One-Time", badge: "Popular", emoji: "🖌️", color: "purple", desc: "2000+ premium templates for social media, presentations, and marketing materials.", features: ["2000+ templates", "Monthly updates", "Commercial license"] },
    { id: 3, title: "Premium Stock Assets", price: 19, period: "/Mo", badge: "New", emoji: "📸", color: "cyan", desc: "Access millions of royalty-free photos, videos, and graphics for your projects.", features: ["10M+ assets", "Commercial use", "No attribution"] },
    { id: 4, title: "Automation Toolkit", price: 79, period: "/Mo", badge: "Popular", emoji: "⚙️", color: "orange", desc: "Automate repetitive tasks and streamline your workflow with powerful tools.", features: ["50+ automations", "API access", "Custom workflows"] },
    { id: 5, title: "Resume Builder Pro", price: 15, period: "/One-Time", badge: "New", emoji: "📄", color: "sky", desc: "Create professional resumes and cover letters that land interviews.", features: ["100+ templates", "ATS optimization", "Export to PDF"] },
    { id: 6, title: "Social Media Content Kit", price: 39, period: "/Mo", badge: "Best Seller", emoji: "📱", color: "pink", desc: "Complete toolkit for creating engaging social media content across all platforms.", features: ["5000+ assets", "Scheduler included", "Analytics dashboard"] }
  ]

  const isAlreadyInCart = (id) => cart.some(item => item.id === id)

  const handleBuyNow = (product) => {
    if (!addToCart(product)) {
      toast.info(`${product.title} already in cart!`)
      return
    }
    toast.success(`${product.title} added to cart! 🎉`)
  }

  const handleRemove = (id, title) => {
    removeFromCart(id)
    toast.success(`${title} removed from cart`)
  }

  const handleProceedToCheckout = () => {
    if (cart.length === 0) return
    clearCart()
    toast.success("✅ Thank you! Cart cleared.")
  }

  return (
    <>
      <div className="max-w-7xl mx-auto px-6 py-12 bg-white min-h-screen">

        {/* ✅ FRAME SECTION (ADDED) */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Premium Digital Tools
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from our curated collection of premium digital products designed
            to boost your productivity and creativity.
          </p>
        </div>


        {/* Toggle Buttons */}
        <div className="text-center mb-12">

          <div className="flex items-center justify-center gap-3 mt-10">
            <button
              onClick={() => setActiveTab('products')}
              className={`px-8 py-3.5 rounded-3xl font-semibold text-lg flex items-center gap-2 transition-all ${
                activeTab === 'products'
                  ? 'bg-violet-600 text-white shadow-lg'
                  : 'border border-gray-200 text-gray-700 hover:border-gray-300'
              }`}
            >
              📦 Products
            </button>

            <button
              onClick={() => setActiveTab('cart')}
              className={`px-8 py-3.5 rounded-3xl font-semibold text-lg flex items-center gap-2 transition-all ${
                activeTab === 'cart'
                  ? 'bg-violet-600 text-white shadow-lg'
                  : 'border border-gray-200 text-gray-700 hover:border-gray-300'
              }`}
            >
              🛒 Cart ({cart.length})
            </button>
          </div>
        </div>


        {/* PRODUCTS SECTION */}
        {activeTab === 'products' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map(product => {
              const alreadyAdded = isAlreadyInCart(product.id)
              return (
                <div key={product.id} className="product-card bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
                  <div className="flex justify-between items-start mb-6">
                    <div className={`w-14 h-14 bg-${product.color}-50 rounded-2xl flex items-center justify-center text-4xl`}>
                      {product.emoji}
                    </div>

                    <span className={`px-5 py-1.5 text-sm font-semibold rounded-3xl ${
                      product.badge === "Best Seller"
                        ? "bg-amber-100 text-amber-700"
                        : product.badge === "Popular"
                        ? "bg-violet-100 text-violet-700"
                        : "bg-emerald-100 text-emerald-700"
                    }`}>
                      {product.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-semibold text-gray-900">{product.title}</h3>
                  <p className="text-gray-600 mt-3 text-[15px] leading-relaxed">{product.desc}</p>

                  <div className="mt-6 flex items-baseline">
                    <span className="text-4xl font-bold text-gray-900">${product.price}</span>
                    <span className="text-gray-500 ml-1 text-lg">{product.period}</span>
                  </div>

                  <ul className="mt-8 space-y-4">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-gray-700">
                        <span className="text-emerald-500">✔</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => handleBuyNow(product)}
                    disabled={alreadyAdded}
                    className={`w-full mt-10 py-4 rounded-3xl text-white font-semibold text-lg shadow-md transition-all ${
                      alreadyAdded 
                        ? 'bg-emerald-500 cursor-not-allowed' 
                        : 'bg-linear-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700'
                    }`}
                  >
                    {alreadyAdded ? '✅ Added to Cart' : 'Buy Now'}
                  </button>
                </div>
              )
            })}
          </div>
        )}


        {/* CART SECTION */}
        {activeTab === 'cart' && (
          <div className="max-w-2xl mx-auto">
            {cart.length === 0 ? (
              <div className="text-center py-24">
                <div className="text-7xl mb-6">🛒</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Your cart is empty</h3>
                <p className="text-gray-600 mb-8">Looks like you haven't added anything yet.</p>

                <button
                  onClick={() => setActiveTab('products')}
                  className="px-10 py-4 bg-violet-600 text-white rounded-3xl font-semibold hover:bg-violet-700 transition"
                >
                  Browse Products
                </button>
              </div>
            ) : (
              <>
                <div className="space-y-6">
                  {cart.map(item => (
                    <div key={item.id} className="flex items-center gap-6 bg-white border border-gray-100 rounded-3xl p-6">
                      <div className={`w-16 h-16 bg-${item.color}-50 rounded-2xl flex items-center justify-center text-5xl`}>
                        {item.emoji}
                      </div>

                      <div className="flex-1">
                        <h4 className="font-semibold text-xl text-gray-900">{item.title}</h4>
                        <p className="text-gray-500 text-lg">${item.price}{item.period}</p>
                      </div>

                      <button
                        onClick={() => handleRemove(item.id, item.title)}
                        className="text-red-500 hover:text-red-700 font-medium px-6 py-2 transition"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>

                <div className="mt-12 border-t border-gray-200 pt-8">
                  <div className="flex justify-between items-center text-3xl font-bold mb-8">
                    <span>Total</span>
                    <span className="text-violet-600">${totalPrice}</span>
                  </div>

                  <button
                    onClick={handleProceedToCheckout}
                    className="w-full py-5 bg-emerald-600 hover:bg-emerald-700 text-white text-xl font-semibold rounded-3xl"
                  >
                    Proceed to Checkout
                  </button>
                </div>
              </>
            )}
          </div>
        )}
      </div>

      <ToastContainer position="top-right" autoClose={2500} />
    </>
  )
}

export default PremiumDigitalTools