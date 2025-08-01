'use client'

import Link from 'next/link'
import { Post } from '../lib/getBlogPosts'

interface BlogCardProps {
  post: Post
  compact?: boolean // Optional for smaller display
}

export function BlogCard({ post, compact = false }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} legacyBehavior>
      <a className="group block w-full overflow-hidden rounded-xl bg-white shadow-md transition-shadow duration-300 hover:shadow-xl">
        <div className="relative">
          <img
            src={post.coverImage}
            alt={`Cover image for ${post.title}`}
            className={`w-full object-cover transition-transform duration-300 group-hover:scale-105 ${
              compact ? 'h-40' : 'h-64'
            }`}
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        <div className="p-4">
          <div className="mb-2 flex flex-wrap gap-2">
            {(post.tags || []).map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-blue-100 px-2 py-1 text-xs font-semibold capitalize text-blue-800"
              >
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600">
            {post.title}
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            {new Date(post.lastEdited || post.date).toLocaleDateString(
              'en-US',
              {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              },
            )}
          </p>
        </div>
      </a>
    </Link>
  )
}
