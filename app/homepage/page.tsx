"use client";

import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Bar from "./components/Bar";
import Offers from "./Offers";
import Services from "./Services";
import MissionVision from "./MissionVision";
import Projects from "./projects";
import Contact from "./contact";

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
            <Box className="flex flex-col justify-between h-full md:w-2/3">
              <Box className="flex flex-col justify-center items-center md:items-start">
                <Typography
                  variant="h1"
                  component="h1"
                  className="italic text-6xl text-center font-rockness md:text-left mb-2 md:text-8xl md:mb-0"
                >
                  Unique Property <p>Management</p>
                </Typography>
                <Typography
                  variant="h5"
                  component="h5"
                  className="italic text-3xl text-center font-sans md:text-left mt-4 md:text-4xl"
                >
                  Done{" "}
                  <Typography component="span" variant="h5" className="text-3xl text-center font-sans md:text-left md:text-4xl underline">
                    Right
                  </Typography>
                </Typography>
                <Button
                  variant="outlined"
                  className="my-10 py-4 px-10 rounded-lg bg-darkish text-white border-white hover:bg-creamish hover:text-black hover:border-darkish hover:font-bold hover:border-1"
                >
                  <a href="#contactus">Get A Quotation Today!</a>
                </Button>
              </Box>

              <Box className="hidden md:block">
                <Bar props="bg-darkish" />
                <Typography
                  variant="caption"
                  className="italic text-lg text-gray-500 "
                >
                  Property management that fits your needs
                </Typography>
              </Box>
            </Box>
            <Box className="flex justify-center h-full relative md:w-1/3">
              <Image
                src="/images/star-black.svg"
                alt="star"
                width={80}
                height={80}
                className="block absolute -top-6 -right-9 md:hidden"
              />
              <Image
                src="/images/star-black.svg"
                alt="star"
                width={250}
                height={250}
                className="hidden absolute -top-20 -right-32 md:block"
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
        <Offers />

        {/* Projects */}
        <Box>
          <Container className="py-24">
            <Projects props={props} />
          </Container>
        </Box>

        {/* Services */}
        <Services />

        {/* Mission Vision */}
        <MissionVision />

        {/* Contact */}
        <Contact />
      </Box>
    </>
  );
};

export default Homepage;
