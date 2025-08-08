'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export default function About() {
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 px-6 bg-no-repeat bg-cover bg-right transition-all duration-1000"
      style={{ backgroundImage: "url('/images/about.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 backdrop-blur-xs" />

      {/* Main Content */}
      <div
        className={`relative z-10 max-w-6xl mx-auto text-center transition-all duration-1000 ease-in-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Headings */}
        <h2 className="text-3xl md:text-5xl font-bold text-[#1f2980] tracking-wide">
          關於我們
        </h2>
        <h2 className="text-2xl md:text-3xl font-semibold text-[#e45529] mt-2">
          about us
        </h2>

        {/* Paragraphs */}
        <div className="mt-8 text-lg md:text-xl text-gray-700 leading-relaxed space-y-6 max-w-3xl mx-auto">
          <p>
            HDSS是一家專業的中文滑雪學校，擁有熱情、專業且經驗豐富的教練團隊，
            提供VIP小班制授課，讓您在輕鬆愉悅的氛圍中快速進步，享受滑雪的樂趣。
          </p>
          <p>
            我們注重教學效果和客戶體驗，提供完善的課程和優質的服務，
            無論您是初學者還是有經驗者，我們都能為您提供最適合的課程，
            讓您在瘋雪度過一個難忘的滑雪之旅。
          </p>
        </div>

        {/* Logos */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 items-center justify-center">
          {[ 
            { src: '/images/csia-logo.png', alt: 'CSIA Logo', width: 150, height: 150 },
            { src: '/images/nzsia-logo.png', alt: 'NZSIA Logo', width: 150, height: 150 },
            { src: '/images/casi-logo.png', alt: 'CASI Logo', width: 250, height: 250 },
          ].map((logo, index) => (
            <div key={index} className="flex flex-col items-center space-y-2">
              <Image {...logo} className="mx-auto" />
              <div className="h-[4px] w-20 bg-[#FF6A00] rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
