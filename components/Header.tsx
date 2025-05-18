import { FunctionComponent, JSX } from "preact"
import { ComputerDesktopIcon, EnvelopeIcon, GlobeAltIcon, UserIcon } from "./Icons.tsx"

const iconClass = "mr-1 w-5 h-5 md:w-6 md:h-6"

type LiItemProps = {
  href: string
  title: string
}

const LiItem: FunctionComponent<LiItemProps> = (props) => {
  return (
    <li class="mx-2 text-sm font-bold md:mx-5 md:text-lg">
      <a href={props.href} class="flex items-center">
        {props.children}
        {props.title}
      </a>
    </li>
  )
}

const Header = (props: JSX.HTMLAttributes<HTMLElement>) => {
  return (
    // bgスタイル指定は、stickyの時にヘッダーが隠れないようにするため
    <nav id="header" class={`top-0 z-20 w-full bg-base-200 ${props.class}`}>
      <div class="py-4 px-10">
        <ul class="flex justify-center">
          <LiItem title="Profile" href="/#profile">
            <UserIcon class={iconClass} />
          </LiItem>
          <LiItem title="Skill" href="/#skill">
            <ComputerDesktopIcon class={iconClass} />
          </LiItem>
          <LiItem title="Works" href="/#works">
            <GlobeAltIcon class={iconClass} />
          </LiItem>
          <LiItem title="Contact" href="/#contact">
            <EnvelopeIcon class={iconClass} />
          </LiItem>
        </ul>
      </div>
    </nav>
  )
}

export default Header
