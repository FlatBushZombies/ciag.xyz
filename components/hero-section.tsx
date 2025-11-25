"use client"

import { Button } from "@/components/ui/button"
import { ChevronRight, Zap } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 px-6 quantum-grid overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-40 left-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30">
                <Zap className="w-4 h-4 text-primary" />
                <span className="text-xs font-medium text-primary">Quantum-Ready Infrastructure</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold leading-tight text-balance">
                Quantum-Resilient Oracle Infrastructure
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                The next-generation hybrid oracle network secured by post-quantum cryptography and built for the future
                quantum internet.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="bg-foreground text-background hover:bg-muted h-12 px-8">
                Get Early Access
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/30 hover:bg-primary/10 h-12 px-8 bg-transparent"
              >
                View Documentation
              </Button>
            </div>

            <div className="flex items-center gap-6 pt-8 border-t border-border/30">
              <div>
                <p className="text-2xl font-bold">50+</p>
                <p className="text-sm text-muted-foreground">Enterprise Partners</p>
              </div>
              <div>
                <p className="text-2xl font-bold">&lt;100ms</p>
                <p className="text-sm text-muted-foreground">Data Latency</p>
              </div>
              <div>
                <p className="text-2xl font-bold">99.9%</p>
                <p className="text-sm text-muted-foreground">Uptime SLA</p>
              </div>
            </div>
          </div>

          {/* 3D-like visualization */}
          <div className="relative h-96 md:h-[500px] hidden lg:flex items-center justify-center">
            <div className="relative w-full h-full">
              {/* Outer container with perspective */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-80 h-80 md:w-96 md:h-96 transform -rotate-12 perspective">
                  {/* Main card */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl backdrop-blur-sm border border-primary/30 shadow-2xl transform rotate-3 transition-transform hover:rotate-6">
                    <div className="p-8 space-y-6">
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-primary"></div>
                          <span className="text-sm font-medium">Data Pipeline</span>
                        </div>
                        <div className="h-2 bg-border/40 rounded-full overflow-hidden">
                          <div className="h-full w-3/4 bg-gradient-to-r from-primary to-accent rounded-full animate-pulse"></div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        {["Ingestion", "Validation", "Signing", "Publishing"].map((stage, i) => (
                          <div key={i} className="p-3 rounded-lg bg-background/50 border border-border/50">
                            <p className="text-xs text-muted-foreground">{stage}</p>
                          </div>
                        ))}
                      </div>

                      <div className="flex gap-2 pt-4">
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                        <div
                          className="w-2 h-2 rounded-full bg-secondary animate-pulse"
                          style={{ animationDelay: "0.3s" }}
                        ></div>
                        <div
                          className="w-2 h-2 rounded-full bg-accent animate-pulse"
                          style={{ animationDelay: "0.6s" }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  {/* Secondary card */}
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-2xl backdrop-blur-sm border border-secondary/30 transform -rotate-6 translate-y-8 translate-x-8 opacity-50"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
