"use client";

import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Grid2 from "@mui/material/Unstable_Grid2"; // Grid version 2
import YouTube from "react-youtube";

import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import VerifiedIcon from '@mui/icons-material/Verified';
import UpdateIcon from '@mui/icons-material/Update';

const youtubeOpts = {
  height: "500",
  width: "700",
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 0,
    controls: 0,
    fs: 0,
    loop: 1,
    modestbranding: 0,
    disablekb: 1,
    rel: 0,
  },
};

const Offers = () => {
  return (
    <Box id="offers" className="flex justify-center items-center bg-creamish text-black md:h-full py-24">
      <Container >
        <Grid2 container spacing={2}>
          <Grid2 xs={12} md={8} className="flex flex-col justify-start">
            <Typography
              component="h2"
              variant="h2"
              className="font-lato text-4xl md:text-5xl text-center md:text-left mb-10 md:mb-10 text-gray-700"
            >
              Why Work With Us
            </Typography>
            <Box>
              <YouTube videoId="y9j-BL5ocW8" opts={youtubeOpts}/>
            </Box>
          </Grid2>
          <Grid2 xs={12} md={4} className="flex justify-evenly items-center">
            <Stack direction={{ md: "column" }} spacing={6} >
              <Stack
                direction={{ xs: "column", md: "row" }}
                spacing={5}
                className="flex justify-center items-center text-center mb-6 md:mb-0 md:text-left"
              >
                <PeopleAltIcon sx={{ fontSize: "4rem" }} />
                <Box>
                  <Typography
                    component="h5"
                    variant="h6"
                    className="tracking-wide text-lg md:text-xl mb-2 md:mb-0"
                  >
                    Experienced Team
                  </Typography>
                  <Typography
                    component="p"
                    variant="caption"
                    className="text-gray-500 text-xs text-center md:text-left md:text-sm italic"
                  >
                    Each of us is a master of our craft – we've worked a number
                    of years in our field and each have passion and creative
                    vision for every project we put our hands on.
                  </Typography>
                </Box>
              </Stack>

              <Stack
                direction={{ xs: "column", md: "row" }}
                spacing={5}
                className="flex justify-center items-center text-center mb-6 md:mb-0 md:text-left"
              >
                <VerifiedIcon sx={{ fontSize: "4rem" }} />
                <Box>
                  <Typography
                    component="h5"
                    variant="h6"
                    className="tracking-wide text-lg md:text-xl mb-2 md:mb-0"
                  >
                    Quality To Die For
                  </Typography>
                  <Typography
                    component="p"
                    variant="caption"
                    className="text-gray-500 text-xs text-center md:text-left md:text-sm italic"
                  >
                    We pay a lot of attention to each and every detail, because
                    we know that we are in charge of creating somebody's safe
                    haven. We partner up with the best craftsmen to ensure our
                    famed quality.
                  </Typography>
                </Box>
              </Stack>

              <Stack
                direction={{ xs: "column", md: "row" }}
                spacing={5}
                className="flex justify-center items-center text-center mb-6 md:mb-0 md:text-left"
              >
                <UpdateIcon sx={{ fontSize: "4rem" }} />
                <Box>
                  <Typography
                    component="h5"
                    variant="h6"
                    className="tracking-wide text-lg md:text-xl mb-2 md:mb-0"
                  >
                    Visionaries of The Future
                  </Typography>
                  <Typography
                    component="p"
                    variant="caption"
                    className="text-gray-500 text-xs text-center md:text-left md:text-sm italic"
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
