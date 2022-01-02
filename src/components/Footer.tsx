import Link from "next/link"


const Footer = () => {
  return (
    <footer>
      <div className="bg-gray-300">
        <div className="container flex justify-between items-center py-4 px-5 mx-auto sm:flex-row">
          <p className="text-sm text-center sm:text-left">
            © 2022 harutaka —
            <Link href="https://twitter.com/knyttneve">
              <a className="ml-1" target="_blank">
                @harutaka_ini
              </a>
            </Link>
          </p>
          <Link href="#__next">
            <a>
              <button className="py-2 px-2 text-white bg-gray-700 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </a>
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
