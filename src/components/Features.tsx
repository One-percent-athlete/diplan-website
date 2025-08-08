'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

interface FeatureBlockProps {
  number: string
  title: string
  description: string
  image: string
  reverse?: boolean
}

function FeatureBlock({
  number,
  title,
  description,
  image,
  reverse = false,
}: FeatureBlockProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      className={`py-20 px-6 transition-all duration-1000 ease-in-out ${
        reverse ? 'bg-gray-50' : 'bg-white'
      }`}
    >
      <div
        className={`max-w-6xl mx-auto flex flex-col md:flex-row items-center ${
          reverse ? 'md:flex-row-reverse' : ''
        } ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        } transition-all duration-1000 ease-in-out`}
      >
        {/* Image */}
        <div className="w-full md:w-1/2">
          <Image
            src={image}
            alt={title}
            width={600}
            height={600}
            className="w-full h-auto"
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 mt-10 md:mt-0 md:px-10 text-left">
          <h2 className="text-3xl font-bold text-[#FF6A00] mb-2">{number}</h2>
          <div className="w-20 h-1 bg-[#FF6A00] mb-4" />
          <h3 className="text-2xl font-semibold text-[#1f2980] mb-4">{title}</h3>
          <p className="text-gray-700 text-lg leading-relaxed">{description}</p>
        </div>
      </div>
    </section>
  )
}

export default function Features() {
  const [animateTitle, setAnimateTitle] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setAnimateTitle(true), 100)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <div id="features" className="bg-white py-24 px-6">
      {/* Section Title */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-[#1f2980] tracking-wide">
          我們的特色
        </h2>
        <h2
          className={`text-2xl md:text-3xl font-semibold text-[#e45529] mt-2 transition-all duration-700 ${
            animateTitle ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}
        >
          Features
        </h2>
      </div>

      {/* Feature Blocks */}
      <FeatureBlock
        number="01"
        title="VIP專屬小班制課程"
        description="不論是單板還是雙板，初學還是進階，又或是GATE 區域樹林探險或粉雪導滑，我們都能根據您的興趣和技能水平為您訂製專屬的滑雪課程。不再受限於大型團體課程，選擇自己的路線，探索更多的滑雪樂趣。"
        image="/images/feature1.jpg"
      />

      <FeatureBlock
        number="02"
        title="國際認證教練團隊"
        description="我們的教練團隊由擁有國際認證（如SIA、JSBA、CASI）的專業滑雪教練組成，教學經驗豐富，能夠確保每位學員在安全中成長、在樂趣中進步。"
        image="/images/feature2.jpg"
        reverse
      />

      <FeatureBlock
        number="03"
        title="靈活彈性的預約制度"
        description="課程採用預約制，提供彈性選擇時間與地點。無論是短期旅客還是長期學習者，我們都能配合安排適合的教學時段。"
        image="/images/feature3.jpg"
      />
    </div>
  )
}
