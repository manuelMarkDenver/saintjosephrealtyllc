"use client";

import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Grid2 from "@mui/material/Unstable_Grid2"; // Grid version 2
import Bar from "../homepage/components/Bar";

const Offers = () => {
  return (
    <Box bgcolor="#2b2c32" color="white" id="offers">
      <Container className="flex flex-row justify-center w-full py-24">
        <Grid2 container spacing={2}>
          <Grid2 xs={12} md={6} className="flex flex-col justify-between">
            <Typography
              component="h2"
              variant="h2"
              className="font-rockness text-6xl md:text-7xl text-center md:text-left mb-10 md:mb-0"
            >
              What We Offer
            </Typography>
            <Bar props="bg-creamish" />
          </Grid2>
          <Grid2 xs={12} md={6}>
            <Stack direction={{ md: "column" }} spacing={6}>
            <Stack direction={{ xs:"column", md:"row" }} spacing={1} className="flex justify-center items-center text-center mb-6 md:mb-0 md:text-left">
              <Image
                  src="/images/star-white.svg"
                  alt="star"
                  width={80}
                  height={80}
                  className="block md:hidden"
                />
                <Image
                  src="/images/star-white.svg"
                  alt="star"
                  width={130}
                  height={130}
                  className="hidden md:block"
                />
                <Box>
                  <Typography
                    component="h5"
                    variant="h6"
                    className="tracking-widest text-lg md:text-xl mb-2 md:mb-0"
                  >
                    EXPERIENCED TEAM
                  </Typography>
                  <Typography
                    component="p"
                    variant="subtitle1"
                    className="text-gray-400 text-sm text-center md:text-justify md:text-lg"
                  >
                    Each of us is a master of our craft – we've worked a number
                    of years in our field and each have passion and creative
                    vision for every project we put our hands on.
                  </Typography>
                </Box>
              </Stack>

              <Stack direction={{ xs:"column", md:"row" }} spacing={1} className="flex justify-center items-center text-center mb-6 md:mb-0 md:text-left">
                <Image
                  src="/images/star-white.svg"
                  alt="star"
                  width={80}
                  height={80}
                  className="block md:hidden"
                />
                <Image
                  src="/images/star-white.svg"
                  alt="star"
                  width={130}
                  height={130}
                  className="hidden md:block"
                />
                <Box>
                  <Typography
                    component="h5"
                    variant="h6"
                    className="tracking-widest text-lg md:text-xl mb-2 md:mb-0"
                  >
                    QUALITY TO DIE FOR
                  </Typography>
                  <Typography
                    component="p"
                    variant="subtitle1"
                    className="text-gray-400 text-sm text-center md:text-justify md:text-lg"
                  >
                    We pay a lot of attention to each and every detail, because
                    we know that we are in charge of creating somebody's safe
                    haven. We partner up with the best craftsmen to ensure our
                    famed quality.
                  </Typography>
                </Box>
              </Stack>

              <Stack direction={{ xs:"column", md:"row" }} spacing={1} className="flex justify-center items-center text-center mb-6 md:mb-0 md:text-left">
              <Image
                  src="/images/star-white.svg"
                  alt="star"
                  width={80}
                  height={80}
                  className="block md:hidden"
                />
                <Image
                  src="/images/star-white.svg"
                  alt="star"
                  width={130}
                  height={130}
                  className="hidden md:block"
                />
                <Box>
                  <Typography
                    component="h5"
                    variant="h6"
                    className="tracking-widest text-lg md:text-xl mb-2 md:mb-0"
                  >
                    VISIONARIES OF THE FUTURE
                  </Typography>
                  <Typography
                    component="p"
                    variant="subtitle1"
                    className="text-gray-400 text-sm text-center md:text-justify md:text-lg"
                  >
                    We're not scared to go beyond the horizon. As the
                    visionaries of tomorrow, we won't say no to experimentation,
                    unusual materials, or unlikely combinations.
                  </Typography>
                </Box>
              </Stack>
            </Stack>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
};

export default Offers;
