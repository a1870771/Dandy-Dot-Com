import Image from "next/image";
import Link from "next/link";


import { useState } from "react";

export default function Navbar()  {
  const [isOpen, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!isOpen);

  return (
    <>
        <div className="sticky top-0 z-40 w-full flex-none lg:z-50 bg-[#b62b32]">
          <div className="max-w-7xl mx-auto">
            <div className="py-4 lg:px-8 mx-4 lg:mx-0">
              <div className="relative flex items-center">
              <h1 className="mr-3 flex-none w-auto overflow-hidden text-3xl md:text-4xl text-white font-[bold] leading-tight">the dandy buzzkills.</h1>
              <div className="relative hidden lg:flex items-center ml-auto">
                <nav className="text-lg leading-6 font-bold text-white">
                  <ul className="flex space-x-6">
                    <li>
                      <Link className="hover:text-gray-300" href="/epk/home">Home</Link>
                    </li>
                    <li>
                      <Link className="border-l border-slate-200 hover:text-gray-300 pl-4" href="/epk/bio">Biographies</Link>
                    </li>
                    <li>
                      <Link className="border-l border-slate-200 hover:text-gray-300 pl-4" href="/epk/music">Music</Link>
                    </li>
                    <li>
                      <Link className="border-l border-slate-200 hover:text-gray-300 pl-4" href="/epk/media">Media</Link>
                    </li>
                    <li>
                      <Link className="border-l border-slate-200 hover:text-gray-300 pl-4" href="/epk/contact">Contact</Link>
                    </li>
                  </ul>
                </nav>
                <div className="flex items-center border-l border-slate-200 ml-6 pl-4">
                  <Link target='_blank' href='mailto:dandybuzzkills@gmail.com'>
                    <Image className="mt-1"src={'/mail.png'} width={20} height={30} />
                  </Link>
                  <Link className="ml-6" target='_blank' href='https://www.instagram.com/dandybuzzkills/'>
                    <Image src={'/instagram.png'} width={20} height={30} />
                  </Link>
                  <Link className="ml-6" target='_blank' href='https://www.facebook.com/dandybuzzkills/'>
                    <Image src={'/facebook.png'} width={20} height={30} />
                  </Link>
                </div>
              </div>
              <div className="ml-auto -my-1 lg:hidden">
                <button onClick={toggleMenu} className="w-8 h-8 flex items-center justify-center">
                  <Image src='/menu.png' width='24' height='100' />
                </button>
              </div>
              </div>
            </div>
          </div>
        </div>
      
        {isOpen && (
          <div className="z-50 fixed top-4 right-4 w-full max-w-xs bg-white rounded-lg shadow-lg p-6 text-base font-semibold text-slate-900">
            <button onClick={toggleMenu} className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center text-slate-600 hover:text-slate-900">
              <svg viewBox="0 0 10 10" class="w-2.5 h-2.5 overflow-visible" aria-hidden="true">
                <path d="M0 0L10 10M10 0L0 10" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
              </svg>
            </button>
            <ul className="space-y-6">
                    <li>
                      <Link className="hover:text-gray-300 mx-2" href="/epk/home">Home</Link>
                    </li>
                    <li>
                      <Link className="hover:text-gray-300 mx-2" href="/epk/bio">Biographies</Link>
                    </li>
                    <li>
                      <Link className="hover:text-gray-300 mx-2" href="/epk/music">Music</Link>
                    </li>
                    <li>
                      <Link className="hover:text-gray-300 mx-2" href="/epk/media">Media</Link>
                    </li>
                    <li>
                      <Link className="hover:text-gray-300 mx-2" href="/epk/contact">Contact</Link>
                    </li>
                  </ul>
          </div>
        )}
      </>

  );
}
