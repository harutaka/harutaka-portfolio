import H3Works from "../../components/works/H3Works.tsx"
import LayoutWorks from "../../components/works/LayoutWorks.tsx"
import PWorks from "../../components/works/PWorks.tsx"

const Detective = () => {
  return (
    <LayoutWorks title="探偵事務所のデモサイト制作">
      <img src="/img/works/detective_overview.jpg" alt="" class="w-full" />

      <H3Works>URL</H3Works>
      <PWorks>
        <a href="https://fumiduki-detective.deno.dev" class="underline">
          https://fumiduki-detective.deno.dev
        </a>
      </PWorks>

      <H3Works>説明</H3Works>
      <PWorks>探偵事務所から、コーポレートサイトの制作依頼を受けた想定で、架空のサイトを作成しました。</PWorks>
      <PWorks>
        このサイトはFreshで作成しています。ロゴは自作し、他の素材はフリー素材を使用しました。
        文章の作成には、生成AIを活用しています。
      </PWorks>

      <H3Works>使用した技術</H3Works>
      <PWorks>Deno | Fresh | Tailwind CSS | TypeScript</PWorks>
    </LayoutWorks>
  )
}

export default Detective
