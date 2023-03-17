"use client";

import Image from "next/image";

import { Container, Paper } from "@mui/material";

const capabilityFile = "/images/capability/sjr-capability-statement.jpg";

const Capability = () => {
  return (
    <Container className="py-5">
      <Paper elevation={10}>
        <Image src={capabilityFile} alt="capability file" width={1200} height={800} />
      </Paper>
    </Container>
  );
};

export default Capability;
