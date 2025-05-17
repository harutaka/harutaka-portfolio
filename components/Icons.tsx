import { JSX } from "preact"

interface IconProps extends JSX.HTMLAttributes<SVGSVGElement> {
  class?: string
}

export const ChevronUpIcon = (props: IconProps) => {
  // use heroicons chevron-up icon
  const combinedClass = `size-6 ${props.class}`

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class={combinedClass}
    >
      <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
    </svg>
  )
}
