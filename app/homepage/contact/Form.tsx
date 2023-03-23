import React, { useState } from 'react';
import { FormControl, InputLabel, Input, Button, Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel/FormControlLabel';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log('Name:', name);
    console.log('Email:', email);
  };

  return (
    <Box
      component='form'
      className='flex flex-col max-w- my-0 mx-auto'
      onSubmit={handleSubmit}
      noValidate
    >
      <FormControl variant='standard' className='mb-4'>
        <TextField
          label='Name'
          variant='filled'
          required
          className={`shadow-lg bg-white`}
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder='e.g., Jane Doe'
        />
      </FormControl>

      <FormControl variant='standard' className='mb-4'>
        <TextField
          label='Email'
          variant='filled'
          required
          className={`shadow-lg bg-white`}
          type='email'
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder='e.g., janedoe@gmail.com'
        />
      </FormControl>

      <FormControl variant='standard' className='mb-4'>
        <TextField
          label='Message'
          variant='filled'
          multiline
          required
          className={`shadow-lg bg-white`}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder='Type your message here'
          minRows={10}
        />
      </FormControl>

      <Button
        className='mt-10 py-4 px-10 bg-darkish text-white border-white hover:bg-creamish hover:text-black hover:border-darkish hover:font-bold hover:border-1'
        type='submit'
        variant='outlined'
      >
        Submit
      </Button>
    </Box>
  );
}

export default Form;
