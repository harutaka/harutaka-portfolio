import { FunctionComponent } from "preact"
import Footer from "../Footer.tsx"
import Header from "../Header.tsx"

type LayoutWorksProps = {
  title: string
}

const LayoutWorks: FunctionComponent<LayoutWorksProps> = (props) => {
  return (
    <>
      <Header />

      <main className="px-4 md:px-10 py-8 mx-auto max-w-4xl">
        <h1 className="my-8 text-2xl font-bold text-center">{props.title}</h1>
        {props.children}
      </main>

      <Footer />
    </>
  )
}

export default LayoutWorks
