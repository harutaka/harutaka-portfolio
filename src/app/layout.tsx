import "./globals.css"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"

const montSerrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "harutaka portfolio",
  description: "はるたかのポートフォリオサイトです。Node.js系のWebアプリ制作はお任せください。",
  icons: "/favicon.ico",
  openGraph: {
    type: "website",
    title: "harutaka portfolio",
    url: "https://harutaka-portfolio.vercel.app",
    description: "はるたかのポートフォリオサイトです。Node.js系のWebアプリ制作はお任せください。",
    images: [{ url: "https://harutaka-portfolio.vercel.app/img/works/portfolio_overview.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: { canonical: "https://harutaka-portfolio.vercel.app" },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" data-theme="light" className={`${montSerrat.className}`}>
      <body id="top">{children}</body>
    </html>
  )
}
