import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "BBY Media",
    template: "%s | BBY Media",
  },
  description: "เราคือผู้ให้บริการด้านการตลาดครบวงจร ด้วยทีมงานมืออาชีพ",
  keywords: ["บริษัท", "การตลาด", "บริการ", "Next.js", "SEO"],
  metadataBase: new URL("https://bbymedia.com"),
  openGraph: {
    title: "BBY Media",
    description: "บริการที่ยกระดับธุรกิจของคุณ",
    url: "https://bbymedia.com",
    siteName: "BBY Media",
    locale: "th_TH",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th">
      <body className="bg-white text-gray-800">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
