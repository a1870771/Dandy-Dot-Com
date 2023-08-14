import Head from 'next/head'
import Landing from '@/components/Landing'
export default function Home() {
  return (
  <>
    <Head>
      <title>home | The Dandy Buzzkills</title>
    </Head>
    <div className="bg-white">
      <Landing/>
  </div>
  </>
  )
}
