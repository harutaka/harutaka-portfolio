import type { NextPage } from "next"
import Image from "next/image"
import H3Works from "@/components/works/H3Works"
import LayoutWorks from "@/components/works/LayoutWorks"
import PWorks from "@/components/works/PWorks"

const Portfolio: NextPage = () => {
  return (
    <LayoutWorks title="ポートフォリオサイト">
      <div className="pb-4 text-center">
        <Image src="/img/works/portfolio_overview.jpg" alt="" width={800} height={400} />
      </div>

      <H3Works>URL</H3Works>
      <PWorks>
        <a href="https://harutaka-portfolio.vercel.app/" className="underline">
          https://harutaka-portfolio.vercel.app/
        </a>
      </PWorks>

      <H3Works>説明</H3Works>
      <PWorks>このサイトです。Next.js+Tailwind CSSで制作しています。</PWorks>
      <PWorks>
        デザインはTailBlocksを参考に、アレンジしています。アイコンはheroiconsのSVGアイコンを使用しています。Tailwind
        CSSの作者が作成したアイコンなので、非常に作りやすかったです。画像はフリー素材と、Canva/GIMPで自作した画像、パワーポイントで作成した構成図を使用しました。
      </PWorks>

      <H3Works>使用した技術</H3Works>
      <PWorks>Next.js | Tailwind CSS | GIMP | Canva | TypeScript | eslint | prettier</PWorks>
    </LayoutWorks>
  )
}

export default Portfolio
