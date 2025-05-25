// export interface Reviewer {
//   displayName: string
//   profilePhotoUrl?: string | null
// }

// export interface Review {
//   name: string
//   reviewId?: string
//   reviewer: Reviewer
//   starRating:
//     | 'FIVE_STAR'
//     | 'FOUR_STAR'
//     | 'THREE_STAR'
//     | 'TWO_STAR'
//     | 'ONE_STAR'
//     | number
//   comment?: string | null
//   createTime: string
//   updateTime?: string
// }

// export interface StarRatingProps {
//   rating:
//     | 'FIVE_STAR'
//     | 'FOUR_STAR'
//     | 'THREE_STAR'
//     | 'TWO_STAR'
//     | 'ONE_STAR'
//     | number
//   starSize?: string
//   label?: string
// }

// export interface ReviewCardProps {
//   review: Review
//   // Pass reviewsPerPage to calculate card width if needed, or manage width via parent flex/grid
//   cardWidthClass?: string
// }

// export interface GoogleReviewsWidgetProps {
//   reviews: Review[]
//   writeReviewUrl: string
// }

export interface Reviewer {
  displayName: string
  profilePhotoUrl?: string | null
  reviewCountText?: string
  reviewCount?: number
  photoCount?: number
  isLocalGuide?: boolean
}

export interface OwnerResponse {
  responderName: string
  responseText: string
  responseTime: string
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
  updateTime?: string | null
  isNew?: boolean
  shareUrl?: string
  ownerResponse?: OwnerResponse | null
  positiveTags?: any[] // You can define a more specific type if you know the structure of the tags
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
