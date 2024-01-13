import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return(
    <div className="bg-[#b62b32] py-8 text-sm text-white">
      <div className="container mx-auto px-5 md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8">
        <div className="flex flex-row justify-between">
          <p>
            Copyright 2024 Dandy Buzzkills | All rights reserved.
          </p>
          <Link className="hover:underline" href="/">
            Take me back to the main site
          </Link>
        </div>
        <nav className="hidden md:flex text-xl font-bold flex-row space-x-2 justify-center">
            <Link target='_blank' href='https://open.spotify.com/album/6au4gmLYwwy0VEvDwvh5yb?si=LHe3lotJTe6PF397etWVug'>
              <Image src={'/spotify.png'} width={30} height={30} />
            </Link>
            <Link target='_blank' href='https://www.youtube.com/watch?v=VGzlfftcePA'>
              <Image src={'/yt.png'} width={30} height={30} />
            </Link>
            <Link target='_blank' href='https://open.spotify.com/album/6au4gmLYwwy0VEvDwvh5yb?si=LHe3lotJTe6PF397etWVug'>
              <Image src={'/spotify.png'} width={30} height={30} />
            </Link>
          </nav>
      </div>
    </div>
  );
}