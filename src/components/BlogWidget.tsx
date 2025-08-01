'use client'

import { BlogCard } from './BlogCard'
import { Post } from '../lib/getBlogPosts'
import { NextBtn, PrevBtn, themeConfig } from '../lib/widgetTheme'
import useWidgetLayout from './useWidgetLayout'

export function BlogWidget({ posts }: { posts: Post[] }) {
  const {
    viewportRef,
    handleNext,
    handlePrev,
    canShowNext,
    canShowPrev,
    slideOffsetPx,
    actualCardWidthPx,
    cardsToDisplay,
    cardGapPx,
  } = useWidgetLayout(posts.length, themeConfig.blogCardBaseWidthPx)

  return (
    <div className="reviews-container relative">
      <h2 className="mb-2 text-xl font-bold">Latest Blog Posts</h2>

      {canShowPrev && (
        <PrevBtn onClick={handlePrev} ariaLabel="Previous Blog Posts" />
      )}
      {canShowNext && (
        <NextBtn onClick={handleNext} ariaLabel="Next Blog Posts" />
      )}

      <div ref={viewportRef} className="mx-auto overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(${slideOffsetPx}px)` }}
        >
          {posts.map((post, index) => (
            <div
              key={post.slug}
              className={`flex-shrink-0 ${cardsToDisplay === 1 ? 'mx-auto' : ''}`}
              style={{
                width: `${actualCardWidthPx}px`,
                marginRight:
                  index < posts.length - 1 ? `${cardGapPx}px` : '0px',
                marginLeft:
                  index === 0 && cardsToDisplay === 1
                    ? `${cardGapPx}px`
                    : '0px',
              }}
            >
              <BlogCard post={post} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
