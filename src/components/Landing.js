import Image from "next/image";
import Link from "next/link";

export default function Landing() {
    return(
        <>
        <div className="h-screen items-center px-8 flex flex-col lg:flex-row gap-16">
            <Image src='/logo.svg' width={1100} height={1000}/>
            <div>
                <ul className="font-[cutout] text-9xl text-black flex flex-col gap-4">
                    <li className="hover:indent-4" ><Link href={'/band'}>band</Link></li>
                    <li className="hover:indent-4"><Link href={'/merch'}>merch</Link></li>
                    <li className="hover:indent-4"><Link href={'/music'}>music</Link></li>
                    <li className="hover:indent-4"><Link href={'/contact'}>contact</Link></li>
                </ul>
            </div>
        </div>
        <p className="text-black"><Link href={'/epk/home'}>epk</Link></p>
        </>
    );
}