import NewsprkHeader from '@/components/magazine/NewsprkHeader'
import BreakingNews from '@/components/magazine/BreakingNews'
import ScrollToTop from '@/components/magazine/ScrollToTop'
import Link from 'next/link'

const values = [
  {
    icon: '',
    title: 'Clarity',
    description: 'No academic jargon, no pretense. Philosophy should be accessible to anyone willing to think.',
    gradient: 'from-primary-500 to-primary-600',
    bgColor: 'from-primary-50 to-primary-100',
  },
  {
    icon: '',
    title: 'Relevance',
    description: 'Philosophy is not an abstract exercise. It is a tool for understanding the actual world we live in.',
    gradient: 'from-accent-orange to-accent-orange-dark',
    bgColor: 'from-orange-50 to-orange-100',
  },
  {
    icon: '',
    title: 'Depth',
    description: 'Beyond surface-level takes. We go deep because the truth deserves more than a headline.',
    gradient: 'from-accent-purple to-accent-purple-dark',
    bgColor: 'from-purple-50 to-purple-100',
  },
  {
    icon: '',
    title: 'Honesty',
    description: 'Intellectual integrity over ideology. We would rather be right than popular.',
    gradient: 'from-brand-red to-brand-red-dark',
    bgColor: 'from-red-50 to-red-100',
  },
  {
    icon: '',
    title: 'Beauty',
    description: 'Ideas deserve beautiful expression. Philosophy and poetry together: head and heart.',
    gradient: 'from-primary-600 via-accent-purple to-accent-purple-dark',
    bgColor: 'from-primary-50 to-purple-50',
  },
]

const categories = [
  {
    title: 'The Moment',
    description: 'Current events from the past 1-4 weeks, examined philosophically.',
    color: 'border-primary-500',
    gradient: 'from-primary-500 to-primary-600',
  },
  {
    title: 'The Mirror',
    description: 'Historical events with modern relevance. Pattern recognition across time.',
    color: 'border-accent-orange',
    gradient: 'from-accent-orange to-accent-orange-dark',
  },
  {
    title: 'The Current',
    description: 'Ongoing cultural phenomena and longer-term social observations.',
    color: 'border-accent-purple',
    gradient: 'from-accent-purple to-accent-purple-dark',
  },
  {
    title: 'The Stand',
    description: 'Direct philosophical positions. Longer-form editorials that take a stance.',
    color: 'border-brand-red',
    gradient: 'from-brand-red to-brand-red-dark',
  },
]

export default function AboutPage() {
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
              Our Story
            </span>
            <h1 className="font-display text-5xl md:text-6xl mb-6 font-bold">
              About Unlettrd
            </h1>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              Philosophy and poetry for the present moment.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="container container--narrow">
            <div className="text-center mb-12">
              <span className="text-xs font-ui text-accent-orange uppercase tracking-widest font-bold mb-2 block">
                Why We Exist
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Our Mission
              </h2>
            </div>
            <div className="card !bg-gradient-to-br from-white to-primary-50 !border-primary-200 !p-10 text-center">
              <p className="text-xl text-gray-700 leading-relaxed">
                Unlettrd examines current and historical events through the lens of accessible philosophy,
                distilling complex truths into poetry that resonates. We make wisdom urgent and urgency wise.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-gradient-to-r from-primary-50 to-accent-purple/50">
          <div className="container">
            <div className="text-center mb-12">
              <span className="text-xs font-ui text-accent-orange uppercase tracking-widest font-bold mb-2 block">
                What Drives Us
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold">
                What We Believe
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className={`card !bg-gradient-to-br ${value.bgColor} !border-white/50 p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
                >
                  {value.icon && (
                    <div className={`w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-2xl bg-gradient-to-br ${value.gradient} text-3xl shadow-lg`}>
                      {value.icon}
                    </div>
                  )}
                  <h3 className="font-display text-xl font-bold mb-3 text-gray-900">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16">
          <div className="container">
            <div className="text-center mb-12">
              <span className="text-xs font-ui text-accent-orange uppercase tracking-widest font-bold mb-2 block">
                What We Publish
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold">
                Our Categories
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {categories.map((category, index) => (
                <div key={index} className={`border-l-4 ${category.color} pl-6 pr-4 py-5 bg-white rounded-r-lg shadow-md hover:shadow-lg transition-all`}>
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-display text-xl font-bold text-gray-900">
                      {category.title}
                    </h3>
                    <span className={`px-3 py-1 bg-gradient-to-r ${category.gradient} text-white text-xs font-ui font-bold uppercase tracking-wider rounded-full`}>
                      {index + 1}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    {category.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Article Format Section */}
        <section className="py-16 bg-gradient-to-r from-primary-50 to-accent-purple/50">
          <div className="container container--narrow">
            <div className="text-center mb-12">
              <span className="text-xs font-ui text-accent-orange uppercase tracking-widest font-bold mb-2 block">
                How We Write
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold">
                Every Piece Contains
              </h2>
            </div>

            <div className="space-y-6">
              <div className="card !bg-gradient-to-br from-primary-500 to-primary-600 text-white !p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-white/20 rounded-full">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold mb-2">Article</h3>
                    <p className="text-white/80 text-sm mb-1">800-1,500 words</p>
                    <p className="text-white/70 text-sm">
                      Analyzes the event/topic, provides philosophical framework and historical context,
                      makes a clear argument in accessible prose.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card !bg-gradient-to-br from-accent-purple to-accent-purple-dark text-white !p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-white/20 rounded-full">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold mb-2">Poem</h3>
                    <p className="text-white/80 text-sm mb-1">12-30 lines</p>
                    <p className="text-white/70 text-sm">
                      Distills the essence of the article, creates emotional resonance, and stands
                      alone while being enhanced by the article.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Commitment Section */}
        <section className="py-16">
          <div className="container container--narrow">
            <div className="text-center mb-12">
              <span className="text-xs font-ui text-accent-orange uppercase tracking-widest font-bold mb-2 block">
                Our Promise
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold">
                Our Commitment
              </h2>
            </div>

            <div className="card !bg-gradient-to-br from-white to-primary-50 !border-primary-200 !p-10 text-center mb-8">
              <p className="text-xl text-gray-700 leading-relaxed">
                We publish weekly. We think carefully. We write clearly. We do not flatter.
                We do not preach. We invite you to think alongside us.
              </p>
            </div>

            {/* Poem */}
            <div className="card !bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white !p-10 text-center">
              <p className="font-display text-lg md:text-xl leading-relaxed">
                The truth is not what you want to hear.
                <br />
                It is what is.
                <br />
                <br />
                We do not make it easier.
                <br />
                We make it clearer.
                <br />
                <br />
                Philosophy for the present moment.
                <br />
                Poetry for what matters.
                <br />
                <br />
                Welcome to Unlettrd.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary-50 to-accent-purple/50">
          <div className="container">
            <div className="card !bg-white/80 backdrop-blur-sm !border-primary-200 shadow-2xl !p-10 max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-accent-orange to-accent-orange-dark text-white rounded-full text-xs font-ui font-bold uppercase tracking-wider mb-4 shadow-lg">
                Join Us
              </span>
              <h2 className="font-display text-3xl md:text-4xl mb-4">
                Be Part of Unlettrd
              </h2>
              <p className="text-gray-600 mb-6 max-w-xl mx-auto">
                Subscribe to support independent philosophical writing. Get weekly articles and poems
                delivered to your inbox.
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
                  Start Reading
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
