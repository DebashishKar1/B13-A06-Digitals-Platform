
import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import PremiumDigitalTools from './components/Products'
import StatsBar from './components/StatsBar'
import { CartContext } from './context/CartContext'
import FooterCTA from './PreFooterCTA'
import GetStartedSteps from './GetStartedSteps'
import PricingSection from './PricingSection'
import PreFooterCTA from './PreFooterCTA'
import Footer from './Footer'


function App() {
  
  return (
   <div>
    <Navbar />
     <Hero />
     <StatsBar />
    <PremiumDigitalTools />
    <CartContext />
    <GetStartedSteps />
    <PricingSection />
    <PreFooterCTA />
    <Footer />

    </div>
  )
}

export default App
