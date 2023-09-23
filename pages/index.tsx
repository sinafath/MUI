import { GetServerSideProps } from "next";
import ItemsList, {
  ItemsListProps,
  customHomepageWidget,
} from "../components/ItemList";
import HeroComponent from "../components/HeroComponent";

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
type ExampleProps = { customHomepageWidget: customHomepageWidget };
function Example({ customHomepageWidget }: ExampleProps) {
  return (
    <div className="bg-slate-100">
      <ItemsList list={customHomepageWidget?.categories[0].products} />
      <HeroComponent url={customHomepageWidget?.categories[0].products[0].thumbnail} />
    </div>
  );
}

export default Example;
export const getServerSideProps: GetServerSideProps = async () => {
  const customHomepageWidget = await getUserDetailByFetchAPICall();
  return {
    props: {
      customHomepageWidget: customHomepageWidget.data.customHomepageWidget,
    },
  };
};
