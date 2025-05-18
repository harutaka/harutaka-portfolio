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
        <a href="https://harutaka-portfolio.deno.dev" class="underline">
          https://harutaka-portfolio.deno.dev
        </a>
      </PWorks>

      <H3Works>説明</H3Works>
      <PWorks>このサイトです。Freshで制作しています。</PWorks>
      <PWorks>
        デザインはTailBlocksを参考に、アレンジしています。アイコンはheroiconsのSVGアイコンを使用しています。
        元々Node.js/Next.jsで作成したサイトを、Deno/Freshに移行しました。
        DenoはTypeScriptネイティブで体験がよく、今後も積極的に使用していきたいです。
      </PWorks>

      <H3Works>使用した技術</H3Works>
      <PWorks>Deno | Fresh | Tailwind CSS | daisyUI </PWorks>
    </LayoutWorks>
  )
}

export default Portfolio
