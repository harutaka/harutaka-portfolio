import { ReactNode } from "react"

type PWorksProps = {
  children: ReactNode
}

const PWorks = ({ children }: PWorksProps) => {
  return <p className="mb-8">{children}</p>
}

export default PWorks
