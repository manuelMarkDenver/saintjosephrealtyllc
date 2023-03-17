"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { Box, Button, Stack, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2"; // Grid version 2
import "react-image-gallery/styles/css/image-gallery.css";
import PhotoSlider from "./components/PhotoSlider";
import ProjectList from "./ProjectList";

const Projects = ({ props }: any) => {
  return (
    <>
      <Grid2
        container
        className="flex justify-start items-center md:justify-start md:items-center mb-6 text-white"
        id="projects"
      >
        <Grid2 xs={12} md={6} className="flex justify-start">
          <Typography
            component="h2"
            variant="h2"
            className="font-lato text-4xl md:text-5xl md:text-left mb-4 md:mb-0"
          >
            Latest Projects
          </Typography>
        </Grid2>
        <Grid2 xs={12} md={6}>
          <Typography
            component="p"
            variant="caption"
            className="mb-4 text-sm text-center md:text-left"
          >
            We at Saint Joseph Realty LLC. is constantly striving for
            perfection. We are lucky to work with notable and known clients, who
            trust us and let us guide them with our creative vision, making
            their real estate dreams true.
          </Typography>
        </Grid2>
      </Grid2>

      <ProjectList props={props} />
    </>
  );
};

export default Projects;
