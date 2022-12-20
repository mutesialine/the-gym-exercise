
import { data } from "../data/Navbardata";
import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
  return (
    <div className="w-full ">
      <video
        src="https://www.tum.de/fileadmin/w00bfo/www/Startseite/tum_startseite_header_010922.mp4"
        autoPlay
        muted
        loop
        className="object-cover w-full relative"
      />
      <div className="bg-blue w-full fixed top-0 left-0 right-0  z-[96]">
        <div className="px-6 flex justify-between max-w-8xl mx-auto   py-5">
          <div className=" flex gap-4 ">
            <Image
              src="/Icons/logo.svg"
              className="invert"
              width={33}
              height={33}
              alt="menu"
            />
            <div className="flex gap-2">
              <Image
                src="/Icons/logo2.svg"
                className="invert"
                width={80}
                height={41}
                alt="logo"
              />
              <div className="text-white text-xs ">
                <p>Techinical</p>
                <p>University</p>
                <p>Of Munich</p>
              </div>
            </div>
          </div>
          <div className="flex items-center text-white  gap-4">
            <div className="flex gap-x-8">
              {data.map((element, index) => (
                <Link
                  href={element.link}
                  className="text-base font-bold border-b-4 border-transparent  hover:border-white"
                  key={index}
                >
                  {element.value}
                </Link>
              ))}
            </div>
            <div className="flex gap-2 items-center">
              <Link href="">DE</Link>
              <div className="h-8 w-0.5 bg-white"></div>
              <Link href="">ENG</Link>
              <Image
                src="/Icons/search.svg"
                className="invert"
                width={20}
                height={20}
                alt="search"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full text-white absolute top-40 left-0 right-0 max-w-main px-6 mx-auto">
        <h1 className="text-5xl font-bold">
          TUM. The Entrepreneurial
          <br /> University
        </h1>
        <p className="text-xl">
          Innovation through talent, excellence and responsibility
        </p>
      </div>
    </div>
  );
}
