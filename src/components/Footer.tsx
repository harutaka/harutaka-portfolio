import Link from "next/link"
import { ChevronUpIcon } from "@heroicons/react/24/solid"

const Footer = () => {
  return (
    <footer className="bg-neutral text-neutral-content">
      <div className="container flex justify-between items-center py-4 px-5 mx-auto sm:flex-row max-w-7xl">
        <aside className="flex gap-2">
          <Link href="https://twitter.com/harutaka_ini">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
            </svg>
          </Link>
          <p>© 2024 harutaka</p>
        </aside>

        <Link href="#top">
          <button className="py-2 px-2 bg-neutral-content rounded text-neutral">
            <ChevronUpIcon className="w-5 h-5" />
          </button>
        </Link>
      </div>
    </footer>
  )
}

export default Footer
