import Link from 'next/link'
import Image from 'next/image'

export default function FeaturedArticle() {
  return (
    <article className="card">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <span className="badge badge--moment mb-4">The Moment</span>
          <h2 className="text-3xl md:text-4xl mb-4">
            What Silicon Valley Bank's Collapse Teaches Us About Risk
          </h2>
          <p className="text-lg text-gray-medium mb-6">
            When the bank collapsed in March 2023, it wasn't just a failure of risk management.
            It was a failure of imagination. We couldn't conceive that the good times might end.
          </p>
          <Link href="/read/silicon-valley-bank-risk" className="btn btn--primary">
            Read Full Article
          </Link>
        </div>
        <div className="relative h-64 md:h-80 bg-gradient-to-br from-green/20 to-green/10 rounded-lg flex items-center justify-center">
          <div className="poem text-center p-6">
            <p className="poem__line">The ocean doesn't read your resume.</p>
            <p className="poem__line">It doesn't care about your credentials.</p>
            <p className="poem__line">It just is.</p>
            <p className="poem__line mt-4">Same with markets.</p>
            <p className="poem__line">Same with life.</p>
          </div>
        </div>
      </div>
    </article>
  )
}
