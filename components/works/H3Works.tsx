import { FunctionComponent } from "preact"

const H3Works: FunctionComponent<unknown> = (props) => {
  return (
    <h3 className="relative before:absolute before:top-0 before:left-0 pl-4 mt-12 mb-1.5 before:w-1 before:h-full text-lg font-bold before:bg-base-content">
      {props.children}
    </h3>
  )
}

export default H3Works
