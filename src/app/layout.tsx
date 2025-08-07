import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css"; // ✅ ตรวจให้แน่ใจว่าไฟล์นี้อยู่จริง

// โหลดฟอนต์จาก Google Fonts ด้วย next/font
const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

// SEO Metadata
export const metadata: Metadata = {
  title: {
    default: "BBY Media",
    template: "%s | BBY Media",
  },
  description: "เราคือผู้ให้บริการด้าน [บริการของคุณ] ด้วยทีมงานมืออาชีพ",
  keywords: ["บริษัท", "เทคโนโลยี", "บริการ", "Next.js", "SEO"],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <body className="bg-slate-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
