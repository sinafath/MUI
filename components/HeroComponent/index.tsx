import Image from "next/image";
import Link from "next/link";

function HeroComponent() {
  return (
    <div className="flex gap-28 mx-4   md:mx-8 flex-col md:flex-row mt-20">
         <div className="relative w-1/2 h-[calc(50vw-26px)]  rounded-lg overflow-hidden">
        <Image
          alt=""
          fill
          className="w-full h-auto rounded-md object-cover "
          src={"/209_1.jpg"}
        />
      </div>
      <div className="flex flex-col gap-36 w-1/2 h-full 	 my-auto">
        <div className=" mx-auto  ">
          <p className="p-0 m-0 text-xl">یک نگاهی به تاریخ</p>
          <h2 className="p-0 m-0  text-5xl ">
            اِمپرسیونیست‌ها و <br></br>استادان <br></br>مدرن
          </h2>
          <Link className="p-0 m-0 text-2xl text-gray-950 " href={"#"}>
            یک مجموعه کامل
          </Link>
        </div>
      </div>
   
    </div>
  );
}
export default HeroComponent;
