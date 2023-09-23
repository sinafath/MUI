import { GetServerSideProps } from "next";
import HotAndNewCard from "../components/HotAndNewCard";
import HotAndNewSection from "../components/HotAndNewSection";

export type customHomepageWidget = {
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

export default function DevAPage({ customHomepageWidget }: ExampleProps) {
    return (
        <div className="min-h-screen w-full px-3 lg:px-16 bg-gray-200 py-11 lg:py-28">
            <HotAndNewSection data={customHomepageWidget.categories[0]} />
        </div>
    )
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