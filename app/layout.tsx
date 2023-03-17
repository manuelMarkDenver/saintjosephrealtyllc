import { Inter, Roboto_Mono, Lato } from "@next/font/google";
import localFont from "@next/font/local";
import Footer from "./components/Footer";
import StyledEngineWrapper from "./StyledEngineWrapper";
import Header from "./components/Header";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const roboto_mono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  weight: '400',
  display: "swap",
  subsets: ["latin"]
}); 

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${roboto_mono.variable} ${lato.variable}`}
    >
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Header />

        <StyledEngineWrapper>{children}</StyledEngineWrapper>

        <Footer />
      </body>
    </html>
  );
}
