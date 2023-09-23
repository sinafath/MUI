import { GetServerSideProps } from "next";
import Link from "next/link";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Rating } from "@mui/material";
import Image from "next/image";
import RippleClick from "../RippleClick";
type product = {
  id: number;
  name?: string;
  sku?: string;
  thumbnail: string | null;
  maximum_salable?: string;
  stock_status?: string;
  special_price?: string;
  price_range?: {
    minimum_price: {
      regular_price: { value: number; currency: string };
      final_price: { value: number; currency: string };
    };
    maximum_price?: {
      regular_price: { value: number; currency: string };
    };
  };
  url?: string;
};
type customHomepageWidget = {
  categories: {
    id: number;
    image: string;
    name: string;
    url: string;
    products: product[];
  }[];
};
type ItemsListProps = {
  list: product[];
};

function ItemsList({ list }: ItemsListProps) {
  return (
    <div className="gap-4 w-1/4 flex-col ">
      {list.slice(0, 1).map(({ thumbnail }) => (
        <Link className="w-full flex flex-col relative" href={"./"}>
                  <RippleClick />

          <div className="relative w-full h-[calc(100vw-36px)]  md:h-[25vw]   max-h-[40rem] rounded-lg overflow-hidden">
            <div className="flex flex-col ps-2 pt-2 absolute gap-1 z-[2]">
              <button className="bg-transparent border-none md:p-3 p-2 rounded-full transition-colors duration-300 hover:bg-slate-200">
                <FavoriteBorderOutlinedIcon className="md:w-4 md:h-4 w-2 h-2 text-gray-400"></FavoriteBorderOutlinedIcon>
              </button>
              <button className="bg-transparent border-none md:p-3 p-2 rounded-full transition-colors duration-300 hover:bg-slate-200">
                <SwapHorizIcon className="md:w-4 md:h-4 w-2 h-2 text-gray-400"></SwapHorizIcon>
              </button>
            </div>
            <div className="absolute bottom-2 end-2">
              <Rating
                name="read-only"
                size="small"
                className="z-[2]"
                value={2}
              />
            </div>
            {thumbnail ? (
              <Image
                alt=""
                fill
                className="w-full h-auto rounded-md object-cover "
                src={thumbnail}
              />
            ) : (
              <></>
            )}
          </div>
          <div className="flex flex-col gap-2 md:flex-row md:py-6 py-3 ">
            <h2 className="my-0 py-0 font-bold">{""} </h2>
            <div className="flex flex-row justify-between md:flex-1 text-sm items-center">
              <p className="my-0 py-0 text-gray-900"> توسط سینا </p>
              <p className="my-0 py-0 text-gray-900"> 12000 ریال</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
export type { customHomepageWidget, ItemsListProps };
export default ItemsList;
