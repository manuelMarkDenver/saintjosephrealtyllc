"use client";

import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Grid2 from "@mui/material/Unstable_Grid2"; // Grid version 2
import Bar from "./components/Bar";
import PhotoSlider from "./components/PhotoSlider";

interface MyObject {
  [key: string]: string;
}

interface MyArray {
  MyObjects: MyObject[]
}

const Homepage = (props: any) => {
  return (
    <>
      {/* Banner */}
      <Box>
        <Container className="py-24">
          <Stack
            direction={{ xs: "column", md: "row" }}
            sx={{ height: { xs: "auto", md: "70vh" } }}
          >
            <Box className="flex flex-col justify-between h-full">
              <Box>
                <Typography variant="h4" component="h2" className="italic">
                  Unique Property
                </Typography>
                <Typography
                  variant="h1"
                  component="h1"
                  className="font-sans ml-4"
                >
                  Solution You Can Rely On
                </Typography>
                <Button
                  variant="outlined"
                  className="mt-10 py-4 px-10 rounded-lg bg-darkish text-white border-white hover:bg-creamish hover:text-black hover:border-darkish hover:font-bold hover:border-1"
                >
                  Get A Quotation Today!
                </Button>
              </Box>

              <Box>
                <Bar color="Dark" />
                <Typography
                  variant="caption"
                  className="italic text-lg text-gray-500 "
                >
                  Property management that fits your needs
                </Typography>
              </Box>
            </Box>
            <Box className="flex justify-center h-full relative">
              <Image
                src="/images/star-black.svg"
                alt="star"
                width={250}
                height={250}
                className="absolute -top-20 -right-32"
              />
              <Image
                src={"/images/banner/banner1.png"}
                width={800}
                height={800}
                alt="hero"
                className="object-cover"
              />
            </Box>
          </Stack>
        </Container>

        {/* Offers */}
        <Box bgcolor="#2b2c32" color="white">
          <Container className="flex flex-row justify-center w-full py-24">
            <Grid2 container spacing={2}>
              <Grid2 xs={6} className="flex flex-col justify-between">
                <Typography component="h2" variant="h2">
                  What We Offer
                </Typography>
                <Bar color="Light" />
              </Grid2>
              <Grid2 xs={6}>
                <Stack direction="column" spacing={6}>
                  <Stack direction="row" spacing={1}>
                    <Image
                      src="/images/star-white.svg"
                      alt="star"
                      width={130}
                      height={130}
                    />
                    <Box>
                      <Typography
                        component="h5"
                        variant="h6"
                        className="tracking-widest"
                      >
                        EXPERIENCED TEAM
                      </Typography>
                      <Typography
                        component="p"
                        variant="subtitle1"
                        className="text-gray-400"
                      >
                        Each of us is a master of our craft – we've worked a
                        number of years in our field and each have passion and
                        creative vision for every project we put our hands on.
                      </Typography>
                    </Box>
                  </Stack>

                  <Stack direction="row" spacing={1}>
                    <Image
                      src="/images/star-white.svg"
                      alt="star"
                      width={130}
                      height={130}
                    />
                    <Box>
                      <Typography
                        component="h5"
                        variant="h6"
                        className="tracking-widest"
                      >
                        QUALITY TO DIE FOR
                      </Typography>
                      <Typography
                        component="p"
                        variant="subtitle1"
                        className="text-gray-400"
                      >
                        We pay a lot of attention to each and every detail,
                        because we know that we are in charge of creating
                        somebody's safe haven. We partner up with the best
                        craftsmen to ensure our famed quality.
                      </Typography>
                    </Box>
                  </Stack>

                  <Stack direction="row" spacing={1}>
                    <Image
                      src="/images/star-white.svg"
                      alt="star"
                      width={130}
                      height={130}
                    />
                    <Box>
                      <Typography
                        component="h5"
                        variant="h6"
                        className="tracking-widest"
                      >
                        VISIONARIES OF THE FUTURE
                      </Typography>
                      <Typography
                        component="p"
                        variant="subtitle1"
                        className="text-gray-400"
                      >
                        We're not scared to go beyond the horizon. As the
                        visionaries of tomorrow, we won't say no to
                        experimentation, unusual materials, or unlikely
                        combinations.
                      </Typography>
                    </Box>
                  </Stack>
                </Stack>
              </Grid2>
            </Grid2>
          </Container>
        </Box>

        {/* Projects */}
        <PhotoSlider props={props}/>
      </Box>
    </>
  );
};

export default Homepage;
