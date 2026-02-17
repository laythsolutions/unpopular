import BreakingNews from '@/components/magazine/BreakingNews'
import NewsprkHeader from '@/components/magazine/NewsprkHeader'
import TrendingNews from '@/components/magazine/TrendingNews'
import MostViewedSidebar from '@/components/magazine/MostViewedSidebar'
import ScrollToTop from '@/components/magazine/ScrollToTop'
import Link from 'next/link'
import Image from 'next/image'

const topStories = [
  {
    id: 1,
    title: 'The Architecture of Meaning',
    excerpt: 'How we build purpose in a chaotic world',
    category: 'Philosophy',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
    date: 'Feb 15, 2026',
  },
  {
    id: 2,
    title: 'Reflections on Stillness',
    excerpt: 'A collection of poems for uncertain times',
    category: 'Poetry',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&h=300&fit=crop',
    date: 'Feb 14, 2026',
  },
  {
    id: 3,
    title: 'The Death of Attention',
    excerpt: 'How social media rewired our brains',
    category: 'Culture',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop',
    date: 'Feb 13, 2026',
  },
  {
    id: 4,
    title: 'Stoicism in Modern Life',
    excerpt: 'Ancient wisdom for contemporary challenges',
    category: 'Philosophy',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop',
    date: 'Feb 12, 2026',
  },
]

const galleryPosts = [
  {
    id: 1,
    title: 'Japan virus success has puzzled the world',
    category: 'Technology',
    date: 'March 26, 2020',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=300&h=200&fit=crop',
  },
  {
    id: 2,
    title: 'Copa America: Luis Suarez from devastated US',
    category: 'Sports',
    date: 'March 26, 2020',
    image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=300&h=200&fit=crop',
  },
  {
    id: 3,
    title: 'Nancy Zhang a Chinese busy woman and Dhaka',
    category: 'Business',
    date: 'March 26, 2020',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=200&fit=crop',
  },
  {
    id: 4,
    title: 'U.S. Response says he will label regions',
    category: 'Politics',
    date: 'March 26, 2020',
    image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=300&h=200&fit=crop',
  },
  {
    id: 5,
    title: 'Venezuela elan govt and opposit the property',
    category: 'World',
    date: 'March 26, 2020',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=300&h=200&fit=crop',
  },
  {
    id: 6,
    title: 'Cheap smartphone sensor could help you',
    category: 'Technology',
    date: 'March 26, 2020',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=200&fit=crop',
  },
]

const featureNews = [
  {
    id: 1,
    title: 'Best garden wing supplies for the horticultural',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=300&fit=crop',
  },
  {
    id: 2,
    title: 'The billionaire Philanthropist read to learn',
    category: 'Business',
    image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=400&h=300&fit=crop',
  },
  {
    id: 3,
    title: 'Harbour amid a Slovene the down in singer city',
    category: 'Entertainment',
    image: 'https://images.unsplash.com/photo-1516280440614-6697288d5d38?w=400&h=300&fit=crop',
  },
  {
    id: 4,
    title: 'The secret to moving this from sphinx screening',
    category: 'Science',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=300&fit=crop',
  },
]

export default function HomePage() {
  return (
    <>
      <NewsprkHeader />
      <BreakingNews />

      <main>
        {/* Hero Quote - Vibrant */}
        <section className="py-16 bg-gradient-to-br from-primary-600 via-primary-700 to-accent-purple text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-orange rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
          </div>
          <div className="container container--narrow relative z-10">
            <blockquote className="!bg-transparent !border-none !p-0">
              <p className="poem__line text-3xl md:text-5xl font-light leading-tight mb-6">
                "The unexamined life is not worth living."
              </p>
              <cite className="text-primary-200 text-lg font-ui">— Socrates</cite>
            </blockquote>
            <div className="mt-10">
              <Link href="/about" className="btn !bg-white !text-primary-600 hover:!bg-primary-50 !px-8 !py-4 !text-base">
                Discover Our Philosophy
              </Link>
            </div>
          </div>
        </section>

        {/* Top Stories Grid */}
        <section className="py-12">
          <div className="container">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-display text-3xl font-bold">
                <span className="bg-gradient-to-r from-primary-600 to-accent-purple bg-clip-text text-transparent">
                  Top Stories
                </span>
              </h2>
              <div className="flex gap-2">
                <span className="w-3 h-3 rounded-full bg-primary-500"></span>
                <span className="w-3 h-3 rounded-full bg-accent-orange"></span>
                <span className="w-3 h-3 rounded-full bg-accent-purple"></span>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {topStories.map((story) => (
                <Link key={story.id} href={`/read/${story.id}`} className="group">
                  <article className="card !p-0 overflow-hidden hover:shadow-2xl transition-all duration-300">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={story.image}
                        alt={story.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        <span className="px-4 py-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white text-xs font-ui font-bold uppercase tracking-wider rounded-full shadow-lg">
                          {story.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="font-display text-xl leading-tight group-hover:text-primary-600 transition-colors mb-3 font-bold">
                        {story.title}
                      </h3>
                      <p className="text-sm text-gray-500 line-clamp-2 mb-3">
                        {story.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-ui text-gray-400">
                          {story.date}
                        </span>
                        <svg className="w-5 h-5 text-primary-500 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Posts */}
        <section className="py-12 bg-gradient-to-b from-primary-50 to-white">
          <div className="container">
            <div className="card !p-8 !bg-white shadow-xl">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="font-display text-2xl font-bold uppercase tracking-wider bg-gradient-to-r from-primary-600 to-accent-purple bg-clip-text text-transparent">
                    Gallery Post
                  </h2>
                  <p className="text-sm text-gray-500 mt-2">Curated visual stories</p>
                </div>
                <div className="flex gap-2">
                  <button className="w-12 h-12 flex items-center justify-center border-2 border-primary-500 rounded-full hover:bg-primary-500 hover:text-white transition-all">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button className="w-12 h-12 flex items-center justify-center border-2 border-primary-500 rounded-full hover:bg-primary-500 hover:text-white transition-all">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {galleryPosts.map((post) => (
                  <Link key={post.id} href={`/read/${post.id}`} className="group">
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <span className="text-xs font-ui text-accent-orange uppercase tracking-wider mb-2 block font-bold">
                          {post.category}
                        </span>
                        <h4 className="font-display text-base text-white leading-tight line-clamp-2 group-hover:text-primary-300 transition-colors">
                          {post.title}
                        </h4>
                        <span className="text-xs text-white/60 font-ui mt-2 block">
                          {post.date}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Feature News */}
        <section className="py-12">
          <div className="container">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-display text-3xl font-bold uppercase tracking-wider">
                <span className="bg-gradient-to-r from-accent-orange to-accent-purple bg-clip-text text-transparent">
                  Feature News
                </span>
              </h2>
              <Link href="/read" className="font-ui text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors flex items-center gap-2">
                View All
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featureNews.map((news) => (
                <Link key={news.id} href={`/read/${news.id}`} className="group">
                  <div className="card !p-0 overflow-hidden hover:shadow-2xl transition-all duration-300">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={news.image}
                        alt={news.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    </div>
                    <div className="p-5">
                      <span className="text-xs font-ui text-accent-purple uppercase tracking-wider mb-2 block font-bold">
                        {news.category}
                      </span>
                      <h4 className="font-display text-sm leading-tight group-hover:text-primary-600 transition-colors line-clamp-2 font-semibold">
                        {news.title}
                      </h4>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Trending News + Sidebar */}
        <section className="py-12 bg-primary-50">
          <div className="container">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <TrendingNews />
              </div>
              <div className="lg:col-span-1">
                <MostViewedSidebar />
              </div>
            </div>
          </div>
        </section>

        {/* Ad Space */}
        <section className="py-6">
          <div className="container">
            <div className="w-full h-24 bg-gradient-to-r from-primary-100 to-accent-purple/50 rounded-xl flex items-center justify-center text-primary-600 font-ui text-sm border-2 border-dashed border-primary-300">
              Advertisement Space (728x90)
            </div>
          </div>
        </section>

        {/* Entertainment Section */}
        <section className="pt-6 pb-12">
          <div className="container">
            <div className="flex items-end justify-between mb-8">
              <div>
                <span className="text-xs font-ui text-accent-orange uppercase tracking-widest font-bold mb-2 block">
                  Latest Updates
                </span>
                <h2 className="font-display text-3xl font-bold uppercase tracking-wider">
                  Entertainment
                </h2>
              </div>
              <Link href="/category/entertainment" className="font-ui text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors flex items-center gap-2">
                View All
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {galleryPosts.slice(0, 4).map((post) => (
                <Link key={post.id} href={`/read/${post.id}`} className="group">
                  <div className="card !p-0 overflow-hidden hover:shadow-2xl transition-all duration-300">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <span className="text-xs font-ui text-accent-orange uppercase tracking-wider mb-2 block font-bold">
                          {post.category}
                        </span>
                        <h4 className="font-display text-sm text-white leading-tight line-clamp-2 group-hover:text-primary-300 transition-colors">
                          {post.title}
                        </h4>
                        <span className="text-xs text-white/60 font-ui">
                          {post.date}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Sports Section */}
        <section className="py-12 bg-gradient-to-br from-accent-orange/10 to-accent-purple/10">
          <div className="container">
            <div className="flex items-end justify-between mb-8">
              <div>
                <span className="text-xs font-ui text-accent-purple uppercase tracking-widest font-bold mb-2 block">
                  Don't Miss
                </span>
                <h2 className="font-display text-3xl font-bold uppercase tracking-wider">
                  Sports
                </h2>
                <p className="text-gray-500 text-sm mt-1">
                  Latest sports news and updates
                </p>
              </div>
              <Link href="/category/sports" className="font-ui text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors flex items-center gap-2">
                Read more →
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
              {galleryPosts.slice(0, 5).map((post, index) => (
                <Link key={post.id} href={`/read/${post.id}`} className="group">
                  <div className="card !p-0 overflow-hidden hover:shadow-2xl transition-all duration-300">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="w-8 h-8 flex items-center justify-center bg-accent-orange text-white font-display font-bold rounded-full text-sm shadow-lg">
                          {index + 1}
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <span className="text-xs font-ui text-accent-purple uppercase tracking-wider mb-1 block font-bold">
                        {post.category}
                      </span>
                      <h4 className="font-display text-xs leading-tight group-hover:text-primary-600 transition-colors line-clamp-2 font-semibold">
                        {post.title}
                      </h4>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Subscribe CTA - Vibrant */}
        <section className="py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-accent-purple text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-orange/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-purple/30 rounded-full blur-3xl"></div>
          </div>
          <div className="container text-center relative z-10">
            <div className="max-w-2xl mx-auto">
              <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-xs font-ui font-bold uppercase tracking-widest mb-6">
                Join Our Community
              </span>
              <h2 className="font-display text-4xl md:text-5xl mb-6 font-bold">
                Subscribe to <span className="text-brand-red">UN</span>Popular
              </h2>
              <p className="text-lg text-primary-100 mb-10">
                Philosophy and poetry for the present moment. Get weekly content delivered to your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-6 py-4 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white placeholder-white/50 font-ui focus:outline-none focus:border-white focus:bg-white/20 transition-all"
                  required
                />
                <button className="px-8 py-4 bg-gradient-to-r from-accent-orange to-accent-orange-dark text-white font-ui font-bold uppercase tracking-wider rounded-full hover:shadow-2xl hover:scale-105 transition-all">
                  Subscribe Free
                </button>
              </form>
              <p className="mt-6 text-sm text-primary-200 font-ui">
                No spam. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Vibrant Footer */}
      <footer className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary-500 to-accent-purple"></div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-purple/20 rounded-full blur-3xl"></div>

        <div className="container relative z-10">
          {/* Logo and tagline */}
          <div className="text-center mb-12">
            <Link href="/" className="inline-block mb-4">
              <span className="font-display text-5xl md:text-6xl font-black tracking-wider">
                <span className="text-brand-red">UN</span><span className="text-white">Popular</span>
              </span>
            </Link>
            <p className="text-gray-400 font-ui text-sm uppercase tracking-widest">
              Philosophy and Poetry for the Present Moment
            </p>
          </div>

          {/* Social links */}
          <div className="flex justify-center gap-4 mb-12">
            {[
              { name: 'Twitter', icon: '𝕏' },
              { name: 'Instagram', icon: '📷' },
              { name: 'Facebook', icon: 'f' },
              { name: 'YouTube', icon: '▶' },
            ].map((social) => (
              <a
                key={social.name}
                href="#"
                className="w-12 h-12 flex items-center justify-center bg-white/5 hover:bg-primary-500 rounded-full transition-all duration-300 hover:scale-110 border border-white/10"
                aria-label={social.name}
              >
                <span className="text-lg">{social.icon}</span>
              </a>
            ))}
          </div>

          {/* Footer links */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="font-ui text-sm font-bold uppercase tracking-wider mb-4 text-primary-400">
                Categories
              </h4>
              <ul className="space-y-3">
                {['Philosophy', 'Poetry', 'Culture', 'Interviews', 'Essays', 'Reviews'].map((item) => (
                  <li key={item}>
                    <Link
                      href={`/category/${item.toLowerCase()}`}
                      className="text-gray-400 hover:text-primary-400 transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-ui text-sm font-bold uppercase tracking-wider mb-4 text-accent-orange">
                Explore
              </h4>
              <ul className="space-y-3">
                {['Arts & Culture', 'Literature', 'Travel', 'Style', 'Health'].map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-accent-orange transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-orange opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-ui text-sm font-bold uppercase tracking-wider mb-4 text-accent-purple">
                Opinion
              </h4>
              <ul className="space-y-3">
                {['Today\'s Opinion', 'Contributing Writers', 'Collections', 'Product Reviews'].map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-accent-purple transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-purple opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-ui text-sm font-bold uppercase tracking-wider mb-4 text-brand-red">
                Company
              </h4>
              <ul className="space-y-3">
                {['About', 'Contact', 'Privacy Policy', 'Terms of Service', 'Advertise'].map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-brand-red transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-red opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="max-w-md mx-auto mb-12">
            <div className="card !bg-white/5 backdrop-blur-sm !border-white/10 text-center">
              <h4 className="font-display text-xl mb-2">Newsletter</h4>
              <p className="text-gray-400 text-sm mb-4">Get the latest stories delivered to your inbox</p>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 font-ui text-sm focus:outline-none focus:border-primary-500"
                  required
                />
                <button className="px-6 py-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-ui font-semibold rounded-lg hover:from-primary-600 hover:to-primary-700 transition-all">
                  Join
                </button>
              </form>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-white/10">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-gray-500 font-ui text-sm">
                © Copyright 2026, <span className="text-brand-red">UN</span>Popular. All Rights Reserved.
              </p>
              <div className="flex items-center gap-6">
                <Link href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Privacy</Link>
                <Link href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Terms</Link>
                <Link href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Cookies</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <ScrollToTop />
    </>
  )
}
