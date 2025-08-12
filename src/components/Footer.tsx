'use client'

import Link from 'next/link'
import { FaFacebook, FaInstagram, FaLine, FaWhatsapp } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-[#1f2980] text-white pt-16 pb-8 relative">
      {/* Overlay (optional blur/fade effect) */}
      <div className="absolute inset-0 bg-black opacity-20 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Column 1 - Brand Info */}
        <div>
          <h4 className="text-xl font-bold mb-4 text-white">Diplan</h4>
          <p className="text-sm leading-loose">
            Diplan 滑雪學校<br />
            單板課程｜雙板課程｜滑雪攝影<br />
            中文教練｜小班制課程
          </p>
        </div>

        {/* Column 2 - Contact Info */}
        <div>
          <h4 className="text-xl font-bold mb-4 text-white">Get Started</h4>
          <p className="text-sm leading-loose">
            E-mail：<a href="mailto:info@crazyforsnow.com" className="underline">info@diplan.com</a><br />
            WeChat：<br />
            LINE：<br />
            Whatsapp：
          </p>
        </div>

        {/* Column 3 - Social + CTA */}
        <div>
          <h4 className="text-xl font-bold mb-4 text-white">Follow Us</h4>
          <div className="flex space-x-4 mb-6">
            <a href="https://www.instagram.com/crrrrrrrazyforsnow/?igshid=OGQ5ZDc2ODk2ZA%3D%3D" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-2xl hover:text-[#FF6A00]" />
            </a>
            <a href="https://www.facebook.com/crrrrrrrazyforsnow/" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-2xl hover:text-[#FF6A00]" />
            </a>
            <a href="https://line.me/R/ti/p/@572taxlt" target="_blank" rel="noopener noreferrer">
              <FaLine className="text-2xl hover:text-[#FF6A00]" />
            </a>
            <a href="https://wa.me/886905691951" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="text-2xl hover:text-[#FF6A00]" />
            </a>
          </div>

          <Link href="/#contact" className="text-lg font-semibold text-white hover:text-[#FF6A00] transition-colors duration-300">
            <span className="inline-block bg-[#FF6A00] hover:bg-orange-600 text-white px-6 py-2 rounded transition duration-300">
              預定課程
            </span>
          </Link>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 mt-12 border-t border-gray-600 pt-6 text-center text-sm text-gray-300">
        Copyright © HDSS 株式會社 | Design by Ryu
      </div>
    </footer>
  )
}
