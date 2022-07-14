import Head from "next/head";
import Avatar from "../Components/Avatar";
import profile from "../images/profile.jpg";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Google</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <header className="flex justify-between w-full p-5 text-sm text-gray-700">
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

          {/* Avatar */}
          <Avatar url={profile} />
        </div>
      </header>
      {/* Body */}

      {/* Footer */}
    </div>
  );
}
