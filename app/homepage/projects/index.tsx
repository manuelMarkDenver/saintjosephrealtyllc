'use client';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import {
  Container,
  Box,
  Stack,
  Typography,
} from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import 'react-image-gallery/styles/css/image-gallery.css';

const Projects = () => {
  return (
    <>
      <Box className='py-24 bg-creamish'>
        <Container id='projects'>
          <Grid2
            container
            className='flex justify-start items-center md:justify-start md:items-center mb-10 md:mb-20 text-gray-700'
          >
            <Stack>
              <Stack spacing={4} direction='column'>
                <Typography
                  component='h2'
                  variant='h2'
                  className='font-lato text-4xl md:text-5xl text-center lg:text-left mb-4 md:mb-0'
                >
                  Latest Projects
                </Typography>
                <Typography
                  component='p'
                  variant='h6'
                  className='mb-4 text-base lg:text-lg text-center lg:text-left lg:w-3/5'
                >
                  We at Saint Joseph Realty LLC. is constantly striving for
                  perfection. We are lucky to work with notable and known
                  clients, who trust us and let us guide them with our creative
                  vision, making their real estate dreams true.
                </Typography>
              </Stack>
            </Stack>
          </Grid2>

          {/*  Bathroom */}
          <Box className='mb-4 md:mb-20'>
            <Typography
              component='h2'
              variant='h6'
              className='font-Lato font-bold text-2xl md:text-4xl text-center mb-4 md:mb-10 text-gray-700'
            >
              Bathroom Renovations
            </Typography>

            <Grid2
              container
              className='flex items-start mb-4 md:mb-6 text-gray-700'
              spacing={10}
            >
              <Grid2 xs={12} md={7}>
                <Stack direction='column' gap={4}>
                  <Image
                    src='/images/projects/before-after/bathroom-1.png'
                    alt='Before bathroom renovation'
                    width={700}
                    height={700}
                  />
                  <Image
                    src='/images/projects/before-after/bathroom-2.png'
                    alt='Before bathroom renovation'
                    width={700}
                    height={700}
                  />
                </Stack>
              </Grid2>
              <Grid2 xs={12} md={5} className='pt-0 lg:pt-10'>
                <Box
                  className='flex flex-col justify-evenly items-center'
                  gap={{ xs: 2, md: 0 }}
                >
                  <Typography
                    component='h6'
                    variant='h6'
                    className='font-lato mb-0 md:mb-4 text-base md:text-lg text-left md:text-left text-gray-600 tracking-normal md:tracking-wide leading-normal md:leading-relaxed'
                  >
                    <span className='italic block'>Before renovation:</span>
                    The bathroom was outdated and had an inefficient layout. The
                    walls were painted in a dull color and the floor tiles were
                    old and cracked. The vanity was old-fashioned and lacked
                    storage space. The lighting was inadequate, and the shower
                    area was cramped and uninviting. The overall feel of the
                    bathroom was dreary and uninviting.
                  </Typography>
                  <Typography
                    component='h6'
                    variant='h6'
                    className='font-lato mb-0 md:mb-4 text-base md:text-lg text-left md:text-left text-gray-600 tracking-normal md:tracking-wide leading-normal md:leading-relaxed'
                  >
                    <span className='italic block'>After renovation:</span>
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
                </Box>
              </Grid2>
            </Grid2>
          </Box>

          {/*  Bedroom */}
          <Box className='mb-4 md:mb-20'>
            <Typography
              component='h2'
              variant='h6'
              className='font-Lato font-bold text-2xl md:text-4xl text-center mb-4 md:mb-10 text-gray-700'
            >
              Bedroom Renovations
            </Typography>

            <Grid2
              container
              className='flex items-start mb-4 md:mb-6 text-gray-700'
              spacing={10}
            >
              <Grid2 xs={12} md={7}>
                <Stack direction='column' gap={4}>
                  <Image
                    src='/images/projects/before-after/bedroom-1.png'
                    alt='Before bathroom renovation'
                    width={700}
                    height={700}
                  />
                </Stack>
              </Grid2>
              <Grid2 xs={12} md={5} className='pt-0 lg:pt-10'>
                <Box
                  className='flex flex-col justify-evenly items-center'
                  gap={{ xs: 2, md: 0 }}
                >
                  <Typography
                    component='h6'
                    variant='h6'
                    className='font-lato mb-0 md:mb-4 text-base md:text-lg text-left md:text-left text-gray-600 tracking-normal md:tracking-wide leading-normal md:leading-relaxed'
                  >
                    <span className='italic block'>Before renovation:</span>
                    The bedroom in this property was outdated and uninviting.
                    The walls were painted a dull beige color and there was old,
                    worn-out carpet on the floor. The closet doors were missing
                    and the lighting was dim, making the space feel cramped and
                    dark.
                  </Typography>
                  <Typography
                    component='h6'
                    variant='h6'
                    className='font-lato mb-0 md:mb-4 text-base md:text-lg text-left md:text-left text-gray-600 tracking-normal md:tracking-wide leading-normal md:leading-relaxed'
                  >
                    <span className='italic block'>After renovation:</span>
                    The bedroom has undergone a complete transformation and is
                    now a cozy retreat. The walls have been painted a fresh,
                    neutral color and new hardwood flooring has been installed.
                    The closet has been updated with new doors and ample storage
                    space. The lighting has been upgraded, including the
                    addition of a stylish light fixture, creating a bright and
                    welcoming atmosphere. Overall, the bedroom is now an
                    attractive and comfortable space that potential tenants will
                    love.
                  </Typography>
                </Box>
              </Grid2>
            </Grid2>
          </Box>

          {/*  Front Porch */}
          <Box className='mb-4 md:mb-20'>
            <Typography
              component='h2'
              variant='h6'
              className='font-Lato font-bold text-2xl md:text-4xl text-center mb-4 md:mb-10 text-gray-700'
            >
              Front Porch Renovations
            </Typography>

            <Grid2
              container
              className='flex items-start mb-4 md:mb-6 text-gray-700'
              spacing={10}
            >
              <Grid2 xs={12} md={7}>
                <Stack direction='column' gap={4}>
                  <Image
                    src='/images/projects/before-after/front-porch-1.png'
                    alt='front-porch renovation'
                    width={700}
                    height={700}
                  />
                </Stack>
              </Grid2>
              <Grid2 xs={12} md={5} className='pt-0 lg:pt-10'>
                <Box
                  className='flex flex-col justify-evenly items-center'
                  gap={{ xs: 2, md: 0 }}
                >
                  <Typography
                    component='h6'
                    variant='h6'
                    className='font-lato mb-0 md:mb-4 text-base md:text-lg text-left md:text-left text-gray-600 tracking-normal md:tracking-wide leading-normal md:leading-relaxed'
                  >
                    <span className='italic block'>Before renovation:</span>
                    The bedroom in this property was outdated and uninviting.
                    The walls were painted a dull beige color and there was old,
                    worn-out carpet on the floor. The closet doors were missing
                    and the lighting was dim, making the space feel cramped and
                    dark.
                  </Typography>
                  <Typography
                    component='h6'
                    variant='h6'
                    className='font-lato mb-0 md:mb-4 text-base md:text-lg text-left md:text-left text-gray-600 tracking-normal md:tracking-wide leading-normal md:leading-relaxed'
                  >
                    <span className='italic block'>After renovation:</span>
                    The bedroom has undergone a complete transformation and is
                    now a cozy retreat. The walls have been painted a fresh,
                    neutral color and new hardwood flooring has been installed.
                    The closet has been updated with new doors and ample storage
                    space. The lighting has been upgraded, including the
                    addition of a stylish light fixture, creating a bright and
                    welcoming atmosphere. Overall, the bedroom is now an
                    attractive and comfortable space that potential tenants will
                    love.
                  </Typography>
                </Box>
              </Grid2>
            </Grid2>
          </Box>

          {/*  Back Porch */}
          <Box className='mb-4 md:mb-20'>
            <Typography
              component='h2'
              variant='h6'
              className='font-Lato font-bold text-2xl md:text-4xl text-center mb-4 md:mb-10 text-gray-700'
            >
              Back Porch Renovations
            </Typography>

            <Grid2
              container
              className='flex items-start mb-4 md:mb-6 text-gray-700'
              spacing={10}
            >
              <Grid2 xs={12} md={7}>
                <Stack direction='column' gap={4}>
                  <Image
                    src='/images/projects/before-after/back-porch-1.png'
                    alt='Before back porch renovation'
                    width={700}
                    height={700}
                  />
                  <Image
                    src='/images/projects/before-after/back-porch-2.png'
                    alt='Before back porch renovation'
                    width={700}
                    height={700}
                  />
                </Stack>
              </Grid2>
              <Grid2 xs={12} md={5} className='pt-0 lg:pt-10'>
                <Box
                  className='flex flex-col justify-evenly items-center'
                  gap={{ xs: 2, md: 0 }}
                >
                  <Typography
                    component='h6'
                    variant='h6'
                    className='font-lato mb-0 md:mb-4 text-base md:text-lg text-left md:text-left text-gray-600 tracking-normal md:tracking-wide leading-normal md:leading-relaxed'
                  >
                    <span className='italic block'>Before renovation:</span>
                    The back porch of this property is in a state of disrepair,
                    with worn-out and outdated flooring, damaged railings, and
                    an overall uninviting appearance. It does not provide an
                    enjoyable outdoor living space for tenants and may even pose
                    safety risks.
                  </Typography>
                  <Typography
                    component='h6'
                    variant='h6'
                    className='font-lato mb-0 md:mb-4 text-base md:text-lg text-left md:text-left text-gray-600 tracking-normal md:tracking-wide leading-normal md:leading-relaxed'
                  >
                    <span className='italic block'>After renovation:</span>
                    The back porch of this property has been completely
                    transformed into a stylish and functional outdoor oasis. The
                    new flooring is durable and visually appealing, and the
                    upgraded railings add a modern touch while ensuring safety.
                    The space is now perfect for tenants to relax, entertain
                    guests, and enjoy the outdoors.
                  </Typography>
                </Box>
              </Grid2>
            </Grid2>
          </Box>

          {/*  Kitchen */}
          <Box className='mb-4 md:mb-20'>
            <Typography
              component='h2'
              variant='h6'
              className='font-Lato font-bold text-2xl md:text-4xl text-center mb-4 md:mb-10 text-gray-700'
            >
              Kitchen Renovations
            </Typography>

            <Grid2
              container
              className='flex items-start mb-4 md:mb-6 text-gray-700'
              spacing={10}
            >
              <Grid2 xs={12} md={7}>
                <Stack direction='column' gap={4}>
                  <Image
                    src='/images/projects/before-after/kitchen-1.png'
                    alt='Kitchen renovation'
                    width={700}
                    height={700}
                  />
                </Stack>
              </Grid2>
              <Grid2 xs={12} md={5} className='pt-0 lg:pt-10'>
                <Box
                  className='flex flex-col justify-evenly items-center'
                  gap={{ xs: 2, md: 0 }}
                >
                  <Typography
                    component='h6'
                    variant='h6'
                    className='font-lato mb-0 md:mb-4 text-base md:text-lg text-left md:text-left text-gray-600 tracking-normal md:tracking-wide leading-normal md:leading-relaxed'
                  >
                    <span className='italic block'>Before renovation:</span>
                    The kitchen of this property is outdated, with old
                    appliances, worn-out cabinetry, and an overall unappealing
                    aesthetic. The space may not function optimally, and it may
                    be difficult for tenants to cook and entertain guests.
                  </Typography>
                  <Typography
                    component='h6'
                    variant='h6'
                    className='font-lato mb-0 md:mb-4 text-base md:text-lg text-left md:text-left text-gray-600 tracking-normal md:tracking-wide leading-normal md:leading-relaxed'
                  >
                    <span className='italic block'>After renovation:</span>
                    The kitchen of this property has been completely transformed
                    into a modern and functional space. The new appliances are
                    energy-efficient and sleek, and the updated cabinetry and
                    countertops give the kitchen a luxurious feel. The space is
                    now perfect for tenants to cook, entertain, and gather with
                    friends and family. The improved functionality and modern
                    aesthetic will also increase the overall value of the
                    property.
                  </Typography>
                </Box>
              </Grid2>
            </Grid2>
          </Box>

          {/*  Refrigerators */}
          <Box className='mb-4 md:mb-20'>
            <Typography
              component='h2'
              variant='h6'
              className='font-Lato font-bold text-2xl md:text-4xl text-center mb-4 md:mb-10 text-gray-700'
            >
              Refrigerators Restoration
            </Typography>

            <Grid2
              container
              className='flex items-start mb-4 md:mb-6 text-gray-700'
              spacing={10}
            >
              <Grid2 xs={12} md={7}>
                <Stack direction='column' gap={4}>
                  <Image
                    src='/images/projects/before-after/refrigerator-1.png'
                    alt='Kitchen renovation'
                    width={700}
                    height={700}
                  />
                </Stack>
              </Grid2>
              <Grid2 xs={12} md={5} className='pt-0 lg:pt-10'>
                <Box
                  className='flex flex-col justify-evenly items-center'
                  gap={{ xs: 2, md: 0 }}
                >
                  <Typography
                    component='h6'
                    variant='h6'
                    className='font-lato mb-0 md:mb-4 text-base md:text-lg text-left md:text-left text-gray-600 tracking-normal md:tracking-wide leading-normal md:leading-relaxed'
                  >
                    <span className='italic block'>Before renovation:</span>
                    The bedroom in this property was outdated and uninviting.
                    The walls were painted a dull beige color and there was old,
                    worn-out carpet on the floor. The closet doors were missing
                    and the lighting was dim, making the space feel cramped and
                    dark.
                  </Typography>
                  <Typography
                    component='h6'
                    variant='h6'
                    className='font-lato mb-0 md:mb-4 text-base md:text-lg text-left md:text-left text-gray-600 tracking-normal md:tracking-wide leading-normal md:leading-relaxed'
                  >
                    <span className='italic block'>After renovation:</span>
                    The bedroom has undergone a complete transformation and is
                    now a cozy retreat. The walls have been painted a fresh,
                    neutral color and new hardwood flooring has been installed.
                    The closet has been updated with new doors and ample storage
                    space. The lighting has been upgraded, including the
                    addition of a stylish light fixture, creating a bright and
                    welcoming atmosphere. Overall, the bedroom is now an
                    attractive and comfortable space that potential tenants will
                    love.
                  </Typography>
                </Box>
              </Grid2>
            </Grid2>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Projects;
