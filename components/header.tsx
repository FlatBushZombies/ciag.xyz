"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="fixed w-full top-0 z-50 border-b border-border/40 backdrop-blur-md bg-background/80">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <span className="text-xs font-bold text-foreground">◆</span>
          </div>
          <span className="font-bold text-lg">CIAG.xyz</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="#features" className="text-sm hover:text-accent transition-colors">
            Features
          </Link>
          <Link href="#how-it-works" className="text-sm hover:text-accent transition-colors">
            How It Works
          </Link>
          <Link href="#technology" className="text-sm hover:text-accent transition-colors">
            Technology
          </Link>
          <Link href="#roadmap" className="text-sm hover:text-accent transition-colors">
            Roadmap
          </Link>
        </nav>

        <Button className="bg-foreground text-background hover:bg-muted">Get Early Access</Button>
      </div>
    </header>
  )
}
