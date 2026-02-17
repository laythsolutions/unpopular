'use client'

import Link from 'next/link'
import Image from 'next/image'

const popularPosts = [
  { id: 1, title: '10 Ancient Stoic Practices for Modern Anxiety', views: '12.4K', category: 'Philosophy' },
  { id: 2, title: 'Why We Need Poetry More Than Ever', views: '8.7K', category: 'Poetry' },
  { id: 3, title: 'The Art of Doing Nothing', views: '7.2K', category: 'Culture' },
  { id: 4, title: 'Digital Minimalism: A Guide', views: '6.5K', category: 'Lifestyle' },
  { id: 5, title: 'Reading as an Act of Resistance', views: '5.9K', category: 'Literature' },
]

const categories = [
  { name: 'Philosophy', count: 142, color: 'bg-green' },
  { name: 'Poetry', count: 89, color: 'bg-amber-700' },
  { name: 'Culture', count: 67, color: 'bg-blue-700' },
  { name: 'Interviews', count: 34, color: 'bg-red-700' },
  { name: 'Essays', count: 56, color: 'bg-purple-700' },
  { name: 'Reviews', count: 28, color: 'bg-orange-700' },
]

const tags = [
  'stoicism', 'mindfulness', 'poetry', 'ethics', 'existentialism',
  'creativity', 'literature', 'philosophy', 'meditation', 'aesthetics',
  'consciousness', 'modern-life', 'wisdom', 'reflection', 'meaning',
]

export default function Sidebar() {
  return (
    <aside className="space-y-8">
      {/* Social Media */}
      <div className="card">
        <h4 className="font-display text-lg mb-4 pb-2 border-b" style={{ borderColor: '#e0ddd6' }}>
          Follow Us
        </h4>
        <div className="flex gap-2">
          {['Twitter', 'Instagram', 'Facebook', 'LinkedIn'].map((social) => (
            <a
              key={social}
              href="#"
              className="flex-1 py-2 px-3 text-center font-ui text-xs font-semibold uppercase tracking-wider bg-charcoal text-cream-light rounded hover:bg-green-dark transition-colors"
            >
              {social.slice(0, 2)}
            </a>
          ))}
        </div>
      </div>

      {/* Popular Posts */}
      <div className="card">
        <h4 className="font-display text-lg mb-4 pb-2 border-b" style={{ borderColor: '#e0ddd6' }}>
          Popular Posts
        </h4>
        <ul className="space-y-4">
          {popularPosts.map((post, index) => (
            <li key={post.id}>
              <Link href={`/read/${post.id}`} className="group flex gap-3">
                <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-cream-light text-charcoal font-display text-lg font-bold rounded-full">
                  {index + 1}
                </span>
                <div className="flex-1 min-w-0">
                  <h5 className="font-display text-sm leading-tight group-hover:text-green transition-colors line-clamp-2">
                    {post.title}
                  </h5>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs font-ui text-gray-medium uppercase">{post.category}</span>
                    <span className="text-xs text-gray-light">·</span>
                    <span className="text-xs text-gray-light">{post.views} views</span>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Categories */}
      <div className="card">
        <h4 className="font-display text-lg mb-4 pb-2 border-b" style={{ borderColor: '#e0ddd6' }}>
          Categories
        </h4>
        <ul className="space-y-2">
          {categories.map((cat) => (
            <li key={cat.name}>
              <Link
                href={`/category/${cat.name.toLowerCase()}`}
                className="flex items-center justify-between py-2 px-3 rounded hover:bg-cream-light transition-colors group"
              >
                <span className="font-ui text-sm font-medium group-hover:text-green transition-colors">
                  {cat.name}
                </span>
                <span className="font-ui text-xs text-gray-medium">{cat.count}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Tags */}
      <div className="card">
        <h4 className="font-display text-lg mb-4 pb-2 border-b" style={{ borderColor: '#e0ddd6' }}>
          Popular Tags
        </h4>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Link
              key={tag}
              href={`/tag/${tag}`}
              className="text-xs font-ui px-3 py-1.5 bg-cream-light text-charcoal rounded-full hover:bg-green hover:text-cream-light transition-colors"
            >
              #{tag}
            </Link>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="card bg-green !bg-green text-cream-light">
        <h4 className="font-display text-lg mb-2">
          Subscribe to Unlettrd
        </h4>
        <p className="text-sm text-cream-light/80 mb-4">
          Weekly philosophy and poetry delivered to your inbox.
        </p>
        <form className="space-y-3">
          <input
            type="email"
            placeholder="Your email"
            className="w-full px-4 py-2 rounded bg-cream-light/10 border border-cream-light/30 text-cream-light placeholder-cream-light/50 font-ui text-sm focus:outline-none focus:border-cream-light"
            required
          />
          <button
            type="submit"
            className="w-full py-2 px-4 bg-cream-light text-green font-ui text-sm font-semibold uppercase tracking-wider rounded hover:bg-cream-light/90 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </aside>
  )
}
