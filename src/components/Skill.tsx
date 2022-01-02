import { ReactNode } from "react"
import H2Title from "./H2title"

type IconProps = {
  className: string
}
const PencilIcon = ({ className }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
      />
    </svg>
  )
}
const ServerIcon = ({ className }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
      />
    </svg>
  )
}
const SettingIcon = ({ className }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor">
      <path
        fillRule="evenodd"
        d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
        clipRule="evenodd"
      />
    </svg>
  )
}
const ChartIcon = ({ className }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor">
      <path
        fillRule="evenodd"
        d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
  )
}

const StarIcon = ({ className }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}

const iconComponents = {
  pencil: PencilIcon,
  server: ServerIcon,
  setting: SettingIcon,
  chart: ChartIcon,
}

type SkillBoardProps = {
  title: string
  description: string
  iconType: "pencil" | "server" | "setting" | "chart"
  children: ReactNode
}
const SkillBoard = ({ title, description, iconType, children }: SkillBoardProps) => {
  const IconComponent = iconComponents[iconType]
  return (
    <div className="py-8 mb-8 bg-white shadow-md md:mb-0">
      <div className="flex justify-center items-center text-3xl font-bold">
        <IconComponent className="mr-2 w-7 h-7" />
        <p>{title}</p>
      </div>

      <div className="mt-4 mb-8 text-center">{description}</div>

      <div className="flex my-4 font-bold text-center">
        <div className="w-5/12">技術</div>
        <div className="w-3/12">経験年数</div>
        <div className="w-4/12">スキル</div>
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
    <div className="flex my-4 text-center">
      <div className="w-5/12">{title}</div>
      <div className="w-3/12">{year}</div>
      <div className="flex justify-center w-4/12">
        {[...Array(rate)].map((_, i) => (
          <StarIcon key={i} className="w-4 h-4 text-indigo-600 md:w-5 md:h-5" />
        ))}
        {[...Array(5 - rate)].map((_, i) => (
          <StarIcon key={i} className="w-4 h-4 text-indigo-200 md:w-5 md:h-5" />
        ))}
      </div>
    </div>
  )
}

const Skill = () => {
  return (
    <section id="skill" className="my-8 mx-auto md:my-20">
      <H2Title title="Skill" iconType="pc" />

      <div className="grid-cols-2 gap-8 md:grid">
        <SkillBoard title="Frontend" iconType="pencil" description="最近はNext.jsでWebアプリを作成しています。">
          <SkillItem title="HTML/CSS" year="5年以上" rate={5} />
          <SkillItem title="JavaScript" year="5年以上" rate={5} />
          <SkillItem title="Tailwind CSS" year="1年" rate={3} />
          <SkillItem title="React" year="2年" rate={3} />
          <SkillItem title="Next.js" year="2年" rate={3} />
        </SkillBoard>

        <SkillBoard title="Backend" iconType="server" description="ExpressでAPIサーバーを作ることが多いです。">
          <SkillItem title="Node.js" year="5年以上" rate={5} />
          <SkillItem title="Express.js" year="5年以上" rate={5} />
          <SkillItem title="Python" year="2年" rate={3} />
          <SkillItem title="SQLite" year="2年" rate={3} />
          <SkillItem title="Redis" year="2年" rate={1} />
        </SkillBoard>

        <SkillBoard title="DevOps" iconType="setting" description="各サービスはDockerで運用しています。">
          <SkillItem title="Docker" year="3年" rate={4} />
          <SkillItem title="Jenkins" year="5年以上" rate={4} />
          <SkillItem title="Linux" year="5年以上" rate={4} />
          <SkillItem title="bash" year="3年" rate={3} />
          <SkillItem title="AWS" year="3年" rate={3} />
        </SkillBoard>

        <SkillBoard title="etc" iconType="chart" description="開発・管理・進行で使用します">
          <SkillItem title="Redmine" year="5年以上" rate={5} />
          <SkillItem title="要件定義" year="5年以上" rate={4} />
          <SkillItem title="VS Code" year="3年" rate={4} />
          <SkillItem title="GIMP" year="2年" rate={3} />
          <SkillItem title="TypeScript" year="1年" rate={3} />
        </SkillBoard>
      </div>
    </section>
  )
}

export default Skill
