import { ReactNode } from "react"

type H3WorksProps = {
  children: ReactNode
}

const H3Works = ({ children }: H3WorksProps) => {
  return (
    <h3 className="relative before:absolute before:top-0 before:left-0 pl-4 mt-12 mb-1.5 before:w-1 before:h-full text-lg font-bold before:bg-base-content">
      {children}
    </h3>
  )
}

export default H3Works
