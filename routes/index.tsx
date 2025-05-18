import Banner from "../components/Banner.tsx"
import Header from "../components/Header.tsx"
import Profile from "../components/Profile.tsx"
import Footer from "../components/Footer.tsx"

export default function Index() {
  return (
    <>
      <Banner />
      <main class="container mx-auto max-w-7xl md:px-10 px-4">
        <Header class="sticky" />
        <Profile />
        {
          /*
        <Skill />
        <Works />
        <Contact /> */
        }
      </main>
      <Footer />
    </>
  )
}
