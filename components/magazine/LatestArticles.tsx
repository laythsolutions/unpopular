import Link from 'next/link'
import Image from 'next/image'

const latestArticles = [
  {
    id: 5,
    category: 'Philosophy',
    categoryType: 'moment',
    title: 'The Wisdom of Insecurity',
    excerpt: 'Alan Watts\' exploration of anxiety and presence remains remarkably relevant.',
    author: 'Elena Rodriguez',
    date: 'Feb 11, 2026',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=250&fit=crop',
  },
  {
    id: 6,
    category: 'Poetry',
    categoryType: 'mirror',
    title: 'Five Poems for Uncertain Times',
    excerpt: 'Verses that speak to the heart of our collective uncertainty.',
    author: 'Leon Guy',
    date: 'Feb 10, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1474932430478-367dbb6832c1?w=400&h=250&fit=crop',
  },
  {
    id: 7,
    category: 'Culture',
    categoryType: 'current',
    title: 'The Return of the Long Read',
    excerpt: 'Why deep reading is making a comeback in the age of TikTok.',
    author: 'David Park',
    date: 'Feb 9, 2026',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=250&fit=crop',
  },
  {
    id: 8,
    category: 'Interview',
    categoryType: 'stand',
    title: 'A Life in Philosophy: Conversation with Dr. Amara Okafor',
    excerpt: 'On teaching, thinking, and the future of philosophical inquiry.',
    author: 'Editorial Team',
    date: 'Feb 8, 2026',
    readTime: '15 min read',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop',
  },
]

const categoryColors: Record<string, string> = {
  moment: 'badge--moment',
  mirror: 'badge--mirror',
  current: 'badge--current',
  stand: 'badge--stand',
}

export default function LatestArticles() {
  return (
    <section className="section">
      <div className="container">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-display text-3xl">Latest Articles</h2>
          <Link href="/read" className="font-ui text-sm font-semibold text-green hover:text-green-dark transition-colors">
            View All →
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {latestArticles.map((article) => (
            <Link key={article.id} href={`/read/${article.id}`} className="group">
              <article className="card !p-0 !bg-transparent overflow-hidden hover:!shadow-lg transition-all duration-300">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="relative sm:w-1/3 aspect-video sm:aspect-square rounded-lg overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex-1 p-4 flex flex-col">
                    <span className={`badge ${categoryColors[article.categoryType]} w-fit mb-3`}>
                      {article.category}
                    </span>
                    <h3 className="font-display text-xl mb-2 group-hover:text-green transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-medium text-sm mb-3 line-clamp-2">
                      {article.excerpt}
                    </p>
                    <div className="mt-auto flex items-center gap-3 text-xs font-ui text-gray-light">
                      <span className="text-gray-medium">{article.author}</span>
                      <span>·</span>
                      <span>{article.date}</span>
                      <span>·</span>
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
