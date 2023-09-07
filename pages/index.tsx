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

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Swiper
        // ... other Swiper props
        // install Swiper modules
        breakpoints={{
          1: {
            slidesPerView: 1, // Show 1 item per view on mobile
          },
          600: {
            slidesPerView: 2, // Show 1 item per view on mobile
          },
          1200: {
            slidesPerView: 4, // Show 1 item per view on mobile
          },
        }}
        spaceBetween={0}
        direction="horizontal"
        slidesPerView={4} // Show only one item per view
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {Array.from(Array(12)).map((_, index) => (
          <SwiperSlide key={index} style={{ flex: "0 0 auto" }}>
            <Grid item p={4} xs={12} md={4}>
              <Stack justifyContent="center" alignItems="center" key={index}>
                <Typography
                  color={"blueviolet"}
                  sx={{ marginRight: "auto", marginLeft: 2 }}
                  variant="h5"
                  component="h2"
                >
                  ساعت هوشمند
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
                  <Grid item xs={6}>
                    <Box
                      sx={{
                        m: 2,
                        position: "relative",
                        height: { xs: 100, md: 100 },
                      }}
                    >
                      <CardMedia
                        sx={{
                          objectFit: "contain",
                          width: "100%",
                          height: "100%",
                        }}
                        image="/Sale.webp"
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box
                      sx={{
                        m: 2,
                        position: "relative",
                        height: { xs: 100, md: 100 },
                      }}
                    >
                      <CardMedia
                        sx={{
                          objectFit: "contain",
                          width: "100%",
                          height: "100%",
                        }}
                        image="/Sale.webp"
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box
                      sx={{
                        m: 2,
                        position: "relative",
                        height: { xs: 100, md: 100 },
                      }}
                    >
                      <CardMedia
                        sx={{
                          objectFit: "contain",
                          width: "100%",
                          height: "100%",
                        }}
                        image="/Sale.webp"
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box
                      sx={{
                        m: 2,
                        position: "relative",
                        height: { xs: 100, md: 100 },
                      }}
                    >
                      <CardMedia
                        sx={{
                          objectFit: "contain",
                          width: "100%",
                          height: "100%",
                        }}
                        image="/Sale.webp"
                      />
                    </Box>
                  </Grid>
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
