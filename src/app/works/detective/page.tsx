import type { NextPage } from "next"
import Link from "next/link"
import Image from "next/image"
import H3Works from "@/components/works/H3Works"
import LayoutWorks from "@/components/works/LayoutWorks"
import PWorks from "@/components/works/PWorks"
import detectiveImg from "@/../public/img/works/detective_overview.jpg"

const Detective: NextPage = () => {
  return (
    <LayoutWorks title="探偵事務所のデモサイト制作">
      <Image src={detectiveImg} alt="" className="w-full" />

      <H3Works>URL</H3Works>
      <PWorks>
        <Link href="https://fumiduki-detective.vercel.app/" className="underline">
          https://fumiduki-detective.vercel.app/
        </Link>
      </PWorks>

      <H3Works>説明</H3Works>
      <PWorks>探偵事務所から、コーポレートサイトの制作依頼を受けた想定で、架空のサイトを作成しました。</PWorks>
      <PWorks>
        このサイトはNext.jsで作成しています。ロゴは自作し、他の素材はフリー素材を使用しました。
        文章の作成には、生成AIを活用しています。デプロイ先はVercelにしました。
      </PWorks>

      <H3Works>使用した技術</H3Works>
      <PWorks>Next.js | Tailwind CSS | TypeScript | eslint | prettier </PWorks>
    </LayoutWorks>
  )
}

export default Detective
