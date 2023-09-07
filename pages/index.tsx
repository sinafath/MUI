import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "../src/Link";
import ProTip from "../src/ProTip";
import Copyright from "../src/Copyright";
import { Divider, Grid, Stack } from "@mui/material";
import Image from "../component/item";
import { Swiper, SwiperSlide } from "swiper/react";
import CardMedia from "@mui/material/CardMedia";
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
      await fetch("https://ialikhani.ir/graphql", options)
    ).json();
    return response;
  } catch (err) {
    console.log("ERROR DURING FETCH REQUEST", err);
  }
};

export default function Home({ customHomepageWidget }: Home) {
  return (
    <Container maxWidth="lg">
      <Swiper
        breakpoints={{
          1: {
            slidesPerView: 1,
          },
          600: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 4,
          },
        }}
        spaceBetween={0}
        direction="horizontal"
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {customHomepageWidget.categories.map(({ id, name, products }) => (
          <SwiperSlide key={id} style={{ flex: "0 0 auto" }}>
            <Grid item p={4} xs={12} md={4}>
              <Stack justifyContent="center" alignItems="center">
                <Typography
                  color={"blueviolet"}
                  sx={{ marginRight: "auto", marginLeft: 2 }}
                  variant="h5"
                  component="h2"
                >
                  {name}
                </Typography>
                <Typography
                  color={"GrayText"}
                  sx={{ marginRight: "auto", marginLeft: 2 }}
                  component="p"
                  marginBottom={4}
                >
                  براساس بازدید شما
                </Typography>
                <Grid
                  container
                  sx={(theme) => ({
                    "& >  :first-child": {
                      border: `1px solid ${theme.palette.grey[300]}`,
                      borderLeft: `0px `,
                      borderTop: `0px `,
                    },
                    "& > :nth-child(2)": {
                      borderBottom: `1px solid ${theme.palette.grey[300]}`,
                    },
                    "& > :nth-child(3)": {
                      borderRight: `1px solid ${theme.palette.grey[300]}`,
                    },
                  })}
                >
                  {products
                    .slice(0, 4)
                    .concat(
                      Array.from(
                        { length: Math.max(4 - products.length, 0) },
                        (_, index) => ({ thumbnail: null, id: index })
                      )
                    )
                    .map(({ thumbnail }) => (
                      <>
                        <Grid item xs={6}>
                          <Box
                            sx={{
                              m: 2,
                              position: "relative",
                              height: { xs: 100, md: 100 },
                            }}
                          >
                            {thumbnail ? (
                              <CardMedia
                                sx={{
                                  objectFit: "contain",
                                  width: "100%",
                                  height: "100%",
                                }}
                                image={thumbnail}
                              />
                            ) : (
                              <CardMedia
                                sx={{
                                  objectFit: "contain",
                                  width: "100%",
                                  height: "100%",
                                }}
                              />
                            )}
                          </Box>
                        </Grid>
                      </>
                    ))}
                </Grid>
                <Grid color={"skyblue"} item xs={12}>
                  مشاهده &gt;
                </Grid>
              </Stack>
            </Grid>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}
export const getServerSideProps: GetServerSideProps = async () => {
  const customHomepageWidget = await getUserDetailByFetchAPICall();
  console.log(JSON.stringify(customHomepageWidget));
  return {
    props: {
      customHomepageWidget: customHomepageWidget.data.customHomepageWidget,
    },
  };
};
