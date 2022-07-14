import Image from "next/image";
function Avatar({ url }) {
  return (
    <img
      src="https://miro.medium.com/max/1050/1*lyyXmbeoK5JiIBNCnzzjjg.png"
      alt="avatar"
      className="rounded-full cursor-pointer transition duration-150 transform hover:scale-110"
      loading="lazy"
      height={50}
      width={50}
    />
  );
}

export default Avatar;
