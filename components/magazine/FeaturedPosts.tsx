import Link from 'next/link'
import Image from 'next/image'

const featuredPosts = [
  {
    id: 9,
    category: 'Philosophy',
    title: 'The Art of Living',
    excerpt: 'What ancient traditions teach us about the good life.',
    date: 'Feb 7, 2026',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&h=300&fit=crop',
  },
  {
    id: 10,
    category: 'Poetry',
    title: 'Where Words Fail',
    excerpt: 'Exploring the limits of language and the power of silence.',
    date: 'Feb 6, 2026',
    image: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=400&h=300&fit=crop',
  },
  {
    id: 11,
    category: 'Culture',
    title: 'Digital Wisdom',
    excerpt: 'Finding ancient insights in modern technology.',
    date: 'Feb 5, 2026',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop',
  },
  {
    id: 12,
    category: 'Interview',
    title: 'Conversations with Purpose',
    excerpt: 'Meaningful dialogues in an age of noise.',
    date: 'Feb 4, 2026',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=300&fit=crop',
  },
]

export default function FeaturedPosts() {
  return (
    <section className="section bg-cream-light">
      <div className="container">
        <div className="text-center mb-10">
          <span className="badge badge--moment mb-4 inline-block">Featured Posts</span>
          <h2 className="font-display text-3xl md:text-4xl">Curated for You</h2>
          <p className="text-gray-medium mt-2 max-w-2xl mx-auto">
            Deep dives into philosophy, poetry, and the questions that matter.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredPosts.map((post) => (
            <Link key={post.id} href={`/read/${post.id}`} className="group">
              <article className="card !p-0 overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="badge badge--moment">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg mb-2 group-hover:text-green transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-medium mb-3 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <span className="text-xs font-ui text-gray-light">
                    {post.date}
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
