'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const breakingNews = [
  { id: 1, text: 'The ethics of AI consciousness: Are we creating moral subjects?', category: 'Philosophy' },
  { id: 2, text: 'Why regulation always lags behind technological disruption', category: 'Technology' },
  { id: 3, text: 'The invisible tax: How inflation steals from the poor silently', category: 'Finance' },
  { id: 4, text: 'Medical consensus isn\'t truth: What we got wrong about diet', category: 'Health' },
  { id: 5, text: 'The commodification of athletics: When sport became content', category: 'Sport' },
  { id: 6, text: 'Why nobody reads anymore: The death of cultural literacy', category: 'Lit & Culture' },
  { id: 7, text: 'Power doesn\'t corrupt. Power reveals.', category: 'Politics' },
]

export default function BreakingNews() {
  // Initialize with -1 to show nothing on server, then set to 0 on client
  const [currentIndex, setCurrentIndex] = useState(-1)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    setCurrentIndex(0)

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % breakingNews.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  // Don't render until mounted on client to prevent hydration mismatch
  if (!isMounted || currentIndex === -1) {
    return (
      <div className="bg-charcoal text-cream-light py-2 overflow-hidden">
        <div className="container flex items-center gap-4">
          <span className="text-xs font-ui font-bold uppercase tracking-wider whitespace-nowrap text-brand-red">
            Breaking
          </span>
          <div className="h-4 w-px bg-cream-light/30"></div>
          <div className="flex-1 overflow-hidden">
            <div className="flex items-center gap-3">
              <span className="text-xs font-ui text-green uppercase tracking-wider">
                {breakingNews[0].category}
              </span>
              <span className="text-sm truncate">
                {breakingNews[0].text}
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const news = breakingNews[currentIndex]

  return (
    <div className="bg-charcoal text-cream-light py-2 overflow-hidden">
      <div className="container flex items-center gap-4">
        <Link href="/read" className="text-xs font-ui font-bold uppercase tracking-wider whitespace-nowrap text-brand-red hover:text-brand-red-light transition-colors">
          Breaking
        </Link>
        <div className="h-4 w-px bg-cream-light/30"></div>
        <div className="flex-1 overflow-hidden">
          <Link
            href={`/read/${news.id}`}
            className="flex items-center gap-3 animate-in fade-in slide-in-from-right-4 duration-500"
            key={news.id}
          >
            <span className="text-xs font-ui text-green uppercase tracking-wider">
              {news.category}
            </span>
            <span className="text-sm truncate hover:text-primary-300 transition-colors">
              {news.text}
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}
