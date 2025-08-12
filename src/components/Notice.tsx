'use client'

import { useState } from 'react'

const noticeData = [
  {
    title: '📌 報名須知',
    content: (
      <ul className="list-disc pl-5 space-y-2">
        <li>雙板最低年齡要求：4歲，4-7歲的幼童，只接受一對一的教學模式。</li>
        <li>單板最低年齡要求：6歲，6-7歲的幼童，只接受一對一的教學模式。</li>
        <li>大人與小孩的教學內容略有不同，若混齡上課會影響學習效果，因此我們不建議大人和小孩同班授課。</li>
        <li>課程將以您預訂的時間準時開始，請務必提前到達集合地點。</li>
        <li>我們會根據您的滑雪能力及需求，安排合適的教練。</li>
      </ul>
    ),
  },
  {
    title: '🎯 課前準備',
    content: (
      <ul className="list-disc pl-5 space-y-2">
        <li>課程不包含滑雪券或滑雪裝備租賃，請提前安排。</li>
        <li>請穿著適合滑雪的衣物及防寒裝備。</li>
        <li>建議攜帶防曬用品與護目鏡。</li>
        <li>若您有任何健康狀況，請提前告知教練。</li>
      </ul>
    ),
  },
  {
    title: '📄 課程條款及細則',
    content: (
      <div className="space-y-3">
        <p>當您為所預定的課程付款後，即代表已閱讀並接受以下條款：</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>若因天氣、場地等不可抗力因素導致課程取消，我們將與您協商改期或退款。</li>
          <li>課程一旦開始，即視為已使用，無法退款。</li>
          <li>所有參與者需自行購買滑雪保險。</li>
        </ul>
      </div>
    ),
  },
  {
    title: '❌ 取消條款',
    content: (
      <div className="space-y-3">
        <p>Crazy Snow 不會對任何控制範圍以外的狀況作出賠償，包括但不限於：</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>天氣變化或雪場關閉。</li>
          <li>交通延誤或意外。</li>
          <li>學員個人原因取消。</li>
        </ul>
        <p>如需取消課程，請至少提前 48 小時通知，否則將收取全額費用。</p>
      </div>
    ),
  },
]

export default function Notice() {
  const [openIndex, setOpenIndex] = useState(0)
  const [fadeKey, setFadeKey] = useState(0)

  const handleTabChange = (index) => {
    setOpenIndex(index)
    setFadeKey((prev) => prev + 1) // trigger fade animation
  }

  return (
    <section className="my-10 flex flex-col items-center">
      <div
        className="rounded-xl shadow-xl border border-gray-300 bg-gradient-to-b from-[#fafafa] to-white p-4"
        style={{
          width: '800px',
          boxShadow: '0 8px 20px rgba(0,0,0,0.08)',
        }}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Lesson Notices</h2>

        {/* Tabs */}
        <div className="flex justify-around border-b mb-4">
          {noticeData.map((item, index) => (
            <button
              key={index}
              onClick={() => handleTabChange(index)}
              className={`py-2 px-4 font-semibold border-b-4 transition-colors duration-300 ${
                openIndex === index
                  ? 'border-[#e45529] text-[#e45529]'
                  : 'border-transparent text-gray-600 hover:text-[#e45529]'
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* Inner "paper" content */}
        <div
          key={fadeKey}
          className="p-6 rounded-md overflow-y-auto animate-fadeIn border border-gray-200 bg-white bg-paper-texture"
          style={{
            height: '400px',
            width: '100%',
            boxShadow: 'inset 0 0 8px rgba(0,0,0,0.04)',
          }}
        >
          {noticeData[openIndex].content}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-in-out;
        }
      `}</style>
    </section>
  )
}
