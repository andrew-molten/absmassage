// app/blog/page.tsx
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { ClientBlogPage } from './clientBlogPage'

// --- Types ---
export interface PostFrontmatter {
  title: string
  date: string
  lastEdited: string
  coverImage: string
  tags: string[]
}

export interface Post extends PostFrontmatter {
  slug: string
  content: string // Added content to the Post type
}

// --- Server-side data fetching ---
const getPosts = (): Post[] => {
  const postsDirectory = path.join(process.cwd(), 'src/posts')

  if (!fs.existsSync(postsDirectory)) {
    console.warn(
      "The 'posts' directory does not exist. No posts will be loaded.",
    )
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)

  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')

      // Gray-matter now separates frontmatter (data) and the main content
      const { data, content } = matter(fileContents)

      // Ensure tags is always an array, even if missing in frontmatter
      if (!data.tags) {
        data.tags = []
      }

      return {
        slug,
        content, // Include the post's main content
        ...(data as PostFrontmatter),
      }
    })

  return allPostsData.sort((a, b) => {
    if (new Date(a.date) < new Date(b.date)) {
      return 1
    } else {
      return -1
    }
  })
}

// --- The Main Blog Page Component (Server Component) ---
export default function BlogPage() {
  const posts = getPosts()
  return <ClientBlogPage posts={posts} />
}
