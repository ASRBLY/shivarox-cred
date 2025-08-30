import dynamic from "next/dynamic";

const Hero = dynamic(() => import("./components/Hero"), { ssr: false });
const Features = dynamic(() => import("./components/Features"), { ssr: false });
const Stats = dynamic(() => import("./components/Stats"), { ssr: false });
const Gallery = dynamic(() => import("./components/Gallery"), { ssr: false });
const Footer = dynamic(() => import("./components/Footer"), { ssr: false });

export default function Page() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <Stats />
      <Gallery />
      <Footer />
    </main>
  );
}