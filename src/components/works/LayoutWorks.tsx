import { ReactNode } from "react"
import Footer from "@/components/Footer"
import Header from "@/components/Header"

type LayoutWorksProps = {
  title: string
  children: ReactNode
}

const LayoutWorks = ({ title, children }: LayoutWorksProps) => {
  return (
    <>
      <Header />

      <main className="px-4 md:px-10 py-8 mx-auto max-w-4xl">
        <h1 className="my-8 text-2xl font-bold text-center">{title}</h1>
        {children}
      </main>

      <Footer />
    </>
  )
}

export default LayoutWorks
