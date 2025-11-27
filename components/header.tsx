"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, Globe } from "lucide-react"
import { usePathname } from "next/navigation"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)

  // Only show navigation on non-landing pages or if we want a consistent header
  // The landing page in Image 3 has "TechCommunity" and "GitHub"
  // The interior pages (Image 1, 2) have "TechCommunity", "Communities", "Events", "Mexico"
  
  useEffect(() => {
    setMounted(true)
  }, [])

  const isLanding = pathname === "/"

  // Prevent hydration mismatch by not rendering conditional content until mounted
  if (!mounted) {
    return (
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
           <Link href="/" className="flex items-center gap-2 font-bold text-xl text-foreground">
            <Globe size={24} />
            <span>TechCommunity</span>
          </Link>
        </nav>
      </header>
    )
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-foreground">
          <Globe size={24} />
          <span>TechCommunity</span>
        </Link>

        {/* Desktop Navigation */}
        {!isLanding && (
          <div className="hidden md:flex gap-8 items-center">
            <Link 
              href="/communities" 
              className={`text-sm font-medium transition-colors ${pathname.startsWith('/communities') ? 'text-foreground' : 'text-foreground/60 hover:text-foreground'}`}
            >
              Communities
            </Link>
            <Link 
              href="/events" 
              className={`text-sm font-medium transition-colors ${pathname.startsWith('/events') ? 'text-foreground' : 'text-foreground/60 hover:text-foreground'}`}
            >
              Events
            </Link>
            <Link 
              href="/sponsors" 
              className={`text-sm font-medium transition-colors ${pathname.startsWith('/sponsors') ? 'text-foreground' : 'text-foreground/60 hover:text-foreground'}`}
            >
              Sponsors
            </Link>
          </div>
        )}

        {/* Right Side Actions */}
        <div className="hidden md:flex items-center gap-4">
          {!isLanding ? (
            <button className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-border hover:bg-muted transition-colors text-sm font-medium">
              <Globe size={16} />
              Mexico
            </button>
          ) : (
             <a
              href="https://github.com/aileenvl/mexico-tech-community-website"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-foreground transition-colors text-sm font-medium"
            >
              GitHub
            </a>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b border-border md:hidden p-4 animate-in slide-in-from-top-5">
            <div className="flex flex-col gap-4">
              <Link
                href="/communities"
                className="text-foreground/70 hover:text-foreground transition-colors p-2"
                onClick={() => setIsOpen(false)}
              >
                Communities
              </Link>
              <Link
                href="/events"
                className="text-foreground/70 hover:text-foreground transition-colors p-2"
                onClick={() => setIsOpen(false)}
              >
                Events
              </Link>
              <Link
                href="/sponsors"
                className="text-foreground/70 hover:text-foreground transition-colors p-2"
                onClick={() => setIsOpen(false)}
              >
                Sponsors
              </Link>
               <a
                href="https://github.com/aileenvl/mexico-tech-community-website"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-foreground transition-colors p-2"
                onClick={() => setIsOpen(false)}
              >
                GitHub
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
