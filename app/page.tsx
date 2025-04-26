import NewPage from "@/components/NewPage";
export const metadata = {
  title: "Your Site Name | Best Next.js Site",
  description: "A free Next.js website hosted on GitHub Pages.",
  keywords: "nextjs, github pages, free hosting, seo",
  openGraph: {
    images: "/og-image.png", // Add a social sharing image
  },
};
export default function Home() {
  return (
    <main className="w-screen h-screen relative">
     <NewPage />
    </main>
  );
}
