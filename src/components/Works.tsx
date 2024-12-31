import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import Section from "./Section"
import detectiveImg from "@/../public/img/works/detective_overview.jpg"
import bitoolImg from "@/../public/img/works/bitool_overview.jpg"
import portfolioImg from "@/../public/img/works/portfolio_overview.jpg"

type WorkCardProps = {
  href: string
  imgSrc: StaticImageData
  title: string
  description: string
}
const WorkCard = ({ href, imgSrc, title, description }: WorkCardProps) => {
  return (
    <Link className="card bg-base-100 shadow-xl" href={href}>
      <figure>
        <Image src={imgSrc} alt="card" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
      </div>
    </Link>
  )
}

const Works = () => {
  return (
    <Section id="works" title="Works">
      <div className="px-5 mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <WorkCard
            title="探偵事務所のデモサイト制作"
            imgSrc={detectiveImg}
            href="/works/detective"
            description="架空の探偵事務所を題材に、Next.jsでオリジナルサイトを制作しました。"
          />

          <WorkCard
            title="データ分析サイト構築"
            imgSrc={bitoolImg}
            href="/works/bitool"
            description="社内サーバーにBIツールを導入しました。商品企画やメンテナンスにご活用いただいています。"
          />

          <WorkCard
            title="ポートフォリオサイト"
            imgSrc={portfolioImg}
            href="/works/portfolio"
            description="このサイトです。Next.jsを使用しています。"
          />
        </div>
      </div>
    </Section>
  )
}

export default Works
