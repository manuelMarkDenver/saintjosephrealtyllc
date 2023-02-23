"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Box from "@mui/material/Box";
import Image from "next/image";
import { Button, Stack, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2"; // Grid version 2
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Projects from "./Projects";

const PhotoSlider = ({ props }: any) => {
  const imagesArr = props.images.slice().filter((image: string) => {
    return !/\.(mp4)$/.test(image);
  });

  const imagesMutatedArray = (images: string[]) => {
    let newArr: any = [];
    for (let index = 0; index < images.length; index++) {
      newArr.push({
        original: `/images/projects/project-1/${images[index]}`,
        thumbnail: `/images/projects/project-1/${images[index]}`,
        thumbnailTitle: "Before",
        originalTitle: "After",
      });
    }
    return newArr;
  };

  const settings: any = {
    showPlayButton: false,
    thumbnailPosition: "right",
  };

  return (
    <>
      {/* <Slider {...settings}>
        {imagesArr.map((image: string) => {
          return (
            <Box key={image}>
              <Image
                src={`/images/projects/project-1/${image}`}
                alt={image}
                height={200}
                width={500}
                className="object-cover h-1/2"
              />
            </Box>
          );
        })}
      </Slider> */}
      <Grid2 container className="flex justify-start items-center mb-6">
        <Grid2 xs={12} md={5}>
          <Typography component="h2" variant="h2" className="mb-4">
            Lastest Projects
          </Typography>
        </Grid2>
        <Grid2 xs={12} md={2}>
          <Image
            src="/images/star-black.svg"
            alt="star"
            width={130}
            height={130}
          />
        </Grid2>
        <Grid2 xs={12} md={5}>
          <Typography
            component="p"
            variant="caption"
            className="mb-4 text-justify"
          >
            We at Saint Joseph Realty LLC. is constantly striving for
            perfection. We are lucky to work with notable and known clients, who
            trust us and let us guide them with our creative vision, making
            their real estate dreams true.
          </Typography>
        </Grid2>
      </Grid2>
      {/* <Slider {...settings}>{renderProjects()}</Slider> */}
      <ImageGallery items={imagesMutatedArray(imagesArr)} {...settings} />
      <Grid2 container className="my-10">
        <Grid2 xs={12} md={4}>
          <Typography component="h3" variant="h5" className="text-darkish mb-2">
            8 Willowwood Mattapan
          </Typography>
          <Typography component="p" variant="caption" className="text-gray-400">
            3 BEDROOM HOUSES IN BEAUTIFUL SUBURBS
          </Typography>
        </Grid2>
        <Grid2 xs={12} md={8}>
          <Typography
            component="p"
            variant="caption"
            className="text-justify text-gray-500"
          >
            Equipped with air conditioning, private pool, 3 on-suite bedrooms
            and a spacious open living room kitchen area, Sunshine Bay
            Residences are an excellent choice for anyone dreaming of their own
            safe haven. Located in a peaceful, child-friendly neighborhood,
            Sunshine Bay has all the amenities that you could expect from a
            suburb voted 'best in the state' for 3 running years. Whether you
            want to play soccer with your kids on the lawn, or invite friends
            over for dinner, there's space for it at Sunshine Bay.
          </Typography>
        </Grid2>
      </Grid2>
      <Grid2 container className="my-10">
        <Grid2 xs={12} md={4}>
        <Typography component="h6" variant="h4" className="text-gray-500">$2.000.000</Typography>

        </Grid2>
        <Grid2 xs={12} md={8} className="flex xs:justify-center md:justify-end items-center">
          <Button variant="outlined" className="border-creamish bg-darkish text-white py-2 px-20">LEARN MORE</Button>
        </Grid2>
      </Grid2>
    </>
  );
};

export default PhotoSlider;
