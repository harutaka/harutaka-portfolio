import Experience from "./Experience.tsx"
import Section from "./Section.tsx"

const Profile = () => {
  return (
    <Section id="profile" title="Profile" class="max-w-4xl">
      <div>
        <div class="hero">
          <div class="hero-content flex-col lg:flex-row">
            <img src="/img/harutaka_icon_360.png" alt="avatar" class="w-40 h-40 mr-8" />
            <div>
              <h3 class="text-2xl font-bold">はるたか</h3>
              <p class="py-6">
                大阪在住のソフト系エンジニアです。 技術分野は主にWeb、IoT、サーバーです。
                現職では主にテックリードをしています。
                Webアプリ制作及び、クラウド側のバックエンド構築はお任せください。
              </p>
            </div>
          </div>
        </div>

        <Experience />
      </div>
    </Section>
  )
}

export default Profile