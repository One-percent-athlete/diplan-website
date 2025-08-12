'use client'

import { useEffect, useState } from 'react'

export default function LessonsHero() {
  const [showHero, setShowHero] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setShowHero(true), 100)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <section
      className={`relative text-center flex flex-col items-center justify-center min-h-[85vh] px-6 pt-32 overflow-hidden font-raleway transition-all duration-[2000ms] ease-out ${
        showHero ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Background Image with Zoom Effect */}
      <div
        className={`absolute inset-0 bg-center bg-cover transition-transform duration-[4000ms] ease-out ${
          showHero ? 'scale-105' : 'scale-100'
        }`}
        style={{
          backgroundImage: "url('/images/hero.jpg')",
          backgroundAttachment: 'fixed',
        }}
      ></div>

      {/* Subtle dark overlay */}
      <div
        className={`absolute inset-0 bg-black/10 transition-opacity duration-1000 ease-out ${
          showHero ? 'opacity-100' : 'opacity-0'
        }`}
      ></div>

      {/* Content */}
      <div
        className={`relative z-10 flex flex-col items-center transition-all duration-[2500ms] ease-out ${
          showHero ? 'scale-105' : 'scale-100'
        }`}
      >
        {/* Logo */}
        <img
          src="/images/diplan-logo.png"
          alt="Lessons Logo"
          className={`w-64 h-auto mb-4 transition-all duration-700 ease-out drop-shadow-[0_4px_8px_rgba(0,0,0,0.35)] ${
            showHero ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        />

        {/* Title */}
        <h1
          className={`text-4xl md:text-5xl font-bold leading-tight text-[#1f2980] drop-shadow-[0_3px_6px_rgba(0,0,0,0.3)] transition-all duration-700 ease-out ${
            showHero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Learn Anytime, Anywhere
        </h1>

        {/* Original CTA */}
          <div className="mt-4">
            <a href="#contact" className="neon-btn relative">
                <h2 className="text-4xl fontsemibold">
                    Book Now
                </h2>
                <span></span><span></span><span></span><span></span>
            </a>
          </div>
        </div>
    </section>
  )
}
