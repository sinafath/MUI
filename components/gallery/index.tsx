import ItemsList from "./itemList";
import RippleClick from "../RippleClick";
import { ItemsListProps } from "./itemList";
import Image from "next/image";

function Gallery({ list }: ItemsListProps) {
  return (
    <div className="flex max-md:flex-col gap-6 max-md:gap-2 mx-4 md:mx-8 mt-24 ">
      <div className="relative w-3/4 h-[100vh] flex-row-reverse max-md:w-full  flex  rounded-lg overflow-hidden">
        <Image
          alt=""
          fill
          className="w-full h-auto rounded-md object-cover "
          src={"/CGi7gTdcR86rmc21NdUC.webp"}
        />
        <p className="text-center font-bold max-md:text-lg   text-white text-4xl z-[4] w-2/4 max-md:m-0 max-md:w-full me-20   h-full flex items-center justify-center absolute">
          {" "}
          یکباره در دورانی که هنر و مد با یکدیگر تداخل می‌کردند، یک تیم کوچک از
          طراحان زندگی می‌کردند که رویای ساختن طرح‌های منحصر به فرد و پیچیده‌ای
          از جوراب را داشتند. آن‌ها از هنر مدرن الهام گرفته و آن را با الگوهای
          سنتی ترکیب کرده و چاپ‌های بی‌نظیری ایجاد می‌کردند{" "}
        </p>
      </div>
      <ItemsList list={list} />
    </div>
  );
}
export default Gallery;
