import Head from "next/head";
import Avatar from "../Components/Avatar";
import profile from "../images/profile.jpg";
import {
  GlobeIcon,
  MicrophoneIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";
import Image from "next/Image";

export default function Home() {
  return (
    <div className="flex flex-col items-center h-screen">
      <Head>
        <title>Google</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <header className="flex justify-between w-full px-8 py-5 text-sm text-gray-700">
        {/* left header*/}
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>
        {/* right header*/}
        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>
          {/* Icon */}
          <ViewGridIcon className="h-10 w-10 transition hover:bg-gray-100 rounded-full cursor-pointer p-1" />
          {/* Avatar */}
          <Avatar url={profile} />
        </div>
      </header>
      {/* Body */}
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
      {/* Footer */}
      <footer className="grid w-full divide-y-[1px] divide-gray-300 bg-gray-100 text-sm text-gray-500">
        <div className="px-8 py-3">
          <p>Bangladesh</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 px-8 py-3 grid-flow-row-dense">
          <div className="flex justify-center items-center md:col-span-2 lg:col-span-1 lg:col-start-2">
            <GlobeIcon className="h-5 mr-1 text-green-700" /> Carbon neutral
            since 2007
          </div>
          <div className="flex justify-center space-x-8 whitespace-nowrap md:justify-self-start">
            <p>Advertise</p>
            <p>Business</p>
            <p>How search works</p>
          </div>
          <div className="flex justify-center space-x-8 md:ml-auto">
            <p>Privacy</p>
            <p>Terms</p>
            <p>Setting</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
