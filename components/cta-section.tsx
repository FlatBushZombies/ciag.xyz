"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function CTASection() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute -bottom-40 left-40 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Be Part of the Next Evolution of Oracle Infrastructure</h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          Join leading companies building the future of decentralized data infrastructure
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-foreground text-background hover:bg-muted h-12 px-8">
            Join the Waitlist
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary/30 hover:bg-primary/10 h-12 px-8 bg-transparent"
          >
            Launch Developer Docs
          </Button>
        </div>
      </div>
    </section>
  )
}
