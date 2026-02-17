'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const trendingNews = [
  {
    id: 1,
    title: 'The Architecture of Meaning: How We Build Purpose',
    excerpt: 'In an age of unprecedented choice, the question of what matters has become both more urgent and more elusive.',
    category: 'Philosophy',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop',
    date: 'Feb 15, 2026',
    views: '12.4K',
  },
  {
    id: 2,
    title: 'Reflections on Stillness: A Poetry Collection',
    excerpt: 'Verses that speak to the heart of our collective uncertainty and hope.',
    category: 'Poetry',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&h=400&fit=crop',
    date: 'Feb 14, 2026',
    views: '8.7K',
  },
  {
    id: 3,
    title: 'The Return of the Long Read in the Age of TikTok',
    excerpt: 'Why deep reading is making a comeback among younger generations.',
    category: 'Culture',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop',
    date: 'Feb 13, 2026',
    views: '7.2K',
  },
]

const latestNews = [
  {
    id: 4,
    title: 'Digital Mindfulness: Finding Peace in the Age of Distraction',
    excerpt: 'How to cultivate awareness when every app wants your attention.',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&h=400&fit=crop',
    date: 'Feb 16, 2026',
    views: '3.2K',
  },
  {
    id: 5,
    title: 'The Art of Conversation: Rediscovering Deep Dialogue',
    excerpt: 'In an era of shallow communication, meaningful conversation is revolutionary.',
    category: 'Culture',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop',
    date: 'Feb 16, 2026',
    views: '2.8K',
  },
  {
    id: 6,
    title: 'Stoic Wisdom for Modern Anxiety',
    excerpt: 'Ancient techniques for managing overwhelming stress.',
    category: 'Philosophy',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop',
    date: 'Feb 15, 2026',
    views: '5.1K',
  },
]

const popularNews = [
  {
    id: 7,
    title: 'Why Poetry Matters More Than Ever',
    excerpt: 'In times of crisis, poetry becomes essential for processing human experience.',
    category: 'Literature',
    image: 'https://images.unsplash.com/photo-1474932430478-367dbb6832c1?w=600&h=400&fit=crop',
    date: 'Feb 10, 2026',
    views: '45.2K',
  },
  {
    id: 8,
    title: 'The Philosophy of Slow Living',
    excerpt: 'Embracing intentionality in a world obsessed with speed and productivity.',
    category: 'Lifestyle',
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&h=400&fit=crop',
    date: 'Feb 8, 2026',
    views: '38.7K',
  },
  {
    id: 9,
    title: 'Understanding Modern Existentialism',
    excerpt: 'Making sense of meaning in a post-religious, hyper-connected world.',
    category: 'Philosophy',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&h=400&fit=crop',
    date: 'Feb 5, 2026',
    views: '32.1K',
  },
]

export default function TrendingNews() {
  const [activeTab, setActiveTab] = useState<'trending' | 'latest' | 'popular'>('trending')

  const getContent = () => {
    switch (activeTab) {
      case 'trending':
        return trendingNews
      case 'latest':
        return latestNews
      case 'popular':
        return popularNews
    }
  }

  const currentContent = getContent()

  return (
    <div>
      {/* Section Header with Tabs */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-display text-2xl font-bold uppercase tracking-wider">
          <span className="bg-gradient-to-r from-primary-600 to-accent-purple bg-clip-text text-transparent">
            {activeTab === 'trending' ? 'Trending' : activeTab === 'latest' ? 'Latest' : 'Popular'}
          </span>
        </h2>
        <div className="flex gap-2">
          {(['trending', 'latest', 'popular'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 font-ui text-sm font-semibold uppercase tracking-wider transition-all rounded-full ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg'
                  : 'bg-transparent text-gray-600 hover:bg-primary-50 hover:text-primary-600'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Main Featured Article */}
      <div className="grid md:grid-cols-3 gap-6 mb-6">
        <div className="md:col-span-2">
          <Link href={`/read/${currentContent[0].id}`} className="group block">
            <div className="relative h-[300px] md:h-[350px] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <Image
                src={currentContent[0].image}
                alt={currentContent[0].title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-primary-500 to-primary-600 text-white text-xs font-ui font-bold uppercase tracking-wider rounded-full mb-3 shadow-lg">
                  {currentContent[0].category}
                </span>
                <h3 className="font-display text-xl md:text-2xl text-white mb-2 leading-tight group-hover:text-primary-300 transition-colors">
                  {currentContent[0].title}
                </h3>
                <p className="text-white/70 text-sm mb-3 line-clamp-2">
                  {currentContent[0].excerpt}
                </p>
                <div className="flex items-center gap-3 text-xs font-ui text-white/50">
                  <span>{currentContent[0].date}</span>
                  <span>·</span>
                  <span>{currentContent[0].views} views</span>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Side Articles - Vertical Stack */}
        <div className="flex flex-col gap-4">
          {currentContent.slice(1).map((article) => (
            <Link key={article.id} href={`/read/${article.id}`} className="group flex-1">
              <div className="relative h-[140px] md:h-[165px] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="inline-block px-3 py-1 bg-accent-orange text-white text-xs font-ui font-bold uppercase tracking-wider rounded-full mb-2 shadow-md">
                    {article.category}
                  </span>
                  <h4 className="font-display text-sm md:text-base text-white leading-tight line-clamp-2 group-hover:text-primary-300 transition-colors">
                    {article.title}
                  </h4>
                  <div className="flex items-center gap-2 text-xs font-ui text-white/50 mt-1">
                    <span>{article.date}</span>
                    <span>·</span>
                    <span>{article.views} views</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Additional Articles Grid for the active tab */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          {
            id: 10 + (activeTab === 'trending' ? 0 : activeTab === 'latest' ? 3 : 6),
            title: 'The Wisdom of Insecurity',
            excerpt: 'Learning to be comfortable with uncertainty.',
            category: 'Philosophy',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop',
            date: 'Feb 12, 2026',
            views: '6.8K',
          },
          {
            id: 11 + (activeTab === 'trending' ? 0 : activeTab === 'latest' ? 3 : 6),
            title: 'Poetry as Resistance',
            excerpt: 'How verse can challenge oppressive systems.',
            category: 'Poetry',
            image: 'https://images.unsplash.com/photo-1474932430478-367dbb6832c1?w=400&h=250&fit=crop',
            date: 'Feb 11, 2026',
            views: '5.4K',
          },
          {
            id: 12 + (activeTab === 'trending' ? 0 : activeTab === 'latest' ? 3 : 6),
            title: 'Mindfulness in Motion',
            excerpt: 'Bringing meditation into everyday activities.',
            category: 'Wellness',
            image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&h=250&fit=crop',
            date: 'Feb 10, 2026',
            views: '4.9K',
          },
        ].map((article) => (
          <Link key={article.id} href={`/read/${article.id}`} className="group">
            <div className="card !p-0 overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="text-xs font-ui text-accent-purple uppercase tracking-wider mb-1 block font-bold">
                    {article.category}
                  </span>
                  <h5 className="font-display text-sm text-white leading-tight group-hover:text-primary-300 transition-colors line-clamp-2">
                    {article.title}
                  </h5>
                  <div className="flex items-center gap-2 text-xs font-ui text-white/60 mt-1">
                    <span>{article.date}</span>
                    <span>·</span>
                    <span>{article.views} views</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
