"use client";

import { useEffect, useState } from "react";

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

interface Project {
  id: number;
  project: string;
  year: number;
  address: string;
  specs: string;
  description: string;
  price: string;
}

interface Props {
  props: Project;
}

const clickHandler = (e: any) => {
  console.log(e);
};

const ProjectCard = (props: Props) => {
  const { id, project, year, address, specs, description, price } = props.props;

  const [projectId, setProjectId] = useState(null || 0);

  const clickHandler = (projectId: number) => {
    setProjectId(projectId);
  };

  return (
    <Card className="mr-5 text-center relative rounded-lg shadow-lg">
      <CardMedia
        className="h-96 object-cover"
        image="https://api.lorem.space/image/house?w=300&h=300"
      />
      <Box
        sx={{ clipPath: "polygon(0 62%, 100% 41%, 100% 100%, 0% 100%);" }}
        className="absolute bottom-0 w-full h-96 bg-white z-0"
      ></Box>
      <CardContent className="z-50 text-gray-700 relative">
        <Typography gutterBottom variant="h5" component="div">
          {project}
        </Typography> 
        <Typography variant="body2">{address}</Typography>
        <Typography variant="body2">{year}</Typography>
      </CardContent>
      <CardActions className="flex justify-center items-center">
        <Button size="small" onClick={() => clickHandler(id)}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
