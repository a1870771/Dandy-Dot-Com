import Header from '@/components/EpkHeader'
import Head from 'next/head'
import Link from 'next/link'
import Footer from '@/components/EpkFooter'
import EmailForm from '@/components/EmailForm'
import Image from 'next/image'
import LowerNav from '@/components/EpkLowerNavbar'
export default function Music() {
  return (
  <>
    <Head>
      <title>music | The Dandy Buzzkills</title>
    </Head>
    <div className='bg-[#e8e4dd]' >
      <Header />
      <p className='text-5xl py-8 text-center font-[bold]'>Music</p>
      <div className="flex flex-col lg:grid lg:grid-cols-2 md:gap-x-16 lg:gap-x-40 lg:pt-20 lg:py-16 mx-8 lg:mx-32">
        <div className="rounded-lg shadow-xl flex flex-col md:flex-row gap-8 px-8 py-8 mb-8 bg-[white] items-center hover:shadow-2xl">
          <Image src={'/themoth.jpg'} width={250} height={250}/>
          <div className='flex flex-col gap-3'>
            <h1 className="text-2xl font-bold">The Moth (Single)</h1>
            <p><span className='font-bold'>Released: </span>2023</p>
            <p><span className='font-bold'>Written by: </span>Maxwell Adair</p>
            <p><span className='font-bold'>Produced by: </span>Hudson Adair</p>
            <p className='font-bold'>Available on:</p>
              <div className='flex flex-row gap-4'>
              <Link target='_blank' href='https://open.spotify.com/album/6au4gmLYwwy0VEvDwvh5yb?si=LHe3lotJTe6PF397etWVug'>
                <Image src={'/spotify.png'} width={30} height={30} />
              </Link>
              <Link target='_blank' href='https://www.youtube.com/watch?v=VGzlfftcePA'>
                <Image src={'/yt.png'} width={30} height={30} />
              </Link>
              {/*<Link target='_blank' href=''>
                <Image src={'/drive.png'} width={30} height={30} />
              </Link>*/}
              </div>
          </div>
        </div>
        <div className="rounded-lg shadow-xl flex flex-col md:flex-row gap-8 px-8 py-8 mb-8 bg-white items-center hover:shadow-2xl">
          <Image src={'/iwanna.jpg'} width={250} height={250}/>
          <div className='flex flex-col gap-3'>
            <h1 className="text-2xl font-bold">I Wanna... (Single)</h1>
            <p><span className='font-bold'>Released: </span>2022</p>
            <p><span className='font-bold'>Written by: </span>Maxwell Adair</p>
            <p><span className='font-bold'>Produced by: </span>Hudson Adair</p>
            <p className='font-bold'>Available on:</p>
              <div className='flex flex-row gap-4'>
              <Link target='_blank' href='https://open.spotify.com/album/0cjJQJPYPtacba51SqFxDX?si=6gAEeb4fT2uIToPRfCTyKw'>
                <Image src={'/spotify.png'} width={30} height={30} />
              </Link>
              <Link target='_blank' href='https://www.youtube.com/watch?v=taGFpqu6WEs'>
                <Image src={'/yt.png'} width={30} height={30} />
              </Link>
              {/*<Link target='_blank' href=''>
                <Image src={'/drive.png'} width={30} height={30} />
              </Link>*/}
              </div>
          </div>
        </div>
      </div>
    </div>
    <LowerNav/>
    <Footer/>
  </>
  )
}
