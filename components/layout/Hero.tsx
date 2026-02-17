import Link from 'next/link'

export default function Hero() {
  return (
    <section className="section--large bg-cream-light">
      <div className="container container--narrow text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
          Philosophy and Poetry for the Present Moment
        </h1>
        <p className="text-xl md:text-2xl text-gray-medium mb-8 leading-relaxed">
          Examining current and historical events through the lens of accessible philosophy,
          distilling complex truths into poetry that resonates.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/read" className="btn btn--large btn--primary">
            Start Reading
          </Link>
          <Link href="/subscribe" className="btn btn--large btn--outline">
            Subscribe
          </Link>
        </div>
      </div>
    </section>
  )
}
