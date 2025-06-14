// app/blog/page.tsx
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { ClientBlogPage } from './clientBlogPage'

// --- Types ---
export interface PostFrontmatter {
  title: string
  date: string
  coverImage: string
  tags: string[]
}

export interface Post extends PostFrontmatter {
  slug: string
}

// --- Server-side data fetching ---
// This function runs on the server to get all post data.
const getPosts = (): Post[] => {
  const postsDirectory = path.join(process.cwd(), 'posts')

  // Check if the directory exists. If not, return an empty array.
  if (!fs.existsSync(postsDirectory)) {
    console.warn(
      "The 'posts' directory does not exist. No posts will be loaded.",
    )
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)

  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.mdx')) // Ensure we only read .mdx files
    .map((fileName) => {
      // Remove ".mdx" from file name to get slug
      const slug = fileName.replace(/\.mdx$/, '')

      // Read markdown file as string
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')

      // Use gray-matter to parse the post metadata section
      const { data } = matter(fileContents)

      return {
        slug,
        ...(data as PostFrontmatter),
      }
    })

  // Sort posts by date in descending order
  return allPostsData.sort((a, b) => {
    if (new Date(a.date) < new Date(b.date)) {
      return 1
    } else {
      return -1
    }
  })
}

// --- The Main Blog Page Component (Server Component) ---
// This component fetches the data on the server and passes it to the client component.
export default function BlogPage() {
  const posts = getPosts()

  return <ClientBlogPage posts={posts} />
}
