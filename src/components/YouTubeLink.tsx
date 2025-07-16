type VideoLink = {
  url: string
  title: string
}

type LinkGridProps = {
  items: VideoLink[]
}

export function LinkGrid({ items }: LinkGridProps) {
  return (
    <div
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3
"
    >
      {items.map((item, index) => (
        <YouTubeLink key={index} url={item.url} title={item.title} />
      ))}
    </div>
  )
}

export function YouTubeLink({ url, title }: { url: string; title: string }) {
  const videoId = new URL(url).searchParams.get('v')

  if (!videoId) return null

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="relative block overflow-hidden rounded-lg"
    >
      <img
        src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
        alt={title}
        className="m-0 h-auto w-full"
        style={{ maxWidth: '100%', borderRadius: '8px' }}
      />
      <span
        className="text-sm text-white"
        style={{
          position: 'absolute',
          bottom: '0',
          left: '50%',
          transform: 'translateX(-50%) translateY(-50%)',
          whiteSpace: 'nowrap',
        }}
      >
        {title}
      </span>
    </a>
  )
}
