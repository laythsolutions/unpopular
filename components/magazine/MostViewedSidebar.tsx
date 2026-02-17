'use client'

import Link from 'next/link'
import Image from 'next/image'

const mostViewed = [
  {
    id: 1,
    title: 'The Wisdom of Insecurity',
    category: 'Philosophy',
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=300&h=200&fit=crop',
    views: '12.4K',
    date: 'Feb 11, 2026',
  },
  {
    id: 2,
    title: 'Five Poems for Uncertain Times',
    category: 'Poetry',
    image: 'https://images.unsplash.com/photo-1474932430478-367dbb6832c1?w=300&h=200&fit=crop',
    views: '8.7K',
    date: 'Feb 10, 2026',
  },
  {
    id: 3,
    title: 'The Art of Doing Nothing',
    category: 'Culture',
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=200&fit=crop',
    views: '7.2K',
    date: 'Feb 9, 2026',
  },
  {
    id: 4,
    title: 'Digital Minimalism: A Guide',
    category: 'Lifestyle',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=300&h=200&fit=crop',
    views: '6.5K',
    date: 'Feb 8, 2026',
  },
  {
    id: 5,
    title: 'Reading as an Act of Resistance',
    category: 'Literature',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=300&h=200&fit=crop',
    views: '5.9K',
    date: 'Feb 7, 2026',
  },
]

const socialStats = [
  { platform: 'Facebook', followers: '34,456', label: 'Fans', icon: 'f' },
  { platform: 'Twitter', followers: '34,456', label: 'Followers', icon: '𝕏' },
  { platform: 'YouTube', followers: '34,456', label: 'Subscribers', icon: '▶' },
  { platform: 'Instagram', followers: '34,456', label: 'Followers', icon: '📷' },
]

export default function MostViewedSidebar() {
  return (
    <aside className="space-y-6">
      {/* Follow Us */}
      <div className="card">
        <h4 className="font-display text-lg mb-4 pb-2 border-b" style={{ borderColor: '#e0ddd6' }}>
          Follow Us
        </h4>
        <div className="space-y-3">
          {socialStats.map((social) => (
            <a
              key={social.platform}
              href="#"
              className="flex items-center justify-between p-3 bg-charcoal text-cream-light rounded hover:bg-green-dark transition-colors group"
            >
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 flex items-center justify-center bg-cream-light/10 rounded">
                  {social.icon}
                </span>
                <div>
                  <div className="font-ui text-xs opacity-70">{social.label}</div>
                  <div className="font-ui text-lg font-bold">{social.followers}</div>
                </div>
              </div>
              <svg className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          ))}
        </div>
      </div>

      {/* Most View */}
      <div className="card">
        <h4 className="font-display text-lg mb-4 pb-2 border-b" style={{ borderColor: '#e0ddd6' }}>
          Most View
        </h4>
        <div className="space-y-4">
          {mostViewed.map((article, index) => (
            <Link key={article.id} href={`/read/${article.id}`} className="flex gap-3 group">
              <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-green text-cream-light font-display text-lg font-bold rounded-full">
                {index + 1}
              </span>
              <div className="flex-1 min-w-0">
                <h5 className="font-display text-sm leading-tight group-hover:text-green transition-colors line-clamp-2 mb-1">
                  {article.title}
                </h5>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-ui text-gray-medium uppercase">{article.category}</span>
                  <span className="text-xs text-gray-light">·</span>
                  <span className="text-xs text-gray-light">{article.views} views</span>
                </div>
              </div>
              <div className="flex-shrink-0 w-16 h-16 relative rounded overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="card bg-charcoal !bg-charcoal text-cream-light">
        <h4 className="font-display text-lg mb-2">
          Newsletter
        </h4>
        <p className="text-sm text-cream-light/70 mb-4">
          Your email address will not be published. Required fields are marked.
        </p>
        <form className="space-y-3">
          <input
            type="email"
            placeholder="Your email"
            className="w-full px-4 py-3 rounded bg-cream-light/10 border border-cream-light/20 text-cream-light placeholder-cream-light/50 font-ui text-sm focus:outline-none focus:border-green"
            required
          />
          <button
            type="submit"
            className="w-full py-3 px-4 bg-green text-cream-light font-ui text-sm font-semibold uppercase tracking-wider rounded hover:bg-green-dark transition-colors"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-3 text-xs text-cream-light/50 font-ui">
          We hate spam as much as you do
        </p>
      </div>

      {/* Categories */}
      <div className="card">
        <h4 className="font-display text-lg mb-4 pb-2 border-b" style={{ borderColor: '#e0ddd6' }}>
          Categories
        </h4>
        <div className="space-y-2">
          {[
            { name: 'Philosophy', count: 142 },
            { name: 'Poetry', count: 89 },
            { name: 'Culture', count: 67 },
            { name: 'Interviews', count: 34 },
            { name: 'Essays', count: 56 },
            { name: 'Reviews', count: 28 },
          ].map((cat) => (
            <Link
              key={cat.name}
              href={`/category/${cat.name.toLowerCase()}`}
              className="flex items-center justify-between py-2 px-3 rounded hover:bg-cream-light transition-colors group"
            >
              <span className="font-ui text-sm font-medium group-hover:text-green transition-colors">
                {cat.name}
              </span>
              <span className="font-ui text-xs text-gray-medium bg-cream-light px-2 py-1 rounded">
                {cat.count}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  )
}
