import type { NextPage } from "next"
import Image from "next/image"
import H3Works from "@/components/works/H3Works"
import LayoutWorks from "@/components/works/LayoutWorks"
import PWorks from "@/components/works/PWorks"

const Detective: NextPage = () => {
  return (
    <LayoutWorks title="探偵事務所のデモサイト制作">
      <div className="pb-4 text-center">
        <Image src="/img/works/detective_overview.jpg" alt="" width={800} height={400} />
      </div>

      <H3Works>URL</H3Works>
      <PWorks>
        <a href="https://fumiduki-detective.vercel.app/" className="underline">https://fumiduki-detective.vercel.app/</a>
      </PWorks>

      <H3Works>説明</H3Works>
      <PWorks>探偵事務所から、コーポレートサイトの制作依頼を受けた想定で、架空のサイトを作成しました。</PWorks>
      <PWorks>
        このサイトはNext.jsで作成しています。デザインはWordPressテーマの「Lightning」を元にアレンジしています。素材はフリー素材を元に、CanvaとGIMPで加工して制作しました。カルーセル部分はnpmモジュールのswiperを使用しています。
      </PWorks>

      <H3Works>使用した技術</H3Works>
      <PWorks>Next.js | Tailwind CSS | GIMP | Canva | TypeScript | eslint | prettier </PWorks>
    </LayoutWorks>
  )
}

export default Detective
