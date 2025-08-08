'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

interface FeatureBlockProps {
  number: string
  title: string
  description: string
  image: string
  reverse?: boolean
}

export default function FeatureBlock({
  number,
  title,
  description,
  image,
  reverse = false,
}: FeatureBlockProps) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setShow(true), 100)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <section
      className={`py-20 px-6 ${
        reverse ? 'bg-gray-50' : 'bg-white'
      } transition-all duration-700 ease-in-out`}
    >
      <div
        className={`max-w-6xl mx-auto flex flex-col md:flex-row items-center ${
          reverse ? 'md:flex-row-reverse' : ''
        }`}
      >
        {/* Image */}
        <div className="w-full md:w-1/2">
          <Image
            src={image}
            alt={title}
            width={600}
            height={600}
            className={`w-full h-auto transition-opacity duration-1000 ease-in-out ${
              show ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </div>

        {/* Content */}
        <div className="w-full md:w-1/2 mt-10 md:mt-0 md:px-10 text-left">
          <h2 className="text-3xl font-bold text-[#1f2980] mb-2">{number}</h2>
          <div className="w-20 h-1 bg-[#1f2980] mb-4" />
          <h3 className="text-2xl font-semibold text-[#1f2980] mb-4">{title}</h3>
          <p className="text-gray-700 text-lg leading-relaxed">{description}</p>
        </div>
      </div>
    </section>
  )
}
