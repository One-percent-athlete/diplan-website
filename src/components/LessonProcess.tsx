'use client'

import { FC, useEffect, useRef, useState } from 'react'
import './lessonProcess.css' // for the pulse animation

interface Step {
  time: string
  title: string
  description: string
}

const steps: Step[] = [
  { time: '9:00', title: '集合', description: '準備好您的滑雪裝備和雪具，與教練在雪場集合' },
  { time: '9:20-12:00', title: '開始上課', description: '熱身後開始上午的課程' },
  { time: '12:00-13:00', title: '午餐時間', description: '充分休息，迎接下午的課程' },
  { time: '13:00-15:00', title: '下午', description: '繼續下午的課程' },
  { time: '15:00', title: '課程結束', description: '在雪場解散，回酒店休息' }
]

const LessonProcess: FC = () => {
  const lineRef = useRef<HTMLDivElement>(null)
  const dotRefs = useRef<(HTMLDivElement | null)[]>([])
  const [activeStep, setActiveStep] = useState(0)
  const [lineHeight, setLineHeight] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!dotRefs.current.length) return

      let newActiveStep = 0
      const viewportCenter = window.innerHeight / 2

      dotRefs.current.forEach((dot, i) => {
        if (!dot) return
        const rect = dot.getBoundingClientRect()
        if (rect.top + rect.height / 2 < viewportCenter) {
          newActiveStep = i
        }
      })

      setActiveStep(newActiveStep)

      // Progress height calculation
      const firstDot = dotRefs.current[0]
      if (!firstDot) return

      const firstDotTop = firstDot.getBoundingClientRect().top + window.scrollY
      const lastDot = dotRefs.current[dotRefs.current.length - 1]

      const activeDot = dotRefs.current[newActiveStep]
      const nextDot = dotRefs.current[newActiveStep + 1]

      let progressHeight = 0

      if (activeDot) {
        const activeDotCenter =
          activeDot.getBoundingClientRect().top +
          window.scrollY +
          activeDot.offsetHeight / 2

        progressHeight = activeDotCenter - firstDotTop

        if (nextDot) {
          const nextDotCenter =
            nextDot.getBoundingClientRect().top +
            window.scrollY +
            nextDot.offsetHeight / 2

          const betweenDistance = nextDotCenter - activeDotCenter
          const scrolledBetween =
            viewportCenter -
            activeDot.getBoundingClientRect().top -
            activeDot.offsetHeight / 2

          const percentage = Math.min(
            Math.max(scrolledBetween / betweenDistance, 0),
            1
          )

          progressHeight += betweenDistance * percentage
        } else if (lastDot) {
          // If last step, fill to the end
          const lastDotCenter =
            lastDot.getBoundingClientRect().top +
            window.scrollY +
            lastDot.offsetHeight / 2
          progressHeight = lastDotCenter - firstDotTop
        }
      }

      setLineHeight(progressHeight)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="relative py-20 bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[#1f2980]">上課流程</h2>
        <p className="text-gray-600">Class Process</p>
      </div>

      <div className="relative max-w-4xl mx-auto px-4" ref={lineRef}>
        {/* Background line */}
        <div className="absolute left-1/2 top-0 w-1 bg-gray-300 h-full transform -translate-x-1/2"></div>

        {/* Progress line */}
        <div
          className="absolute left-1/2 top-0 w-1 transform -translate-x-1/2 transition-all duration-100"
          style={{
            height: `${lineHeight}px`,
            backgroundColor: '#e45529'
          }}
        ></div>

        {/* Timeline steps */}
        <div className="space-y-16 relative z-10">
          {steps.map((step, idx) => {
            const isPast = idx < activeStep
            const isActive = idx === activeStep

            return (
              <div
                key={idx}
                className={`flex items-center w-full ${
                  idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Time */}
                <div className="w-1/2 flex justify-center">
                  <div
                    className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                      isActive
                        ? 'bg-[#1f2980] text-white font-bold shadow-lg'
                        : isPast
                        ? 'bg-[#e45529] text-white font-bold shadow-md'
                        : 'bg-white shadow-md text-gray-700'
                    }`}
                  >
                    {step.time}
                  </div>
                </div>

                {/* Dot */}
                <div className="relative z-10">
                  <div
                    ref={(el) => (dotRefs.current[idx] = el)}
                    className={`w-6 h-6 rounded-full border-4 shadow-md transition-all duration-300 ${
                      isActive || isPast
                        ? 'bg-[#e45529]'
                        : 'bg-gray-300'
                    } ${isActive ? 'pulse-dot' : ''}`}
                    style={{
                      borderColor: '#1f2980'
                    }}
                  ></div>
                </div>

                {/* Content */}
                <div className="w-1/2 flex justify-center">
                  <div
                    className={`p-6 rounded-lg max-w-md shadow-md transition-all duration-300 ${
                      isActive
                        ? 'bg-[#fef2f2] border-l-4 border-[#1f2980]'
                        : isPast
                        ? 'bg-[#fff5f0] border-l-4 border-[#e45529]'
                        : 'bg-white'
                    }`}
                  >
                    <h4
                      className={`text-lg font-bold mb-1 transition-colors ${
                        isActive
                          ? 'text-[#1f2980]'
                          : isPast
                          ? 'text-[#e45529]'
                          : 'text-gray-900'
                      }`}
                    >
                      {step.title}
                    </h4>
                    <p className="text-gray-600 text-base">{step.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default LessonProcess
