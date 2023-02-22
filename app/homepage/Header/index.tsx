"use client";

import { Box, Stack, Typography, Button } from "@mui/material";
import Image from "next/image";

const Header = () => {
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      sx={{ height: { xs: "auto", md: "70vh" } }}
    >
      <Box className="flex flex-col justify-between h-full">
        <Box>
          <Typography variant="h4" component="h2" className="italic">
            Unique Property
          </Typography>
          <Typography variant="h1" component="h1" className="font-sans ml-4">
            Solution You Can Rely On
          </Typography>
          <Button variant="outlined" className="mt-10 py-4 px-10 rounded-lg bg-black text-white border-white hover:bg-white hover:text-black hover:border-black">
            Get A Quotation Today!
          </Button>
        </Box>

        <Box>
          <Box className="border-b-8 border-black w-20 mb-2 break-all" />
          <Typography
            variant="caption"
            className="italic text-lg text-gray-500"
          >
            Propety management that fit your needs
          </Typography>
        </Box>
      </Box>
      <Box className="flex justify-center  h-full">
        <Image
          src={"/images/banner/banner1.png"}
          width={800}
          height={800}
          alt="hero"
          className="object-cover"
        />
      </Box>
    </Stack>
  );
};

export default Header;
