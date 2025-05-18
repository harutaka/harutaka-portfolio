import { ChevronUpIcon, TwitterIcon } from "./Icons.tsx"

const Footer = () => {
  return (
    <footer class="bg-neutral text-neutral-content">
      <div class="container flex justify-between items-center py-4 px-5 mx-auto sm:flex-row max-w-7xl">
        <aside class="flex gap-2">
          <a href="https://twitter.com/harutaka_ini">
            <TwitterIcon />
          </a>
          <p>© 2025 harutaka</p>
        </aside>

        <a href="#top">
          <button type="button" class="py-2 px-2 bg-neutral-content rounded text-neutral cursor-pointer">
            <ChevronUpIcon class="w-5 h-5" />
          </button>
        </a>
      </div>
    </footer>
  )
}

export default Footer
