import { StaticImageData } from 'next/image'

export interface SliderImage {
  image: StaticImageData
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
