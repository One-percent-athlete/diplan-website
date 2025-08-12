'use client'

import { useEffect, useState } from 'react'

export default function Hero() {
  const [showLogo, setShowLogo] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowLogo(true)
    }, 200)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <section className="relative text-white text-center flex flex-col items-center justify-center min-h-[85vh] px-6 pt-32 overflow-hidden font-raleway">
      {/* Diplan Logo */}
      <img
        src="/images/diplan-ski-school-logo.png"
        alt="Diplan Ski School Logo"
        className={`w-80 h-auto transition-all duration-700 ease-out transform mb-4 ${
          showLogo ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      />

      {/* Hero Content */}
      <h1 className="text-4xl md:text-5xl font-bold leading-tight drop-shadow-md mb-6 text-[#1f2980]">
        Unleash Your Inner Rider
      </h1>
      {/* Neon Button */}
      <div className="mt-4">
        <a href="#contact" className="neon-btn relative">
            <h2 className="text-4xl fontsemibold">
                Book Now
            </h2>
            <span></span><span></span><span></span><span></span>
        </a>
      </div>
    </section>
  )
}
