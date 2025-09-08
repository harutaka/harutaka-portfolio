import type { NextPage } from "next"
import Image from "next/image"
import H3Works from "@/components/works/H3Works"
import LayoutWorks from "@/components/works/LayoutWorks"
import PWorks from "@/components/works/PWorks"
import overviewImg from "@/../public/img/works/portfolio_overview.jpg"

const Portfolio: NextPage = () => {
  return (
    <LayoutWorks title="ポートフォリオサイト">
      <div className="pb-4 text-center">
        <Image src={overviewImg} alt="" className="w-full" />
      </div>

      <H3Works>URL</H3Works>
      <PWorks>
        <a href="https://harutaka-portfolio.vercel.app/" className="underline">
          https://harutaka-portfolio.vercel.app/
        </a>
      </PWorks>

      <H3Works>説明</H3Works>
      <PWorks>このサイトです。Next.jsで制作しています。</PWorks>
      <PWorks>
        デザインはTailBlocksを参考に、アレンジしています。アイコンはheroiconsのSVGアイコンを使用しています。
        画像はフリー素材と、パワーポイントで作成した構成図を使用しました。
      </PWorks>

      <H3Works>使用した技術</H3Works>
      <PWorks>Next.js | Tailwind CSS | daisyUI | TypeScript | eslint | prettier</PWorks>
    </LayoutWorks>
  )
}

export default Portfolio
