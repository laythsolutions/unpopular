'use client'

import Masthead from '@/components/layout/Masthead'
import Navigation from '@/components/navigation/Navigation'
import Footer from '@/components/layout/Footer'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('Thank you for your message. We\'ll be in touch soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <>
      <Masthead />
      <Navigation />
      <main>
        <section className="section--large">
          <div className="container container--narrow">
            <h1 className="text-4xl md:text-5xl text-center mb-6">Contact</h1>
            <p className="text-xl text-center text-gray-medium mb-12">
              Have a question, feedback, or just want to say hello? We'd love to hear from you.
            </p>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl mb-6">Get in Touch</h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-ui text-sm font-semibold uppercase tracking-wider mb-2">
                      Email
                    </h3>
                    <a href="mailto:hello@unlettrd.com" className="text-green hover:underline">
                      hello@unlettrd.com
                    </a>
                    <p className="text-sm text-gray-medium mt-1">
                      General inquiries, feedback, and press
                    </p>
                  </div>

                  <div>
                    <h3 className="font-ui text-sm font-semibold uppercase tracking-wider mb-2">
                      Support
                    </h3>
                    <a href="mailto:support@unlettrd.com" className="text-green hover:underline">
                      support@unlettrd.com
                    </a>
                    <p className="text-sm text-gray-medium mt-1">
                      Subscription issues, shipping, and orders
                    </p>
                  </div>

                  <div>
                    <h3 className="font-ui text-sm font-semibold uppercase tracking-wider mb-2">
                      Social Media
                    </h3>
                    <div className="flex gap-4">
                      <a
                        href="https://twitter.com/unlettrd"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green hover:underline"
                      >
                        Twitter/X
                      </a>
                      <a
                        href="https://instagram.com/unlettrd"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green hover:underline"
                      >
                        Instagram
                      </a>
                      <a
                        href="https://linkedin.com/company/unlettrd"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green hover:underline"
                      >
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <form onSubmit={handleSubmit} className="card">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="form-input"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="form-input"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject" className="form-label">
                      Subject
                    </label>
                    <select
                      id="subject"
                      className="form-select"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                    >
                      <option value="">Select a topic</option>
                      <option value="general">General Inquiry</option>
                      <option value="subscription">Subscription Question</option>
                      <option value="order">Order Issue</option>
                      <option value="feedback">Feedback</option>
                      <option value="press">Press/Media</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="form-textarea"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>

                  <button type="submit" className="btn btn--primary w-full">
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            <div className="mt-16 text-center">
              <div className="card max-w-2xl mx-auto">
                <h2 className="text-xl mb-4">Before You Reach Out</h2>
                <div className="text-left space-y-2 text-gray-medium">
                  <p>❓ <strong>Have a question about subscriptions?</strong> Check our <a href="/faq" className="text-green hover:underline">FAQ</a>.</p>
                  <p>❓ <strong>Looking for your order?</strong> Check your email for order confirmation and tracking.</p>
                  <p>❓ <strong>Want to submit a pitch?</strong> We're currently not accepting submissions.</p>
                  <p>❓ <strong>Interested in advertising?</strong> Email us at <a href="mailto:ads@unlettrd.com" className="text-green hover:underline">ads@unlettrd.com</a>.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
