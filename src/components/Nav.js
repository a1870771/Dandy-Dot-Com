import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return(
        <>
        <Image src='/logo.jpg' width={200} height={200}/>
        <div>
            <ul className="flex flex-row gap-4 hover:bg-white">
                <li><Link href={'/epk/home'}>Hello</Link></li>
                <li><Link href={'/epk/home'}>Howdy</Link></li>
            </ul>
        </div>
        </>
    );
}