/**
 * Represents the reviewer's information.
 * Based on the typical structure from Google My Business API.
 */
export interface Reviewer {
  displayName: string
  profilePhotoUrl?: string | null // URL to the reviewer's profile photo, can be null or undefined
}

/**
 * Represents a single review.
 * Structure is designed to be compatible with Google My Business API responses.
 */
export interface Review {
  name: string // Unique identifier for the review, e.g., "accounts/xxx/locations/yyy/reviews/zzz"
  reviewId?: string // Optional shorter review ID
  reviewer: Reviewer
  starRating:
    | 'FIVE_STAR'
    | 'FOUR_STAR'
    | 'THREE_STAR'
    | 'TWO_STAR'
    | 'ONE_STAR'
    | number // Star rating as string from API or a number
  comment?: string | null // The text content of the review, can be null or undefined
  createTime: string // ISO 8601 timestamp string for when the review was created
  updateTime?: string // ISO 8601 timestamp string for when the review was last updated (optional)
}

/**
 * Props for the StarRating component.
 */
export interface StarRatingProps {
  rating:
    | 'FIVE_STAR'
    | 'FOUR_STAR'
    | 'THREE_STAR'
    | 'TWO_STAR'
    | 'ONE_STAR'
    | number // Star rating value
  starSize?: string // Optional Tailwind CSS classes for star size (e.g., "h-5 w-5")
}

/**
 * Props for the ReviewCard component.
 */
export interface ReviewCardProps {
  review: Review
}

/**
 * Props for the main GoogleReviewsWidget component.
 */
export interface GoogleReviewsWidgetProps {
  reviews: Review[] // An array of review objects
  writeReviewUrl: string // URL for users to write a new review
}
