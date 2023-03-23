'use client';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import {
  Container,
  Box,
  Button,
  Stack,
  Typography,
  Divider,
} from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import 'react-image-gallery/styles/css/image-gallery.css';
import ReactCompareImage from 'react-compare-image';
import PhotoSlider from './components/PhotoSlider';
import ProjectList from './components/ProjectList';

const Projects = ({ props }: any) => {
  return (
    <>
      <Container>
        <Grid2
          container
          className='flex justify-start items-center md:justify-start md:items-center mb-10 md:mb-20 text-gray-700'
          id='projects'
        >
          <Grid2 xs={12} md={6}>
            <Stack spacing={4} direction={{ xs: 'row', md: 'column' }}>
              <Typography
                component='h2'
                variant='h2'
                className='font-lato text-4xl md:text-5xl md:text-left mb-4 md:mb-0'
              >
                Latest Projects
              </Typography>
              <Typography
                component='p'
                variant='h6'
                className='mb-4 text-sm md:text-base text-center md:text-left'
              >
                We at Saint Joseph Realty LLC. is constantly striving for
                perfection. We are lucky to work with notable and known clients,
                who trust us and let us guide them with our creative vision,
                making their real estate dreams true.
              </Typography>
            </Stack>
          </Grid2>
          {/* <Grid2 xs={12} md={6}>
            <Typography
              component='p'
              variant='caption'
              className='mb-4 text-sm text-center md:text-left'
            >
              We at Saint Joseph Realty LLC. is constantly striving for
              perfection. We are lucky to work with notable and known clients,
              who trust us and let us guide them with our creative vision,
              making their real estate dreams true.
            </Typography>
          </Grid2> */}
        </Grid2>

        {/*  Bathroom */}
        <Typography
          component='h2'
          variant='h6'
          className='font-Lato font-bold text-2xl md:text-4xl text-center mb-4 md:mb-10 text-gray-700'
        >
          Bathroom Renovations
        </Typography>

        <Grid2
          container
          className='flex items-center mb-4 md:mb-6 text-gray-700'
          spacing={10}
          id='projects'
        >
          <Grid2 xs={12} md={7} spacing={4}>
            <Box>
              <ReactCompareImage
                leftImage='/images/projects/before-after/bathroom/bathroom-before-1.jpg'
                leftImageAlt='Before'
                leftImageLabel='Before'
                rightImageAlt='After'
                rightImage='/images/projects/before-after/bathroom/bathroom-after-1.jpg'
                rightImageLabel='After'
                hover={true}
                aspectRatio='wider'
              />
              <Typography variant='caption' className='font-lato italic text-gray-500'>
                {' '}
                Note: Move the slider to see the before and after images
              </Typography>
            </Box>
          </Grid2>
          <Grid2 xs={12} md={5}>
            {/* <Image
                  src='/images/projects/before-after/before-bathroom.png'
                  alt='Before bathroom renovation'
                  width={700}
                  height={700}
                /> */}
            <Box className='flex flex-col justify-evenly items-center' gap={{ xs: 2, md: 0 }}>
              <Typography
                component='h6'
                variant='h6'
                className='font-lato mb-0 md:mb-4 text-xs md:text-base text-left md:text-left text-gray-600 tracking-normal md:tracking-wide leading-normal md:leading-relaxed'
              >
                <span className='italic block'>Before renovation:</span>
                The bathroom was outdated and had an inefficient layout. The
                walls were painted in a dull color and the floor tiles were old
                and cracked. The vanity was old-fashioned and lacked storage
                space. The lighting was inadequate, and the shower area was
                cramped and uninviting. The overall feel of the bathroom was
                dreary and uninviting.
              </Typography>
              <Typography
                component='h6'
                variant='h6'
                className='font-lato mb-0 md:mb-4 text-xs md:text-base text-left md:text-left text-gray-600 tracking-normal md:tracking-wide leading-normal md:leading-relaxed'
              >
                <span className='italic block'>After renovation:</span>
                The bathroom has been transformed into a modern and functional
                space. The walls have been painted in a fresh, light color, and
                the floor tiles have been replaced with sleek and stylish tiles.
                The old-fashioned vanity has been replaced with a modern
                floating vanity that provides ample storage space. <br />
                <br />
                The lighting has been updated with energy-efficient LED lights,
                which provide ample illumination. The shower area has been
                enlarged, and a glass enclosure has been added to create a
                spacious and inviting shower. The addition of a new mirror and
                accessories has brought the entire space together, creating a
                cohesive and stylish look.
                <br />
                <br />
                The bathroom now feels bright, fresh, and inviting, and is a
                pleasure to use.
              </Typography>
            </Box>
          </Grid2>
        </Grid2>
      </Container>
    </>
  );
};

export default Projects;
