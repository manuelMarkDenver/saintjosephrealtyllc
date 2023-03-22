"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { Container, Box, Button, Stack, Typography, Divider } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2"; // Grid version 2
import "react-image-gallery/styles/css/image-gallery.css";
import PhotoSlider from "./components/PhotoSlider";
import ProjectList from "./components/ProjectList";

const Projects = ({ props }: any) => {
  return (
    <>
      <Container>
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
              perfection. We are lucky to work with notable and known clients,
              who trust us and let us guide them with our creative vision,
              making their real estate dreams true.
            </Typography>
          </Grid2>
        </Grid2>
      </Container>

      <Container maxWidth="xl">
        {/* Before - Bathroom */}
        <Box>
          <Typography
            component="h2"
            variant="h6"
            className="font-Lato text-2xl md:text-4xl md:text-center my-20 text-white"
          >
            Bathroom
          </Typography>

          {/* before */}
          <Grid2
            container
            className="flex justify-evenly md:items-start mb-6 text-white"
            spacing={6}
            id="projects"
          >
            <Grid2 xs={12} md={5} className="h-full">
              <Stack direction="column" className="text-center">
                <Typography
                  component="h3"
                  variant="h5"
                  className="text-center italic text-gray-300"
                >
                  Before
                </Typography>
                <Image
                  src="/images/projects/before_and_after/before-bathroom.png"
                  alt="Before bathroom renovation"
                  width={700}
                  height={700}
                />
                <Box className="md:mt-4 flex flex-col justify-between items-center">
                  <Typography
                    component="p"
                    variant="caption"
                    className="font-lato mb-4 text-xs md:text-sm text-left md:text-left text-gray-300 tracking-wide leading-10"
                  >
                    The bathroom was outdated and had an inefficient layout. The
                    walls were painted in a dull color and the floor tiles were
                    old and cracked. The vanity was old-fashioned and lacked
                    storage space. The lighting was inadequate, and the shower
                    area was cramped and uninviting. The overall feel of the
                    bathroom was dreary and uninviting.
                  </Typography>
                  {/* <Button className="my-5 py-4 px-10 text-xs bg-blue-700 hover:bg-white hover:text-black hover:border-creamish font-bold hover:border-1 text-white">
                    Click To See All Images
                  </Button> */}
                </Box>
              </Stack>
            </Grid2>
            {/* after */}
            <Grid2 xs={12} md={5} className="h-full">
              <Stack
                direction="column"
                className="flex justify-center items-center"
              >
                <Typography
                  component="h3"
                  variant="h5"
                  className="text-center italic text-gray-300"
                >
                  After
                </Typography>
                <Image
                  src="/images/projects/before_and_after/after-bathroom.png"
                  alt="after bathroom renovation"
                  width={700}
                  height={700}
                />

                <Box className="md:mt-4 flex flex-col justify-between items-center">
                  <Typography
                    component="p"
                    variant="caption"
                    className="font-lato mb-4 text-xs md:text-sm text-center md:text-left text-gray-300 tracking-wide leading-10"
                  >
                    The bathroom has been transformed into a modern and
                    functional space. The walls have been painted in a fresh,
                    light color, and the floor tiles have been replaced with
                    sleek and stylish tiles. The old-fashioned vanity has been
                    replaced with a modern floating vanity that provides ample
                    storage space. <br />
                    <br />
                    The lighting has been updated with energy-efficient LED
                    lights, which provide ample illumination. The shower area
                    has been enlarged, and a glass enclosure has been added to
                    create a spacious and inviting shower. The addition of a new
                    mirror and accessories has brought the entire space
                    together, creating a cohesive and stylish look.
                    <br />
                    <br />
                    The bathroom now feels bright, fresh, and inviting, and is a
                    pleasure to use.
                  </Typography>
                  {/* <Button className="my-5 py-4 px-10 text-xs bg-blue-700 hover:bg-white hover:text-black hover:border-creamish font-bold hover:border-1 text-white">
                    Click To See All Images
                  </Button> */}
                </Box>
              </Stack>
            </Grid2>
          </Grid2>
        </Box>
      </Container>
    </>
  );
};

export default Projects;
