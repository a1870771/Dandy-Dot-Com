import Image from "next/image";
import Link from "next/link";


import { useState } from "react";

export default function Navbar()  {
  const [isOpen, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!isOpen);

  return (
      <header className="text-gray-500 relative bg-white">
        <div className="max-w-[70vw] py-4 px-4 sm:px-6">
          <div className="-mr-2 -ml-3 -my-16 md:hidden">
            <button onClick={toggleMenu} className="inline-flex items-center justify-center">
              <Image src='/menu.png' width='50' height='100' />
            </button>
          </div>
          <nav className="hidden md:flex flex-row space-x-20 justify-center">
              <Link className="hover:text-gray-800" href="/epk/home">Home</Link>
              <Link className="hover:text-gray-800" href="/epk/bio">Biographies</Link>
              <Link className="hover:text-gray-800" href="/epk/music">Music</Link>
              <Link className="hover:text-gray-800" href="/epk/media">Media</Link>
              <Link className="hover:text-gray-800" href="/epk/contact">Contact Us</Link>
          </nav>
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
