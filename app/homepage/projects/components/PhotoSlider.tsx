"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

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
      });
    }
    return newArr;
  };

  const settings: any = {
    showPlayButton: false,
    thumbnailPosition: "right",
    additionalClass: "featured-slide, featured-thumb",
  };

  return (
    <>
      <ImageGallery items={imagesMutatedArray(imagesArr)} {...settings} />
    </>
  );
};

export default PhotoSlider;
