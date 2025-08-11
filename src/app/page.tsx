import About from "@/components/About";
import Contact from "@/components/Contact";
import GalleryPros from "@/components/GalleryProps";
import Hero from "@/components/Hero";
import HeroSlider from "@/components/HeroSlider";
import Services from "@/components/Services";
import Head from "next/head";

export default function HomePage() {
  const portfolioImages = [
    "/portfolio/event1.jpg",
    "/portfolio/event2.jpg",
    "/portfolio/event3.jpg",
  ];

  return (
    <>
      <Head>
        <link rel="canonical" href="https://bbymedia.com/" />
      </Head>
      <div className="bg-gray-50 text-gray-900 font-sans">
        <HeroSlider />
        <Hero />
        <Services />
        <GalleryPros
          images={portfolioImages}
          title="ผลงานของเรา"
        />
        <About />
        <Contact />
    </div>
    </>
  );
}
