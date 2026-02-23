import NewsprkHeader from '@/components/magazine/NewsprkHeader'
import BreakingNews from '@/components/magazine/BreakingNews'
import ScrollToTop from '@/components/magazine/ScrollToTop'
import Link from 'next/link'

const articles: Record<string, {
  title: string
  excerpt: string
  category: string
  badge: string
  badgeColor: string
  date: string
  readTime: string
  author: string
}> = {
  '1': {
    title: 'The Architecture of Meaning: How We Build Purpose',
    excerpt: 'In an age of unprecedented choice, the question of what matters has become both more urgent and more elusive.',
    category: 'Philosophy',
    badge: 'The Moment',
    badgeColor: 'primary',
    date: 'Feb 15, 2026',
    readTime: '8 min',
    author: 'Sarah Chen',
  },
  '2': {
    title: 'Leadership in Crisis',
    excerpt: 'What the Cuban Missile Crisis teaches us about decision-making under pressure.',
    category: 'Philosophy',
    badge: 'The Mirror',
    badgeColor: 'orange',
    date: 'Feb 14, 2026',
    readTime: '6 min',
    author: 'Marcus Webb',
  },
  '3': {
    title: 'The Attention Economy',
    excerpt: 'Your time is being harvested. Here is what to do about it.',
    category: 'Culture',
    badge: 'The Current',
    badgeColor: 'purple',
    date: 'Feb 13, 2026',
    readTime: '7 min',
    author: 'Elena Rodriguez',
  },
  '4': {
    title: 'The Ethics of AI',
    excerpt: 'What happens when machines can create meaning?',
    category: 'Philosophy',
    badge: 'The Moment',
    badgeColor: 'primary',
    date: 'Feb 12, 2026',
    readTime: '10 min',
    author: 'David Park',
  },
  '8': {
    title: 'What Silicon Valley Bank Teaches Us About Risk',
    excerpt: 'When the bank collapsed, it was not just a failure of risk management. It was a failure of imagination.',
    category: 'Philosophy',
    badge: 'The Stand',
    badgeColor: 'red',
    date: 'Feb 10, 2026',
    readTime: '8 min',
    author: 'Sarah Chen',
  },
}

const badgeGradients = {
  primary: 'from-primary-500 to-primary-600',
  orange: 'from-accent-orange to-accent-orange-dark',
  purple: 'from-accent-purple to-accent-purple-dark',
  red: 'from-brand-red to-brand-red-dark',
}

export default async function ArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const article = articles[id] || articles['8']

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
              Article
            </span>
            <h1 className="font-display text-3xl md:text-5xl mb-6 font-bold leading-tight">
              {article.title}
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-6">
              {article.excerpt}
            </p>
            <div className="flex items-center justify-center gap-4 text-sm font-ui text-white/70">
              <span>{article.date}</span>
              <span>·</span>
              <span>{article.readTime}</span>
              <span>·</span>
              <span>By {article.author}</span>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16">
          <div className="container container--reading">
            <article className="card !p-10 md:!p-16">
              {/* Article Header */}
              <div className="text-center mb-12 pb-8 border-b" style={{ borderColor: '#e0ddd6' }}>
                <span className={`inline-block px-4 py-1.5 bg-gradient-to-r ${badgeGradients[article.badgeColor as keyof typeof badgeGradients]} text-white text-xs font-ui font-bold uppercase tracking-wider rounded-full mb-4`}>
                  {article.badge}
                </span>
                <p className="text-gray-600 text-sm">
                  {article.category} · {article.readTime}
                </p>
              </div>

              {/* Article Body */}
              <div className="article__content prose max-w-none">
                <p>
                  When the bank collapsed in March 2023, it was not just a failure of risk management.
                  It was a failure of imagination. We could not conceive that the good times might end.
                </p>

                <p>
                  This is not a new pattern. From tulip mania to the dot-com bubble to crypto winter,
                  humans have repeatedly demonstrated our inability to conceive of risk in good times.
                  We mistake the absence of disaster for the impossibility of disaster.
                </p>

                <h2>The Philosophy of Risk</h2>

                <p>
                  The ancient Stoics understood what we forget: that uncertainty is not a bug in the
                  system of life, but a feature. Seneca wrote that "nothing is so uncertain as the
                  future." Yet we live as if we have cracked the code—as if our models, our
                  projections, our carefully laid plans can eliminate uncertainty.
                </p>

                <p>
                  They cannot. They never will.
                </p>

                <blockquote>
                  "The ocean does not read your resume. It does not care about your credentials.
                  It just is. Same with markets. Same with life."
                  <cite>— UNPopular, Issue 1</cite>
                </blockquote>

                <p>
                  What we saw at SVB was a particular form of this delusion: the belief that
                  intelligence and success confer immunity from basic forces. The bank's clients
                  were sophisticated venture capitalists and tech founders. The bank's leadership
                  was experienced. Its regulators were watching.
                </p>

                <p>
                  None of it mattered.
                </p>

                <h2>Why We Cannot Imagine Risk</h2>

                <p>
                  The psychologist Daniel Kahneman spent his career studying why we are so bad at
                  assessing risk. His conclusion: we are not rational actors who sometimes make
                  mistakes. We are emotional creatures who use rationality to justify what we already
                  want to believe.
                </p>

                <p>
                  When times are good, we want to believe they will continue. When we have succeeded,
                  we want to believe it is because we are smart, not lucky. When everyone around us
                  is succeeding too, we want to believe this is the new normal.
                </p>

                <p>
                  These are not failures of logic. They are failures of courage. It takes courage to
                  acknowledge that what you have can be taken away. It takes courage to live with
                  uncertainty. It takes courage to admit that you do not know what happens next.
                </p>

                <h2>What To Do About It</h2>

                <p>
                  The Stoic solution is not to eliminate risk—impossible—but to change your
                  relationship to it. Amor fati: love your fate. Not passively accept what happens,
                  but actively embrace uncertainty as the condition of a meaningful life.
                </p>

                <p>
                  In practical terms: diversify. Assume good times end. Build resilience.
                  Remember that the current moment is just that—a moment, not a permanent state.
                </p>

                <p>
                  The collapse of SVB was not an aberration. It was a reminder. Risk does not
                  disappear just because we stop thinking about it. If anything, that is when it is
                  most dangerous.
                </p>
              </div>

              {/* Poem */}
              <div className="mt-16 p-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white rounded-xl">
                <span className="inline-block px-4 py-1 bg-accent-orange text-white text-xs font-ui font-bold uppercase tracking-wider rounded-full mb-6">
                  Poetry
                </span>
                <div className="font-display text-lg md:text-xl leading-relaxed text-center">
                  <p className="mb-4">The ocean does not read your resume.</p>
                  <p className="mb-4">It does not care about your credentials.</p>
                  <p className="mb-4">It just is.</p>
                  <p className="mb-6">Same with markets.</p>
                  <p className="mb-4">Same with life.</p>
                  <p className="mb-4">What you have today,</p>
                  <p className="mb-4">You can lose tomorrow.</p>
                  <p className="mb-4">What seems certain,</p>
                  <p className="mb-6">Is anything but.</p>
                  <p>So make friends with uncertainty.</p>
                  <p>Dance with risk.</p>
                  <p>Build your house on ground,</p>
                  <p>Not on waves.</p>
                </div>
              </div>

              {/* Tags */}
              <div className="mt-16 pt-8 border-t" style={{ borderColor: '#e0ddd6' }}>
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-primary-100 text-primary-700 text-sm font-ui font-semibold rounded-full">
                    #philosophy
                  </span>
                  <span className="px-3 py-1 bg-accent-orange/20 text-accent-orange text-sm font-ui font-semibold rounded-full">
                    #risk
                  </span>
                  <span className="px-3 py-1 bg-accent-purple/20 text-accent-purple text-sm font-ui font-semibold rounded-full">
                    #finance
                  </span>
                  <span className="px-3 py-1 bg-brand-red/20 text-brand-red text-sm font-ui font-semibold rounded-full">
                    #stoicism
                  </span>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="font-display text-2xl md:text-3xl font-bold">
                More From UNPopular
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Link href="/read/2" className="group">
                <div className="card !p-0 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="h-40 bg-gradient-to-br from-accent-orange to-accent-orange-dark"></div>
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 bg-gradient-to-r from-accent-orange to-accent-orange-dark text-white text-xs font-ui font-bold uppercase tracking-wider rounded-full mb-3">
                      The Mirror
                    </span>
                    <h3 className="font-display text-lg font-bold mb-2 group-hover:text-primary-600 transition-colors">
                      Leadership in Crisis
                    </h3>
                    <p className="text-gray-600 text-sm">
                      What the Cuban Missile Crisis teaches us about decision-making.
                    </p>
                    <p className="text-gray-500 text-xs mt-2">{articles['2'].date}</p>
                  </div>
                </div>
              </Link>
              <Link href="/read/3" className="group">
                <div className="card !p-0 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="h-40 bg-gradient-to-br from-accent-purple to-accent-purple-dark"></div>
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 bg-gradient-to-r from-accent-purple to-accent-purple-dark text-white text-xs font-ui font-bold uppercase tracking-wider rounded-full mb-3">
                      The Current
                    </span>
                    <h3 className="font-display text-lg font-bold mb-2 group-hover:text-primary-600 transition-colors">
                      The Attention Economy
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Your time is being harvested. Here is what to do about it.
                    </p>
                    <p className="text-gray-500 text-xs mt-2">{articles['3'].date}</p>
                  </div>
                </div>
              </Link>
              <Link href="/read/4" className="group">
                <div className="card !p-0 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="h-40 bg-gradient-to-br from-primary-500 to-primary-600"></div>
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 bg-gradient-to-r from-primary-500 to-primary-600 text-white text-xs font-ui font-bold uppercase tracking-wider rounded-full mb-3">
                      The Moment
                    </span>
                    <h3 className="font-display text-lg font-bold mb-2 group-hover:text-primary-600 transition-colors">
                      The Ethics of AI
                    </h3>
                    <p className="text-gray-600 text-sm">
                      What happens when machines can create meaning?
                    </p>
                    <p className="text-gray-500 text-xs mt-2">{articles['4'].date}</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Subscribe CTA */}
        <section className="py-16 bg-gradient-to-r from-primary-50 to-accent-purple/50">
          <div className="container">
            <div className="card !bg-white/80 backdrop-blur-sm !border-primary-200 shadow-2xl !p-10 max-w-2xl mx-auto text-center">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-accent-orange to-accent-orange-dark text-white rounded-full text-xs font-ui font-bold uppercase tracking-wider mb-4">
                Stay Informed
              </span>
              <h2 className="font-display text-2xl md:text-3xl mb-4">
                Enjoy This Article?
              </h2>
              <p className="text-gray-600 mb-6">
                Get weekly philosophy and poetry delivered to your inbox.
              </p>
              <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-3 border-2 border-primary-300 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
                  required
                />
                <button type="submit" className="px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-ui font-bold uppercase tracking-wider rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                  Subscribe
                </button>
              </form>
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
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0 0-2.209 1.791-4 4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
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
