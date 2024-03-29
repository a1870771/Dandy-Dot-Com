import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return(
    <div className="bg-[#b62b32] px-80 py-8 text-sm text-white">
      <div className="mx-auto px-5 md:grid md:grid-cols-3 md:gap-x-16 lg:gap-x-8">
        <div className="flex flex-row justify-between">
          <p>
            Copyright 2024 Dandy Buzzkills | All rights reserved.
          </p>

        </div>
        <Link className="hover:underline" href="/">
            Take me back to the main site
          </Link>
          <span className='flex flex-row space-x-8'><Link target='_blank' href='mailto:dandybuzzkills@gmail.com'>
              <Image className="mt-1"src={'/mail.png'} width={30} height={30} />
            </Link>
            <Link target='_blank' href='https://www.instagram.com/dandybuzzkills/'>
              <Image src={'/instagram.png'} width={30} height={30} />
            </Link>
            <Link target='_blank' href='https://www.facebook.com/dandybuzzkills/'>
              <Image src={'/facebook.png'} width={30} height={30} />
            </Link>
          </span>
      </div>
    </div>
  );
}