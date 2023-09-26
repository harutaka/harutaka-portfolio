import "./globals.css"
import type { Metadata } from "next"

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
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
