type ExperienceItemProps = {
  year: number
  title: string
  children: string
}
const ExperienceItem = ({ year, title, children }: ExperienceItemProps) => {
  return (
    <div class="flex relative pt-10 pb-8 mx-auto sm:items-center md:w-full">
      <div class="flex absolute inset-0 justify-center items-center w-12 h-full">
        <div class="w-1 h-full bg-base-300 pointer-events-none"></div>
      </div>
      <div class="inline-flex relative z-10 shrink-0 justify-center items-center mt-10 w-12 h-12 text-sm font-medium text-primary-content bg-primary rounded-full sm:mt-0">
        {`${year}`}
      </div>
      <div class="flex flex-col grow items-start pl-6 sm:flex-row sm:items-center md:pl-8">
        <div class="grow mt-6 sm:pl-6 sm:mt-0">
          <h2 class="mb-1 text-xl font-bold text-base-content">{title}</h2>
          <p class="leading-relaxed">{children}</p>
        </div>
      </div>
    </div>
  )
}

const Experience = () => {
  return (
    <div className="container flex flex-wrap pt-12 mx-auto">
      <ExperienceItem year={2009} title="研究開発">
        開発中の商品のシミュレーションと実証実験を行いました。担当部分のモジュールはC#で、シミュレーションはVBAで作りました。
      </ExperienceItem>

      <ExperienceItem year={2011} title="Androidアプリのシステムテスト">
        テスト設計と環境構築、テスト実施は協力会社に手伝ってもらったので外注管理を担当しました。またある程度こなれた所でテスト自動化も推進しました。
      </ExperienceItem>

      <ExperienceItem year={2013} title="Webアプリ開発">
        商品連携するWebアプリの開発をしました。プラットフォームはglassfish、サーバーはAWSを使用しました。
        基本はバックエンドのAPI開発とサーバーの構築です。要件定義～保守までの工程の担当しました。状況によってはフロントエンドのアプリ開発にも加わりました。
        プロジェクトリーダーも経験し、その際は上記に加え、プロジェクト起案から進捗管理、サービスの運用体制の整備などを行いました。
      </ExperienceItem>

      <ExperienceItem year={2016} title="組み込みWebアプリ開発">
        転職し、某液晶搭載商品の開発を担当しました。毎年1～2回の機能追加アップデートを繰り返していました。
        商品のコンテンツはWebアプリで作成し、内蔵しているブラウザで液晶に表示するしくみになっています。WebアプリはNode.js+expressで作成しています。
        Webアプリではコンテンツ制作はもちろん、パフォーマンス改善なども行いました。担当4年後ぐらいからは、プロジェクトリーダーとして推進しました。
      </ExperienceItem>

      <ExperienceItem year={2022} title="IoT向けAPI標準化と開発プロセス革新">
        現職です。IoT製品向けAPIサービスの開発と標準化を推進しました。
        複数の事業部で利用可能な共通APIプラットフォームの構築に携わり、認証機能や商品別の適切な機能提供を実現しました。
        最近では、CI/CDパイプラインの導入やKubernetesへのデプロイ自動化、
        セキュリティ強化など、開発プロセスの改善に注力しました。
        また、AIを活用したコードレビュー支援システムを導入し、品質向上と効率化を両立。
        これらの取り組みにより、開発速度の向上とサービス品質の改善に貢献しています。
      </ExperienceItem>
    </div>
  )
}

export default Experience
