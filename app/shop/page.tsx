'use client'

import NewsprkHeader from '@/components/magazine/NewsprkHeader'
import BreakingNews from '@/components/magazine/BreakingNews'
import ScrollToTop from '@/components/magazine/ScrollToTop'
import Link from 'next/link'
import { useState } from 'react'

const products = {
  magazines: [
    { id: 1, name: 'Issue 1: Winter 2026', price: 22, type: 'Print', description: '72 pages, 12 articles', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop', gradient: 'from-primary-600 via-primary-700 to-accent-purple' },
    { id: 2, name: 'Annual Anthology 2025', price: 45, type: 'Hardcover', description: '200 pages, best of Year 1', image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&h=600&fit=crop', gradient: 'from-accent-orange via-accent-orange-dark to-accent-coral' },
  ],
  apparel: [
    { id: 3, name: 'The Subscriber Tee', price: 32, description: 'Cream with charcoal text', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop', gradient: 'from-accent-purple via-accent-purple-dark to-primary-600' },
    { id: 4, name: 'Check Tee', price: 32, description: '"Check......" centered', image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&h=600&fit=crop', gradient: 'from-primary-600 via-primary-700 to-accent-purple' },
    { id: 5, name: 'Signature Hoodie', price: 58, description: 'Minimal masthead design', image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=600&fit=crop', gradient: 'from-accent-orange via-accent-orange-dark to-accent-coral' },
  ],
  accessories: [
    { id: 6, name: 'Signature Tote', price: 25, description: 'Heavy canvas, 15" × 16"', image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&h=600&fit=crop', gradient: 'from-primary-600 via-primary-700 to-accent-purple' },
    { id: 7, name: 'Coffee Mug', price: 18, description: '11oz ceramic, poem excerpt', image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=600&h=600&fit=crop', gradient: 'from-accent-purple via-accent-purple-dark to-primary-600' },
    { id: 8, name: 'Philosophy Journal', price: 24, description: '160 pages, dotted', image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600&h=600&fit=crop', gradient: 'from-accent-orange via-accent-orange-dark to-accent-coral' },
  ],
  prints: [
    { id: 9, name: 'Individual Poem Print', price: 28, description: '11" × 14", museum quality', image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=600&h=600&fit=crop', gradient: 'from-primary-600 via-primary-700 to-accent-purple' },
    { id: 10, name: 'Signed Print Set', price: 95, description: '3 poems, signed, limited', image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=600&h=600&fit=crop', gradient: 'from-accent-orange via-accent-orange-dark to-accent-coral' },
  ],
}

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState<keyof typeof products>('magazines')

  const categories: { key: keyof typeof products; name: string; icon: string }[] = [
    { key: 'magazines', name: 'Magazines', icon: '' },
    { key: 'apparel', name: 'Apparel', icon: '' },
    { key: 'accessories', name: 'Accessories', icon: '' },
    { key: 'prints', name: 'Art Prints', icon: '' },
  ]

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
              Shop
            </span>
            <h1 className="font-display text-5xl md:text-6xl mb-6 font-bold">
              The UNPopular Store
            </h1>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              Philosophy and poetry for your life. Wear it, carry it, display it.
            </p>
          </div>
        </section>

        {/* Category Tabs */}
        <section className="py-8 bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
          <div className="container">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`px-6 py-2.5 font-ui text-sm font-bold uppercase tracking-wider rounded-full transition-all flex items-center gap-2 ${
                    activeCategory === cat.key
                      ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg'
                      : 'bg-white border-2 border-primary-500 text-primary-600 hover:bg-primary-50'
                  }`}
                >
                  {cat.icon && <span>{cat.icon}</span>}
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16">
          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products[activeCategory].map((product) => (
                <div key={product.id} className="group">
                  <div className="card !p-0 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                    {/* Product Image */}
                    <div className={`relative aspect-square overflow-hidden bg-gradient-to-br ${product.gradient}`}>
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                        style={{ backgroundImage: `url(${product.image})` }}
                      ></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                      {/* Quick Actions */}
                      <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-lg hover:bg-primary-50 transition-colors">
                          <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                        </button>
                        <button className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-lg hover:bg-primary-50 transition-colors">
                          <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </button>
                      </div>

                      {/* Type Badge */}
                      {product.type && (
                        <div className="absolute bottom-4 left-4">
                          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-ui font-bold uppercase tracking-wider text-gray-900">
                            {product.type}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Product Info */}
                    <div className="p-5">
                      <h3 className="font-display text-xl font-bold mb-2 text-gray-900">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        {product.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-display font-bold text-primary-600">
                          ${product.price}
                        </span>
                        <button className="px-5 py-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-ui text-sm font-bold uppercase tracking-wider rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Subscriber Discount */}
        <section className="py-16 bg-gradient-to-r from-primary-50 to-accent-purple/50">
          <div className="container">
            <div className="card !bg-white/80 backdrop-blur-sm !border-primary-200 shadow-2xl !p-10 max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-accent-orange to-accent-orange-dark text-white rounded-full text-xs font-ui font-bold uppercase tracking-wider mb-4 shadow-lg">
                Save More
              </span>
              <h2 className="font-display text-3xl md:text-4xl mb-4">
                Subscriber Discount
              </h2>
              <p className="text-gray-600 mb-6 max-w-xl mx-auto">
                Print subscribers get <span className="font-bold text-accent-orange">10% off</span> all shop purchases.
                Founding members get <span className="font-bold text-accent-orange">20% off</span>.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/subscribe"
                  className="px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-ui font-bold uppercase tracking-wider rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all"
                >
                  Subscribe & Save
                </Link>
                <button className="px-8 py-4 bg-white border-2 border-primary-500 text-primary-600 font-ui font-bold uppercase tracking-wider rounded-full hover:bg-primary-50 transition-all">
                  Verify Subscriber Status
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Shipping Info */}
        <section className="py-16">
          <div className="container">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: '',
                  title: 'Worldwide Shipping',
                  description: 'We ship philosophy and poetry to every corner of the globe.',
                },
                {
                  icon: '',
                  title: 'Careful Packaging',
                  description: 'Every item is packed with care to ensure it arrives in perfect condition.',
                },
                {
                  icon: '',
                  title: 'Easy Returns',
                  description: 'Not satisfied? Return within 30 days for a full refund.',
                },
              ].map((feature, index) => (
                <div key={index} className="card !bg-gradient-to-br from-white to-primary-50 !border-primary-100 text-center">
                  {feature.icon && <div className="text-4xl mb-4">{feature.icon}</div>}
                  <h3 className="font-display text-xl font-bold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {feature.description}
                  </p>
                </div>
              ))}
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
              © 2026 UNPopular. All rights reserved.
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
