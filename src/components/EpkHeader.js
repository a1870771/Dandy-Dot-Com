import Navbar from '@/components/EpkNavbar'

export default function Header() {
    return (
      <>
      <section className="bg-[#b62b32] flex flex-col md:flex-row items-center md:justify-around px-32 py-8">
        <h1 className="text-4xl text-white md:text-5xl font-[bold] leading-tight md:pl-8">
          the dandy buzzkills.
        </h1>
        <Navbar/>
      </section>

      </>
    )
  }