import NewsprkHeader from '@/components/magazine/NewsprkHeader'
import BreakingNews from '@/components/magazine/BreakingNews'
import Link from 'next/link'
import Image from 'next/image'

const issues = [
  {
    id: 1,
    title: 'Issue 1',
    subtitle: 'Winter 2026',
    tagline: 'Beginnings',
    description: 'Inaugural issue featuring risk, uncertainty, and the philosophy of finance.',
    articles: 12,
    pages: 72,
    printPrice: 22,
    digitalPrice: 8,
    gradient: 'from-primary-600 via-primary-700 to-accent-purple',
    accent: 'primary',
    released: true,
    coverImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop',
  },
  {
    id: 2,
    title: 'Issue 2',
    subtitle: 'Spring 2026',
    tagline: 'Renewal',
    description: 'Essays on renewal, growth, and the philosophy of new beginnings.',
    articles: 11,
    pages: 68,
    printPrice: 22,
    digitalPrice: 8,
    gradient: 'from-accent-orange via-accent-orange-dark to-accent-coral',
    accent: 'orange',
    released: true,
    coverImage: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&h=500&fit=crop',
    upcoming: false,
  },
  {
    id: 3,
    title: 'Issue 3',
    subtitle: 'Summer 2026',
    tagline: 'Growth',
    description: 'Coming June 2026. Exploring the philosophy of expansion and flourishing.',
    articles: 0,
    pages: 0,
    printPrice: 22,
    digitalPrice: 8,
    gradient: 'from-accent-purple via-accent-purple-dark to-primary-600',
    accent: 'purple',
    released: false,
    coverImage: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=500&fit=crop',
    upcoming: true,
  },
  {
    id: 4,
    title: 'Issue 4',
    subtitle: 'Fall 2026',
    tagline: 'Harvest',
    description: 'Coming September 2026. Reflections on gratitude and abundance.',
    articles: 0,
    pages: 0,
    printPrice: 22,
    digitalPrice: 8,
    gradient: 'from-brand-red via-brand-red-dark to-accent-orange',
    accent: 'red',
    released: false,
    coverImage: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=500&fit=crop',
    upcoming: true,
  },
]

const accentGradients = {
  primary: 'from-primary-400 to-primary-600',
  orange: 'from-accent-orange to-accent-orange-dark',
  purple: 'from-accent-purple to-accent-purple-dark',
  red: 'from-brand-red to-brand-red-dark',
}

export default function IssuesPage() {
  return (
    <>
      <NewsprkHeader />
      <BreakingNews />

      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-accent-purple text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-orange rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
          </div>
          <div className="container container--narrow relative z-10">
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-xs font-ui font-bold uppercase tracking-widest mb-6">
              Quarterly Magazine
            </span>
            <h1 className="font-display text-5xl md:text-6xl mb-6 font-bold">
              Issues
            </h1>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              Quarterly print magazines collecting the best philosophy and poetry from each season.
            </p>
          </div>
        </section>

        {/* Issues Grid */}
        <section className="py-16">
          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {issues.map((issue) => (
                <div key={issue.id} className="group">
                  <div className="relative">
                    {/* Issue Card */}
                    <div className={`relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-500 bg-gradient-to-br ${issue.gradient}`}>
                      {/* Cover Image */}
                      <div className="absolute inset-0">
                        <Image
                          src={issue.coverImage}
                          alt={issue.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                      </div>

                      {/* Content Overlay */}
                      <div className="absolute inset-0 p-6 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between mb-4">
                            <span className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs font-ui font-bold uppercase tracking-wider text-white">
                              {issue.tagline}
                            </span>
                            {!issue.released && (
                              <span className="px-3 py-1 bg-accent-orange/90 backdrop-blur-sm rounded-full text-xs font-ui font-bold uppercase tracking-wider text-white shadow-lg">
                                Coming Soon
                              </span>
                            )}
                          </div>
                          <h2 className="font-display text-4xl text-white mb-1 font-black tracking-tight">
                            {issue.title}
                          </h2>
                          <p className="text-white/80 font-ui text-sm uppercase tracking-widest">
                            {issue.subtitle}
                          </p>
                        </div>

                        {/* Stats */}
                        {issue.released && (
                          <div className="flex gap-4 text-xs font-ui text-white/70">
                            <span>{issue.articles} Articles</span>
                            <span>·</span>
                            <span>{issue.pages} Pages</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Description */}
                    <div className="mt-4 p-5 bg-white rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                        {issue.description}
                      </p>

                      {/* Price */}
                      <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-ui text-gray-500 uppercase tracking-wider">
                            Print
                          </span>
                          <span className="font-display text-xl font-bold text-gray-900">
                            ${issue.printPrice}
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-ui text-gray-500 uppercase tracking-wider">
                            Digital
                          </span>
                          <span className="font-display text-lg font-bold text-gray-900">
                            ${issue.digitalPrice}
                          </span>
                        </div>
                      </div>

                      {/* Buttons */}
                      <div className="flex gap-2">
                        {issue.upcoming ? (
                          <button
                            disabled
                            className="flex-1 py-3 px-4 bg-gray-100 text-gray-400 font-ui text-sm font-bold uppercase tracking-wider rounded-lg cursor-not-allowed"
                          >
                            Coming Soon
                          </button>
                        ) : (
                          <>
                            <Link
                              href={`/shop/issue-${issue.id}`}
                              className={`flex-1 py-3 px-4 bg-gradient-to-r ${accentGradients[issue.accent as keyof typeof accentGradients]} text-white font-ui text-sm font-bold uppercase tracking-wider rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all text-center`}
                            >
                              Buy Print
                            </Link>
                            <Link
                              href={`/shop/issue-${issue.id}-digital`}
                              className="flex-1 py-3 px-4 bg-white border-2 border-primary-500 text-primary-600 font-ui text-sm font-bold uppercase tracking-wider rounded-lg hover:bg-primary-50 transition-all text-center"
                            >
                              Digital
                            </Link>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Subscribe CTA */}
        <section className="py-16 bg-gradient-to-r from-primary-50 to-accent-purple/50">
          <div className="container">
            <div className="card !bg-white/80 backdrop-blur-sm !border-primary-200 shadow-2xl !p-10 max-w-4xl mx-auto text-center">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-full text-xs font-ui font-bold uppercase tracking-wider mb-4 shadow-lg">
                Special Offer
              </span>
              <h2 className="font-display text-3xl md:text-4xl mb-4">
                Subscribe & Save
              </h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Get all four issues delivered to your door, plus digital access to everything.
                Print subscribers save <span className="font-bold text-accent-orange">$10/year</span> on individual issues.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/subscribe?plan=print"
                  className="px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-ui font-bold uppercase tracking-wider rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all"
                >
                  Subscribe to Print
                </Link>
                <Link
                  href="/subscribe?plan=digital"
                  className="px-8 py-4 bg-white border-2 border-primary-500 text-primary-600 font-ui font-bold uppercase tracking-wider rounded-full hover:bg-primary-50 transition-all"
                >
                  Digital Only
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="container">
            <div className="text-center mb-12">
              <span className="text-xs font-ui text-accent-orange uppercase tracking-widest font-bold mb-2 block">
                Why Subscribe
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold">
                Benefits of Subscribing
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: '',
                  title: 'Delivery',
                  description: 'Quarterly print magazine delivered to your door anywhere in the world.',
                },
                {
                  icon: '',
                  title: 'Digital Access',
                  description: 'Full access to our digital archive and bonus online content.',
                },
                {
                  icon: '',
                  title: 'Save Money',
                  description: 'Subscribers save up to 30% compared to buying individual issues.',
                },
                {
                  icon: '',
                  title: 'Mobile Reading',
                  description: 'Read on any device with our beautifully designed mobile app.',
                },
                {
                  icon: '',
                  title: 'Exclusive Content',
                  description: 'Subscriber-only articles, poems, and early access to new content.',
                },
                {
                  icon: '',
                  title: 'Community',
                  description: 'Join a thoughtful community exploring life\'s big questions.',
                },
              ].map((benefit, index) => (
                <div key={index} className="card !bg-gradient-to-br from-white to-primary-50 !border-primary-100 text-center">
                  {benefit.icon && <div className="text-4xl mb-4">{benefit.icon}</div>}
                  <h3 className="font-display text-xl font-bold mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
