import Image from "next/image"
import Link from "next/link"
import Section from "./Section"
import harutakaAvatar from "@/../public/img/harutaka_icon_360.png"

const Contact = () => {
  return (
    <Section id="contact" title="Contact">
      <div className="my-8 text-center">お問い合わせはTwitterのDMにてお願いします。</div>
      
      <div className="text-center">
        <Link href="https://twitter.com/harutaka_ini" className="inline-block mx-auto text-center" target="_blank">
          <Image src={harutakaAvatar} alt="avatar" className="w-40 h-40" />
          <div className="">@harutaka_ini</div>
        </Link>
      </div>
    </Section>
  )
}

export default Contact
