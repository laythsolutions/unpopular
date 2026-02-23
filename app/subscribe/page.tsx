'use client'

import NewsprkHeader from '@/components/magazine/NewsprkHeader'
import BreakingNews from '@/components/magazine/BreakingNews'
import ScrollToTop from '@/components/magazine/ScrollToTop'
import { useState } from 'react'
import Link from 'next/link'

const plans = [
  {
    id: 'digital',
    name: 'Digital',
    price: { monthly: 10, yearly: 120 },
    description: 'For the digital reader',
    features: [
      'Full website access',
      'Digital magazine issues',
      'Weekly newsletter',
      'Early access to articles',
      'Downloadable poetry collections',
      'No ads',
      'Access to archives',
    ],
    gradient: 'from-accent-purple via-accent-purple-dark to-primary-600',
    accent: 'purple',
  },
  {
    id: 'print',
    name: 'Print + Digital',
    price: { monthly: 25, yearly: 250 },
    description: 'The complete experience',
    features: [
      'Everything in Digital',
      'Quarterly print magazine',
      'Print-only content',
      '10% shop discount',
      'Subscriber events',
    ],
    popular: true,
    gradient: 'from-primary-600 via-primary-700 to-accent-purple',
    accent: 'primary',
  },
  {
    id: 'founding',
    name: 'Founding Member',
    price: { yearly: 500 },
    description: 'Be part of the foundation',
    features: [
      'Everything in Print + Digital',
      'Signed editions',
      'Name in masthead',
      'Annual hardcover anthology',
      '20% shop discount',
      'Quarterly editor letter',
      'First access to special editions',
    ],
    limited: true,
    gradient: 'from-accent-orange via-accent-orange-dark to-accent-coral',
    accent: 'orange',
  },
]

const accentGradients = {
  primary: 'from-primary-500 to-primary-600',
  purple: 'from-accent-purple to-accent-purple-dark',
  orange: 'from-accent-orange to-accent-orange-dark',
}

export default function SubscribePage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('yearly')
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)

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
              Join the Community
            </span>
            <h1 className="font-display text-5xl md:text-6xl mb-6 font-bold">
              Subscribe to UNPopular
            </h1>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              Philosophy and poetry for the present moment. Support independent writing.
            </p>
          </div>
        </section>

        {/* Billing Toggle */}
        <section className="py-8 bg-white border-b border-gray-200">
          <div className="container">
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-6 py-2.5 font-ui text-sm font-bold uppercase tracking-wider rounded-full transition-all ${
                  billingCycle === 'monthly'
                    ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg'
                    : 'bg-white border-2 border-primary-500 text-primary-600 hover:bg-primary-50'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className={`relative px-6 py-2.5 font-ui text-sm font-bold uppercase tracking-wider rounded-full transition-all ${
                  billingCycle === 'yearly'
                    ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg'
                    : 'bg-white border-2 border-primary-500 text-primary-600 hover:bg-primary-50'
                }`}
              >
                Yearly
                {billingCycle === 'yearly' && (
                  <span className="absolute -top-2 -right-2 px-2 py-1 bg-accent-orange text-white text-xs font-ui font-bold uppercase tracking-wider rounded-full shadow-lg animate-pulse-slow">
                    Save 17%
                  </span>
                )}
              </button>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-16">
          <div className="container">
            <div className="grid md:grid-cols-3 gap-8">
              {plans.map((plan) => {
                const price = billingCycle === 'monthly' && plan.price.monthly
                  ? plan.price.monthly
                  : plan.price.yearly

                return (
                  <div
                    key={plan.id}
                    className={`relative group ${
                      selectedPlan === plan.id ? 'ring-4 ring-primary-400 rounded-2xl' : ''
                    }`}
                  >
                    {plan.popular && (
                      <span className="absolute -top-4 left-1/2 -translate-x-1/2 z-10 px-4 py-1.5 bg-gradient-to-r from-accent-orange to-accent-orange-dark text-white text-xs font-ui font-bold uppercase tracking-wider rounded-full shadow-lg">
                        Most Popular
                      </span>
                    )}
                    {plan.limited && (
                      <span className="absolute -top-4 left-1/2 -translate-x-1/2 z-10 px-4 py-1.5 bg-gradient-to-r from-accent-coral to-brand-red text-white text-xs font-ui font-bold uppercase tracking-wider rounded-full shadow-lg">
                        Limited to 100
                      </span>
                    )}

                    <div
                      className={`card !p-0 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${
                        plan.popular ? 'border-2 border-primary-400' : ''
                      }`}
                      onClick={() => setSelectedPlan(plan.id)}
                    >
                      {/* Header with gradient */}
                      <div className={`p-6 bg-gradient-to-br ${plan.gradient} text-white text-center`}>
                        <h3 className="font-display text-2xl md:text-3xl font-bold mb-2">
                          {plan.name}
                        </h3>
                        <p className="text-white/80 text-sm">
                          {plan.description}
                        </p>
                      </div>

                      {/* Price */}
                      <div className="p-6 text-center border-b border-gray-100">
                        <div className="flex items-baseline justify-center gap-1">
                          <span className="text-5xl font-display font-bold text-gray-900">
                            ${price}
                          </span>
                          <span className="text-gray-600">
                            /{billingCycle === 'monthly' && plan.price.monthly ? 'month' : 'year'}
                          </span>
                        </div>
                        {billingCycle === 'yearly' && plan.price.monthly && (
                          <p className="text-sm text-gray-500 mt-2">
                            Billed annually (${plan.price.yearly}/year)
                          </p>
                        )}
                      </div>

                      {/* Features */}
                      <div className="p-6">
                        <ul className="space-y-3 mb-6">
                          {plan.features.map((feature) => (
                            <li key={feature} className="flex items-start gap-3">
                              <span className={`flex-shrink-0 w-5 h-5 flex items-center justify-center rounded-full bg-gradient-to-r ${accentGradients[plan.accent as keyof typeof accentGradients]} text-white text-xs mt-0.5`}>
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                              </span>
                              <span className="text-gray-600 text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>

                        <button
                          className={`w-full py-3 px-4 font-ui text-sm font-bold uppercase tracking-wider rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all ${
                            plan.popular || selectedPlan === plan.id
                              ? `bg-gradient-to-r ${accentGradients[plan.accent as keyof typeof accentGradients]} text-white`
                              : 'bg-white border-2 border-primary-500 text-primary-600 hover:bg-primary-50'
                          }`}
                        >
                          {plan.id === 'founding' ? 'Join Founding' : `Subscribe to ${plan.name}`}
                        </button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Trust Signals */}
            <div className="mt-12 text-center space-y-2">
              <p className="text-gray-600 flex items-center justify-center gap-2">
                <span className="w-6 h-6 flex items-center justify-center rounded-full bg-gradient-to-r from-primary-500 to-primary-600 text-white text-xs">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                All subscriptions include a 7-day free trial
              </p>
              <p className="text-gray-600 flex items-center justify-center gap-2">
                <span className="w-6 h-6 flex items-center justify-center rounded-full bg-gradient-to-r from-primary-500 to-primary-600 text-white text-xs">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                Cancel anytime, no questions asked
              </p>
              <p className="text-gray-600 flex items-center justify-center gap-2">
                <span className="w-6 h-6 flex items-center justify-center rounded-full bg-gradient-to-r from-primary-500 to-primary-600 text-white text-xs">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                Yearly billing saves 17% (equivalent to 2 months free)
              </p>
            </div>
          </div>
        </section>

        {/* Gift Subscriptions */}
        <section className="py-16 bg-gradient-to-r from-primary-50 to-accent-purple/50">
          <div className="container">
            <div className="card !bg-white/80 backdrop-blur-sm !border-primary-200 shadow-2xl !p-10 max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-accent-orange to-accent-orange-dark text-white rounded-full text-xs font-ui font-bold uppercase tracking-wider mb-4 shadow-lg">
                Gift Ideas
              </span>
              <h2 className="font-display text-3xl md:text-4xl mb-4">
                Gift Subscriptions
              </h2>
              <p className="text-gray-600 mb-6 max-w-xl mx-auto">
                Give the gift of philosophy and poetry. Perfect for thinkers, readers, and anyone who needs more depth in their life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-accent-orange to-accent-orange-dark text-white font-ui font-bold uppercase tracking-wider rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                  Give a Gift Subscription
                </button>
                <Link
                  href="/shop"
                  className="px-8 py-4 bg-white border-2 border-primary-500 text-primary-600 font-ui font-bold uppercase tracking-wider rounded-full hover:bg-primary-50 transition-all"
                >
                  Shop Gifts
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container container--narrow">
            <div className="text-center mb-12">
              <span className="text-xs font-ui text-accent-orange uppercase tracking-widest font-bold mb-2 block">
                Questions
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: 'Can I change plans later?',
                  a: 'Yes! You can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.',
                },
                {
                  q: 'Do print subscribers get digital access?',
                  a: 'Absolutely! All print subscribers receive full digital access, including the website, digital magazine issues, and archive.',
                },
                {
                  q: 'How is the print magazine delivered?',
                  a: 'Print issues are shipped quarterly via standard mail. International shipping is available. You will receive tracking information when your issue ships.',
                },
                {
                  q: 'What is the founding member program?',
                  a: 'Founding members are our earliest supporters, limited to 100 spots. You get exclusive perks including signed editions, your name in the masthead, and annual hardcover anthologies.',
                },
              ].map((faq, i) => (
                <div key={i} className="card !bg-gradient-to-br from-white to-primary-50 !border-primary-100">
                  <h3 className="font-display text-lg font-bold mb-2 text-gray-900">
                    {faq.q}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {faq.a}
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
