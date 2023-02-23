"use client";

import { Box, Container, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2"; // Grid version 2
import Bar from "../homepage/components/Bar";

const MissionVision = () => {
  return (
    <Box className="bg-creamish text-black text-center">
      <Container className=" py-24">
        <Grid2 container spacing={6}>
          <Grid2 xs={12} md={6}>
            <Typography component="h2" variant="h2">
              Mission
            </Typography>
            <Box>
              <Bar props="bg-creamish" />
              <Typography
                variant="caption"
                className="italic text-lg text-gray-500"
              >
                To provide the highest equitable services and deliver quality
                solutions in a timely manner to our customers. To help enhance
                the community by changing one home at a time.
              </Typography>
            </Box>
          </Grid2>
          <Grid2 xs={12} md={6}>
            <Typography component="h2" variant="h2">
              Vision
            </Typography>
            <Box>
              <Bar props="bg-creamish" />
              <Typography
                variant="caption"
                className="italic text-lg text-gray-500"
              >
                Our team stands on honesty, dedication, patience and integrity. 
                We want to enhance our community by changing one person at a
                time, one property at a time, and one street at a time.   We
                seek to be great and we’re striving to be a pillar in our
                industry.
              </Typography>
            </Box>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
};

export default MissionVision;
