import Link from "next/link"
import { ReactNode } from "react"

const iconClass = "mr-1 w-5 h-5 md:w-6 md:h-6"
const PeapleIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={iconClass} viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
    </svg>
  )
}

const PcIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={iconClass} viewBox="0 0 20 20" fill="currentColor">
      <path
        fillRule="evenodd"
        d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z"
        clipRule="evenodd"
      />
    </svg>
  )
}

const GlobalIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
      />
    </svg>
  )
}

const MailIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={iconClass} viewBox="0 0 20 20" fill="currentColor">
      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
    </svg>
  )
}

type LiItemProps = {
  href: string
  title: string
  children?: ReactNode
}

const LiItem = ({ href, title, children }: LiItemProps) => {
  return (
    <li className="mx-2 text-sm font-bold text-gray-800 md:mx-5 md:text-lg">
      <Link href={href}>
        <a className="flex items-center">
          {children}
          {title}
        </a>
      </Link>
    </li>
  )
}

const Header = () => {
  return (
    <nav className="sticky top-0 z-10 w-full bg-gray-100">
      <div className="py-4 px-10">
        <ul className="flex justify-center">
          <LiItem title="Profile" href="#profile">
            <PeapleIcon />
          </LiItem>
          <LiItem title="Skill" href="#skill">
            <PcIcon />
          </LiItem>
          <LiItem title="Works" href="#works">
            <GlobalIcon />
          </LiItem>
          <LiItem title="Contact" href="#contact">
            <MailIcon />
          </LiItem>
        </ul>
      </div>
    </nav>
  )
}

export default Header
