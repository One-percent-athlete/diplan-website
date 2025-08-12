'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaInstagram, FaFacebook, FaLine, FaWhatsapp } from 'react-icons/fa'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', onScroll)

    const timer = setTimeout(() => {
      setIsReady(true)
    }, 100)

    return () => {
      window.removeEventListener('scroll', onScroll)
      clearTimeout(timer)
    }
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Left: Logo + Title */}
        <Link href="/" className="flex items-center space-x-3 group">
          <Image
            src="/diplan-logo.png"
            alt="Diplan Logo"
            width={60}
            height={60}
            priority
          />
          <h1 className="text-xl md:text-2xl font-bold text-[#1f2980] relative pb-1">
            <span
              className={`relative after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-[#e45529] after:origin-left after:transition-transform after:duration-700 ${
                isReady ? 'after:scale-x-100' : 'after:scale-x-0'
              }`}
            >
              Hokkaido Diplan Ski School
            </span>
          </h1>
        </Link>

        {/* Center: Navigation Links */}
        <ul className="hidden md:flex space-x-8 text-[#1f2980] font-semibold text-lg">
            {['Home', 'Lessons', 'About', 'Contact'].map((text, i) => (
              <li key={i}>
                {text === 'Lessons' ? (
                  <Link
                    href="/lessons"
                    className="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#e45529] after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
                  >
                    {text}
                  </Link>
                ) : (
                  <a
                    href={`#${text.toLowerCase()}`}
                    className="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#e45529] after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
                  >
                    {text}
                  </a>
                )}
              </li>
            ))}
          </ul>


        {/* Right: Social Media Icons */}
        <div className="hidden md:flex space-x-4 pr-2 text-2xl">
          {[
            {
              href: 'https://www.instagram.com/crrrrrrrazyforsnow/',
              icon: <FaInstagram />,
              label: 'Instagram',
            },
            {
              href: 'https://www.facebook.com/crrrrrrrazyforsnow/',
              icon: <FaFacebook />,
              label: 'Facebook',
            },
            {
              href: 'https://line.me/R/ti/p/@572taxlt',
              icon: <FaLine />,
              label: 'Line',
            },
            {
              href: 'https://wa.me/886905691951',
              icon: <FaWhatsapp />,
              label: 'WhatsApp',
            },
          ].map((social, i) => (
            <a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="
                relative
                text-[#e45529]
                transition-colors
                duration-500
                focus:outline-none
                focus:ring-2
                focus:ring-[#e45529]
                focus:ring-offset-2

                after:content-['']
                after:absolute
                after:left-0
                after:bottom-0
                after:w-full
                after:h-[2px]
                after:bg-[#e45529]
                after:origin-left
                after:scale-x-0
                after:transition-transform
                after:duration-500

                hover:after:scale-x-100
                focus:after:scale-x-100
              "
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
