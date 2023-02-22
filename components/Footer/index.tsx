"use client";

import Image from "next/image";

import { Box, Container, IconButton, Stack, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "#2b2c32" }} className="text-white py-24">
      <Container maxWidth="xl">
        <Stack
          direction="row"
          spacing={30}
          className="flex justify-center align-top"
        >
          <Box>
            <Image
              src="/images/site-logo.png"
              width={200}
              height={50}
              alt="Site logo"
              className="bg-white rounded-lg"
            />
          </Box>
          <Stack direction="column">
            <Typography className="mb-2" variant="h6">
              Contacts
            </Typography>
            <Typography className="mb-2" variant="caption">
              Total Free (888)781-6227
            </Typography>
            <Typography className="mb-2" variant="caption">
              Efax (857)557-7188
            </Typography>
            <Typography className="mb-2" variant="caption">
              Local (857)557-6558
            </Typography>
            <Stack direction="row">
              <IconButton>
                <FacebookIcon className="text-white"/>
              </IconButton>
              <IconButton>
                <TwitterIcon className="text-white"/>
              </IconButton>
              <IconButton>
                <InstagramIcon className="text-white"/>
              </IconButton>
            </Stack>
          </Stack>
          <Stack direction="column">
            <Typography className="mb-2" variant="h6">
              Address
            </Typography>
            <Typography className="mb-2" variant="caption">
              123 your street name,
            </Typography>
            <Typography className="mb-2" variant="caption">
              City name, Country,{" "}
            </Typography>
            <Typography className="mb-2" variant="caption">
              post code
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
