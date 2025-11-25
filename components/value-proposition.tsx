"use client"

import { Shield, Network, LinkIcon, Zap } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Post-Quantum Security",
    description: "Your data feeds are secured with NIST-approved PQ cryptography.",
  },
  {
    icon: Network,
    title: "Multi-Chain Oracle Network",
    description: "Deliver trustworthy data to any blockchain with sub-second latency.",
  },
  {
    icon: LinkIcon,
    title: "Interoperability Layer",
    description: "Connect Web2 APIs, AI models, and enterprise systems to Web3 seamlessly.",
  },
  {
    icon: Zap,
    title: "Quantum-Ready Architecture",
    description: "Future-compatible with QKD and quantum random number generation.",
  },
]

export default function ValueProposition() {
  return (
    <section id="features" className="relative py-24 px-6 bg-gradient-to-b from-background to-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Enterprise-Grade Features</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Built for security, scalability, and seamless integration
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group p-6 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
              >
                <div className="mb-4 p-3 w-fit rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2 text-lg">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
