"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { Box, Button, Stack, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2"; // Grid version 2
import "react-image-gallery/styles/css/image-gallery.css";
import PhotoSlider from "./PhotoSlider";

const ProjectCard = ({ props }: any) => {
  return (
    <>
      <PhotoSlider props={props} />

      <Grid2 container className="my-10">
        <Grid2 xs={12} md={4}>
          <Typography component="h3" variant="h5" className="text-darkish mb-2">
            8 Willowwood Mattapan
          </Typography>
          <Typography component="p" variant="caption" className="text-gray-400">
            3 BEDROOM HOUSES IN BEAUTIFUL SUBURBS
          </Typography>
        </Grid2>
        <Grid2 xs={12} md={8}>
          <Typography
            component="p"
            variant="caption"
            className="text-justify text-gray-500"
          >
            Equipped with air conditioning, private pool, 3 on-suite bedrooms
            and a spacious open living room kitchen area, Sunshine Bay
            Residences are an excellent choice for anyone dreaming of their own
            safe haven. Located in a peaceful, child-friendly neighborhood,
            Sunshine Bay has all the amenities that you could expect from a
            suburb voted 'best in the state' for 3 running years. Whether you
            want to play soccer with your kids on the lawn, or invite friends
            over for dinner, there's space for it at Sunshine Bay.
          </Typography>
        </Grid2>
      </Grid2>
      <Grid2 container className="my-10">
        <Grid2 xs={12} md={4}>
          <Typography component="h6" variant="h4" className="text-gray-500">
            $2.000.000
          </Typography>
        </Grid2>
        <Grid2
          xs={12}
          md={8}
          className="flex xs:justify-center md:justify-end items-center"
        >
          <Button
            variant="outlined"
            className="border-creamish bg-darkish text-white py-2 px-20"
          >
            LEARN MORE
          </Button>
        </Grid2>
      </Grid2>
    </>
  );
};

export default ProjectCard;
