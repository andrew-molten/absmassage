'use client'

import React, { useState, useEffect, FC, useCallback, useRef } from 'react'
import {
  GoogleReviewsWidgetProps,
  Review,
  ReviewCardProps as OriginalReviewCardProps, // Rename to avoid conflict if we redefine
  StarRatingProps,
} from '../../models/reviews'
import { NextBtn, PrevBtn, themeConfig } from '../lib/widgetTheme'
import useWidgetLayout from './useWidgetLayout'

const GoogleLogoFull: FC<{ className?: string }> = ({
  className = 'h-6 w-auto mr-2 inline',
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 85 36"
    className={className}
    aria-labelledby="googleLogoFullTitle"
  >
    <title id="googleLogoFullTitle">Google Logo</title>
    <g clipPath="url(#a-15)">
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
    viewBox="0 0 300 300"
    aria-label="Google G Icon"
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
// #endregion

// #region Components (StarRating, formatDate, ReviewCard - User's versions with minor adjustments)
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

// Redefine ReviewCardProps to include actualCardWidthPx
interface ReviewCardPropsWithWidth extends OriginalReviewCardProps {
  actualCardWidthPx: number
}

const ReviewCard: FC<ReviewCardPropsWithWidth> = ({
  review,
  actualCardWidthPx,
}) => {
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
    <div
      className={`${themeConfig.cardBg} flex flex-col rounded-3xl p-4 md:p-5`}
      style={{
        width: `${actualCardWidthPx}px`,
        minHeight: '100px', // Or adjust as needed, can also be dynamic
      }}
    >
      <div className="mb-3 flex items-start">
        {' '}
        {/* Main row for avatar + text info */}
        {/* Avatar Image/Initials Div */}
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
        {/* Text content: Name, Date, Stars */}
        {/* This div is next to the avatar */}
        <div className="flex flex-col ">
          <p
            className={`font-semibold ${themeConfig.cardReviewerNameColor} mb-0 mt-0 truncate text-sm`}
            title={reviewerName}
          >
            {reviewerName}
          </p>
          <p
            className={`text-xs ${themeConfig.cardDateColor} mt-0 whitespace-nowrap`}
          >
            {formatDate(review.createTime || review.updateTime)}
          </p>
        </div>
      </div>
      <StarRating
        rating={review.starRating}
        starSize="h-6 w-6"
        label={`Rating by ${reviewerName}: ${review.starRating}`}
      />
      <div
        className={`text-md ${themeConfig.cardCommentColor} mb-0 flex-grow overflow-y-auto whitespace-pre-line `}
      >
        {comment.length <= MAX_LENGTH || isExpanded
          ? comment
          : `${comment.substring(0, MAX_LENGTH)}...`}
      </div>
      {comment.length > MAX_LENGTH && (
        <button
          onClick={toggleReadMore}
          className={`text-sm ${themeConfig.cardReadMoreColor} mt-0 self-start`}
          aria-expanded={isExpanded}
        >
          {isExpanded ? 'Read less' : 'Read more'}
        </button>
      )}
      <div className="mt-auto flex justify-end pt-2">
        <GoogleGIcon className={`h-7 w-7 ${themeConfig.googleIconColor}`} />
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
  } = useWidgetLayout(reviews.length, themeConfig.cardBaseWidthPx)

  useEffect(() => {
    if (reviews.length > 0) {
      // Convert star rating strings to numbers for sorting
      const starRatingToNumber = (rating: string | number) => {
        if (typeof rating === 'number') return rating
        if (typeof rating === 'string') {
          const ratings = {
            FIVE_STAR: 5,
            FOUR_STAR: 4,
            THREE_STAR: 3,
            TWO_STAR: 2,
            ONE_STAR: 1,
          }
          return ratings[rating as keyof typeof ratings] || 0
        }
        return 0
      }

      // 1. Create a mutable copy of reviews
      const processedReviews = [...reviews]
      // Shuffle the array
      // for (let i = processedReviews.length - 1; i > 0; i--) {
      //   const j = Math.floor(Math.random() * (i + 1))
      //   ;[processedReviews[i], processedReviews[j]] = [
      //     processedReviews[j],
      //     processedReviews[i],
      //   ]
      // }

      processedReviews.sort((a, b) => {
        const aRating = starRatingToNumber(a.starRating)
        const bRating = starRatingToNumber(b.starRating)

        // 1. Star rating (descending)
        if (aRating !== bRating) return bRating - aRating

        const aHasText = a.comment && a.comment.trim() !== ''
        const bHasText = b.comment && b.comment.trim() !== ''

        // 2. Has text (true first)
        if (aHasText !== bHasText) return bHasText ? 1 : -1

        // 3. Most recent createTime (descending)
        const aTime = new Date(a.createTime).getTime()
        const bTime = new Date(b.createTime).getTime()

        return bTime - aTime
      })

      setShuffledReviews(processedReviews)
      setTotalReviewsCount(processedReviews.length)
    } else {
      setShuffledReviews([])
      setTotalReviewsCount(0)
    }
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
        return acc + Math.max(0, Math.min(numericRating, 5))
      }, 0)
      setAverageRating(
        parseFloat((sumOfRatings / shuffledReviews.length).toFixed(1)),
      )
    } else {
      setAverageRating(0)
    }
  }, [shuffledReviews])

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
    <div
      className={`${themeConfig.widgetBg} ${themeConfig.fontFamily} reviews-container`}
    >
      <div className="mx-auto max-w-6xl px-2">
        {/* Header */}
        <div
          className={`reviews-bg mx-auto mb-6 flex flex-col items-center justify-between rounded-3xl p-6 text-center sm:flex-row sm:text-left`}
          style={{
            width:
              cardsToDisplay === 1 && viewportRef.current
                ? `${themeConfig.oneCardWidthPercentage * viewportRef.current.offsetWidth}px`
                : '100%',
          }}
        >
          <div className="flex items-center">
            <span
              className={`text-4xl font-bold ${themeConfig.ratingTextColor} mr-2`}
              aria-label={`Average rating: ${averageRating.toFixed(1)} out of 5 stars`}
            >
              {averageRating.toFixed(1)}
            </span>
            <div className="flex flex-col items-start">
              <StarRating rating={averageRating} starSize="h-6 w-6" />
              {totalReviewsCount > 0 && (
                <span
                  className={`text-sm ${themeConfig.basedOnTextColor} mt-1`}
                >
                  {totalReviewsCount} review
                  {totalReviewsCount === 1 ? '' : 's'} on{' '}
                  <GoogleLogoFull className="inline h-6 w-auto align-middle" />
                </span>
              )}
            </div>
          </div>
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
            <PrevBtn onClick={handlePrev} ariaLabel="Previous reviews" />
          )}

          <div ref={viewportRef} className="mx-auto overflow-hidden">
            <div
              className={`flex transition-transform duration-500 ease-in-out`}
              style={{
                transform: `translateX(${slideOffsetPx}px)`,
                // Gaps handled by margins on the cards if not using space-x-*
              }}
            >
              {shuffledReviews.map((reviewItem, index) => (
                <div
                  key={reviewItem.name || reviewItem.reviewId}
                  className={`flex-shrink-0 ${cardsToDisplay === 1 ? 'mx-auto' : ''}`}
                  style={{
                    // Apply margin for gap, except for the first item in the visible set if it's also the first overall
                    // Or, apply margin-right to all but the last one
                    marginRight:
                      index < shuffledReviews.length - 1
                        ? `${cardGapPx}px`
                        : '0px',
                    marginLeft:
                      index === 0 && cardsToDisplay === 1
                        ? `${cardGapPx}px`
                        : '0px',
                  }}
                >
                  <ReviewCard
                    review={reviewItem}
                    actualCardWidthPx={actualCardWidthPx}
                  />
                </div>
              ))}
            </div>
          </div>

          {canShowNext && (
            <NextBtn onClick={handleNext} ariaLabel="Next reviews" />
          )}
        </div>
      </div>
    </div>
  )
}

export default GoogleReviewsWidget
