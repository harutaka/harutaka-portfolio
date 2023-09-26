import type { NextPage } from "next"
import Image from "next/image"
import H3Works from "@/components/works/H3Works"
import LayoutWorks from "@/components/works/LayoutWorks"
import PWorks from "@/components/works/PWorks"

const Bitool: NextPage = () => {
  return (
    <LayoutWorks title="データ分析サイト構築">
      <div className="pb-4 text-center">
        <Image src="/img/works/bitool_overview.jpg" alt="" width={800} height={400} />
        <div className="mb-4"></div>
        <Image src="/img/works/bitool_quicksight_geoimage.png" alt="" width={1735} height={1033} />
        <div className="mb-4"></div>
        <Image src="/img/works/bitool_architecture.jpg" alt="" width={957} height={591} />
      </div>

      <H3Works>URL</H3Works>
      <PWorks>社内サービスなので非公開</PWorks>

      <H3Works>説明</H3Works>
      <PWorks>
        サーバーに蓄積している商品ログを分析し、見える化しました。画面イメージのように、データ分析サイトのダッシュボード上に、各種データを一覧表示させています。このデータは、商品企画や不具合解析など様々な用途に使用されています。
      </PWorks>
      <PWorks>
        しくみとしては、Jenkinsからの定期実行をトリガーにスクリプトを実行し、データ蓄積サーバー上の商品ログを解析＆DB化しています。スクリプトにはPythonを、DBとしてはSQLiteを使用しています。
      </PWorks>
      <PWorks>
        BIツールは2種類稼働させています。開発部門向けにはMetabaseを使用し、SQLにて自由に解析できるようにしています。企画部門や別事業所向けにはそこまでの権限を与えない代わりに、QuickSight上でビジネスに関するデータに特化して、閲覧できるようにしています。
      </PWorks>

      <H3Works>使用した技術</H3Works>
      <PWorks>Python | Jenkins | SQLite | Metabase <br />
        AWS (S3/Athena/QuickSight)</PWorks>
    </LayoutWorks>
  )
}

export default Bitool
