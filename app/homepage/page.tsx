'use client'

// import { Inter } from '@next/font/google'

import { Container } from "@mui/material";
import Header from "./Header";

// const inter = Inter({ subsets: ['latin'] })

const Homepage = () => {
  return (
    <Container className="py-24">
      <Header />
    </Container>
  );
}

export default Homepage