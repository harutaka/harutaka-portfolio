import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Profile from "@/components/Profile"
import Skill from "@/components/Skill"
import Works from "@/components/Works"

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="harutaka portfolio" />
        <meta property="og:url" content="https://harutaka-portfolio.vercel.app" />
        <meta
          property="og:description"
          content="はるたかのポートフォリオサイトです。Node.js系のWebアプリ制作はお任せください。"
        />
        <meta property="og:image" content="https://harutaka-portfolio.vercel.app/img/works/portfolio_overview.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="description"
          content="はるたかのポートフォリオサイトです。Node.js系のWebアプリ制作はお任せください。"
        />
        <title>harutaka portfolio</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="canonical" href="https://harutaka-portfolio.vercel.app" />
      </Head>

      {/* 最上部バナー */}
      <div id="banner" className="relative w-full h-[200px] md:h-[480px]">
        <Image
          src="/img/portfolio_cover.jpg"
          alt="harutaka portfolio"
          objectFit="cover"
          layout="fill"
          priority={true}
        />
      </div>

      {/* ヘッダー */}
      <Header />
      <main className="px-4 mx-auto max-w-7xl md:px-10">
        <Profile />
        <Skill />
        <Works />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default Home
