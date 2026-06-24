import { ClientBlogPage } from './clientBlogPage'
import { getPosts } from '../../lib/getBlogPosts'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Massage & Recovery Blog | Andrew Bolton Sports Massage',
  description:
    'Practical articles on massage, breathing, recovery, tension relief and simple ways to help your body feel better between sessions.',
  alternates: {
    canonical: 'https://andrewboltonsportsmassage.com/blog',
  },
}

// --- The Main Blog Page Component (Server Component) ---
export default function BlogPage() {
  const posts = getPosts()
  return <ClientBlogPage posts={posts} />
}
