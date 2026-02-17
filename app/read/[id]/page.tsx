import Masthead from '@/components/layout/Masthead'
import Navigation from '@/components/navigation/Navigation'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'

export default function ArticlePage({ params }: { params: { id: string } }) {
  return (
    <>
      <Masthead />
      <Navigation />
      <main>
        <article className="section--large">
          <div className="container container--reading">
            <div className="article__header">
              <span className="badge badge--moment mb-4">The Moment</span>
              <div className="article__meta">
                February 15, 2026 · 8 min read
              </div>
              <h1 className="article__title">
                What Silicon Valley Bank's Collapse Teaches Us About Risk
              </h1>
              <p className="text-xl text-gray-medium">
                When the bank collapsed in March 2023, it wasn't just a failure of risk management.
                It was a failure of imagination. We couldn't conceive that the good times might end.
              </p>
            </div>

            <div className="article__content prose">
              <p>
                In March 2023, Silicon Valley Bank collapsed in 48 hours. The trigger was familiar:
                a bank run. But the cause was something deeper—a failure to imagine that things
                could ever go wrong.
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
                "The ocean doesn't read your resume. It doesn't care about your credentials.
                It just is. Same with markets. Same with life."
                <cite>— Unlettrd, Issue 1</cite>
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

              <h2>Why We Can't Imagine Risk</h2>

              <p>
                The psychologist Daniel Kahneman spent his career studying why we're so bad at
                assessing risk. His conclusion: we're not rational actors who sometimes make
                mistakes. We're emotional creatures who use rationality to justify what we already
                want to believe.
              </p>

              <p>
                When times are good, we want to believe they'll continue. When we've succeeded,
                we want to believe it's because we're smart, not lucky. When everyone around us
                is succeeding too, we want to believe this is the new normal.
              </p>

              <p>
                These are not failures of logic. They are failures of courage. It takes courage to
                acknowledge that what you have can be taken away. It takes courage to live with
                uncertainty. It takes courage to admit that you don't know what happens next.
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
                The collapse of SVB was not an aberration. It was a reminder. Risk doesn't
                disappear just because we stop thinking about it. If anything, that's when it's
                most dangerous.
              </p>
            </div>

            <div className="poem mt-16">
              <p className="poem__line">The ocean doesn't read your resume.</p>
              <p className="poem__line">It doesn't care about your credentials.</p>
              <p className="poem__line">It just is.</p>
              <span className="poem__stanza"></span>
              <p className="poem__line">Same with markets.</p>
              <p className="poem__line">Same with life.</p>
              <span className="poem__stanza"></span>
              <p className="poem__line">What you have today,</p>
              <p className="poem__line">you can lose tomorrow.</p>
              <p className="poem__line">What seems certain,</p>
              <p className="poem__line">is anything but.</p>
              <span className="poem__stanza"></span>
              <p className="poem__line">So make friends with uncertainty.</p>
              <p className="poem__line">Dance with risk.</p>
              <p className="poem__line">Build your house on ground,</p>
              <p className="poem__line">not on waves.</p>
            </div>

            <div className="mt-16 pt-8 border-t" style={{ borderColor: '#e0ddd6' }}>
              <div className="flex flex-wrap gap-4 justify-between items-center">
                <div className="flex gap-4">
                  <span className="tag">#philosophy</span>
                  <span className="tag">#risk</span>
                  <span className="tag">#finance</span>
                  <span className="tag">#stoicism</span>
                </div>
                <div className="flex gap-4">
                  <button className="btn btn--outline btn--small">Share</button>
                  <button className="btn btn--outline btn--small">Save</button>
                </div>
              </div>
            </div>

            <div className="mt-16 text-center">
              <h3 className="text-2xl mb-6">More from Unlettrd</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <Link href="/read/2" className="card">
                  <span className="badge badge--mirror mb-4">The Mirror</span>
                  <h4 className="text-lg mb-2">Leadership in Crisis</h4>
                  <p className="text-sm text-gray-medium">What the Cuban Missile Crisis teaches us about decision-making.</p>
                </Link>
                <Link href="/read/3" className="card">
                  <span className="badge badge--current mb-4">The Current</span>
                  <h4 className="text-lg mb-2">The Attention Economy</h4>
                  <p className="text-sm text-gray-medium">Your time is being harvested. Here's what to do about it.</p>
                </Link>
                <Link href="/read/4" className="card">
                  <span className="badge badge--moment mb-4">The Moment</span>
                  <h4 className="text-lg mb-2">The Ethics of AI</h4>
                  <p className="text-sm text-gray-medium">What happens when machines can create meaning?</p>
                </Link>
              </div>
            </div>

            <div className="mt-16 text-center p-8 bg-cream-light rounded-xl">
              <h3 className="text-2xl mb-4">Enjoy this article?</h3>
              <p className="text-gray-medium mb-6">
                Get weekly philosophy and poetry delivered to your inbox.
              </p>
              <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="form-input flex-1"
                  required
                />
                <button type="submit" className="btn btn--primary">Subscribe</button>
              </form>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
