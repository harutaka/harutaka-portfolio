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
        {/* <meta property="og:url" content="URL" /> */}
        <meta property="og:description" content="はるたかのポートフォリオサイトです。" />
        {/* <meta property="og:image" content="img/ogp.png" /> */}
        <meta name="description" content="はるたかのポートフォリオサイトです" />
        <title>harutaka portfolio</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

      {/* 最上部バナー */}
      <div id="banner" className="relative w-full h-[200px] md:h-[480px]">
        <Image src="/img/portfolio_cover.jpg" alt="harutaka portfolio" objectFit="cover" layout="fill" priority={true} />
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
