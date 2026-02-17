'use client'

import Link from 'next/link'
import { useState } from 'react'

const articles = [
  {
    id: 1,
    title: 'The Psychology of Algorithms',
    excerpt: 'How recommendation engines shape what we believe, and why that matters for democracy.',
    category: 'The Current',
    badge: 'current',
    date: 'February 15, 2026',
    readTime: '5 min read',
  },
  {
    id: 2,
    title: 'Leadership in Crisis',
    excerpt: 'What the Cuban Missile Crisis teaches us about decision-making under pressure.',
    category: 'The Mirror',
    badge: 'mirror',
    date: 'February 12, 2026',
    readTime: '7 min read',
  },
  {
    id: 3,
    title: 'On Intellectual Humility',
    excerpt: 'Why certainty is overrated and uncertainty is the beginning of wisdom.',
    category: 'The Stand',
    badge: 'stand',
    date: 'February 10, 2026',
    readTime: '6 min read',
  },
  {
    id: 4,
    title: 'The Attention Economy',
    excerpt: 'Your time is being harvested. Here\'s what to do about it.',
    category: 'The Current',
    badge: 'current',
    date: 'February 8, 2026',
    readTime: '4 min read',
  },
  {
    id: 5,
    title: 'Parallels in Financial History',
    excerpt: 'Tulip mania, dot-com bubble, and crypto: what patterns repeat.',
    category: 'The Mirror',
    badge: 'mirror',
    date: 'February 5, 2026',
    readTime: '8 min read',
  },
  {
    id: 6,
    title: 'The Ethics of AI Writing',
    excerpt: 'What happens when machines can create meaning? (What is meaning, anyway?)',
    category: 'The Moment',
    badge: 'moment',
    date: 'February 3, 2026',
    readTime: '6 min read',
  },
]

export default function ArticleGrid() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.map((article) => (
        <Link
          key={article.id}
          href={`/read/${article.id}`}
          className="card group cursor-pointer"
        >
          <span className={`badge badge--${article.badge} mb-4`}>
            {article.category}
          </span>
          <h3 className="card__title group-hover:text-green transition-colors">
            {article.title}
          </h3>
          <p className="card__excerpt">{article.excerpt}</p>
          <div className="card__meta">
            {article.date} · {article.readTime}
          </div>
        </Link>
      ))}
    </div>
  )
}
