import Image from "next/image";
import Link from "next/link";


import { useState } from "react";

export default function EpkSidebar()  {
  const [isOpen, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!isOpen);

  return (
      <header className="text-black relative bg-white">
        <div className="max-w-[70vw] md:max-w-[11vw] px-4 sm:px-6">
          <div className="md:border-r-2 border-gray-300 py-4">
            <div className="-mr-2 -my-2 md:hidden">
              <button onClick={toggleMenu} className="p-2 inline-flex items-center justify-center">
                <Image src='/menu.png' width='50' height='100' />
              </button>
            </div>
            <nav className="hidden md:flex flex-col space-y-10">
                <Image className='relative inset-4 -mt-2' src='/japan.png' width='110' height='500'/>
                <hr className="h-[3px] bg-gray-300" />
                <Link href="/epk/bios/100">Biographies</Link>
                <Link href="/epk/Contact Us">Contact Us</Link>
                <Link href="/epk/Music">Music</Link>
                <Link href="/epk/Photos">Photos</Link>
                <Link href="/epk/Videos">Videos</Link>
            </nav>
          </div>
        </div>
        {isOpen && (
          <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
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
                    <Link href="/epk/bios/100">Biographies</Link>
                    <Link href="/epk/Contact Us">Contact Us</Link>
                    <Link href="/epk/Music">Music</Link>
                    <Link href="/epk/Photos">Photos</Link>
                    <Link href="/epk/Videos">Videos</Link>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
  );
}
