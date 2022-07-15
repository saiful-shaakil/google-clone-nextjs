import Image from "next/image";
function Avatar({ url, className }) {
  return (
    <img
      src={url}
      alt="avatar"
      className={`rounded-full cursor-pointer transition duration-150 transform hover:scale-110 ${className}`}
      loading="lazy"
      height={50}
      width={50}
    />
  );
}

export default Avatar;
