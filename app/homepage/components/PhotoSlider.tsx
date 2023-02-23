'use client'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Box from "@mui/material/Box";
import Image from "next/image";
import Container from "@mui/material/Container";

const PhotoSlider = ({ props }: any) => {
  const imagesArr = props.images.slice().filter((image: string) => {
    return (!/\.(mp4)$/.test(image));
  });

  const settings = {
    className: "center",
    centerMode: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <Container>
      <Slider {...settings}>
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
      </Slider>
    </Container>
  );
};

export default PhotoSlider;
