import type { NextPage } from "next"
import Image from "next/image"
import H3Works from "@/components/works/H3Works"
import LayoutWorks from "@/components/works/LayoutWorks"
import PWorks from "@/components/works/PWorks"
import overviewImg from "@/../public/img/works/lpcollection_overview.jpg"

const Lpcollection: NextPage = () => {
  return (
    <LayoutWorks title="模写コーディング一覧">
      <div className="pb-4 text-center">
        <Image src={overviewImg} alt="" className="w-full" />
      </div>

      <H3Works>URL</H3Works>
      <PWorks>
        <a href="https://tailwind-lp-collection.vercel.app/" className="underline">
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
        <a href="https://code-step.com" className="underline">
          Codestep
        </a>
      </PWorks>
    </LayoutWorks>
  )
}

export default Lpcollection
