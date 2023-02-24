import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '400px',
    margin: '0 auto',
  },
  textField: {
    margin: '8px 0',
  },
  submitButton: {
    marginTop: '16px',
  },
}));

function Form() {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log('Name:', name);
    console.log('Email:', email);
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <FormControl>
        <FormLabel>Name</FormLabel>
        <TextField
          required
          className={classes.textField + ` shadow-lg`}
          value={name}
          onChange={(event) => setName(event.target.value)}
          variant="outlined"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Email</FormLabel>
        <TextField
          required
          className={classes.textField + ` shadow-lg`}
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          variant="outlined"
        />
      </FormControl>
      <Button
        className={classes.submitButton + ` bg-darkish text-white hover:bg-creamish hover:text-black hover:border-black shadow-lg`}
        type="submit"
        variant="outlined"
      >
        Submit
      </Button>
    </form>
  );
}

export default Form;
