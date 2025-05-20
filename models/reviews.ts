export interface Reviewer {
  displayName: string
  profilePhotoUrl?: string | null
}

export interface Review {
  name: string
  reviewId?: string
  reviewer: Reviewer
  starRating:
    | 'FIVE_STAR'
    | 'FOUR_STAR'
    | 'THREE_STAR'
    | 'TWO_STAR'
    | 'ONE_STAR'
    | number
  comment?: string | null
  createTime: string
  updateTime?: string
}

export interface StarRatingProps {
  rating:
    | 'FIVE_STAR'
    | 'FOUR_STAR'
    | 'THREE_STAR'
    | 'TWO_STAR'
    | 'ONE_STAR'
    | number
  starSize?: string
  label?: string
}

export interface ReviewCardProps {
  review: Review
  // Pass reviewsPerPage to calculate card width if needed, or manage width via parent flex/grid
  cardWidthClass?: string
}

export interface GoogleReviewsWidgetProps {
  reviews: Review[]
  writeReviewUrl: string
}
