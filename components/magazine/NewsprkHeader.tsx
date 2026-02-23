'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function NewsprkHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      {/* Top Bar */}
      <div className="bg-charcoal text-cream-light text-xs font-ui py-2">
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span>Monday, February 16, 2026</span>
            <span className="hidden sm:inline">|</span>
            <div className="hidden sm:flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span>New York, 15°C</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <select className="bg-transparent border-none text-xs cursor-pointer focus:outline-none">
              <option value="en">English</option>
              <option value="es">Español</option>
              <option value="fr">Français</option>
            </select>
            <div className="flex gap-3">
              <a href="#" className="hover:text-green transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </a>
              <a href="#" className="hover:text-green transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="#" className="hover:text-green transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-cream-light">
        <div className="container py-6">
          <div className="flex justify-between items-center">
            <Link href="/" className="font-display text-4xl md:text-5xl font-bold tracking-wider">
              <span className="text-red-600">UN</span><span className="text-charcoal">Popular</span>
            </Link>
            <div className="hidden md:block w-32 h-10 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-medium font-ui">
              Advertisement
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="bg-charcoal">
          <div className="container">
            <div className="flex items-center justify-between">
              {/* Mobile menu button */}
              <button
                className="md:hidden p-3 text-cream-light"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>

              {/* Main menu */}
              <ul className={`md:flex items-center gap-0 md:gap-1 ${isMenuOpen ? 'block' : 'hidden'} md:block flex-1`}>
                {[
                  { name: 'Home', href: '/' },
                  { name: 'Breaking', href: '/breaking' },
                  { name: 'Philosophy', href: '/category/philosophy' },
                  { name: 'Politics', href: '/category/politics' },
                  { name: 'Technology', href: '/category/technology' },
                  { name: 'Finance', href: '/category/finance' },
                  { name: 'Health', href: '/category/health' },
                  { name: 'Sport', href: '/category/sport' },
                  { name: 'Lit & Culture', href: '/category/literature-culture' },
                  { name: 'Interviews', href: '/category/interviews' },
                  { name: 'Essays', href: '/category/essays' },
                  { name: 'Issues', href: '/issues' },
                  { name: 'About', href: '/about' },
                  { name: 'Subscribe', href: '/subscribe', highlight: true },
                ].map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={`block px-4 py-4 font-ui text-sm font-medium uppercase tracking-wider transition-colors ${
                        item.highlight
                          ? 'bg-gradient-to-r from-accent-orange to-accent-orange-dark text-white hover:from-accent-orange-dark hover:to-accent-coral'
                          : 'text-cream-light hover:bg-green-dark'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Search */}
              <button className="hidden md:block p-3 text-cream-light hover:text-green transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}
