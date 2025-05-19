'use client'

import React, { useState, useEffect, FC } from 'react'
import {
  GoogleReviewsWidgetProps,
  ReviewCardProps,
  StarRatingProps,
} from '../../models/reviews'

// Helper function to generate star icons
const StarRating: FC<StarRatingProps> = ({ rating, starSize = 'h-5 w-5' }) => {
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
        numericRating = 0
    }
  } else if (typeof rating === 'number') {
    numericRating = Math.max(0, Math.min(rating, 5)) // Ensure rating is between 0 and 5
  }

  return (
    <div className="flex items-center">
      {[...Array(totalStars)].map((_, index) => (
        <svg
          key={index}
          className={`${starSize} ${index < numericRating ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

// Helper function to format date
const formatDate = (dateString?: string | null): string => {
  if (!dateString) return ''

  const date: Date = new Date(dateString)

  // Check if the date created is valid.
  // getTime() on an Invalid Date object returns NaN.
  if (isNaN(date.getTime())) {
    // If the date is invalid, you might want to return the original string,
    // a placeholder, or an empty string.
    // For now, returning a generic fallback.
    return 'a while ago'
  }

  const now: Date = new Date()

  // Use getTime() to get numeric values (milliseconds since epoch) for robust subtraction.
  const diffInMilliseconds: number = now.getTime() - date.getTime()

  // Ensure the difference is not negative (e.g., if date is in the future, though unlikely for reviews)
  if (diffInMilliseconds < 0) return 'just now'

  const diffInSeconds: number = Math.floor(diffInMilliseconds / 1000)

  const minutes = Math.floor(diffInSeconds / 60)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)
  const weeks = Math.floor(days / 7)
  const months = Math.floor(days / 30.44) // Average days in month
  const years = Math.floor(days / 365.25) // Average days in year

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
  const MAX_LENGTH = 150

  const reviewerName = review.reviewer?.displayName || 'Anonymous'
  const profilePhotoUrl = review.reviewer?.profilePhotoUrl
  const comment = review.comment || ''

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded)
  }

  const renderComment = () => {
    if (comment.length <= MAX_LENGTH) {
      return (
        <p className="whitespace-pre-line text-sm text-gray-600">{comment}</p>
      )
    }
    return (
      <div>
        <p className="whitespace-pre-line text-sm text-gray-600">
          {isExpanded ? comment : `${comment.substring(0, MAX_LENGTH)}...`}
        </p>
        <button
          onClick={toggleReadMore}
          className="mt-1 text-sm text-blue-600 hover:underline"
          aria-expanded={isExpanded}
        >
          {isExpanded ? 'Read less' : 'Read more'}
        </button>
      </div>
    )
  }

  const getInitials = (name: string): string => {
    if (!name) return '?'
    const parts = name.split(' ').filter(Boolean) // filter(Boolean) removes empty strings if there are multiple spaces
    if (parts.length === 0) return '?'
    if (parts.length === 1) return parts[0].charAt(0).toUpperCase()
    return (
      parts[0].charAt(0).toUpperCase() +
      parts[parts.length - 1].charAt(0).toUpperCase()
    )
  }

  return (
    <div className="mr-4 w-80 flex-none rounded-lg border border-gray-200 bg-white p-5 shadow-md md:w-96">
      <div className="mb-3 flex items-start">
        {profilePhotoUrl ? (
          <img
            src={profilePhotoUrl}
            alt={`${reviewerName}'s profile`}
            className="mr-3 h-10 w-10 rounded-full object-cover"
            onError={(e) => (e.currentTarget.style.display = 'none')} // Basic error handling for broken image links
          />
        ) : (
          <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-gray-300 text-sm font-semibold text-white">
            {getInitials(reviewerName)}
          </div>
        )}
        <div>
          <p className="text-sm font-semibold text-gray-800">{reviewerName}</p>
          <StarRating rating={review.starRating} starSize="h-4 w-4" />
        </div>
      </div>
      <p className="mb-2 text-xs text-gray-500">
        {formatDate(review.createTime || review.updateTime)}
      </p>
      {renderComment()}
      <div className="mt-4 flex justify-end">
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
          {/* Other paths for the Google logo can be added here if needed for a more complete logo */}
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
  const [totalReviews, setTotalReviews] = useState<number>(0)

  useEffect(() => {
    if (reviews && reviews.length > 0) {
      const total = reviews.length
      setTotalReviews(total)
      const sumOfRatings = reviews.reduce((acc, review) => {
        let numericRating = 0
        if (typeof review.starRating === 'string') {
          switch (review.starRating) {
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
              numericRating = 0
          }
        } else if (typeof review.starRating === 'number') {
          numericRating = review.starRating
        }
        return acc + numericRating
      }, 0)
      setAverageRating(parseFloat((sumOfRatings / total).toFixed(1)))
    } else {
      setAverageRating(0)
      setTotalReviews(0)
    }
  }, [reviews])

  // Added a loading/empty state for better UX
  if (!reviews || reviews.length === 0) {
    return (
      <div className="reviews-container bg-slate-50 py-8 font-sans">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h2 className="mb-2 text-2xl font-bold text-gray-800">
            Google Reviews
          </h2>
          <p className="text-gray-500">No reviews to display at the moment.</p>
          <a
            href={writeReviewUrl} // Still provide the link to write a review
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
            {totalReviews > 0 && (
              <div className="mt-1 flex items-center">
                <span className="mr-1 text-lg font-bold text-gray-700">
                  {averageRating.toFixed(1)}
                </span>
                <StarRating rating={averageRating} starSize="h-5 w-5" />
                <span className="ml-2 text-sm text-gray-500">
                  based on {totalReviews} review{totalReviews === 1 ? '' : 's'}
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

        <div
          className="-mx-2 flex overflow-x-auto px-2 pb-4"
          role="list"
          aria-label="Customer reviews"
        >
          {reviews.map((review) => (
            <div
              key={review.name || review.reviewId}
              role="listitem"
              className="flex-shrink-0"
            >
              {' '}
              {/* Added wrapper for key and role */}
              <ReviewCard review={review} />
            </div>
          ))}
          <div className="w-px flex-none"></div> {/* Spacer */}
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
