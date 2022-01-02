import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/Header"
import Profile from "@/components/Profile"
import Skill from "@/components/Skill"

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Harutaka ポートフォリオ" />
        {/* <meta property="og:url" content="URL" /> */}
        <meta property="og:description" content="Harutakaのポートフォリオサイトです。" />
        {/* <meta property="og:image" content="img/ogp.png" /> */}
        <meta name="description" content="Harutakaのポートフォリオサイトです" />
        <title>Harutaka ポートフォリオ</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

      {/* 最上部バナー */}
      <div className="relative w-full h-[200px] md:h-[480px]">
        <Image src="/img/portfolio_cover.jpg" alt="Harutaka portfolio" objectFit="cover" layout="fill" />
      </div>

      {/* ヘッダー */}
      <Header />
      <main className="px-4 mx-auto max-w-7xl md:px-10">
        <Profile />
        <Skill />
      </main>
      <div className="p-12">aaa</div>
      <div className="h-[1000px] bg-blue-300"></div>
    </>
  )
}

export default Home
