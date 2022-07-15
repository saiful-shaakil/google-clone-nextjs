import {
  DotsVerticalIcon,
  MapIcon,
  NewspaperIcon,
  PhotographIcon,
  PlayIcon,
  SearchIcon,
} from "@heroicons/react/outline";
import HeaderOption from "./HeaderOption";

function HeaderOptions() {
  return (
    <div className="flex justify-evenly w-full  text-gray-700 text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-52 border-b">
      {/* left */}
      <div className="flex space-x-8">
        <HeaderOption Icon={SearchIcon} title="All" selected />
        <HeaderOption Icon={MapIcon} title="Maps" />
        <HeaderOption Icon={NewspaperIcon} title="News" />
        <HeaderOption Icon={PhotographIcon} title="Photo" />
        <HeaderOption Icon={PlayIcon} title="Videos" />
        <HeaderOption Icon={DotsVerticalIcon} title="More" />
      </div>

      {/* right */}
      <div className="flex space-x-4">
        <p className="link">Setting</p>
        <p className="link">Tools</p>
      </div>
    </div>
  );
}

export default HeaderOptions;
