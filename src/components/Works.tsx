import Image from "next/image"
import Link from "next/link"
import H2Title from "./H2title"

type WorkCardProps = {
  href: string
  imgSrc: string
  title: string
  description: string
}
const WorkCard = ({ href, imgSrc, title, description }: WorkCardProps) => {
  return (
    <div className="p-4 md:w-1/3">
      <Link href={href}>
        <a>
          <div className="overflow-hidden h-full rounded-lg border-2 border-gray-200 hover:opacity-70">
            <Image
              className="object-cover object-center w-full md:h-36 lg:h-48"
              src={imgSrc}
              alt="blog"
              width={800}
              height={400}
            />
            <div className="p-6">
              <h3 className="mb-3 text-lg font-bold">{title}</h3>
              <p className="mb-3 leading-relaxed">{description}</p>
            </div>
          </div>
        </a>
      </Link>
    </div>
  )
}

const Works = () => {
  return (
    <section id="works" className="my-8 mx-auto md:my-24">
      <H2Title title="Works" iconType="global" />

      <div className="px-5 mx-auto">
        <div className="flex flex-wrap -m-4">
          <WorkCard
            title="探偵事務所のデモサイト制作"
            imgSrc="/img/works/detective_overview.jpg"
            href="/works/detective"
            description="架空の探偵事務所を題材に、Next.jsでオリジナルサイトを制作しました。"
          />

          <WorkCard
            title="データ分析サイト構築"
            imgSrc="/img/works/bitool_overview.jpg"
            href="/works/bitool"
            description="社内サーバーにBIツールを導入しました。商品企画やメンテナンスにご活用いただいています。"
          />

          <WorkCard
            title="IoT冷蔵庫のユーザーサービスサイト"
            imgSrc="/img/works/refrigerator_overview.jpg"
            href="/works/refrigerator"
            description="有志による課外活動で、架空のIoT冷蔵庫を題材に、自宅の冷蔵庫の状態がわかるサービスの試作をしました。"
          />

          <WorkCard
            title="ポートフォリオサイト"
            imgSrc="/img/works/portfolio_overview.jpg"
            href="/works/portfolio"
            description="このサイトです。Next.jsを使用しています。"
          />

          <WorkCard
            title="模写コーディング一覧"
            imgSrc="/img/works/lpcollection_overview.jpg"
            href="/works/lpcollection"
            description="過去に模写コーディングしたサイトの一覧です。"
          />
        </div>
      </div>
    </section>
  )
}

export default Works
