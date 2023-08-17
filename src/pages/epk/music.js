import Header from '@/components/EpkHeader'
import Head from 'next/head'
import Link from 'next/link'
import Footer from '@/components/EpkFooter'
import EmailForm from '@/components/EmailForm'
import Image from 'next/image'
export default function Music() {
  return (
  <>
    <Head>
      <title>music | The Dandy Buzzkills</title>
    </Head>
    <div className='container mx-auto px-5'>
      <Header />
      <div className="flex flex-col lg:grid lg:grid-cols-2 md:gap-x-16 lg:gap-x-40 lg:my-20 lg:my-28">
        <div className="rounded-lg shadow-xl flex flex-col md:flex-row gap-8 px-8 py-8 mb-8 bg-white hover:shadow-2xl">
          <Image src={'/themoth.jpg'} width={250} height={250}/>
          <div className='flex flex-col gap-3'>
            <h1 className="text-2xl font-bold">The Moth (Single)</h1>
            <p><span className='font-bold'>Released: </span>2023</p>
            <p><span className='font-bold'>Written by: </span>Maxwell Adair</p>
            <p><span className='font-bold'>Produced by: </span>Hudson Adair and Jon McNichol</p>
            <p className='font-bold'>Available on:</p>
              <div className='flex flex-row gap-4'>
                <Image src={'/spotify.png'} width={30} height={30} />
                <Image src={'/yt.png'} width={30} height={30} />
                <Image src={'/drive.png'} width={30} height={30} />
              </div>
          </div>
        </div>
        <div className="rounded-lg shadow-xl flex flex-col md:flex-row gap-8 px-8 py-8 mb-8 bg-white hover:shadow-2xl">
          <Image src={'/iwanna.jpg'} width={250} height={250}/>
          <div className='flex flex-col gap-3'>
            <h1 className="text-2xl font-bold">I Wanna... (Single)</h1>
            <p><span className='font-bold'>Released: </span>2022</p>
            <p><span className='font-bold'>Written by: </span>Maxwell Adair</p>
            <p><span className='font-bold'>Produced by: </span>Hudson Adair</p>
            <p className='font-bold'>Available on:</p>
              <div className='flex flex-row gap-4'>
                <Image src={'/spotify.png'} width={30} height={30} />
                <Image src={'/yt.png'} width={30} height={30} />
                <Image src={'/drive.png'} width={30} height={30} />
              </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </>
  )
}
