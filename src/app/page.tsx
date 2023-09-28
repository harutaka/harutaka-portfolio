import Banner from '@/components/Banner'
import Header from '@/components/Header'
import Profile from '@/components/Profile'
import Skill from '@/components/Skill'
import React from 'react'

const Home = () => {
  return (
    <>
      <Banner />
      <div className='container mx-auto'>
        <Header />
        <Profile />
        <Skill />

        <div className='h-96 bg-blue-400 my-8'></div>
        <div className='h-96 bg-blue-500 my-8'></div>
        <div className='h-96 bg-orange-400 my-8'></div>
      </div>
    </>
  )
}

export default Home