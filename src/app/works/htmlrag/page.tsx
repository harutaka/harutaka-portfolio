import type { NextPage } from "next";
import Image from "next/image";
import htmlRagImg from "@/../public/img/works/html_rag_optimizer.png";
import H3Works from "@/components/works/H3Works";
import LayoutWorks from "@/components/works/LayoutWorks";
import PWorks from "@/components/works/PWorks";

const Htmlrag: NextPage = () => {
  return (
    <LayoutWorks title="npmパッケージ作成">
      <div className="pb-4 text-center">
        <Image src={htmlRagImg} alt="" className="w-full" />
      </div>

      <H3Works>URL</H3Works>
      <PWorks>
        <a href="https://www.npmjs.com/package/@harutakax/html-rag-optimizer" className="underline">
          https://www.npmjs.com/package/@harutakax/html-rag-optimizer
        </a>
      </PWorks>

      <H3Works>説明</H3Works>
      <PWorks>npmパッケージを作成しました。Node.jsをインストールすればツールとして使用できます。</PWorks>
      <PWorks>
        社内の情報検索用にRAGシステムを構築した際、HTMLファイルを情報ソースとして置く場面が多くありました。
        HTMLファイルをRAG用に最適化すると効果が高いのですが、最適化を簡易に実施できる手段に乏しいと思ったので自作しました。
      </PWorks>
      <PWorks>ESmoduleとCommonjsの両対応です。モジュールとしての活用の他、CLIツールとしても使用できます。</PWorks>

      <H3Works>使用した技術</H3Works>
      <PWorks>TypeScript | commander | vitest | tsdown | biome</PWorks>
    </LayoutWorks>
  );
};

export default Htmlrag;
