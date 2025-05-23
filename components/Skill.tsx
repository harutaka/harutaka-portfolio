import { ComponentChildren } from "preact"
import Section from "./Section.tsx"
import { Cog8ToothIcon, PencilSquareIcon, PresentationChartLineIcon, ServerStackIcon, StarIcon } from "./Icons.tsx"

const iconComponents = {
  pencil: PencilSquareIcon,
  server: ServerStackIcon,
  tooth: Cog8ToothIcon,
  chart: PresentationChartLineIcon,
}

type SkillBoardProps = {
  title: string
  description: string
  iconType: "pencil" | "server" | "tooth" | "chart"
  children: ComponentChildren
}
const SkillBoard = ({ title, description, iconType, children }: SkillBoardProps) => {
  const IconComponent = iconComponents[iconType]
  return (
    <div class="py-8 mb-8 bg-base-100 shadow-md md:mb-0">
      <div class="flex justify-center items-center text-3xl font-bold">
        <IconComponent class="mr-2 w-7 h-7" />
        <p>{title}</p>
      </div>

      <div class="mt-4 mb-8 text-center">{description}</div>

      <div class="flex my-4 font-bold text-center">
        <div class="w-5/12">技術</div>
        <div class="w-3/12">経験年数</div>
        <div class="w-4/12">スキル</div>
      </div>
      {children}
    </div>
  )
}

type SkillItemProps = {
  title: string
  year: string
  rate: 1 | 2 | 3 | 4 | 5
}
const SkillItem = ({ title, year, rate }: SkillItemProps) => {
  return (
    <div class="flex my-4 text-center">
      <div class="w-5/12">{title}</div>
      <div class="w-3/12">{year}</div>
      <div class="flex justify-center w-4/12">
        {[...Array(rate)].map((_, i) => <StarIcon key={i} class="w-4 h-4 text-primary md:w-5 md:h-5" />)}
        {[...Array(5 - rate)].map((_, i) => <StarIcon key={i} class="w-4 h-4 text-primary-content md:w-5 md:h-5" />)}
      </div>
    </div>
  )
}

const Skill = () => {
  return (
    <Section id="skill" title="Skill">
      <div class="grid-cols-2 gap-8 md:grid">
        <SkillBoard title="Frontend" iconType="pencil" description="Node.js系のWebアプリ制作が得意分野です。">
          <SkillItem title="HTML/CSS" year="5年以上" rate={5} />
          <SkillItem title="JavaScript" year="5年以上" rate={5} />
          <SkillItem title="TypeScript" year="3年" rate={3} />
          <SkillItem title="React" year="2年" rate={3} />
          <SkillItem title="Next.js/Fresh" year="2年" rate={3} />
        </SkillBoard>

        <SkillBoard
          title="Backend"
          iconType="server"
          description="Expressでの実績が多いですが、直近ではMicronautを使っています。"
        >
          <SkillItem title="Node.js/Deno" year="5年以上" rate={5} />
          <SkillItem title="Express.js" year="5年以上" rate={5} />
          <SkillItem title="Python" year="2年" rate={3} />
          <SkillItem title="gRPC" year="2年" rate={3} />
          <SkillItem title="Micronaut(kotlin)" year="2年" rate={3} />
        </SkillBoard>

        <SkillBoard title="DevOps" iconType="tooth" description="直近では各サービスをKubernetesで運用しています。">
          <SkillItem title="AWS" year="3年" rate={5} />
          <SkillItem title="Kubernetes" year="3年" rate={4} />
          <SkillItem title="GitHub Actions" year="3年" rate={4} />
          <SkillItem title="Jenkins" year="5年以上" rate={4} />
          <SkillItem title="Argo CD" year="3年" rate={4} />
          <SkillItem title="terraform" year="2年" rate={3} />
        </SkillBoard>

        <SkillBoard title="etc" iconType="chart" description="環境構築・開発管理・進行で使用します">
          <SkillItem title="Redmine" year="5年以上" rate={5} />
          <SkillItem title="WSL2" year="3年" rate={5} />
          <SkillItem title="NewRelic" year="2年" rate={4} />
          <SkillItem title="JIRA" year="2年" rate={3} />
          <SkillItem title="Confluence" year="2年" rate={3} />
        </SkillBoard>
      </div>
    </Section>
  )
}

export default Skill
