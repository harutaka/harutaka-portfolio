import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import detectiveImg from "@/../public/img/works/detective_overview.jpg";
import htmlRagImg from "@/../public/img/works/html_rag_optimizer.png";
import portfolioImg from "@/../public/img/works/portfolio_overview.jpg";
import Section from "./Section";

type WorkCardProps = {
  href: string;
  imgSrc: StaticImageData;
  title: string;
  description: string;
};
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
  );
};

const Works = () => {
  return (
    <Section id="works" title="Works">
      <div className="px-5 mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <WorkCard
            title="探偵事務所のデモサイト制作"
            imgSrc={detectiveImg}
            href="/works/detective"
            description="架空の探偵事務所を題材に、オリジナルサイトを制作しました。"
          />

          <WorkCard
            title="npmパッケージ作成"
            imgSrc={htmlRagImg}
            href="/works/htmlrag"
            description="RAG検索効率化のためのHTML最適化ツールを作成しました。"
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
  );
};

export default Works;
