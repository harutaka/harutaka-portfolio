import Banner from "@/components/Banner"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Profile from "@/components/Profile"
import Skill from "@/components/Skill"
import Works from "@/components/Works"
import React from "react"

const Home = () => {
  return (
    <>
      <Banner />
      <main className="container mx-auto max-w-7xl md:px-10 px-4">
        <Header className="sticky" />
        <Profile />
        <Skill />
        <Works />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default Home
