import H3Works from "../../components/works/H3Works.tsx"
import LayoutWorks from "../../components/works/LayoutWorks.tsx"
import PWorks from "../../components/works/PWorks.tsx"

const Lpcollection = () => {
  return (
    <LayoutWorks title="模写コーディング一覧">
      <div class="pb-4 text-center">
        <img src="/img/works/lpcollection_overview.jpg" alt="" class="w-full" />
      </div>

      <H3Works>URL</H3Works>
      <PWorks>
        <a href="https://tailwind-lp-collection.vercel.app/" class="underline">
          https://tailwind-lp-collection.vercel.app/
        </a>
      </PWorks>

      <H3Works>説明</H3Works>
      <PWorks>
        過去にランディングページを模写コーディングした制作物一覧です。Next.js+Tailwind CSSで制作しています。
      </PWorks>
      <PWorks>
        本来は制作物というほどのものではないのですが、模写元はソースコードが著作権フリーなこともあり、せっかく作成したのでお蔵入りするのも、もったいないと思い、一覧にしてまとめました。
      </PWorks>

      <H3Works>使用した技術</H3Works>
      <PWorks>Next.js | Tailwind CSS | TypeScript | eslint | prettier</PWorks>

      <H3Works>模写元</H3Works>
      <PWorks>
        <a href="https://code-step.com" class="underline">
          Codestep
        </a>
      </PWorks>
    </LayoutWorks>
  )
}

export default Lpcollection
