import Link from 'next/link'

export default function SubscribeCTA() {
  return (
    <div className="text-center">
      <h2 className="text-3xl md:text-4xl mb-6">Join Unlettrd</h2>
      <p className="text-xl text-gray-medium mb-8 leading-relaxed">
        Support independent philosophy and poetry. Get weekly articles, quarterly magazines,
        and join a community of thoughtful readers.
      </p>
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="card text-center">
          <h3 className="text-2xl mb-2">Digital</h3>
          <p className="text-4xl font-bold mb-4">$10<span className="text-lg font-normal">/mo</span></p>
          <ul className="text-left text-gray-medium space-y-2 mb-6">
            <li>✓ Full website access</li>
            <li>✓ Digital magazine issues</li>
            <li>✓ Weekly newsletter</li>
            <li>✓ Early access to articles</li>
          </ul>
          <Link href="/subscribe?plan=digital" className="btn btn--secondary w-full">
            Choose Digital
          </Link>
        </div>

        <div className="card text-center border-2 border-green">
          <span className="badge badge--moment mb-4">Most Popular</span>
          <h3 className="text-2xl mb-2">Print + Digital</h3>
          <p className="text-4xl font-bold mb-4">$25<span className="text-lg font-normal">/mo</span></p>
          <ul className="text-left text-gray-medium space-y-2 mb-6">
            <li>✓ Everything in Digital</li>
            <li>✓ Quarterly print magazine</li>
            <li>✓ Print-only content</li>
            <li>✓ 10% shop discount</li>
          </ul>
          <Link href="/subscribe?plan=print" className="btn btn--primary w-full">
            Choose Print
          </Link>
        </div>

        <div className="card text-center">
          <span className="badge badge--stand mb-4">Founding Member</span>
          <h3 className="text-2xl mb-2">Founding</h3>
          <p className="text-4xl font-bold mb-4">$500<span className="text-lg font-normal">/yr</span></p>
          <ul className="text-left text-gray-medium space-y-2 mb-6">
            <li>✓ Everything in Print</li>
            <li>✓ Signed editions</li>
            <li>✓ Name in masthead</li>
            <li>✓ Annual hardcover anthology</li>
          </ul>
          <Link href="/subscribe?plan=founding" className="btn btn--outline w-full">
            Join Founding
          </Link>
        </div>
      </div>
      <p className="text-sm text-gray-medium">
        All subscriptions include a 7-day free trial. Cancel anytime.
      </p>
    </div>
  )
}
