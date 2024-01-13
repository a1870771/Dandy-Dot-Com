import Header from '@/components/EpkHeader'
import Head from 'next/head'
import Link from 'next/link'
import Footer from '@/components/EpkFooter'
import EmailForm from '@/components/EmailForm'
import LowerNav from '@/components/EpkLowerNavbar'

export default function Home() {
  return (
    <>
    <Head>
      <title>contact | The Dandy Buzzkills</title>
    </Head>
    <div className='bg-[#e8e4dd]'>
      <Header />
      <div className="md:grid md:grid-cols-2 min-h-[75vh] md:gap-x-16 lg:gap-x-40 md:py-20 px-32">
        <div className='mb-8'>
          <h3 className="mb-4 text-4xl lg:text-5xl leading-tight">
            Contact Us
          </h3>
          <p className="text-lg leading-relaxed mb-4">
          Please feel free to reach out via any of the following links to get in touch with us, or send us an email using the form on the right!
          </p>
          <div className='mt-8 flex flex-col'>
            <Link href='https://www.instagram.com/dandybuzzkills/' target="_blank" className='hover:underline'>Instagram</Link>
            <Link href='https://www.facebook.com/dandybuzzkills/' target="_blank" className='hover:underline'>Facebook</Link>
          </div>
        </div>
        <EmailForm/>
      </div>

    </div>
    <LowerNav/>
    <Footer/>
    </>
  )
};
