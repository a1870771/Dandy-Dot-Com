import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return(
    <div className="bg-[#b62b32] px-0 py-8 text-sm text-white">
      <div className="max-w-7xl mx-auto px-5 flex flex-row justify-around space-x-8">
          <p>
            Copyright 2024 Dandy Buzzkills | All rights reserved.
          </p>
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