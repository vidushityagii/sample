import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Work } from "@/components/work-section"
import { Contact } from "@/components/contact"
import { AboutSection } from "@/components/about-section"

import { ClientsSection } from "@/components/clients-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white overflow-hidden selection:bg-white selection:text-black">
      <Navbar />
      <Hero />
      <AboutSection />
      <Work />
      <ClientsSection />
      <Contact />
    </main>
  )
}
