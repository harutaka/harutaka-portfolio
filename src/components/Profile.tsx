import Image from "next/image"
import Experience from "./Experience"
import Section from "./Section"
import harutakaAvatar from "@/../public/img/harutaka_icon_360.png"

const Profile = () => {
  return (
    <Section id="profile" title="Profile" className="max-w-4xl">
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <Image src={harutakaAvatar} alt="avatar" className="w-40 h-40 mr-8" />
          <div>
            <h3 className="text-2xl font-bold">はるたか</h3>
            <p className="py-6">
              大阪在住のソフト系エンジニアです。 技術分野は主にWeb、IoT、サーバーです。
              現職ではプロジェクトによりけりですが、プロジェクトリーダー・プロダクトリーダー・テックリードをしています。
              Webアプリ制作はお任せください。
            </p>
          </div>
        </div>
      </div>

      <Experience />
    </Section>
  )
}

export default Profile
