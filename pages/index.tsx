import { GetServerSideProps } from "next";

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
function Example() {
  return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
}
const getUserDetailByFetchAPICall = async () => {};

export default Example;
export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};
