'use client'

import React, { useState, useEffect, FC, useCallback, useRef } from 'react'
import {
  GoogleReviewsWidgetProps,
  Review,
  ReviewCardProps,
  StarRatingProps,
} from '../../models/reviews'

const themeConfig = {
  widgetBg: 'bg-white', // Background for the entire widget area
  headerTextColor: 'text-gray-800', // Color for "Google Reviews" title
  ratingTextColor: 'text-gray-700', // Color for the average rating number
  basedOnTextColor: 'text-gray-500', // Color for "based on X reviews"
  writeReviewButton:
    'bg-green-900 text-white px-5 py-2.5 rounded-3xl text-md font-medium hover:bg-blue-700 transition-colors',
  arrowButtonBg: 'bg-green-900/80 hover:bg-white/90', // Background for prev/next arrows
  arrowButtonIconColor: 'text-gray-100',
  cardBg: 'reviews-bg',
  cardBorder: 'border-gray-200',
  cardReviewerNameColor: 'text-gray-800',
  cardDateColor: 'text-gray-500',
  cardCommentColor: 'text-gray-600',
  cardReadMoreColor: 'text-blue-600 hover:underline',
  starColorFilled: 'text-yellow-400',
  starColorEmpty: 'text-gray-300',
  googleIconColor: 'text-gray-400', // For the small Google G on cards
  fontFamily: 'font-sans', // Overall font family
  // Sizing and Gap Configuration (in pixels)
  cardWidthPx: 290, // Nominal width of a single review card
  cardGapPx: 16, // Gap between review cards (Tailwind space-4 = 1rem = 16px)
}

const GoogleLogoFull: FC<{ className?: string }> = ({
  className = 'h-6 w-auto mr-2 inline',
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 85 36"
    className={className}
  >
    <g clip-path="url(#a-15)">
      <path
        fill="#4285F4"
        d="M20.778 13.43h-9.862v2.927h6.994c-.345 4.104-3.76 5.854-6.982 5.854-4.123 0-7.72-3.244-7.72-7.791 0-4.43 3.429-7.841 7.73-7.841 3.317 0 5.272 2.115 5.272 2.115l2.049-2.122s-2.63-2.928-7.427-2.928C4.725 3.644 0 8.8 0 14.367c0 5.457 4.445 10.777 10.988 10.777 5.756 0 9.969-3.942 9.969-9.772 0-1.23-.179-1.941-.179-1.941Z"
      ></path>
      <path
        fill="#EA4335"
        d="M28.857 11.312c-4.047 0-6.947 3.163-6.947 6.853 0 3.744 2.813 6.966 6.994 6.966 3.786 0 6.887-2.893 6.887-6.886 0-4.576-3.607-6.933-6.934-6.933Zm.04 2.714c1.99 0 3.876 1.609 3.876 4.201 0 2.538-1.878 4.192-3.885 4.192-2.205 0-3.945-1.766-3.945-4.212 0-2.394 1.718-4.181 3.954-4.181Z"
      ></path>
      <path
        fill="#FBBC05"
        d="M43.965 11.312c-4.046 0-6.946 3.163-6.946 6.853 0 3.744 2.813 6.966 6.994 6.966 3.785 0 6.886-2.893 6.886-6.886 0-4.576-3.607-6.933-6.934-6.933Zm.04 2.714c1.99 0 3.876 1.609 3.876 4.201 0 2.538-1.877 4.192-3.885 4.192-2.205 0-3.945-1.766-3.945-4.212 0-2.394 1.718-4.181 3.955-4.181Z"
      ></path>
      <path
        fill="#4285F4"
        d="M58.783 11.319c-3.714 0-6.634 3.253-6.634 6.904 0 4.16 3.385 6.918 6.57 6.918 1.97 0 3.017-.782 3.79-1.68v1.363c0 2.384-1.448 3.812-3.633 3.812-2.11 0-3.169-1.57-3.537-2.46l-2.656 1.11c.943 1.992 2.839 4.07 6.215 4.07 3.693 0 6.508-2.327 6.508-7.205V11.734h-2.897v1.17c-.89-.96-2.109-1.585-3.726-1.585Zm.269 2.709c1.821 0 3.69 1.554 3.69 4.21 0 2.699-1.865 4.187-3.73 4.187-1.98 0-3.823-1.608-3.823-4.161 0-2.653 1.914-4.236 3.863-4.236Z"
      ></path>
      <path
        fill="#EA4335"
        d="M78.288 11.302c-3.504 0-6.446 2.788-6.446 6.901 0 4.353 3.28 6.934 6.782 6.934 2.924 0 4.718-1.6 5.789-3.032l-2.389-1.59c-.62.962-1.656 1.902-3.385 1.902-1.943 0-2.836-1.063-3.39-2.094l9.266-3.845-.48-1.126c-.896-2.207-2.984-4.05-5.747-4.05Zm.12 2.658c1.263 0 2.171.671 2.557 1.476l-6.187 2.586c-.267-2.002 1.63-4.062 3.63-4.062Z"
      ></path>
      <path fill="#34A853" d="M67.425 24.727h3.044V4.359h-3.044v20.368Z"></path>
    </g>
    <defs>
      <clipPath id="a-15">
        <path fill="#fff" d="M0 0h84.515v36H0z"></path>
      </clipPath>
    </defs>
  </svg>
)

const GoogleGIcon: FC<{ className?: string }> = ({ className = 'h-5 w-5' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    // width="800px"
    // height="800px"
    viewBox="0 0 300 300
  "
    // preserveAspectRatio="xMidYMid"
  >
    <path
      d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
      fill="#4285F4"
    />
    <path
      d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
      fill="#34A853"
    />
    <path
      d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
      fill="#FBBC05"
    />
    <path
      d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
      fill="#EB4335"
    />
  </svg>
)

const StarRating: FC<StarRatingProps> = ({
  rating,
  starSize = 'h-5 w-5',
  label,
}) => {
  const totalStars = 5
  let numericRating = 0

  if (typeof rating === 'string') {
    switch (rating) {
      case 'FIVE_STAR':
        numericRating = 5
        break
      case 'FOUR_STAR':
        numericRating = 4
        break
      case 'THREE_STAR':
        numericRating = 3
        break
      case 'TWO_STAR':
        numericRating = 2
        break
      case 'ONE_STAR':
        numericRating = 1
        break
      default:
        const parsedRating = parseFloat(rating)
        numericRating = isNaN(parsedRating)
          ? 0
          : Math.max(0, Math.min(parsedRating, 5))
        break
    }
  } else if (typeof rating === 'number') {
    numericRating = Math.max(0, Math.min(rating, 5))
  }

  return (
    <div
      className="flex items-center"
      aria-label={
        label || `${numericRating.toFixed(1)} out of ${totalStars} stars`
      }
    >
      {[...Array(totalStars)].map((_, index) => (
        <svg
          key={index}
          className={`${starSize} ${index < numericRating ? themeConfig.starColorFilled : themeConfig.starColorEmpty} ${index < Math.ceil(numericRating) && index >= Math.floor(numericRating) && numericRating % 1 !== 0 ? `${themeConfig.starColorFilled} opacity-50` : ''}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

const formatDate = (dateString?: string | null): string => {
  // (Implementation remains the same as previous version)
  if (!dateString) return ''
  const date: Date = new Date(dateString)
  if (isNaN(date.getTime())) return 'a while ago'
  const now: Date = new Date()
  const diffInMilliseconds: number = now.getTime() - date.getTime()
  if (diffInMilliseconds < 0) return 'just now'
  const diffInSeconds: number = Math.floor(diffInMilliseconds / 1000)
  const minutes = Math.floor(diffInSeconds / 60)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)
  const weeks = Math.floor(days / 7)
  const months = Math.floor(days / 30.44)
  const years = Math.floor(days / 365.25)
  if (years > 0) return `${years} year${years > 1 ? 's' : ''} ago`
  if (months > 0) return `${months} month${months > 1 ? 's' : ''} ago`
  if (weeks > 0) return `${weeks} week${weeks > 1 ? 's' : ''} ago`
  if (days > 0) return `${days} day${days > 1 ? 's' : ''} ago`
  if (hours > 0) return `${hours} hour${hours > 1 ? 's' : ''} ago`
  if (minutes > 0) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`
  return `just now`
}

const ReviewCard: FC<ReviewCardProps> = ({ review }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [imgError, setImgError] = useState(false)
  const MAX_LENGTH = 120

  const reviewerName = review.reviewer?.displayName || 'Anonymous'
  const profilePhotoUrl = review.reviewer?.profilePhotoUrl
  const comment = review.comment || ''

  const toggleReadMore = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setIsExpanded(!isExpanded)
  }

  const getInitials = (name: string): string => {
    if (!name) return '?'
    const parts = name.split(' ').filter(Boolean)
    if (parts.length === 0) return '?'
    if (parts.length === 1) return parts[0].charAt(0).toUpperCase()
    return (
      parts[0].charAt(0).toUpperCase() +
      parts[parts.length - 1].charAt(0).toUpperCase()
    )
  }

  useEffect(() => {
    setImgError(false)
  }, [profilePhotoUrl])

  return (
    // Card has a fixed width defined by themeConfig.cardWidthPx
    // Height is h-full to stretch within its parent if the parent controls height (e.g. in a grid row)
    // For flex track, height will be determined by content or a fixed height on the track.
    <div
      className={`${themeConfig.cardBg} rounded-lg border p-4 md:p-5 ${themeConfig.cardBorder} flex flex-col shadow-md`}
      style={{
        width: `${themeConfig.cardWidthPx}px`,
        minHeight: '280px' /* Ensure a minimum card height */,
      }}
    >
      <div className="mb-3 flex items-start">
        {profilePhotoUrl && !imgError ? (
          <img
            src={profilePhotoUrl}
            alt={`${reviewerName}'s profile`}
            className="mr-3 h-10 w-10 flex-shrink-0 rounded-full object-cover"
            onError={() => setImgError(true)}
            loading="lazy"
          />
        ) : (
          <div className="mr-3 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gray-300 text-sm font-semibold text-white">
            {getInitials(reviewerName)}
          </div>
        )}
        <div className="min-w-0 flex-grow">
          <p
            className={`font-semibold ${themeConfig.cardReviewerNameColor} truncate text-sm`}
            title={reviewerName}
          >
            {reviewerName}
          </p>
          <StarRating
            rating={review.starRating}
            starSize="h-4 w-4"
            label={`Rating by ${reviewerName}: ${review.starRating}`}
          />
        </div>
      </div>
      <p className={`text-xs ${themeConfig.cardDateColor} mb-2`}>
        {formatDate(review.createTime || review.updateTime)}
      </p>
      <div
        className={`text-sm ${themeConfig.cardCommentColor} mb-2 flex-grow overflow-y-auto whitespace-pre-line`}
        style={{ maxHeight: '100px' }}
      >
        {comment.length <= MAX_LENGTH || isExpanded
          ? comment
          : `${comment.substring(0, MAX_LENGTH)}...`}
      </div>
      {comment.length > MAX_LENGTH && (
        <button
          onClick={toggleReadMore}
          className={`text-sm ${themeConfig.cardReadMoreColor} mt-1 self-start`}
          aria-expanded={isExpanded}
        >
          {isExpanded ? 'Read less' : 'Read more'}
        </button>
      )}
      <div className="mt-auto flex justify-end pt-2">
        <GoogleGIcon className={`h-5 w-5 ${themeConfig.googleIconColor}`} />
      </div>
    </div>
  )
}

const GoogleReviewsWidget: FC<GoogleReviewsWidgetProps> = ({
  reviews = [],
  writeReviewUrl,
}) => {
  const [averageRating, setAverageRating] = useState<number>(0)
  const [totalReviewsCount, setTotalReviewsCount] = useState<number>(0)
  const [shuffledReviews, setShuffledReviews] = useState<Review[]>([])
  const [currentIndex, setCurrentIndex] = useState<number>(0) // Index of the first card in view
  const [reviewsActuallyVisible, setReviewsActuallyVisible] =
    useState<number>(1) // How many cards fit

  const viewportRef = useRef<HTMLDivElement>(null)

  // Calculate how many cards can actually fit in the viewport
  const updateVisibleCardsCount = useCallback(() => {
    if (viewportRef.current) {
      const viewportWidth = viewportRef.current.offsetWidth
      const numFit = Math.max(
        1,
        Math.floor(
          (viewportWidth + themeConfig.cardGapPx) /
            (themeConfig.cardWidthPx + themeConfig.cardGapPx),
        ),
      )

      let rpp = 1
      if (typeof window !== 'undefined') {
        if (window.innerWidth < 768)
          rpp = 1 // Mobile
        else if (window.innerWidth < 1280)
          rpp = Math.min(numFit, 3) // Tablet
        else rpp = Math.min(numFit, 4) // Desktop, max 4 or what fits
      }
      setReviewsActuallyVisible(rpp)
    }
  }, [])

  useEffect(() => {
    updateVisibleCardsCount()
    window.addEventListener('resize', updateVisibleCardsCount)
    return () => window.removeEventListener('resize', updateVisibleCardsCount)
  }, [updateVisibleCardsCount])

  useEffect(() => {
    if (reviews.length > 0) {
      const newArray = [...reviews]
      for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
      }
      setShuffledReviews(newArray)
      setTotalReviewsCount(newArray.length)
    } else {
      setShuffledReviews([])
      setTotalReviewsCount(0)
    }
    setCurrentIndex(0)
  }, [reviews])

  useEffect(() => {
    // (Average rating calculation remains the same as previous version)
    if (shuffledReviews.length > 0) {
      const sumOfRatings = shuffledReviews.reduce((acc, reviewItem) => {
        let numericRating = 0
        if (typeof reviewItem.starRating === 'string') {
          switch (reviewItem.starRating) {
            case 'FIVE_STAR':
              numericRating = 5
              break
            case 'FOUR_STAR':
              numericRating = 4
              break
            case 'THREE_STAR':
              numericRating = 3
              break
            case 'TWO_STAR':
              numericRating = 2
              break
            case 'ONE_STAR':
              numericRating = 1
              break
            default:
              const parsedRating = parseFloat(reviewItem.starRating)
              numericRating = isNaN(parsedRating) ? 0 : parsedRating
              break
          }
        } else if (typeof reviewItem.starRating === 'number') {
          numericRating = reviewItem.starRating
        }
        return acc + Math.max(0, Math.min(numericRating, 5))
      }, 0)
      setAverageRating(
        parseFloat((sumOfRatings / shuffledReviews.length).toFixed(1)),
      )
    } else {
      setAverageRating(0)
    }
  }, [shuffledReviews])

  // Ensure currentIndex doesn't go out of bounds
  useEffect(() => {
    if (shuffledReviews.length > 0 && reviewsActuallyVisible > 0) {
      const maxPossibleIndex = Math.max(
        0,
        shuffledReviews.length - reviewsActuallyVisible,
      )
      if (currentIndex > maxPossibleIndex) {
        setCurrentIndex(maxPossibleIndex)
      }
    } else if (shuffledReviews.length === 0) {
      setCurrentIndex(0)
    }
  }, [currentIndex, reviewsActuallyVisible, shuffledReviews])

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) =>
      Math.min(prev + 1, shuffledReviews.length - reviewsActuallyVisible),
    )
  }

  const slideOffsetPx =
    -currentIndex * (themeConfig.cardWidthPx + themeConfig.cardGapPx)

  const canShowPrev = currentIndex > 0
  const canShowNext =
    shuffledReviews.length > 0 &&
    currentIndex < shuffledReviews.length - reviewsActuallyVisible

  if (shuffledReviews.length === 0) {
    return (
      <div className={`${themeConfig.widgetBg} py-8 ${themeConfig.fontFamily}`}>
        <div className="mx-auto max-w-6xl px-4 text-center">
          <div className="mb-2 flex items-center justify-center">
            <GoogleLogoFull className={`mr-2 h-7 w-auto`} />
            <h2 className={`text-2xl font-bold ${themeConfig.headerTextColor}`}>
              Reviews
            </h2>
          </div>
          <p className={`${themeConfig.basedOnTextColor}`}>
            Loading reviews or no reviews to display.
          </p>
          <a
            href={writeReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`mt-4 inline-block ${themeConfig.writeReviewButton}`}
          >
            Be the first to write a review
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className={`${themeConfig.widgetBg} py-8 ${themeConfig.fontFamily}`}>
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-6 flex flex-col items-center justify-between sm:flex-row">
          <div className="flex items-center">
            <span
              className={`text-4xl font-bold ${themeConfig.ratingTextColor} mr-1`}
              aria-label={`Average rating: ${averageRating.toFixed(1)} out of 5 stars`}
            >
              {averageRating.toFixed(1)}
            </span>
            {/* Removed "Reviews" text as logo implies it, or add back if preferred */}
          </div>
          {totalReviewsCount > 0 && (
            <div className="mt-2 flex items-center sm:mt-0">
              <StarRating rating={averageRating} starSize="h-5 w-5" />
              <span className={`ml-2 text-sm ${themeConfig.basedOnTextColor}`}>
                {totalReviewsCount} review
                {totalReviewsCount === 1 ? '' : 's'} on <GoogleLogoFull />
              </span>
            </div>
          )}
          <a
            href={writeReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`mt-4 sm:mt-0 ${themeConfig.writeReviewButton}`}
          >
            Write a review
          </a>
        </div>

        <div className="relative">
          {canShowPrev && (
            <button
              onClick={handlePrev}
              aria-label="Previous reviews"
              className={`absolute left-0 top-1/2 z-20 -translate-y-1/2 p-2 sm:-left-3 md:-left-4 ${themeConfig.arrowButtonBg} rounded-full opacity-80 shadow-lg transition-all hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className={`h-5 w-5 sm:h-6 sm:w-6 ${themeConfig.arrowButtonIconColor}`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
          )}

          <div ref={viewportRef} className="mx-auto overflow-hidden">
            <div
              className={`flex transition-transform duration-500 ease-in-out space-x-${themeConfig.cardGapPx === 16 ? '4' : themeConfig.cardGapPx === 8 ? '2' : '4'}`} // Use Tailwind space-x for gap
              style={{
                transform: `translateX(${slideOffsetPx}px)`,
                // Add padding to the track itself to ensure first/last cards are fully visible if viewport is edge-to-edge
                // This padding should be roughly half the gap if space-x is used, or handled by viewport margins
                paddingLeft: `${themeConfig.cardGapPx / 2}px`,
                paddingRight: `${themeConfig.cardGapPx / 2}px`,
                // To make the track itself have a margin for the arrows, if viewportRef is full width
                // marginLeft: '20px', marginRight: '20px'
              }}
            >
              {shuffledReviews.map((reviewItem) => (
                <div
                  key={reviewItem.name || reviewItem.reviewId}
                  className="flex-shrink-0" // Card itself will have fixed width
                >
                  <ReviewCard review={reviewItem} />
                </div>
              ))}
            </div>
          </div>

          {canShowNext && (
            <button
              onClick={handleNext}
              aria-label="Next reviews"
              className={`absolute right-0 top-1/2 z-20 -translate-y-1/2 p-2 sm:-right-3 md:-right-4 ${themeConfig.arrowButtonBg} rounded-full opacity-80 shadow-lg transition-all hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className={`h-5 w-5 sm:h-6 sm:w-6 ${themeConfig.arrowButtonIconColor}`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default GoogleReviewsWidget

/*
  How to use:
  1. Make sure you have Tailwind CSS configured in your Next.js project.
  2. If you moved the types to a separate file (e.g., `types.ts`), import them:
     `import { Review, GoogleReviewsWidgetProps } from './types';`
  3. Import this component: `import GoogleReviewsWidget from './components/GoogleReviewsWidget';`
  4. Prepare your reviews data (array of `Review` objects) and the URL for the "Write a review" button.
  5. Pass the data to the component:
     `<GoogleReviewsWidget reviews={yourReviewsArray} writeReviewUrl="your_google_review_link" />`

  Sample structure for a review object (see `Review` interface above):
  const sampleApiReviews: Review[] = [
    {
      name: "accounts/1001/locations/2001/reviews/3001",
      reviewId: "3001", // Optional
      reviewer: {
        displayName: "Alex P.",
        profilePhotoUrl: "https://placehold.co/40x40/E0E0E0/777?text=AP"
      },
      starRating: "FIVE_STAR", // Or 5
      comment: "Absolutely brilliant! Felt like a new person after my session. Andrew really knows his stuff. Will be back for sure. This is a slightly longer review to test the 'Read more' functionality to see how it behaves when the text exceeds the predefined maximum length.",
      createTime: "2023-04-20T14:22:17Z", // ISO 8601 timestamp
      updateTime: "2023-04-20T14:25:30Z" // Optional
    },
    // ... more reviews
  ];

  To use these sample reviews in your page:
  <GoogleReviewsWidget reviews={sampleApiReviews} writeReviewUrl="https://search.google.com/localservices/writereview?placeid=YOUR_PLACE_ID_HERE" />
  Replace YOUR_PLACE_ID_HERE with your actual Google Place ID.
  You can find your Place ID here: https://developers.google.com/maps/documentation/places/web-service/place-id
*/
