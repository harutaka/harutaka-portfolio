import H3Works from "../../components/works/H3Works.tsx"
import LayoutWorks from "../../components/works/LayoutWorks.tsx"
import PWorks from "../../components/works/PWorks.tsx"

const Portfolio = () => {
  return (
    <LayoutWorks title="ポートフォリオサイト">
      <div class="pb-4 text-center">
        <img src="/img/works/portfolio_overview.jpg" alt="" class="w-full" />
      </div>

      <H3Works>URL</H3Works>
      <PWorks>
        <a href="https://harutaka-portfolio.vercel.app/" class="underline">
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
