import Head from 'next/head';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BBYMediaSection from '@/components/BBYMediaSection';
import MarketingSection from '@/components/MarketingSection';

export default function HomePage() {
  return (
    <div className="bg-slate-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-sans">
      <Head>
        <title>BBYMedia | ผู้เชี่ยวชาญด้านการตลาดครบวงจร</title>
        <meta
          name="description"
          content="เราคือผู้ให้บริการด้านอินฟลูเอ็นเซอร์ การตลาดออฟไลน์ และกลยุทธ์แบรนด์ ด้วยทีมงานมืออาชีพและเทคโนโลยีทันสมัย"
        />
      </Head>
      <Header />
      <main className="pt-20">
        <Hero />
        <Features />
        <BBYMediaSection />
        <MarketingSection />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
