declare module '*.webp' {
  interface Image {
    src: string
  }
  const content: Image
  export default content
}
