'use client'

import React, { useState, useEffect, FC, useCallback, useMemo } from 'react'
import {
  GoogleReviewsWidgetProps,
  Review,
  ReviewCardProps,
  StarRatingProps,
} from '../../models/reviews'

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
        // Attempt to parse if it's a numeric string like "4.5"
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
          className={`${starSize} ${index < numericRating ? 'text-yellow-400' : 'text-gray-300'} ${index < Math.ceil(numericRating) && index >= Math.floor(numericRating) && numericRating % 1 !== 0 ? 'text-yellow-400 opacity-50' : ''}`} // Basic half-star attempt, may need more complex SVG for true half stars
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
    <div className="flex h-full flex-col rounded-lg border border-gray-200 bg-white p-4 shadow-md md:p-5">
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
            className="truncate text-sm font-semibold text-gray-800"
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
      <p className="mb-2 text-xs text-gray-500">
        {formatDate(review.createTime || review.updateTime)}
      </p>
      <div
        className="mb-2 flex-grow overflow-y-auto whitespace-pre-line text-sm text-gray-600"
        style={{ maxHeight: '100px' }}
      >
        {' '}
        {/* Added maxHeight for scroll */}
        {comment.length <= MAX_LENGTH || isExpanded
          ? comment
          : `${comment.substring(0, MAX_LENGTH)}...`}
      </div>
      {comment.length > MAX_LENGTH && (
        <button
          onClick={toggleReadMore}
          className="mt-1 self-start text-sm text-blue-600 hover:underline"
          aria-expanded={isExpanded}
        >
          {isExpanded ? 'Read less' : 'Read more'}
        </button>
      )}
      <div className="mt-auto flex justify-end pt-2">
        <svg
          aria-label="Google icon"
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-400"
          viewBox="0 0 48 48"
        >
          <path
            fill="#4285F4"
            d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
          />
          <path
            fill="#34A853"
            d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8V36c6.627 0 12-5.373 12-12c0-3.059-1.154-5.842-3.039-7.961l-5.657 5.657C33.947 23.947 34 24.5 34 25s-.053 1.053-.117 1.583l5.728-5.728C41.332 20.205 42.668 20 43.611 20.083z"
          />
        </svg>
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
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [reviewsPerPage, setReviewsPerPage] = useState<number>(3)

  const calculateRpp = useCallback(() => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 768) return 1
      if (window.innerWidth < 1280) return 3
      return 3 // Can be 4 if card width allows. Adjust ReviewCard min-width or grid gap if using 4.
    }
    return 3
  }, [])

  useEffect(() => {
    const handleResize = () => {
      setReviewsPerPage(calculateRpp())
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [calculateRpp])

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
        return acc + Math.max(0, Math.min(numericRating, 5)) // Ensure rating is within 0-5
      }, 0)
      setAverageRating(
        parseFloat((sumOfRatings / shuffledReviews.length).toFixed(1)),
      )
    } else {
      setAverageRating(0)
    }
  }, [shuffledReviews])

  useEffect(() => {
    if (shuffledReviews.length > 0) {
      const maxPossibleIndex = Math.max(
        0,
        shuffledReviews.length - reviewsPerPage,
      )
      if (currentIndex > maxPossibleIndex) {
        setCurrentIndex(maxPossibleIndex)
      }
    } else {
      setCurrentIndex(0)
    }
  }, [currentIndex, reviewsPerPage, shuffledReviews])

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) =>
      Math.min(prev + 1, shuffledReviews.length - reviewsPerPage),
    )
  }

  const currentReviews = useMemo(() => {
    if (shuffledReviews.length === 0) return []
    return shuffledReviews.slice(currentIndex, currentIndex + reviewsPerPage)
  }, [shuffledReviews, currentIndex, reviewsPerPage])

  const canShowPrev = currentIndex > 0
  const canShowNext =
    shuffledReviews.length > 0 &&
    currentIndex < shuffledReviews.length - reviewsPerPage

  if (shuffledReviews.length === 0) {
    return (
      <div className="reviews-container bg-slate-50 py-8 font-sans">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h2 className="mb-2 text-2xl font-bold text-gray-800">
            Google Reviews
          </h2>
          <p className="text-gray-500">
            Loading reviews or no reviews to display.
          </p>
          <a
            href={writeReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block rounded-md bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700"
          >
            Be the first to write a review
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="reviews-container bg-slate-50 py-8 font-sans">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-6 flex flex-col items-center justify-between px-2 sm:flex-row">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Google Reviews</h2>
            {totalReviewsCount > 0 && (
              <div className="mt-1 flex items-center">
                <span
                  className="mr-1 text-lg font-bold text-gray-700"
                  aria-label={`Average rating: ${averageRating.toFixed(1)} out of 5 stars`}
                >
                  {averageRating.toFixed(1)}
                </span>
                <StarRating rating={averageRating} starSize="h-5 w-5" />
                <span className="ml-2 text-sm text-gray-500">
                  based on {totalReviewsCount} review
                  {totalReviewsCount === 1 ? '' : 's'}
                </span>
              </div>
            )}
          </div>
          <a
            href={writeReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 rounded-md bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700 sm:mt-0"
          >
            Write a review
          </a>
        </div>

        <div className="relative">
          {canShowPrev && (
            <button
              onClick={handlePrev}
              aria-label="Previous reviews"
              className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/60 p-2 opacity-80 shadow-lg transition-all hover:bg-white/90 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:-left-4 md:-left-5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5 text-gray-700 sm:h-6 sm:w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
          )}

          <div
            className={`mx-auto max-w-xs overflow-hidden sm:max-w-none md:mx-8`}
          >
            <div
              className={`grid items-stretch gap-4 transition-transform duration-300 ease-in-out sm:gap-6`}
              style={{
                gridTemplateColumns: `repeat(${reviewsPerPage}, minmax(0, 1fr))`,
                // transform: `translateX(-${(100 / reviewsPerPage) * (currentIndex % reviewsPerPage)}%)` // This transform approach is for continuous scroll, not needed for simple slice
              }}
            >
              {currentReviews.map((reviewItem) => (
                <div
                  key={reviewItem.name || reviewItem.reviewId}
                  className="min-w-0"
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
              className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/60 p-2 opacity-80 shadow-lg transition-all hover:bg-white/90 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:-right-4 md:-right-5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5 text-gray-700 sm:h-6 sm:w-6"
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
