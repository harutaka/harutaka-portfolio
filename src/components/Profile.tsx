import Image from "next/image"
import Experience from "./Experience"
import H2Title from "./H2title"

const Profile = () => {
  return (
    <section id="profile" className="my-8 mx-auto max-w-4xl md:my-20">
      <H2Title title="Profile" iconType="peaple" />
      <div className="flex-wrap md:flex">
        <p className="mx-auto w-32 text-center md:mr-8 md:w-1/5">
          <Image src="/img/harutaka_icon_360.png" alt="" width={160} height={160} />
        </p>
        <div className="flex-1">
          <div className="mb-4 text-2xl font-bold text-center md:text-left">はるたか</div>
          <p>
            大阪在住のソフト系エンジニアです。 技術分野は主にWeb、IoT、サーバーです。
            現職ではプロジェクトによりけりですが、プロジェクトリーダー・プロダクトリーダー・テックリードをしています。
            Webアプリ制作はお任せください。
          </p>
        </div>
      </div>

      <Experience />

    </section>
  )
}

export default Profile
