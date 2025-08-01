import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface Post {
  title: string
  slug: string
  date: string
  lastEdited?: string
  content: string
  coverImage: string
  tags?: string[]
}
export interface PostFrontmatter {
  title: string
  date: string
  lastEdited: string
  coverImage: string
  tags: string[]
}

export function getPosts(): Post[] {
  // --- Server-side data fetching ---
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
