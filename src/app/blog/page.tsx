import { ClientBlogPage } from './clientBlogPage'
import { getPosts } from '../../lib/getBlogPosts'

// --- The Main Blog Page Component (Server Component) ---
export default function BlogPage() {
  const posts = getPosts()
  return <ClientBlogPage posts={posts} />
}
