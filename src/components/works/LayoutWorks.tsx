import Head from "next/head"
import { ReactNode } from "react"
import Footer from "@/components/Footer"
import Header from "@/components/Header"

type LayoutWorksProps = {
  title: string
  children: ReactNode
}

const LayoutWorks = ({ title, children }: LayoutWorksProps) => {
  return (
    <>
      <Head>
        <title>harutaka portfolio</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

      {/* ヘッダー */}
      <Header />

      <main className="px-4 mx-auto max-w-4xl md:px-10">
        <div className="my-8 text-2xl font-bold text-center">{title}</div>
        {children}
      </main>

      {/* フッター */}
      <Footer />
    </>
  )
}

export default LayoutWorks
