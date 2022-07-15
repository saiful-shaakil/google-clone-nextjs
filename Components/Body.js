import { MicrophoneIcon, SearchIcon } from "@heroicons/react/solid";
import Image from "next/image";

function Body() {
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
          type="text"
          name=""
          className="focus:outline-none flex-grow"
          id=""
        />
        <MicrophoneIcon className="h-5" />
      </div>
      <div className="flex flex-col w-1/2  space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row  sm:space-x-4">
        <button className="buttn">Google Search</button>
        <button className="buttn">I am feeling lucky</button>
      </div>
    </form>
  );
}

export default Body;
