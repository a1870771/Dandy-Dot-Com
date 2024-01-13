import Link from "next/link";
import Image from "next/image";

export default function LowerNav() {
  return(
    <div className="bg-[#222222] py-16 text-[16px] text-[#e8e4dd] flex flex-row justify-around px-64">
      <div>
        <Image src={'/logowhite.png'} width='400' height='400'/>
      </div>
      <div className='flex flex-col space-y-8'>
        <div className='flex flex-row space-x-8'>
          <div className='flex flex-col'>
            <Link className="hover:text-gray-300 mx-2" href="/epk/home">Home</Link> 
            <Link className="hover:text-gray-300 mx-2" href="/epk/bio">Biographies</Link>
            <Link className="hover:text-gray-300 mx-2" href="/epk/music">Music</Link>
          </div>
          <div className='flex flex-col'>
            <Link className="hover:text-gray-300 mx-2" href="/epk/media">Media</Link>
            <Link className="hover:text-gray-300 mx-2" href="/epk/contact">Contact</Link>
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
      <div>
        <Image src={'/japan.png'} width='200' height='2000'/>
      </div>
    </div>
  );
}




             
             
