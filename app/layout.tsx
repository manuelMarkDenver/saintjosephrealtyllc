

import Footer from "./components/Footer";
import StyledEngineWrapper from "./StyledEngineWrapper";
import Navbar from "./components/Navbar";
import "./globals.css";

import { Inter, Roboto_Mono } from '@next/font/google';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap'
});

const roboto_mono = Roboto_Mono({
  variable: '--font-roboto-mono',
  subsets: ["latin"],
  display: 'swap'
});

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {  
  return (
    <html lang="en" className={`${inter.variable} ${roboto_mono.variable}`}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Navbar />
        <StyledEngineWrapper>{children}</StyledEngineWrapper>
        <Footer />
      </body>
    </html>
  );
}
