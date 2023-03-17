"use client";

import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Bar from "./components/Bar";
import Offers from "./Offers";
import Services from "./Services";
import MissionVision from "./MissionVision";
import Projects from "./projects";
import Contact from "./contact";
import Banner from "./Banner";

const Homepage = (props: any) => {
  return (
    <>
      {/* Banner */}
      <Box>
        <Box className="bg-[url('/images/banner/banner.jpg')] h-screen w-screen bg-cover relative">
          <Box className="h-full w-full bg-gradient-to-r from-black to-transparent absolute inset-0 z-10" />
          <Container>
            <Banner />
          </Container>
        </Box>

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
