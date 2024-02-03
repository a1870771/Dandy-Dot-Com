import Link from "next/link";
import Image from "next/image";

export default function LowerNav() {
  return(
    <div className="bg-[#222222] py-16 text-[16px] text-[#e8e4dd] flex flex-row justify-around items-center px-16">
     





      <div className="hidden lg:flex">
        <Image src={'/logowhite.png'} width='450' height='300'/>
      </div>

      <div className='flex flex-col space-y-8'>
        <div className='flex flex-row space-x-8'>
          <div className='flex flex-col'>
            <Link className="hover:text-gray-300 mx-r" href="/epk/home">Home</Link> 
            <Link className="hover:text-gray-300 mx-r" href="/epk/bio">Biographies</Link>
            <Link className="hover:text-gray-300 mx-r" href="/epk/music">Music</Link>
          </div>
          <div className='flex flex-col'>
            <Link className="hover:text-gray-300" href="/epk/media">Media</Link>
            <Link className="hover:text-gray-300" href="/epk/contact">Contact</Link>
          </div>
        </div>
        <div className='flex flex-col space-y-1'>
          <div className='flex flex-row'>
            <p>dandybuzzkills@gmail.com</p>
          </div>
          <div className='flex flex-row'>
            <p>thedandybuzzkills.com.au</p>
          </div>
          <div className='flex flex-row'>
            <Image src={'/instagram.png'} width={20} height={20} />
            <p>@DandyBuzzkills</p>  
          </div>
          <div className='flex flex-row'>
            <Image src={'/facebook.png'} width={20} height={20} />
            <p>@DandyBuzzkills</p>       
          </div>
        </div>
      </div>

      <div className="hidden md:flex">
        <Image src={'/japan.png'} width='200' height='2000'/>
      </div>

    </div>
  );
}




             
             
