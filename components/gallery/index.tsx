import ItemsList from "./itemList";
import RippleClick from "../RippleClick";
import { ItemsListProps } from "./itemList";
import Image from "next/image";

function Gallery({ list }: ItemsListProps) {
  return (
    <div className="flex gap-6 mx-4 md:mx-8 mt-24 ">
      <div className="relative w-3/4 h-[calc(100vw-36px)]  md:h-[25vw]   max-h-[40rem] rounded-lg overflow-hidden">
        <Image
          alt=""
          fill
          className="w-full h-auto rounded-md object-cover "
          src={"/209_1.jpg"}
        />
      </div>
      <ItemsList list={list} />
    </div>
  );
}
export default Gallery