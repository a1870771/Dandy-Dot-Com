import Head from 'next/head'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
  <>
    <Head>
      <title>band | The Dandy Buzzkills</title>
    </Head>
    <div className="bg-white">
    <Navbar/>
    </div>
  </>
  )
}
