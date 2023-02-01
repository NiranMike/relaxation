
import {useEffect} from 'react'
import Head from 'next/head'
import Header from "../components/Header"
import Image from 'next/image'
import Banner from '../components/Banner';
import mydata from '../data.json'
import SmallCard from './../components/SmallCard';

const Home = () => {
 
  return (
    <div className="">
      <Head>
        <title>RelaxNaija</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />

      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>

          {/* fetch data from a server - API endpoints */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {mydata?.map(({img, distance, location}) => (
            <SmallCard key={img} img={img} distance={distance} location={location} />
          ))}
          </div>
        </section>

        <section>
          <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>
        </section>
      </main>

     
    </div>
  )
}




export default Home
