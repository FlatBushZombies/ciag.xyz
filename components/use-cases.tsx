"use client"

import { TrendingUp, Package, Brain, Gamepad2 } from "lucide-react"

const useCases = [
  {
    icon: TrendingUp,
    title: "DeFi Price Feeds",
    description: "Real-time oracle feeds for decentralized finance protocols with quantum-safe validation.",
  },
  {
    icon: Package,
    title: "Supply Chain Tracking",
    description: "Immutable, verified tracking of goods across Web2 and Web3 systems.",
  },
  {
    icon: Brain,
    title: "AI-to-Blockchain Outputs",
    description: "Publish AI model outputs on-chain with cryptographic proof of computation.",
  },
  {
    icon: Gamepad2,
    title: "Gaming & Real-Time Worlds",
    description: "Low-latency data delivery for on-chain games and metaverse applications.",
  },
]

export default function UseCases() {
  return (
    <section className="relative py-24 px-6 bg-gradient-to-b from-card/30 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Use Cases</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Powering the next generation of Web3 applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon
            return (
              <div
                key={index}
                className="group p-6 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300"
              >
                <div className="mb-4 p-3 w-fit rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold mb-2 text-lg">{useCase.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{useCase.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
