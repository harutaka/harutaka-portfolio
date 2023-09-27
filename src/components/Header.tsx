import Link from "next/link"
import { ReactNode } from "react"
import { UserIcon, ComputerDesktopIcon, GlobeAltIcon, EnvelopeIcon } from "@heroicons/react/24/solid"

const iconClass = "mr-1 w-5 h-5 md:w-6 md:h-6"

type LiItemProps = {
  href: string
  title: string
  children?: ReactNode
}

const LiItem = ({ href, title, children }: LiItemProps) => {
  return (
    <li className="mx-2 text-sm font-bold md:mx-5 md:text-lg">
      <Link href={href} className="flex items-center">
        {children}
        {title}
      </Link>
    </li>
  )
}

const Header = () => {
  return (
    <nav id="header" className="sticky top-0 z-20 w-full bg-base-100">
      <div className="py-4 px-10">
        <ul className="flex justify-center">
          <LiItem title="Profile" href="/#profile">
            <UserIcon className={iconClass} />
          </LiItem>
          <LiItem title="Skill" href="/#skill">
            <ComputerDesktopIcon className={iconClass} />
          </LiItem>
          <LiItem title="Works" href="/#works">
            <GlobeAltIcon className={iconClass} />
          </LiItem>
          <LiItem title="Contact" href="/#contact">
            <EnvelopeIcon className={iconClass} />
          </LiItem>
        </ul>
      </div>
    </nav>
  )
}

export default Header
