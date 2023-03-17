import React, { useState } from "react";
import { FormControl, FormLabel, TextField, Button } from "@mui/material";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
  };

  return (
    <form
      className="flex flex-col max-w- my-0 mx-auto"
      onSubmit={handleSubmit}
    >
      <FormControl className="flex justify-center">
        <FormLabel className="text-white">Name</FormLabel>
        <TextField
          required
          className={`my-2 shadow-lg bg-white`}
          value={name}
          onChange={(event) => setName(event.target.value)}
          variant="filled"
        />
      </FormControl>
      <FormControl className="flex justify-center">
        <FormLabel className="text-white">Email</FormLabel>
        <TextField
          required
          className={`my-2 shadow-lg bg-white`}
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          variant="filled"
        />
      </FormControl>
      <Button
        className="mt-10 py-4 px-10 bg-darkish text-white border-white hover:bg-creamish hover:text-black hover:border-darkish hover:font-bold hover:border-1"
        type="submit"
        variant="outlined"
      >
        Submit
      </Button>
    </form>
  );
}

export default Form;
