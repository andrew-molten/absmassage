// app/blog/[slug]/page.tsx
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { Metadata } from 'next'
import Link from 'next/link'
import { LinkGrid, YouTubeLink } from '../../../components/YouTubeLink'

const postsDirectory = path.join(process.cwd(), 'src/posts')

// --- Generate static paths for all posts ---
export async function generateStaticParams() {
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames.map((fileName) => ({
    slug: fileName.replace(/\.mdx$/, ''),
  }))
}

// --- Function to get a single post's data ---
const getPost = (slug: string) => {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  return { data, content }
}

// --- Generate dynamic metadata for the page <head> ---
export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const { data } = getPost(params.slug)
  return {
    title: data.title,
    description: `Blog post about ${data.title}`,
  }
}

// --- The Single Post Page Component ---
export default function PostPage({ params }: { params: { slug: string } }) {
  const { data, content } = getPost(params.slug)
  const frontmatter = data as {
    title: string
    date: string
    lastEdited: string
    coverImage: string
    tags: string[]
  }
  const components = {
    YouTubeLink,
    LinkGrid,
  }

  return (
    <article className="bg-white">
      <div className="heading-wrapper">
        {/* --- Back to Blog Link --- */}
        <div className="mb-0">
          <Link href="/blog" legacyBehavior>
            <a className="text-sm text-blue-500 transition-colors hover:text-blue-600">
              &larr; Back to all articles
            </a>
          </Link>
        </div>
        <h1 className="heading center">{frontmatter.title}</h1>
      </div>

      {/* --- Post Header --- */}
      <header className="mb-8 text-center">
        <p className="mt-4 text-base text-gray-500">
          Published on{' '}
          {new Date(frontmatter.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
          <br />
          {frontmatter.lastEdited &&
            `Last edited on ${new Date(
              frontmatter.lastEdited,
            ).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}`}
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {frontmatter.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-gray-100 px-3 py-1 text-sm font-semibold capitalize text-gray-800"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>
      <div className="content-container px-4 py-12 sm:px-6 lg:px-8">
        {/* --- Cover Image --- */}
        {/* <div className="mb-12">
          <img
            src={frontmatter.coverImage}
            alt={`Cover for ${frontmatter.title}`}
            className="mx-auto h-auto w-full max-w-4xl rounded-xl object-cover shadow-lg"
            style={{ maxHeight: '400px' }}
          />
        </div> */}

        {/* --- Post Content --- */}
        {/* The `prose` classes from Tailwind CSS provide beautiful typography styling for markdown content */}
        <div className="prose prose-lg mx-auto max-w-4xl lg:prose-xl prose-a:text-blue-600 prose-a:underline hover:prose-a:text-blue-800">
          <MDXRemote source={content} components={components} />
        </div>
      </div>
    </article>
  )
}
