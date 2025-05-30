import H3Works from "../../components/works/H3Works.tsx"
import LayoutWorks from "../../components/works/LayoutWorks.tsx"
import PWorks from "../../components/works/PWorks.tsx"

const GrpcHealth = () => {
  return (
    <LayoutWorks title="Node.js/Deno用パッケージ作成">
      <div class="pb-4 text-center">
        <img src="/img/works/gprc_health_check.jpg" alt="" class="w-full" />
      </div>

      <H3Works>URL</H3Works>
      <PWorks>
        <a href="https://www.npmjs.com/package/@harutakax/grpc-health-check" class="underline">
          https://www.npmjs.com/package/@harutakax/grpc-health-check
        </a>
      </PWorks>

      <H3Works>説明</H3Works>
      <PWorks>Node.js/Deno用のパッケージを作成しました。npmとJSRにて公開しています。</PWorks>
      <PWorks>
        gRPC通信でのバックエンドの構築に携わった際、ヘルスチェックが意外と難しく、
        世の中に様々な手段はあれど、簡易に使用できる手段に乏しいと思ったので自作しました。
      </PWorks>
      <PWorks>
        使い方の例としてES Modulesを記載していますが、 CommonJSも対応しています。
      </PWorks>

      <H3Works>使用した技術</H3Works>
      <PWorks>gRPC | Deno | TypeScript | Connect | Buf</PWorks>
    </LayoutWorks>
  )
}

export default GrpcHealth
