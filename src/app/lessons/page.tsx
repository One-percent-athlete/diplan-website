'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import LessonsHero from '@/components/LessonsHero'
import LessonFeatures from '@/components/LessonFeatures'
import PriceList from "@/components/PriceList"
import AdditionalServices from "@/components/AdditionalServices"
import LessonProcess from "@/components/LessonProcess"
import Notice from "@/components/Notice"

export default function LessonsPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <LessonsHero />

      {/* Lesson Features Section */}
      <LessonFeatures />

      <PriceList />

      <AdditionalServices />

      <LessonProcess />

      <Notice />
      {/* Footer */}
      <Footer />
    </main>
  )
}
