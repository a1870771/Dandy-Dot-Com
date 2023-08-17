import Image from "next/image";
import Link from "next/link";

export default function Cosntruction() {
    return(
        <>
        <div className="h-screen items-center px-8 flex flex-col gap-80">
            <Image src='/logo.svg' width={700} height={900}/>
            <p className="font-[cutout] text-7xl text-black text-center">under <br/> construction</p>
        </div>
        <p className="text-black"><Link href={'/epk/home'}>epk</Link></p>
        </>
    );
}