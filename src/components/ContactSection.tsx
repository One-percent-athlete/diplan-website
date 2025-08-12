'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you'd send the data to a server or form service
    alert('Form submitted! (No actual backend linked yet)')
  }

  return (
    <section id="contact" className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-[#1f2980] mb-12">
          Contact Us
        </h2>

        {/* FORM */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-[#1f2980] font-semibold mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#e45529]"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-[#1f2980] font-semibold mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#e45529]"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-[#1f2980] font-semibold mb-1">
                Details
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                required
                className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#e45529]"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-[#e45529] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#c94320] transition-colors"
            >
              Submit
            </button>
          </form>

          {/* QR CODES */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 justify-items-center">
            {[
              { src: '/qrcodes/wechat.jpg', alt: 'WeChat QR' },
              { src: '/qrcodes/line.jpg', alt: 'Line QR' },
              { src: '/qrcodes/whatsapp.jpg', alt: 'WhatsApp QR' },
            ].map((qr, i) => (
              <div key={i} className="text-center">
                <Image
                  src={qr.src}
                  alt={qr.alt}
                  width={140}
                  height={140}
                  className="rounded-lg shadow-md"
                />
                <p className="mt-2 text-[#1f2980] font-medium">{qr.alt.split(' ')[0]}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
