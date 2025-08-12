'use client'

import { FaBus, FaBed, FaUtensils, FaSnowflake } from 'react-icons/fa'

export default function AdditionalServices() {
  const services = [
    {
      icon: <FaBus className="text-4xl text-blue-600" />,
      title: '接送服務',
      description: '提供往返雪場與住宿的接送服務',
    },
    {
      icon: <FaBed className="text-4xl text-blue-600" />,
      title: '住宿安排',
      description: '協助安排舒適便捷的住宿選擇',
    },
    {
      icon: <FaUtensils className="text-4xl text-blue-600" />,
      title: '餐飲推薦',
      description: '精選當地特色餐廳與美食',
    },
    {
      icon: <FaSnowflake className="text-4xl text-blue-600" />,
      title: '滑雪裝備租借',
      description: '提供全套專業滑雪裝備租借服務',
    },
  ]

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">附加服務</h2>
          <p className="text-lg text-gray-600">Additional Services</p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
