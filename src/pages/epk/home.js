import Header from '@/components/EpkHeader'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '@/components/EpkFooter'
import LowerNav from '@/components/EpkLowerNavbar'

export default function Home() {
  return (
  <>
    <Head>
      <title>home | The Dandy Buzzkills</title>
    </Head>
    <div>
      <Header />
      <Image src="/hero.jpg" width="2000" height="1000"/>
      <div className="flex flex-col">
        <div className="bg-[#e8e4dd] px-8 lg:px-80 py-12 lg:py-24 text-4xl lg:text-8xl font-[bold] text-center">
          <p>Welcome to the electronic press kit of the infamous</p>
          <p className='text-6xl lg:text-[130px]'>Dandy Buzzkills.</p>
        </div>
        <div className="bg-[#b62b32] px-4 lg:px-80 py-4 lg:py-24 text-xl lg:text-4xl text-[#e8e4dd] text-justify">
          <p className="max-w-5xl mx-auto">
          An Adelaide-based post-punk outift. Herein you’ll find all of our music, our press shots and some live footage, as well as our story (in four different word counts) and more than enough routes through which you can get in touch.
          </p>
        </div>
      </div>
      <Image src="/hero2.jpg" width="2000" height="1000"/>
    </div>
    <LowerNav />
    <Footer />
  </>
  )
}
