"use client"

import { CheckCircle2, Circle } from "lucide-react"

const phases = [
  {
    phase: "Phase 1",
    title: "MVP Oracle",
    description: "1 chain deployment",
    completed: true,
  },
  {
    phase: "Phase 2",
    title: "Multi-chain + ZK",
    description: "Expand to all major blockchains",
    completed: false,
  },
  {
    phase: "Phase 3",
    title: "Decentralized Nodes",
    description: "Staking and node rewards",
    completed: false,
  },
  {
    phase: "Phase 4",
    title: "Quantum-Ready",
    description: "QKD and QRNG integration",
    completed: false,
  },
]

export default function RoadmapSection() {
  return (
    <section id="roadmap" className="relative py-24 px-6 bg-gradient-to-b from-background to-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Development Roadmap</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our vision for the future of oracle infrastructure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {phases.map((phase, index) => (
            <div key={index} className="relative">
              <div
                className={`p-6 rounded-xl border transition-all duration-300 ${
                  phase.completed ? "border-primary/50 bg-primary/10" : "border-border/50 bg-card/30"
                }`}
              >
                <div className="flex items-center gap-2 mb-4">
                  {phase.completed ? (
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  ) : (
                    <Circle className="w-6 h-6 text-muted-foreground" />
                  )}
                  <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {phase.phase}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{phase.title}</h3>
                <p className="text-sm text-muted-foreground">{phase.description}</p>
              </div>

              {index < phases.length - 1 && (
                <div className="hidden lg:block absolute left-full top-8 w-6 h-0.5 bg-gradient-to-r from-border to-transparent"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
