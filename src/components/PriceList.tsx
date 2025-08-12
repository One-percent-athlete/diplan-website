'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function PriceList() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <section
      id="prices"
      className="relative bg-cover bg-center py-24 px-6 text-white"
      style={{ backgroundImage: 'url(/images/feature1.jpg)' }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 drop-shadow-lg">
          Price List
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-start">
          {[
            {
              src: '/images/feature2.jpg',
              alt: 'Private Lesson Pricing',
            },
            {
              src: '/images/feature3.jpg',
              alt: 'Group Lesson Pricing',
            },
          ].map((img, i) => (
            <div
              key={i}
              className={`transition-all duration-700 transform ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={600}
                height={800}
                className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
