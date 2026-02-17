import NewsprkHeader from '@/components/magazine/NewsprkHeader'
import BreakingNews from '@/components/magazine/BreakingNews'
import ScrollToTop from '@/components/magazine/ScrollToTop'
import Link from 'next/link'
import { notFound } from 'next/navigation'

const categories: Record<string, {
  title: string
  description: string
  gradient: string
  accent: string
  icon: string
}> = {
  philosophy: {
    title: 'Philosophy',
    description: 'Exploring life\'s big questions through ancient wisdom and modern insights.',
    gradient: 'from-primary-600 via-primary-700 to-accent-purple',
    accent: 'primary',
    icon: '',
  },
  poetry: {
    title: 'Poetry',
    description: 'Verses that speak to the heart, distilling complex truths into beautiful words.',
    gradient: 'from-accent-purple via-accent-purple-dark to-primary-600',
    accent: 'purple',
    icon: '',
  },
  culture: {
    title: 'Culture',
    description: 'Examining the trends, movements, and moments that shape our collective experience.',
    gradient: 'from-accent-orange via-accent-orange-dark to-accent-coral',
    accent: 'orange',
    icon: '',
  },
  interviews: {
    title: 'Interviews',
    description: 'Conversations with thinkers, artists, and leaders shaping our world.',
    gradient: 'from-primary-600 via-accent-purple to-accent-purple-dark',
    accent: 'purple',
    icon: '',
  },
  essays: {
    title: 'Essays',
    description: 'Long-form explorations of ideas that matter, from the personal to the universal.',
    gradient: 'from-brand-red via-brand-red-dark to-accent-orange',
    accent: 'red',
    icon: '',
  },
}

const allArticles = {
  philosophy: [
    {
      id: 1,
      title: 'The Architecture of Meaning: How We Build Purpose',
      excerpt: 'In an age of unprecedented choice, the question of what matters has become both more urgent and more elusive.',
      author: 'Sarah Chen',
      date: 'Feb 15, 2026',
      readTime: '8 min',
      views: '12.4K',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop',
      featured: true,
    },
    {
      id: 2,
      title: 'Stoic Wisdom for Modern Anxiety',
      excerpt: 'Ancient techniques for managing overwhelming stress in today\'s fast-paced world.',
      author: 'David Park',
      date: 'Feb 12, 2026',
      readTime: '7 min',
      views: '9.1K',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop',
      featured: false,
    },
    {
      id: 3,
      title: 'The Philosophy of Slow Living',
      excerpt: 'Embracing intentionality in a world obsessed with speed and productivity.',
      author: 'Marcus Webb',
      date: 'Feb 10, 2026',
      readTime: '9 min',
      views: '15.2K',
      image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&h=400&fit=crop',
      featured: false,
    },
    {
      id: 4,
      title: 'Understanding Modern Existentialism',
      excerpt: 'Making sense of meaning in a post-religious, hyper-connected world.',
      author: 'Elena Rodriguez',
      date: 'Feb 8, 2026',
      readTime: '11 min',
      views: '18.3K',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&h=400&fit=crop',
      featured: true,
    },
    {
      id: 5,
      title: 'The Wisdom of Insecurity',
      excerpt: 'Learning to be comfortable with uncertainty and finding peace in the unknown.',
      author: 'Sarah Chen',
      date: 'Feb 5, 2026',
      readTime: '6 min',
      views: '7.8K',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop',
      featured: false,
    },
  ],
  poetry: [
    {
      id: 6,
      title: 'Reflections on Stillness: A Poetry Collection',
      excerpt: 'Verses that speak to the heart of our collective uncertainty and hope.',
      author: 'Marcus Webb',
      date: 'Feb 14, 2026',
      readTime: '5 min',
      views: '8.7K',
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&h=400&fit=crop',
      featured: true,
    },
    {
      id: 7,
      title: 'Why Poetry Matters More Than Ever',
      excerpt: 'In times of crisis, poetry becomes essential for processing human experience.',
      author: 'Sarah Chen',
      date: 'Feb 11, 2026',
      readTime: '6 min',
      views: '14.5K',
      image: 'https://images.unsplash.com/photo-1474932430478-367dbb6832c1?w=600&h=400&fit=crop',
      featured: false,
    },
    {
      id: 8,
      title: 'Poetry as Resistance',
      excerpt: 'How verse can challenge oppressive systems and give voice to the marginalized.',
      author: 'Elena Rodriguez',
      date: 'Feb 9, 2026',
      readTime: '7 min',
      views: '11.2K',
      image: 'https://images.unsplash.com/photo-1474932430478-367dbb6832c1?w=600&h=400&fit=crop',
      featured: true,
    },
    {
      id: 9,
      title: 'The Art of Metaphor',
      excerpt: 'Exploring how figurative language transforms our understanding of reality.',
      author: 'David Park',
      date: 'Feb 6, 2026',
      readTime: '5 min',
      views: '6.9K',
      image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&h=400&fit=crop',
      featured: false,
    },
  ],
  culture: [
    {
      id: 10,
      title: 'The Return of the Long Read in the Age of TikTok',
      excerpt: 'Why deep reading is making a comeback among younger generations.',
      author: 'Elena Rodriguez',
      date: 'Feb 13, 2026',
      readTime: '6 min',
      views: '7.2K',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop',
      featured: true,
    },
    {
      id: 11,
      title: 'The Art of Conversation: Rediscovering Deep Dialogue',
      excerpt: 'In an era of shallow communication, meaningful conversation is revolutionary.',
      author: 'Marcus Webb',
      date: 'Feb 11, 2026',
      readTime: '8 min',
      views: '10.3K',
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop',
      featured: false,
    },
    {
      id: 12,
      title: 'Digital Mindfulness in the Age of Distraction',
      excerpt: 'How to cultivate awareness when every app wants your attention.',
      author: 'David Park',
      date: 'Feb 8, 2026',
      readTime: '7 min',
      views: '13.1K',
      image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&h=400&fit=crop',
      featured: true,
    },
  ],
  interviews: [
    {
      id: 13,
      title: 'A Conversation with Philosopher Dr. Amira Okafor',
      excerpt: 'On ethics, technology, and the future of human consciousness.',
      author: 'Sarah Chen',
      date: 'Feb 12, 2026',
      readTime: '15 min',
      views: '8.9K',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=400&fit=crop',
      featured: true,
    },
    {
      id: 14,
      title: 'Poet Laureate James Wright on Finding Beauty',
      excerpt: 'An intimate discussion about craft, inspiration, and the power of words.',
      author: 'Marcus Webb',
      date: 'Feb 9, 2026',
      readTime: '12 min',
      views: '6.7K',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=400&fit=crop',
      featured: false,
    },
    {
      id: 15,
      title: 'Artist Yuki Tanaka Redefines Space',
      excerpt: 'How installation art challenges our perception of environment.',
      author: 'Elena Rodriguez',
      date: 'Feb 7, 2026',
      readTime: '10 min',
      views: '5.4K',
      image: 'https://images.unsplash.com/photo-1531243269054-5ebf6f34081e?w=600&h=400&fit=crop',
      featured: true,
    },
  ],
  essays: [
    {
      id: 16,
      title: 'On the Ethics of Artificial Intelligence',
      excerpt: 'A deep exploration of moral questions posed by emerging technology.',
      author: 'David Park',
      date: 'Feb 14, 2026',
      readTime: '18 min',
      views: '11.5K',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
      featured: true,
    },
    {
      id: 17,
      title: 'The Personal is Political: Revisited',
      excerpt: 'Fifty years later, reconsidering the feminist mantra through contemporary eyes.',
      author: 'Sarah Chen',
      date: 'Feb 10, 2026',
      readTime: '14 min',
      views: '9.8K',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      featured: false,
    },
    {
      id: 18,
      title: 'Letters to a Young Philosophers',
      excerpt: 'Advice, warnings, and encouragement for the next generation of thinkers.',
      author: 'Marcus Webb',
      date: 'Feb 6, 2026',
      readTime: '16 min',
      views: '7.3K',
      image: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=600&h=400&fit=crop',
      featured: true,
    },
  ],
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const category = categories[slug]

  if (!category) {
    notFound()
  }

  const articles = allArticles[slug as keyof typeof allArticles] || []
  const featuredArticles = articles.filter(a => a.featured)
  const regularArticles = articles.filter(a => !a.featured)

  return (
    <>
      <NewsprkHeader />
      <BreakingNews />
      <ScrollToTop />

      <main>
        {/* Hero Section */}
        <section className={`py-20 bg-gradient-to-br ${category.gradient} text-white text-center relative overflow-hidden`}>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-orange rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
          </div>
          <div className="container container--narrow relative z-10">
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-xs font-ui font-bold uppercase tracking-widest mb-6">
              Category
            </span>
            <h1 className="font-display text-5xl md:text-6xl mb-6 font-bold flex items-center justify-center gap-4">
              {category.icon && <span className="text-4xl md:text-5xl">{category.icon}</span>}
              {category.title}
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              {category.description}
            </p>
          </div>
        </section>

        {/* Featured Articles */}
        {featuredArticles.length > 0 && (
          <section className="py-12">
            <div className="container">
              <div className="text-center mb-8">
                <h2 className="font-display text-2xl md:text-3xl font-bold">
                  Featured
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {featuredArticles.slice(0, 2).map((article) => (
                  <Link key={article.id} href={`/read/${article.id}`} className="group">
                    <div className="card !p-0 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <div
                          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                          style={{ backgroundImage: `url(${article.image})` }}
                        ></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <span className="inline-block px-3 py-1 bg-gradient-to-r from-accent-orange to-accent-orange-dark text-white text-xs font-ui font-bold uppercase tracking-wider rounded-full mb-3">
                            Featured
                          </span>
                          <h3 className="font-display text-xl md:text-2xl text-white leading-tight mb-2 group-hover:text-primary-300 transition-colors">
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
            </div>
          </section>
        )}

        {/* All Articles */}
        <section className="py-12 bg-gray-50">
          <div className="container">
            <div className="text-center mb-8">
              <h2 className="font-display text-2xl md:text-3xl font-bold">
                All {category.title} Articles
              </h2>
              <p className="text-gray-600 mt-2">
                {articles.length} {articles.length === 1 ? 'article' : 'articles'}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...featuredArticles, ...regularArticles].map((article) => (
                <Link key={article.id} href={`/read/${article.id}`} className="group">
                  <div className="card !p-0 overflow-hidden hover:shadow-xl transition-all duration-300">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                        style={{ backgroundImage: `url(${article.image})` }}
                      ></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="font-display text-base text-white leading-tight mb-2 group-hover:text-primary-300 transition-colors line-clamp-2">
                          {article.title}
                        </h3>
                        <div className="flex items-center gap-2 text-xs font-ui text-white/60">
                          <span>{article.date}</span>
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
            <div className="mt-10 text-center">
              <button className="px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-ui font-bold uppercase tracking-wider rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                Load More {category.title}
              </button>
            </div>
          </div>
        </section>

        {/* Related Categories */}
        <section className="py-16">
          <div className="container">
            <div className="text-center mb-8">
              <span className="text-xs font-ui text-accent-orange uppercase tracking-widest font-bold mb-2 block">
                Explore More
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-bold">
                Related Categories
              </h2>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {Object.entries(categories)
                .filter(([key]) => key !== slug)
                .map(([key, cat]) => (
                  <Link key={key} href={`/category/${key}`} className="group">
                    <div className={`card !p-0 overflow-hidden text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}>
                      <div className={`relative h-32 bg-gradient-to-br ${cat.gradient} flex items-center justify-center`}>
                        {cat.icon && <span className="text-5xl">{cat.icon}</span>}
                      </div>
                      <div className="p-4">
                        <h3 className="font-display text-lg font-bold mb-2 group-hover:text-primary-600 transition-colors">
                          {cat.title}
                        </h3>
                        <p className="text-gray-600 text-sm line-clamp-2">
                          {cat.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </section>

        {/* Subscribe CTA */}
        <section className="py-16 bg-gradient-to-r from-primary-50 to-accent-purple/50">
          <div className="container">
            <div className="card !bg-white/80 backdrop-blur-sm !border-primary-200 shadow-2xl !p-10 max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-accent-orange to-accent-orange-dark text-white rounded-full text-xs font-ui font-bold uppercase tracking-wider mb-4 shadow-lg">
                Stay Updated
              </span>
              <h2 className="font-display text-3xl md:text-4xl mb-4">
                Get More {category.title}
              </h2>
              <p className="text-gray-600 mb-6 max-w-xl mx-auto">
                Subscribe to receive weekly {category.title.toLowerCase()} articles and poems delivered
                straight to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/subscribe"
                  className="px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-ui font-bold uppercase tracking-wider rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all"
                >
                  Subscribe Now
                </Link>
                <Link
                  href="/read"
                  className="px-8 py-4 bg-white border-2 border-primary-500 text-primary-600 font-ui font-bold uppercase tracking-wider rounded-full hover:bg-primary-50 transition-all"
                >
                  Browse All Articles
                </Link>
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
                <li><Link href="/category/philosophy" className="text-gray-400 hover:text-white transition-colors">Philosophy</Link></li>
                <li><Link href="/category/poetry" className="text-gray-400 hover:text-white transition-colors">Poetry</Link></li>
                <li><Link href="/category/culture" className="text-gray-400 hover:text-white transition-colors">Culture</Link></li>
                <li><Link href="/category/lifestyle" className="text-gray-400 hover:text-white transition-colors">Lifestyle</Link></li>
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
