import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return(
        <>
        <div className="h-40 items-center px-8 flex flex-col lg:flex-row justify-between">
            <Image src='/logo.svg' width={300} height={500}/>
            <div>
                <ul className="font-[cutout] text-6xl gap-32 text-black flex flex-row gap-4">
                    <li className="hover:underline underline-offset-[16px] decoration-dashed" ><Link href={'/band'}>band</Link></li>
                    <li className="hover:underline underline-offset-[16px] decoration-dashed"><Link href={'/merch'}>merch</Link></li>
                    <li className="hover:underline underline-offset-[16px] decoration-dashed"><Link href={'/music'}>music</Link></li>
                    <li className="hover:underline underline-offset-[16px] decoration-dashed"><Link href={'/contact'}>contact</Link></li>
                </ul>
            </div>
        </div>
        <p className="text-black"><Link href={'/epk/home'}>epk</Link></p>
        </>
    );
}