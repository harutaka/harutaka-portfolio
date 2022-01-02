import Image from "next/image"
import Link from "next/link"
import H2Title from "./H2title"

const Contact = () => {
  return (
    <section id="contact" className="my-8 mx-auto max-w-4xl md:my-24">
      <H2Title title="Contact" iconType="mail" />

      <div className="my-8 text-center">お問い合わせはTwitterのDMにてお願いします。</div>

      <div className="text-center">
        <Link href="https://twitter.com/harutaka_ini">
          <a className="inline-block mx-auto text-center" target="_blank">
            <Image src="/img/harutaka_icon_360.png" alt="profile" width={160} height={160} />
            <div className="">@harutaka_ini</div>
          </a>
        </Link>
      </div>
    </section>
  )
}

export default Contact
