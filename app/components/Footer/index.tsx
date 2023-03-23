'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Container, IconButton, Stack, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import Grid from '@mui/material/Unstable_Grid2';

const Footer = () => {
  return (
    <Container className='bg-darkish text-gray-300 py-24' maxWidth="xl">
      <Grid
        container
        gap={{ xs: 1, lg: 0 }}
        className='flex items-start justify-center lg:justify-between'
      >
        <Grid xs={12} lg={4} className='flex justify-center mb-4'>
          <Image
            src='/images/site-logo.png'
            width={200}
            height={50}
            alt='Site logo'
            className='bg-white rounded-lg'
          />
        </Grid>
        <Grid xs={5} lg={4} className='flex justify-center'>
          <Stack direction='column'>
            <Typography variant='h6' sx={{ marginBottom: '0.5rem' }}>
              Contacts
            </Typography>
            <Typography variant='caption' sx={{ marginBottom: '0.5rem' }}>
              Toll Free (888)781-6227
            </Typography>
            <Typography variant='caption' sx={{ marginBottom: '0.5rem' }}>
              Efax (857)557-7188
            </Typography>
            <Typography variant='caption' sx={{ marginBottom: '0.5rem' }}>
              Local (857)557-6558
            </Typography>

            <Stack direction='row'>
              <IconButton className="pl-0 lg:pl-4">
                <Link
                  href='https://www.facebook.com/profile.php?id=100090794007749&mibextid=LQQJ4d'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FacebookIcon className='text-gray-300' />
                </Link>
              </IconButton>
              <IconButton className="pl-0 lg:pl-4">
                <Link
                  href='https://www.instagram.com/saintjosephrealtyllc/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <InstagramIcon className='text-gray-300' />
                </Link>
              </IconButton>
            </Stack>
          </Stack>
        </Grid>
        <Grid xs={5} lg={4} className='flex justify-center'>
          <Stack direction='column'>
            <Typography variant='h6' sx={{ marginBottom: '0.5rem' }}>
              Address
            </Typography>
            <Typography variant='caption' sx={{ marginBottom: '0.5rem' }}>
              35 Village Rd Suite 100
            </Typography>
            <Typography variant='caption' sx={{ marginBottom: '0.5rem' }}>
              Middleton, MA, United States{' '}
            </Typography>
            <Typography variant='caption' sx={{ marginBottom: '0.5rem' }}>
              01949
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Footer;
