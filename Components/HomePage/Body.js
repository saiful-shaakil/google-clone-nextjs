import { MicrophoneIcon, SearchIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useRef } from "react";
import { useRouter } from "next/router";

function Body() {
  const router = useRouter();
  const formSearchRef = useRef(null);
  const search = (e) => {
    e.preventDefault();
    const searchInput = formSearchRef.current.value;
    if (!searchInput) return;
    router.push(`/search?term=${searchInput}`);
  };
  return (
    <form className="flex flex-col items-center justify-center w-4/5 flex-grow">
      <Image
        src={
          "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
        }
        height={100}
        width={300}
        alt="Google Logo"
      />
      <div className="flex w-full mt-5 focus-within:shadow-lg max-w-md rounded-3xl border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
        <SearchIcon className="h-5 mr-3 text-gray-500" />
        <input
          ref={formSearchRef}
          type="text"
          name=""
          className="focus:outline-none flex-grow"
          id=""
        />
        <MicrophoneIcon className="h-5" />
      </div>
      <div className="flex flex-col w-1/2  space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row  sm:space-x-4">
        <button onClick={search} className="buttn">
          Google Search
        </button>
        <button onClick={search} className="buttn">
          I am feeling lucky
        </button>
      </div>
    </form>
  );
}

export default Body;
