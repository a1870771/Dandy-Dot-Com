import Image from "next/image";
import Link from "next/link";


import { useState } from "react";

export default function Navbar()  {
  const [isOpen, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!isOpen);

  return (
      <header className="text-white relative">
        <div className="max-w-[70vw] py-4 px-4 sm:px-6">
          <div className="-mr-2 -ml-3 -my-16 md:hidden">
            <button onClick={toggleMenu} className="inline-flex items-center justify-center">
              <Image src='/menu.png' width='50' height='100' />
            </button>
          </div>
          <nav className="hidden md:flex text-[25px] font-bold flex-row space-x-16 justify-center">
            <span><Link className="hover:text-gray-300 mx-2" href="/epk/home">Home</Link> | 
            <Link className="hover:text-gray-300 mx-2" href="/epk/bio">Biographies</Link> | 
            <Link className="hover:text-gray-300 mx-2" href="/epk/music">Music</Link> | 
            <Link className="hover:text-gray-300 mx-2" href="/epk/media">Media</Link> | 
            <Link className="hover:text-gray-300 mx-2" href="/epk/contact">Contact</Link></span>

            <span className='flex flex-row space-x-8'><Link target='_blank' href='mailto:dandybuzzkills@gmail.com'>
              <Image className="mt-1"src={'/mail.png'} width={30} height={30} />
            </Link>
            <Link target='_blank' href='https://www.instagram.com/dandybuzzkills/'>
              <Image src={'/instagram.png'} width={30} height={30} />
            </Link>
            <Link target='_blank' href='https://www.facebook.com/dandybuzzkills/'>
              <Image src={'/facebook.png'} width={30} height={30} />
            </Link></span>

          </nav>
      </div>

        {isOpen && (
          <div className="z-50 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <div className="-mr-2">
                    <button
                      onClick={toggleMenu}
                      className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    >
                      X
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-8">
                    <Link href="/epk/home">Home</Link>
                    <Link  href="/epk/bio">Biographies</Link>
                    <Link  href="/epk/music">Music</Link>
                    <Link href="/epk/media">Media</Link>
                    <Link href="/epk/contact">Contact Us</Link>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
  );
}
