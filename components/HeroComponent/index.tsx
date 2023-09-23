import Image from "next/image";
import Link from "next/link";

type HeroComponentProps = {
  url?:string | null
}
function HeroComponent({url}:HeroComponentProps) {
  return (
    <div className="flex gap-28 mx-4 bg-white md:bg-transparent  md:mx-8 flex-col md:flex-row mt-20">
      <div className="relative md:w-1/2  w-full h-[calc(100vw-26px)]  md:h-[calc(50vw-26px)]  rounded-lg overflow-hidden">

        {url &&<Image
          alt=""
          fill
          className="w-full h-auto rounded-md object-cover "
          src={url}
        />}
      </div>
      <div className="flex flex-col gap-8 w-1/2 px-16 md:px-0  h-full my-auto">
        <div className=" mx-auto  md:ms-4 flex flex-col gap-6   ">
          <p className="p-0 m-0 md:text-xl text-sm text-slate-600"> نگاهی به دنیا</p>
          <h2 className="p-0 m-0 max-sm:text-3xl leading-[5.6rem] w-max  max-[910px]:text-4xl  text-7xl ">
            <span className="text-white webkit-text-stroke "> زیباترین ها </span>
            <br></br>
            <span className="translate-x-4 "> بهترین ها</span>
            <br></br>
            <span  className="text-white  stroke-slate-600 webkit-text-stroke	"> ارزان </span>
          </h2>
          <Link className="p-0 m-0 text-2xl text-gray-950 underline " href={"#"}>
            یک مجموعه کامل
          </Link>
        </div>
      </div>
    </div>
  );
}
export default HeroComponent;
