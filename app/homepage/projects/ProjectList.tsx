"use client";

import { useEffect, useState } from "react";
import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Slider from "react-slick";
import ProjCard from "./components/Card";
import ProjectCard from "./components/ProjectCard";

const ProjectList = (props: any) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/projects/getProjects");
      const data = await res.json();
      setData(data);
    }
    fetchData();
  }, []);


  const settings = {
    centerMode: true,
    centerPadding: "60px",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  if (!data.length)
    return (
      <Box>
        <Typography component="p" variant="h6">
          No projects yet.
        </Typography>
      </Box>
    );

  if (!data)
    return (
      <Box>
        <Typography component="p" variant="h6">
          Loading...
        </Typography>
      </Box>
    );

  return (
    <Box>
      <Container className="py-24">
        <Slider {...settings}>
          {data &&
            data.map((project, index) => (
              <ProjCard key={index} props={project} />
            ))}
        </Slider>
      </Container>
    </Box>
  );
};

export default ProjectList;