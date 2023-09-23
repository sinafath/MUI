import { GetServerSideProps } from "next";
import Link from "next/link";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Rating } from "@mui/material";
import Image from "next/image";

type customHomepageWidget = {
  categories: {
    id: 3;
    image: "";
    name: "آرایشی و بهداشتی";
    url: "cosmetic";
    products: {
      id: number;
      name?: "مراقبت شخصی";
      sku?: "personal-care-1";
      thumbnail:
        | "https://ialikhani.ir/media/catalog/product/3/8/3888921_2.jpg"
        | null;
      maximum_salable?: "9984";
      stock_status?: "IN_STOCK";
      special_price?: "0";
      price_range?: {
        minimum_price: {
          regular_price: { value: 200000; currency: "IRR" };
          final_price: { value: 200000; currency: "IRR" };
        };
        maximum_price?: {
          regular_price: { value: 200000; currency: "IRR" };
        };
      };
      url?: "cosmetic";
    }[];
  }[];
};
type ExampleProps = {
  customHomepageWidget: customHomepageWidget;
};
const getUserDetailByFetchAPICall = async () => {
  try {
    const headers = {
      "content-type": "application/json",
    };
    const requestBody = {
      query: `query {
        customHomepageWidget {
          categories {
            id
            image
            name
            url
            products {
              id
              name
              sku
              thumbnail
              maximum_salable
              stock_status
              special_price
              price_range {
                minimum_price {
                  regular_price {
                    value
                    currency
                  }
                  final_price {
                    value
                    currency
                  }
                }
                maximum_price {
                  regular_price {
                    value
                    currency
                  }
                  final_price {
                    value
                    currency
                  }
                }
              }
            }
          }
        }
      }`,
    };
    const options = {
      method: "POST",
      headers,
      body: JSON.stringify(requestBody),
    };
    const response = await (
      await fetch("https://rayancommerce.com/graphql", options)
    ).json();
    return response;
  } catch (err) {
    console.log("ERROR DURING FETCH REQUEST", err);
  }
};
function Example({ customHomepageWidget }: ExampleProps) {
  return (
    <div className="bg-slate-100">
    <div className="flex gap-12 mx-4   md:mx-8 flex-col md:flex-row flex-wrap">
      {customHomepageWidget?.categories[0].products.slice(0,8).map(({ thumbnail }) => (
        <Link className="md:w-[calc(25%-36px)] flex flex-col " href={"./"}>
          <div className="relative w-full h-[calc(100vw-36px)]  md:h-[25vw] rounded-lg overflow-hidden">
            <div className="flex flex-col ps-2 pt-2 absolute gap-1">
              <button className="bg-transparent border-none md:p-3 p-2 rounded-full transition-colors duration-300 hover:bg-slate-200">
                <FavoriteBorderOutlinedIcon className="md:w-4 md:h-4 w-2 h-2 text-gray-400"></FavoriteBorderOutlinedIcon>
              </button>
              <button className="bg-transparent border-none md:p-3 p-2 rounded-full transition-colors duration-300 hover:bg-slate-200">
                <SwapHorizIcon className="md:w-4 md:h-4 w-2 h-2 text-gray-400"></SwapHorizIcon>
              </button>
            </div>
            <div className="absolute bottom-2 end-2">
              <Rating name="read-only" size="small" value={2} />
            </div>
           {thumbnail? <Image
           alt=""
           fill
              className="w-full h-auto rounded-md object-cover"
              src={thumbnail}
            />:<></>}
          </div>
          <div className="flex flex-col gap-2 md:flex-row md:py-6 py-3 ">
            <h2 className="my-0 py-0 font-bold">جوراب صورتی </h2>
            <div className="flex flex-row justify-between md:flex-1 text-sm items-center">
              <p className="my-0 py-0 text-gray-900"> توسط سینا </p>
              <p className="my-0 py-0 text-gray-900"> 12000 ریال</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
    </div>
  );
}

export default Example;
export const getServerSideProps: GetServerSideProps = async () => {
  const customHomepageWidget = await getUserDetailByFetchAPICall();
  console.log(JSON.stringify(customHomepageWidget));
  return {
    props: {
      customHomepageWidget: customHomepageWidget.data.customHomepageWidget,
    },
  };
};
