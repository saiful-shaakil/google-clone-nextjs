import { ViewGridIcon } from "@heroicons/react/solid";
import Avatar from "../Avatar";
import profile from "../../images/profile.jpg";

function Header() {
  return (
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
  );
}

export default Header;
