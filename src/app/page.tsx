import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Features from "@/components/Features"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      {/* Background image — fixed behind everything */}
      <div
        className="fixed top-0 left-0 w-full h-[100vh] bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: "url('/images/hero1.jpg')" }}
      >
        <div className="absolute inset-0" />
      </div>

      {/* Content over background */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Features />
        <Footer />
        {/* You can continue adding Lessons, Contact, etc. */}
      </div>
    </main>
  )
}
