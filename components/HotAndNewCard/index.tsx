import Image from "next/image";
import Link from "next/link";
import RippleClick from "../RippleClick";
export type HotAndNewCardProps = {
  image?: string;
  video?: string;
  description: string;
  title: string;
  url: string;
  classes?: {
    wrapper: string;
  };
  theme?: "dark" | "light";
};
export default function HotAndNewCard({
  image,
  description,
  title,
  url,
  classes,
  theme,
  video: videoUrl,
}: HotAndNewCardProps) {
  console.log({ videoUrl });
  return (
    <div
      className={`${
        theme === "dark" ? "bg-gray-700" : "bg-white"
      } box-border rounded-lg  w-full overflow-hidden h-full ${
        classes && classes?.wrapper
      }`}
    >
      <Link
        href={url}
        className="p-8 lg:p-12 relative w-full h-full flex flex-col justify-between "
      >
        <RippleClick />
        <div className="relative z-20 text-right">
          <h3
            className={`${
              theme === "dark" ? "text-gray-100" : "text-gray-700"
            } text-sm`}
          >
            {title}
          </h3>
          <p
            className={`text-lg font-semibold ${
              theme === "dark" ? "text-gray-100" : "text-gray-700"
            } my-2 leading-8`}
          >
            {description}
          </p>
        </div>
        {image && (
          <div className="relative flex-1">
            <Image
              src={image}
              fill
              alt={title}
              className="!z-10 object-contain object-bottom"
            />
          </div>
        )}

        {videoUrl && (
          <video src={videoUrl} autoPlay muted loop playsInline className="absolute top-0 right-0 w-full h-full"></video>
        )}
      </Link>
    </div>
  );
}
