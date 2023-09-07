import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "../src/Link";
import ProTip from "../src/ProTip";
import Copyright from "../src/Copyright";
import { Divider, Grid, Stack } from "@mui/material";
import Image from "../component/item";

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Grid
        pt={12}
        container
        justifyItems="center"
        justifyContent="center"
        spacing={{ xs: 0, md: 3, px: 5 }}
        sx={(theme) => ({
          [theme.breakpoints.up("md")]: {
            "& > :not(:first-child)": {
              border: `1px solid ${theme.palette.grey[300]}`,
              borderLeft: `0px `,
            },
            "& > :first-child": {
              border: `1px solid ${theme.palette.grey[300]}`,
            },
          },

          [theme.breakpoints.between("xs", "sm")]: {
            "& > :not(:first-child)": {
              border: `1px solid ${theme.palette.grey[300]}`,
              borderTop: `0px `,
            },
            "& > :first-child": {
              border: `1px solid ${theme.palette.grey[300]}`,
            },
          },
          mx: "auto",
        })}
      >
        {Array.from(Array(4)).map((_, index) => (
          <Grid item p={4} xs={12} sm={6} md={3} key={index}>
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
                  [theme.breakpoints.up("md")]: {
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
                  },
                })}
              >
                <Grid item xs={12} sm={6}>
                  <Box
                    sx={{
                      m: 2,
                      position: "relative",
                      height: { xs: 300, md: 100 },
                    }}
                  >
                    <Image />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box
                    sx={{
                      m: 2,
                      position: "relative",
                      height: { xs: 300, md: 100 },
                    }}
                  >
                    <Image />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box
                    sx={{
                      m: 2,
                      position: "relative",
                      height: { xs: 300, md: 100 },
                    }}
                  >
                    <Image />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box
                    sx={{
                      m: 2,
                      position: "relative",
                      height: { xs: 300, md: 100 },
                    }}
                  >
                    <Image />
                  </Box>
                </Grid>
              </Grid>
              <Grid color={"skyblue"} item xs={12}>
                مشاهده &gt;
              </Grid>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
