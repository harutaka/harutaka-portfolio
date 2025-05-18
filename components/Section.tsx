import { ComponentChildren } from "preact"
import { ComputerDesktopIcon, EnvelopeIcon, GlobeAltIcon, UserIcon } from "./Icons.tsx"

const iconComponents = {
  profile: UserIcon,
  skill: ComputerDesktopIcon,
  works: GlobeAltIcon,
  contact: EnvelopeIcon,
}

type SectionProps = {
  id: "profile" | "skill" | "works" | "contact"
  title: string
  children: ComponentChildren
  class?: string | undefined
}
const Section = (props: SectionProps) => {
  const IconComponent = iconComponents[props.id]
  return (
    <section id={props.id} class={`py-16 md:py-20 mx-auto ${props.class}`}>
      <h2 class="flex justify-center items-center mb-8 md:mb-12 text-2xl md:text-5xl font-bold tracking-wider text-primary">
        <IconComponent class="mr-2 w-12 h-12" />
        {props.title}
      </h2>
      {props.children}
    </section>
  )
}

export default Section
