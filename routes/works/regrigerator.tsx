import H3Works from "../../components/works/H3Works.tsx"
import LayoutWorks from "../../components/works/LayoutWorks.tsx"
import PWorks from "../../components/works/PWorks.tsx"

const Detective = () => {
  return (
    <LayoutWorks title="IoT冷蔵庫のユーザーサービスサイト">
      <div class="pb-4 text-center">
        <img src="/img/works/refrigerator_overview.jpg" alt="" class="w-full mb-4" />
        <img src="/img/works/refrigerator_arch01.jpg" alt="" class="w-full mb-4" />
        <img src="/img/works/refrigerator_arch02.jpg" alt="" class="w-full" />
      </div>

      <H3Works>URL</H3Works>
      <PWorks>期間限定の課外活動であり、終了したため非公開</PWorks>

      <H3Works>担当</H3Works>
      <PWorks>IoT冷蔵庫から先のAWS側の構築全て。</PWorks>

      <H3Works>説明</H3Works>
      <PWorks>
        IoT冷蔵庫を新規開発すると仮定し、飲み物などの残量と、庫内の撮影画像をリアルタイムに表示する架空のユーザーサービスサイトの試作をしました。
      </PWorks>
      <PWorks>
        この課外活動は3人チームで進め、私はAWS側の構築を担当しました。他の2人はIoT冷蔵庫を担当しています。IoT冷蔵庫と大きく銘打ってますが、実際の生産設備はないので、この試作ではラズパイで作成しています。
      </PWorks>
      <PWorks>
        WebアプリはNext.jsを使用しました。当時の通常業務(2018年)では、商品にNode.js+experssを使用したWebアプリを使用していたので、開発効率を上げられないか試用の意味を含めています。またサーバー系の所では、保守性を重視し、フルマネージドサービスで構築することを心がけました。
      </PWorks>
      <PWorks>
        サーバーの構成は一長一短あったので、2パターンのアーキテクチャで試作しました。試作デモでは実際に構築し、外でスマホからユーザーサイトにアクセスし、IoT冷蔵庫に置いた飲み物の重量や写真が反映されること確認できました。
      </PWorks>
      <PWorks>
        試作としてはうまくいきましたが、ビジネス化にあたっては課題が多く（そもそも自分達で冷蔵庫作れないし）、試作止まりでチーム解散しました。
      </PWorks>

      <H3Works>使用した技術</H3Works>
      <PWorks>
        JavaScript | Node.js | React.js | Next.js
        <br />
        docker | docker-compose | kubernetes | Node-Red
        <br />
        AWS全般(構成図参照)
      </PWorks>
    </LayoutWorks>
  )
}

export default Detective
