import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import Avatar from "../Avatar";
import profile from "../../images/profile.jpg";
import HeaderOptions from "./HeaderOptions";
function Heade() {
  const router = useRouter();
  const searchInputRef = useRef(null);
  const search = (e) => {
    e.preventDefault();
    const searchInput = searchInputRef.current.value;
    if (!searchInput) return;
    router.push(`/search?term=${searchInput}`);
  };
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex items-center p-6 w-full">
        {/* Google Image */}
        <Image
          src={
            "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          }
          height={40}
          width={120}
          onClick={() => router.push("/")}
          alt="Google Logo"
          className="cursor-pointer"
        />
        {/* Search Form */}
        <form className="flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center">
          <input
            ref={searchInputRef}
            type="text"
            className="flex-grow w-full focus:outline-none"
          />
          <XIcon
            className="h-7 cursor-pointer text-gray-500 transition duration-100 transfrom hover:scale-125 sm:mr-3"
            onClick={() => (searchInputRef.current.value = " ")}
          />
          <MicrophoneIcon className="h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300 cursor-pointer" />
          <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex cursor-pointer" />
          <button onClick={search} hidden>
            Search
          </button>
        </form>
        {/* Avatar */}
        <Avatar
          className="ml-auto"
          url="https://miro.medium.com/max/1050/1*lyyXmbeoK5JiIBNCnzzjjg.png"
        />
      </div>

      {/* Header Options */}
      <HeaderOptions />

      {/* Search Results */}
    </header>
  );
}

export default Heade;
