import Link from "next/link";

export default function Footer() {
  return(
    <div className="border-t bg-gray-100 py-8 text-sm text-gray-600">
      <div className="container mx-auto px-5 md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8">
        <div className="flex flex-col">
          <p>
            Wondering how you got here?
          </p>
          <Link className="hover:underline" href="/">
            Take me back to the main site
          </Link>
        </div>
        <div>
          Website by Jack Larkin ©2023
        </div>
      </div>
    </div>
  );
}