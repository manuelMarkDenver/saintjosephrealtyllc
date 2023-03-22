import { Box, Button, Typography } from "@mui/material";

import Link from "next/link";

const Banner = () => {
  return (
    <Box className="flex flex-col justify-evenly z-20 md:w-4/5 md:h-screen relative">
      <Typography
        variant="h2"
        component="h1"
        className="font-lato font-bold text-center md:text-left mb-2 md:mb-0 text-white"
      >
        Property Management <br />
        That <span className="italic mx-3">Fit</span> Your Needs
      </Typography>

      <Box>
        <Typography
          variant="h6"
          component="h3"
          className="font-lato text-center md:text-left mb-2 md:mb-0 leading-relaxed tracking-wide text-white"
        >
          Experience elevated living with Saint Joseph Realty LLC. Our expert
          team is dedicated to providing exceptional property management
          services that will make your life easier. From handling maintenance
          requests to ensuring timely rent collection, we have you covered. Our
          properties offer top-of-the-line amenities and a comfortable living
          experience. Come discover your new home with Saint Joseph Realty LLC
          today!
        </Typography>

        <Button
          variant="outlined"
          className="my-10 py-4 px-10 rounded-lg bg-darkish text-white border-white hover:bg-creamish hover:text-gray-700 hover:border-creamish font-bold hover:border-1"
        >
          <a href="#contactus">Get Started</a>
        </Button>
      </Box>
    </Box>
  );
};

export default Banner;
