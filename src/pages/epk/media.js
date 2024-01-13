import Header from '@/components/EpkHeader'
import Head from 'next/head'
import Footer from '@/components/EpkFooter'
import Image from 'next/image';
import dynamic from 'next/dynamic'
import LowerNav from '@/components/EpkLowerNavbar';
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

 
export default function Home() {
  return (
  <>
    <Head>
      <title>media | The Dandy Buzzkills</title>
    </Head>
    <div className='bg-[#e8e4dd]'>
      <Header />
      <h1 className='text-5xl text-center pb-8 -pt-8 md:pt-16 md:pb-4 font-bold'>Photos</h1>
      <p className='text-center pb-8 text-gray-600'>(Open in new tab for full resolution)</p>
      <div className="max-w-7xl mx-auto pb-16 px-4 sm:pb-24 sm:px-6 max-w-[75vw] lg:px-8">
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
            <Image src='/001.jpg' layout='fill' objectFit='cover' className='group-hover:opacity-75 duration-700 ease-in-out'/>
          </div>
          <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
            <Image src='/002.jpg' layout='fill' objectFit='cover' className='group-hover:opacity-75 duration-700 ease-in-out'/>
          </div>
          <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
            <Image src='/003.jpg' layout='fill' objectFit='cover' className='group-hover:opacity-75 duration-700 ease-in-out'/>
          </div>
          <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
            <Image src='/004.jpg' layout='fill' objectFit='cover' className='group-hover:opacity-75 duration-700 ease-in-out'/>
          </div>
          <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
            <Image src='/005.jpg' layout='fill' objectFit='cover' className='group-hover:opacity-75 duration-700 ease-in-out'/>
          </div>
          <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
            <Image src='/006.jpg' layout='fill' objectFit='cover' className='group-hover:opacity-75 duration-700 ease-in-out'/>
          </div>
          <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
            <Image src='/007.jpg' layout='fill' objectFit='cover' className='group-hover:opacity-75 duration-700 ease-in-out'/>
          </div>
          <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
            <Image src='/008.jpg' layout='fill' objectFit='cover' className='group-hover:opacity-75 duration-700 ease-in-out'/>
          </div>
          <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
            <Image src='/009.jpg' layout='fill' objectFit='cover' className='group-hover:opacity-75 duration-700 ease-in-out'/>
          </div>
          <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
            <Image src='/010.jpg' layout='fill' objectFit='cover' className='group-hover:opacity-75 duration-700 ease-in-out'/>
          </div>
          <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
            <Image src='/011.jpg' layout='fill' objectFit='cover' className='group-hover:opacity-75 duration-700 ease-in-out'/>
          </div>
          <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
            <Image src='/012.jpg' layout='fill' objectFit='cover' className='group-hover:opacity-75 duration-700 ease-in-out'/>
          </div>
          <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
            <Image src='/013.jpg' layout='fill' objectFit='cover' className='group-hover:opacity-75 duration-700 ease-in-out'/>
          </div>
          <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
            <Image src='/014.jpg' layout='fill' objectFit='cover' className='group-hover:opacity-75 duration-700 ease-in-out'/>
          </div>
          <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
            <Image src='/015.jpg' layout='fill' objectFit='cover' className='group-hover:opacity-75 duration-700 ease-in-out'/>
          </div>
        </div>
      </div>
      <h1 className='text-5xl text-center font-bold'>Videos</h1>
    <div className="flex flex-col lg:grid lg:grid-cols-2 md:gap-x-16 lg:gap-x-40 lg:my-16 mx-32">
        <div className="rounded-lg shadow-xl flex flex-col gap-8 px-8 py-8 mb-8 bg-white hover:shadow-2xl">
          <ReactPlayer url='https://www.youtube.com/watch?v=_N1oRGqPHZ4' width="[100vw]" controls='true'/>
          <div className='flex flex-col gap-3'>
            <h1 className="text-2xl font-bold">Live at Arthurs Art Bar</h1>
            <p><span className='font-bold'>Recorded: </span>Jan 2023</p>
            <p><span className='font-bold'>Shot by: </span>Spoz Spozington</p>
            <p><span className='font-bold'>Songs: </span>The Moth, Killing Moon, i wanna...</p>
            <p className='font-bold'>Mp4 available upon request</p>
          </div>
        </div>
        <div className="rounded-lg shadow-xl flex flex-col gap-8 px-8 py-8 mb-8 bg-white hover:shadow-2xl">
          <ReactPlayer url='https://www.youtube.com/watch?v=Q_4eiMbLQu8' width="[100vw]"  controls='true'/>
          <div className='flex flex-col gap-3'>
            <h1 className="text-2xl font-bold">Golden Brown (The Stranglers), live at Arthurs Art Bar</h1>
            <p><span className='font-bold'>Recorded: </span>April 2023</p>
            <p><span className='font-bold'>Shot by: </span>@valshootspeople</p>
            <p><span className='font-bold'>Songs: </span>Golden Brown</p>
            <p className='font-bold'>Mp4 available upon request</p>
          </div>
        </div>
      </div>
    </div>
    <LowerNav/>
    <Footer />
  </>
  )
}


