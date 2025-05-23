import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import Destinations from './components/Destinations';
import Partners from './components/Partners';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Benefits />
        <Destinations />
        <Partners />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;