"use client"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import ValueProposition from "@/components/value-proposition"
import HowItWorks from "@/components/how-it-works"
import UseCases from "@/components/use-cases"
import TechnologySection from "@/components/technology-section"
import RoadmapSection from "@/components/roadmap-section"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <HeroSection />
      <ValueProposition />
      <HowItWorks />
      <UseCases />
      <TechnologySection />
      <RoadmapSection />
      <CTASection />
      <Footer />
    </main>
  )
}
