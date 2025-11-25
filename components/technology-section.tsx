"use client"

import { CheckCircle2 } from "lucide-react"

const techs = [
  "Post-Quantum Cryptography (Kyber, Dilithium)",
  "Zero-Knowledge Validation",
  "Multi-Chain Publishers",
  "Node Reputation & Redundancy",
  "Web2/Web3 Interoperability Middleware",
  "Future QKD Extensions",
]

export default function TechnologySection() {
  return (
    <section id="technology" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Advanced Technology Stack</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Built with industry-leading cryptographic and blockchain standards
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            {techs.map((tech, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-lg">{tech}</span>
              </div>
            ))}
          </div>

          <div className="relative h-96 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl border border-border/50 overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 quantum-grid opacity-50"></div>
            <div className="relative z-10 text-center">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/20 mb-4">
                <div className="text-4xl">⚛️</div>
              </div>
              <p className="text-sm text-muted-foreground">Quantum-Ready</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
