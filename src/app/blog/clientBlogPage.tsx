'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { Post } from './page.tsx'

interface ClientBlogPageProps {
  posts: Post[]
}

export function ClientBlogPage({ posts }: ClientBlogPageProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

  const allTags = useMemo(() => {
    const tags = new Set<string>()
    posts.forEach((post) => {
      if (post.tags && Array.isArray(post.tags)) {
        post.tags.forEach((tag) => tags.add(tag))
      }
    })
    return Array.from(tags)
  }, [posts])

  const filteredPosts = useMemo(() => {
    const lowercasedSearchTerm = searchTerm.toLowerCase()

    return posts.filter((post) => {
      // Search both title and content
      const matchesSearch =
        searchTerm === '' ||
        post.title.toLowerCase().includes(lowercasedSearchTerm) ||
        post.content.toLowerCase().includes(lowercasedSearchTerm)

      const postTags = post.tags || []
      const matchesTag = selectedTag ? postTags.includes(selectedTag) : true

      return matchesSearch && matchesTag
    })
  }, [posts, searchTerm, selectedTag])

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="heading-wrapper">
        <h1 className="heading center">Blog</h1>
        <p className="center mt-0 text-lg text-gray-50">
          Insights on massage, wellness, and injury recovery.
        </p>
      </header>
      <div className="content-container px-4 py-12 sm:px-6 lg:px-8">
        {/* --- Search and Filter UI --- */}
        <div className="z-10 mb-10 rounded-xl border border-gray-200 bg-gray-50/80 p-4 backdrop-blur-sm">
          <div className="mx-auto max-w-3xl">
            <input
              type="text"
              placeholder="Search articles by title or content..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-shadow focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            />
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              <button
                onClick={() => setSelectedTag(null)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  selectedTag === null
                    ? 'bg-blue-600 text-white shadow'
                    : 'border bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                All Posts
              </button>
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`rounded-full px-4 py-2 text-sm font-medium capitalize transition-colors ${
                    selectedTag === tag
                      ? 'bg-blue-600 text-white shadow'
                      : 'border bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* --- Blog Post Grid --- */}
        {filteredPosts.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post) => (
              <Link href={`/blog/${post.slug}`} key={post.slug} legacyBehavior>
                <a className="group block overflow-hidden rounded-xl bg-white shadow-md transition-shadow duration-300 hover:shadow-xl">
                  <div className="relative">
                    <img
                      src={post.coverImage}
                      alt={`Cover image for ${post.title}`}
                      className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20"></div>
                  </div>
                  <div className="p-6">
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
                    <h3 className="text-xl font-bold text-gray-900 transition-colors group-hover:text-blue-600">
                      {post.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-500">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </p>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        ) : (
          <div className="py-16 text-center">
            <h3 className="text-2xl font-semibold text-gray-700">
              No Articles Found
            </h3>
            <p className="mt-2 text-gray-500">
              Try adjusting your search or filter criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
