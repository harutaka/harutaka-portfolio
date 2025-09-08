import React, { ReactNode } from "react"
import { UserIcon, ComputerDesktopIcon, GlobeAltIcon, EnvelopeIcon } from "@heroicons/react/24/solid"

const iconComponents = {
  profile: UserIcon,
  skill: ComputerDesktopIcon,
  works: GlobeAltIcon,
  contact: EnvelopeIcon,
}

type SectionProps = {
  id: "profile" | "skill" | "works" | "contact"
  title: string
  children: ReactNode
  className?: string | undefined
}
const Section = ({ id, title, children, className }: SectionProps) => {
  const IconComponent = iconComponents[id]
  return (
    <section id={id} className={`py-16 md:py-20 mx-auto ${className}`}>
      <h2 className="flex justify-center items-center mb-8 md:mb-12 text-2xl md:text-5xl font-bold tracking-wider text-primary">
        <IconComponent className="mr-2 w-12 h-12" />
        {title}
      </h2>
      {children}
    </section>
  )
}

export default Section
