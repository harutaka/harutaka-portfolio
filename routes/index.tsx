import Banner from "../components/Banner.tsx"
import Header from "../components/Header.tsx"
import Profile from "../components/Profile.tsx"
import Skill from "../components/Skill.tsx"
import Contact from "../components/Contact.tsx"
import Footer from "../components/Footer.tsx"

export default function Index() {
  return (
    <>
      <Banner />
      <main class="container mx-auto max-w-7xl md:px-10 px-4">
        <Header class="sticky" />
        <Profile />
        <Skill />
        
        <Contact />
        {
          /*
        <Works />
         */
        }
      </main>
      <Footer />
    </>
  )
}
