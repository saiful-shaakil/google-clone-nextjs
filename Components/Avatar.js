import Image from "next/image";
function Avatar({ url, className }) {
  return (
    <div
      className={`rounded-full cursor-pointer transition duration-150 transform hover:scale-110 ${className}`}
    >
      <Image
        title="Profile avatar"
        src={url}
        alt="avatar"
        loading="lazy"
        height={50}
        width={40}
      />
    </div>
  );
}

export default Avatar;
