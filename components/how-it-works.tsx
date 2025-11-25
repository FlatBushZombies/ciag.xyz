"use client"

import { ArrowRight } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Data Ingestion",
    description: "Fetches real-world data from APIs, sensors, enterprise systems.",
  },
  {
    number: "02",
    title: "Validation Layer",
    description: "Multi-source redundancy, ZK proofs, PQC signatures.",
  },
  {
    number: "03",
    title: "On-Chain Delivery",
    description: "Publishes verified data to multiple blockchains.",
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A three-step process designed for reliability and speed
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connection lines */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-8 border border-border/50 h-full">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-primary/20 mb-6">
                  <span className="text-2xl font-bold text-primary">{step.number}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute -right-4 top-24 z-10">
                  <ArrowRight className="w-8 h-8 text-primary/50" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
