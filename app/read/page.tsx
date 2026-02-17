import NewsprkHeader from '@/components/magazine/NewsprkHeader'
import BreakingNews from '@/components/magazine/BreakingNews'
import ScrollToTop from '@/components/magazine/ScrollToTop'
import ArticleGrid from '@/components/article/ArticleGrid'
import Link from 'next/link'

const articles = [
  {
    id: 1,
    title: 'The Architecture of Meaning: How We Build Purpose',
    excerpt: 'In an age of unprecedented choice, the question of what matters has become both more urgent and more elusive.',
    category: 'Philosophy',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=500&fit=crop',
    date: 'Feb 15, 2026',
    author: 'Sarah Chen',
    readTime: '8 min read',
    badge: 'The Moment',
    badgeColor: 'primary',
  },
  {
    id: 2,
    title: 'Reflections on Stillness: A Poetry Collection',
    excerpt: 'Verses that speak to the heart of our collective uncertainty and hope.',
    category: 'Poetry',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=500&fit=crop',
    date: 'Feb 14, 2026',
    author: 'Marcus Webb',
    readTime: '5 min read',
    badge: 'The Mirror',
    badgeColor: 'orange',
  },
  {
    id: 3,
    title: 'The Return of the Long Read in the Age of TikTok',
    excerpt: 'Why deep reading is making a comeback among younger generations.',
    category: 'Culture',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=500&fit=crop',
    date: 'Feb 13, 2026',
    author: 'Elena Rodriguez',
    readTime: '6 min read',
    badge: 'The Current',
    badgeColor: 'purple',
  },
  {
    id: 4,
    title: 'Stoic Wisdom for Modern Anxiety',
    excerpt: 'Ancient techniques for managing overwhelming stress.',
    category: 'Philosophy',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=500&fit=crop',
    date: 'Feb 12, 2026',
    author: 'David Park',
    readTime: '7 min read',
    badge: 'The Stand',
    badgeColor: 'red',
  },
  {
    id: 5,
    title: 'Why Poetry Matters More Than Ever',
    excerpt: 'In times of crisis, poetry becomes essential for processing human experience.',
    category: 'Literature',
    image: 'https://images.unsplash.com/photo-1474932430478-367dbb6832c1?w=800&h=500&fit=crop',
    date: 'Feb 11, 2026',
    author: 'Sarah Chen',
    readTime: '6 min read',
    badge: 'The Moment',
    badgeColor: 'primary',
  },
  {
    id: 6,
    title: 'The Philosophy of Slow Living',
    excerpt: 'Embracing intentionality in a world obsessed with speed and productivity.',
    category: 'Lifestyle',
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&h=500&fit=crop',
    date: 'Feb 10, 2026',
    author: 'Marcus Webb',
    readTime: '9 min read',
    badge: 'The Current',
    badgeColor: 'purple',
  },
]

const badgeColors = {
  primary: 'from-primary-500 to-primary-600',
  orange: 'from-accent-orange to-accent-orange-dark',
  purple: 'from-accent-purple to-accent-purple-dark',
  red: 'from-brand-red to-brand-red-dark',
}

export default function ReadPage() {
  return (
    <>
      <NewsprkHeader />
      <BreakingNews />
      <ScrollToTop />

      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-accent-purple text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-orange rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
          </div>
          <div className="container container--narrow relative z-10">
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-xs font-ui font-bold uppercase tracking-widest mb-6">
              Explore Ideas
            </span>
            <h1 className="font-display text-5xl md:text-6xl mb-6 font-bold">
              Read
            </h1>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              Philosophy and poetry on current events, historical parallels, and cultural trends.
            </p>
          </div>
        </section>

        {/* Filter Buttons */}
        <section className="py-8 bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
          <div className="container">
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/read"
                className="px-6 py-2.5 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-ui text-sm font-bold uppercase tracking-wider rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all"
              >
                All
              </Link>
              <Link
                href="/read?category=moment"
                className="px-6 py-2.5 bg-white border-2 border-primary-500 text-primary-600 font-ui text-sm font-bold uppercase tracking-wider rounded-full hover:bg-primary-50 transition-all"
              >
                The Moment
              </Link>
              <Link
                href="/read?category=mirror"
                className="px-6 py-2.5 bg-white border-2 border-primary-500 text-primary-600 font-ui text-sm font-bold uppercase tracking-wider rounded-full hover:bg-primary-50 transition-all"
              >
                The Mirror
              </Link>
              <Link
                href="/read?category=current"
                className="px-6 py-2.5 bg-white border-2 border-primary-500 text-primary-600 font-ui text-sm font-bold uppercase tracking-wider rounded-full hover:bg-primary-50 transition-all"
              >
                The Current
              </Link>
              <Link
                href="/read?category=stand"
                className="px-6 py-2.5 bg-white border-2 border-primary-500 text-primary-600 font-ui text-sm font-bold uppercase tracking-wider rounded-full hover:bg-primary-50 transition-all"
              >
                The Stand
              </Link>
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-16">
          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <Link
                  key={article.id}
                  href={`/read/${article.id}`}
                  className="group"
                >
                  <div className="card !p-0 !overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                    {/* Image */}
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                        style={{ backgroundImage: `url(${article.image})` }}
                      ></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

                      {/* Badge */}
                      <div className="absolute top-4 left-4">
                        <span className={`px-4 py-1.5 bg-gradient-to-r ${badgeColors[article.badgeColor as keyof typeof badgeColors]} text-white text-xs font-ui font-bold uppercase tracking-wider rounded-full shadow-lg`}>
                          {article.badge}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <span className="text-xs font-ui text-accent-orange uppercase tracking-wider mb-2 block font-bold">
                          {article.category}
                        </span>
                        <h3 className="font-display text-lg md:text-xl text-white leading-tight mb-2 group-hover:text-primary-300 transition-colors line-clamp-2">
                          {article.title}
                        </h3>
                        <p className="text-white/70 text-sm mb-3 line-clamp-2">
                          {article.excerpt}
                        </p>
                        <div className="flex items-center gap-3 text-xs font-ui text-white/50">
                          <span>{article.date}</span>
                          <span>·</span>
                          <span>{article.author}</span>
                          <span>·</span>
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Load More */}
            <div className="mt-12 text-center">
              <button className="px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-ui font-bold uppercase tracking-wider rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                Load More Articles
              </button>
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 bg-gradient-to-r from-primary-50 to-accent-purple/50">
          <div className="container">
            <div className="card !bg-white/80 backdrop-blur-sm !border-primary-200 shadow-2xl !p-10 max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-full text-xs font-ui font-bold uppercase tracking-wider mb-4 shadow-lg">
                Stay Updated
              </span>
              <h2 className="font-display text-3xl md:text-4xl mb-4">
                Never Miss an Article
              </h2>
              <p className="text-gray-600 mb-6">
                Get weekly philosophy and poetry delivered straight to your inbox. No spam, just depth.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-5 py-3 border-2 border-primary-300 rounded-full focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-ui font-bold uppercase tracking-wider rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        {/* Main Footer Content */}
        <div className="container py-16">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* About */}
            <div className="md:col-span-1">
              <Link href="/" className="font-display text-3xl font-bold tracking-wider mb-4 block">
                <span className="text-brand-red">UN</span><span className="text-white">Popular</span>
              </Link>
              <p className="text-gray-400 text-sm mb-4">
                Philosophy and poetry for the present moment.
              </p>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-primary-500 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-accent-purple transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-accent-orange transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-display text-lg font-bold mb-4 text-primary-400">Explore</h4>
              <ul className="space-y-2">
                <li><Link href="/read" className="text-gray-400 hover:text-white transition-colors">Read</Link></li>
                <li><Link href="/issues" className="text-gray-400 hover:text-white transition-colors">Issues</Link></li>
                <li><Link href="/shop" className="text-gray-400 hover:text-white transition-colors">Shop</Link></li>
                <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h4 className="font-display text-lg font-bold mb-4 text-accent-orange">Categories</h4>
              <ul className="space-y-2">
                <li><Link href="/read?category=philosophy" className="text-gray-400 hover:text-white transition-colors">Philosophy</Link></li>
                <li><Link href="/read?category=poetry" className="text-gray-400 hover:text-white transition-colors">Poetry</Link></li>
                <li><Link href="/read?category=culture" className="text-gray-400 hover:text-white transition-colors">Culture</Link></li>
                <li><Link href="/read?category=lifestyle" className="text-gray-400 hover:text-white transition-colors">Lifestyle</Link></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-display text-lg font-bold mb-4 text-accent-purple">Newsletter</h4>
              <p className="text-gray-400 text-sm mb-3">Weekly philosophy and poetry</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Email"
                  className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-sm focus:outline-none focus:border-primary-500"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg font-ui text-xs font-bold uppercase hover:shadow-lg transition-all">
                  Join
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2026 Unlettrd. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-gray-500 hover:text-white transition-colors">Privacy</Link>
              <Link href="/terms" className="text-gray-500 hover:text-white transition-colors">Terms</Link>
              <Link href="/contact" className="text-gray-500 hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
