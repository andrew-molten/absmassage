export interface SliderImage {
  image: string
  alt: string
}

export interface FAQdata {
  uuid: string
  question: string
  answer: string
  answer2?: string
  answer3?: string
  link?: {
    url: string
    text: string
  }
}
