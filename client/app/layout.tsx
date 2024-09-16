export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Andrew Bolton Sports Massage</title>
        <link
          rel="icon"
          type="image/webp"
          href="./images/logos/absm-shortcut-icon.webp"
        />
        <link rel="stylesheet" href="./client/styles/main.scss" />
        <link rel="stylesheet" href="./client/styles/NavBar.scss" />
        <meta
          name="description"
          content="Professional, strong & effective massage to relieve your pain and tension now. Become relaxed, rejuvenated & pain free today."
        />
      </head>

      <body>
        <div id="root">{children}</div>

        {/* <script src="./client/index.tsx" type="module"></script>
        <script src="./client/cliniko.js" type="module"></script> */}
      </body>
    </html>
  )
}
