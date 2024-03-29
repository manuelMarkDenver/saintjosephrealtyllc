"use client";

import {
  Box,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Grid2 from "@mui/material/Unstable_Grid2"; // Grid version 2
import Bar from "../homepage/components/Bar";

const services = [
  "Leasing",
  "Manage contractor",
  "Eviction",
  "Landscaping",
  "Snow removal",
  "Maintenance",
  "Collect Rent",
  "Clean-out",
  "Deep Cleaning",
  "Sell & Buy Properties",
  "Remodeling",
  "Home Décor",
  "Staging",
];

const Services = () => {
  return (
    <Box className="bg-darkish text-gray-300" id="services">
      <Container className=" py-24">
        <Grid2 container>
          <Grid2 xs={12} md={5} className="flex flex-col justify-between items-center lg:items-start">
            <Typography component="h2" variant="h2" className="font-lato mb-4 text-4xl md:text-5xl text-center md:text-left">
              Services
            </Typography>
            <Box>
              <Bar props="bg-creamish" />
            </Box>
          </Grid2>
          <Grid2 xs={12} md={7}>
            <Grid2 container>
              <Grid2 xs={12} md={6}>
                <List>
                  {services.map((service, index) => {
                    return (
                      index < 6 && (
                        <ListItem key={index}>
                          <ListItemIcon>
                            <Image
                              src="/images/star-white.svg"
                              alt="star"
                              width={50}
                              height={50}
                            />
                          </ListItemIcon>
                          <ListItemText
                            primary={
                              <Typography className='text-base lg:text-lg'>
                                {service}
                              </Typography>
                            }
                          />
                        </ListItem>
                      )
                    );
                  })}
                </List>
              </Grid2>
              <Grid2 xs={12} md={6}>
                <List>
                  {services.map((service, index) => {
                    return (
                      index > 6 && (
                        <ListItem key={index}>
                          <ListItemIcon>
                            <Image
                              src="/images/star-white.svg"
                              alt="star"
                              width={50}
                              height={50}
                            />
                          </ListItemIcon>
                          <ListItemText
                            primary={
                              <Typography className='text-base lg:text-lg'>
                                {service}
                              </Typography>
                            }
                          />
                        </ListItem>
                      )
                    );
                  })}
                </List>
              </Grid2>
            </Grid2>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
};

export default Services;
