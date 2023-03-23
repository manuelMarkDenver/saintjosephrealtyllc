import { Container, Box, Button, Typography } from '@mui/material';

const Banner = () => {
  return (
    <>
      <Box className="bg-[url('/images/banner/banner.jpg')] h-screen w-screen bg-cover relative flex items-center">
        <Box className='h-full w-full bg-gradient-to-b md:bg-gradient-to-r from-black to-gray-300 opacity-70 md:to-transparent absolute inset-0 z-10' />
        <Container>
          <Box className='flex flex-col justify-evenly z-20 w-full lg:w-3/5 h-full lg:h-screen relative'>
            <Typography
              variant='h2'
              component='h1'
              className='font-lato font-bold text-center lg:text-left mb-20 lg:mb-0 text-white text-5xl lg:text-6xl'
            >
              Property Management <br />
              That <span className='italic mx-3'>Fit</span> Your Needs
            </Typography>

            <Box className="flex flex-col lg:block">
              <Typography
                variant='h6'
                component='h3'
                className='font-lato text-center text-base lg:text-lg lg:text-left mb-2 lg:mb-0 leading-relaxed tracking-wide text-white'
              >
                Experience elevated living with Saint Joseph Realty LLC. Our
                expert team is dedicated to providing exceptional property
                management services that will make your life easier. From
                handling maintenance requests to ensuring timely rent
                collection, we have you covered. Our properties offer
                top-of-the-line amenities and a comfortable living experience.
                Come discover your new home with Saint Joseph Realty LLC today!
              </Typography>

              <Button
                variant='outlined'
                className='my-10 py-4 px-10 rounded-lg bg-darkish text-white border-white hover:bg-creamish hover:text-gray-700 hover:border-creamish font-bold hover:border-1'
              >
                <a href='#contactus'>Get Started</a>
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Banner;
