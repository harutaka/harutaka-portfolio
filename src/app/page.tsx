import Banner from '@/components/Banner'
import Header from '@/components/Header'
import React from 'react'

const Home = () => {
  return (
    <>
      <Banner />
      <div className='container mx-auto'>
        <Header />
      </div>
    </>
  )
}

export default Home