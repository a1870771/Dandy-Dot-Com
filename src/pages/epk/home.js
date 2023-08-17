import Header from '@/components/EpkHeader'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '@/components/EpkFooter'

export default function Home() {
  return (
  <>
    <Head>
      <title>home | The Dandy Buzzkills</title>
    </Head>
    <div className='container mx-auto px-5'>
      <Header />
      <Image className="mb-8 md:my-12" src="/hero.jpg" width="1500" height="1000"/>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-5xl leading-tight">
            A boy band playing on Kaurna Land
          </h3>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">
          Welcome! This website is the electronic press kit of the infamous Adelaide-based post-punk outift The Dandy Buzzkills.
          Herein you'll find all of our music, our press shots and some live footage, as well as our story (in four different word counts)
          and more than enough routes through which you can get in touch.
          </p>
          <div className="mb-4 md:mb-0 text-sm text-gray-500">
            Website last updated 17/08/2023
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </>
  )
}
