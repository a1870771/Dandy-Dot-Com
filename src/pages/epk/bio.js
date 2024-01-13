import Header from '@/components/EpkHeader'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '@/components/EpkFooter'
import LowerNav from '@/components/EpkLowerNavbar'

export default function Home() {
  return (
  <>
    <Head>
      <title>biographies | The Dandy Buzzkills</title>
    </Head>
    <div className='bg-[#e8e4dd]'>
      <Header />
      <div className='md:mx-80'>
        <h1 className='pt-32 tracking-tighter leading-tight text-4xl font-bold'>50 Words</h1>
        <p className='pb-16'>The Dandy Buzzkills have fast become one of the most compelling acts to emerge in the Australian scene. Known for incorporating everything from bananas to country music to their own brand of shoe-gaze flavoured post-punk, every set is unique, entertaining, and above all, loud. With plenty more up their collective sleeve, The Dandy Buzzkills are not an act to overlook.</p>
        <h1 className='tracking-tighter leading-tight text-4xl font-bold'>100 Words</h1>
        <p className='pb-16'>Formed in 2021 by brothers Maxwell and Hudson Adair and fleshed out by Jack Larkin and Ollie Deluca, The Dandy Buzzkills have fast become one of the most compelling acts to emerge in the Australian scene. Known for incorporating everything from bananas to country music to their own brand of shoe-gaze flavoured post-punk, every set is unique, entertaining, and above all, loud. The Dandy Buzzkills' debut single “I Wanna…”, dropped in late 2022 to rapturous appraisal and the face melting follow-up “The Moth”, came midway through 2023. With plenty more up their collective sleeve, The Dandy Buzzkills are not an act to overlook.</p>
        <h1 className='tracking-tighter leading-tight text-4xl font-bold'>250 Words</h1>
        <p className='pb-32'>One of the most eccentric bands in Adelaide, The Dandy Buzzkills make music that is at the same time old and new, echoing the 80’s post-punk and new wave sound through the lens of modern, noisy rock. Formed in 2021 by brothers Maxwell and Hudson Adair (vocals/guitar and synthesizer, respectively) and fleshed out by bassist Jack Larkin and drummer Ollie Deluca, The Dandy Buzzkills have fast become one of the most compelling acts to emerge in the Australian scene. Going against every grain in sight, their live shows have become the stuff of legend. Known for incorporating everything from bananas to country music to their own brand of shoe-gaze flavoured post-punk, every set is unique, entertaining, and above all, loud. The band's influences are diverse and they wear them on their sleeve. In the words of Angus Porter of Nothing Special Magazine: ‘I have a genuine and immovable feeling that these guys were raised in isolated captivity with the records of The Birthday Party, Joy Division, and the B-52’s, with a little Replacements and Devo sprinkled in for good measure’. The Dandy Buzzkills' debut single “I Wanna…”, dropped in late 2022 to rapturous appraisal and the face melting follow-up “The Moth”, came midway through 2023. With plenty more up their collective sleeve, The Dandy Buzzkills are not an act to overlook.</p>
      </div>
    </div>
    <LowerNav/>
    <Footer />
  </>
  )
}
