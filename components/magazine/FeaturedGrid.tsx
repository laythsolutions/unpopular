import Link from 'next/link'
import Image from 'next/image'

const featuredArticles = [
  {
    id: 1,
    category: 'Philosophy',
    categoryType: 'moment',
    title: 'The Architecture of Meaning: How We Build Purpose in a Chaotic World',
    excerpt: 'In an age of unprecedented choice, the question of what matters has become both more urgent and more elusive.',
    author: 'Leon Guy',
    date: 'Feb 15, 2026',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
    featured: true,
  },
  {
    id: 2,
    category: 'Poetry',
    categoryType: 'mirror',
    title: 'Reflections on Stillness',
    excerpt: 'A collection of poems exploring the spaces between thoughts.',
    author: 'Sarah Chen',
    date: 'Feb 14, 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&h=300&fit=crop',
    featured: false,
  },
  {
    id: 3,
    category: 'Culture',
    categoryType: 'current',
    title: 'The Death of Attention',
    excerpt: 'How social media rewired our brains and what it means for the future of deep thought.',
    author: 'Marcus Webb',
    date: 'Feb 13, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop',
    featured: false,
  },
  {
    id: 4,
    category: 'Interview',
    categoryType: 'stand',
    title: 'In Conversation: A Philosopher on Modern Life',
    excerpt: 'Professor Amara Okafor discusses ancient wisdom in digital times.',
    author: 'Editorial Team',
    date: 'Feb 12, 2026',
    readTime: '12 min read',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop',
    featured: false,
  },
]

const categoryColors: Record<string, string> = {
  moment: 'bg-cream-light text-green',
  mirror: 'bg-cream-light text-amber-800',
  current: 'bg-cream-light text-blue-800',
  stand: 'bg-cream-light text-red-800',
}

export default function FeaturedGrid() {
  const mainArticle = featuredArticles[0]
  const sideArticles = featuredArticles.slice(1)

  return (
    <section className="section">
      <div className="container">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Featured Article - Takes 2 columns */}
          <Link href={`/read/${mainArticle.id}`} className="lg:col-span-2 group">
            <article className="relative h-full min-h-[500px] rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="absolute inset-0">
                <Image
                  src={mainArticle.image}
                  alt={mainArticle.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-transparent"></div>
              </div>
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <span className={`inline-block text-xs font-ui font-bold uppercase tracking-wider ${categoryColors[mainArticle.categoryType]} px-3 py-1 rounded-full mb-4 w-fit`}>
                  {mainArticle.category}
                </span>
                <h2 className="font-display text-3xl md:text-4xl text-cream-light mb-3 leading-tight">
                  {mainArticle.title}
                </h2>
                <p className="text-cream-light/80 text-lg mb-4 line-clamp-2">
                  {mainArticle.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-cream-light/60 font-ui">
                  <span className="font-medium">{mainArticle.author}</span>
                  <span>·</span>
                  <span>{mainArticle.date}</span>
                  <span>·</span>
                  <span>{mainArticle.readTime}</span>
                </div>
              </div>
            </article>
          </Link>

          {/* Side Articles - 1 column */}
          <div className="flex flex-col gap-6">
            {sideArticles.map((article) => (
              <Link key={article.id} href={`/read/${article.id}`} className="group flex-1">
                <article className="relative h-full min-h-[240px] rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="absolute inset-0">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-transparent"></div>
                  </div>
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <span className={`inline-block text-xs font-ui font-bold uppercase tracking-wider ${categoryColors[article.categoryType]} px-3 py-1 rounded-full mb-3 w-fit`}>
                      {article.category}
                    </span>
                    <h3 className="font-display text-xl text-cream-light mb-2 leading-tight line-clamp-2">
                      {article.title}
                    </h3>
                    <div className="flex items-center gap-3 text-xs text-cream-light/60 font-ui">
                      <span>{article.date}</span>
                      <span>·</span>
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
