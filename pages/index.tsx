import { GetServerSideProps } from "next";
import HotAndNewSection from "../components/HotAndNewSection";
import { HotAndNewCardProps } from "../components/HotAndNewCard";

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
type Home = {
  customHomepageWidget: customHomepageWidget;
};
type ExampleProps = {
  customHomepageWidget: customHomepageWidget;
};

const newAndHotData: HotAndNewCardProps[] = [
  {
    title: "کوله پشتی مردانه مدل A12",
    image: "/images/bagpack-dark-1.png",
    description: "",
    url: "#",
    theme: "light",
  },
  {
    title: "کوله پشتی مدل A-514",
    image: "/images/bagpack-light-1.png",
    description: "",
    url: "",
    theme: "dark",
  },
  {
    title: "کوله پشتی چرم یلسان",
    video: "/hot.mp4",
    description: "",
    url: "#",
    theme: "light",
  },
  {
    title: "نشنال جئوگرافیک",
    image: "/images/bagpack-dark-1.png",
    description: "",
    url: "#",
    theme: "light",
  },

  {
    title: "کوله پشتی چرم یلسان",
    image: "/images/bagpack-light-2.png",
    description: "",
    url: "#",
    theme: "dark",
  },

  {
    title: "کوله پشتی مدل N-0840",
    image: "/images/bagpack-dark-3.png",
    description: "",
    url: "#",
    theme: "light",
  },
  {
    title: "کوله پشتی والنتیر مدل ",
    image: "/images/bagpack-light-3.png",
    description: "",
    url: "#",
    theme: "dark",
  },
  {
    title: "کوله پشتی گابل مدل",
    image: "/images/bagpack-dark-4.png",
    description: "",
    url: "#",
    theme: "light",
  },
  {
    title: "کوله پشتی گابل مدل",
    image: "/images/bagpack-light-5.png",
    description: "",
    url: "#",
    theme: "dark",
  },
];
export default function Example({ customHomepageWidget }: ExampleProps) {
  return (
    <div className="min-h-screen w-full bg-slate-100">
      <HotAndNewSection data={newAndHotData} />;
    </div>
  );
}
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

export const getServerSideProps: GetServerSideProps = async () => {
  const customHomepageWidget = await getUserDetailByFetchAPICall();
  console.log(JSON.stringify(customHomepageWidget));
  return {
    props: {
      customHomepageWidget: customHomepageWidget.data.customHomepageWidget,
    },
  };
};
