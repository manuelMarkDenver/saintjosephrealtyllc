'use client';

import { Stack, Box, Container, Typography } from '@mui/material';
import Bar from '../homepage/components/Bar';
import { Parallax } from 'react-parallax';


const MissionVision = () => {
  return (
    <Parallax bgImage='/images/parallax-bg.jpg' blur={10} strength={200}>
      <Box
        className='flex justify-center items-center h-screen w-full text-white py-24 relative z-20'
        id='missionvision text-center'
      >
        <Box className='h-full w-full bg-gradient-to-b from-black to-transparent lg:to-gray-300 opacity-90 md:to-transparent absolute inset-0' />
        <Container className='flex flex-col lg:flex-row justify-evenly items-start lg:items-center relative z-30 gap-10' >
          <Stack className='flex items-center text-center lg:w-1/2' spacing={2}>
            <Typography
              component='h2'
              className='font-lato text-3xl md:text-5xl mb-0 md:mb-4'
            >
              Mission
            </Typography>
            <Bar props='bg-creamish mb-2 md:mb-12' />
            <Typography className='italic xs:text-xs md:text-xl'>
              To provide the highest equitable services and deliver quality
              solutions in a timely manner to our customers. To help enhance the
              community by changing one home at a time.
            </Typography>
          </Stack>
          <Stack className='flex items-center text-center lg:w-1/2' spacing={2}>
            <Typography
              component='h2'
              className='font-lato text-3xl md:text-5xl mb-0 md:mb-4'
            >
              Vision
            </Typography>
            <Bar props='bg-creamish mb-2 md:mb-12' />
            <Typography className='italic xs:text-xs md:text-xl'>
              Our team stands on honesty, dedication, patience and integrity. 
              We want to enhance our community by changing one person at a time,
              one property at a time, and one street at a time.   We seek to be
              great and we’re striving to be a pillar in our industry.
            </Typography>
          </Stack>
        </Container>
      </Box>
    </Parallax>
  );
};

export default MissionVision;
