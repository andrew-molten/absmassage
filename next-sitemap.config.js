// next-sitemap.config.js
export default {
  siteUrl: process.env.SITE_URL || 'https://www.andrewboltonsportsmassage.com/', // Replace with your site's URL
  generateRobotsTxt: true, // (optional) Generate robots.txt
  // Optional options for better control
  sitemapSize: 7000,
  changefreq: 'monthly',
  priority: 0.7,
}
