export default async function sitemap() {
  return [
    {
      url: "https://your-username.github.io/my-nextjs-site",
      lastModified: new Date(),
    },
    {
      url: "https://your-username.github.io/my-nextjs-site/about",
      lastModified: new Date(),
    },
    // Add all other pages
  ];
}