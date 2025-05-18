import Section from "./Section.tsx"

type WorkCardProps = {
  href: string
  imgSrc: string
  title: string
  description: string
}
const WorkCard = ({ href, imgSrc, title, description }: WorkCardProps) => {
  return (
    <a className="card bg-base-100 shadow-xl" href={href}>
      <figure>
        <img src={imgSrc} alt="card" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
      </div>
    </a>
  )
}

const Works = () => {
  return (
    <Section id="works" title="Works">
      <div className="px-5 mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <WorkCard
            title="探偵事務所のデモサイト制作"
            imgSrc="/img/works/detective_overview.jpg"
            href="/works/detective"
            description="架空の探偵事務所を題材に、Next.jsでオリジナルサイトを制作しました。"
          />

          <WorkCard
            title="Node.js用パッケージ作成"
            imgSrc="/img/works/gprc_health_check.jpg"
            href="/works/grpchealth"
            description="gPRC用のヘルスチェックツールを作成しました。"
          />

          <WorkCard
            title="ポートフォリオサイト"
            imgSrc="/img/works/portfolio_overview.jpg"
            href="/works/portfolio"
            description="このサイトです。Freshを使用しています。"
          />
        </div>
      </div>
    </Section>
  )
}

export default Works
