'use client';

import React, { useState } from 'react';
import { TextField, Button, Box, Grid } from '@mui/material';
import { useFormik } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';

const Form = () => {
  const initialFormData = {
    name: '',
    email: '',
    message: '',
  };

  const [formData, setFormData] = useState(initialFormData);

  const emailSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email().required('Email is required'),
    message: Yup.string().required('Message is required'),
  });

  const handleFormSubmit = async (data: any) => {
    try {
      const response = await axios.post('/api/sendMail', data)
      console.log("🚀 ~ file: Form.tsx:29 ~ handleFormSubmit ~ response:", response)
    } catch (error) {
      console.error(error)
    }
  };

  const {
    errors,
    touched,
    values,
    setFieldValue,
    handleChange,
    handleBlur,
    handleSubmit,
    validateForm,
    isValid,
    isSubmitting,
    dirty,
  } = useFormik({
    enableReinitialize: true,
    initialValues: formData,
    validationSchema: emailSchema,
    onSubmit: (values) => {
      handleFormSubmit(values);
    },
    validateOnMount: true,
    validateOnChange: false,
  });

  return (
    <>
      <Box
        component='form'
        onSubmit={handleSubmit}
        aria-label='team-add-form'
        autoComplete='false'
      >
        <Grid container>
          <Grid item xs={12} className="mb-4">
            <TextField
              id='name'
              name='name'
              label='Name'
              fullWidth
              required
              className={`shadow-lg bg-white`}
              value={values?.name}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder='e.g., Jane Doe'
              error={touched?.name && Boolean(errors?.name)}
              helperText={touched?.name && errors?.name}
            />
          </Grid>

          <Grid item xs={12} className="mb-4">
            <TextField
              id='email'
              name='email'
              label='Email'
              fullWidth
              required
              className={`shadow-lg bg-white`}
              type='email'
              value={values?.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder='e.g., janedoe@gmail.com'
              error={touched?.email && Boolean(errors?.email)}
              helperText={touched?.email && errors?.email}
              autoComplete="false"
            />
          </Grid>

          <Grid item xs={12} className="mb-4">
            <TextField
              id='message'
              name='message'
              label='Message'
              fullWidth
              multiline
              required
              className={`shadow-lg bg-white`}
              value={values?.message}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder='Type your message here'
              rows={4}
              error={touched?.message && Boolean(errors?.message)}
              helperText={touched?.message && errors?.message}
            />
          </Grid>

          <Button
            className='shadow-lg bg-creamish text-gray-700 border-white hover:bg-darkish hover:text-gray-300 hover:border-darkish hover:font-bold hover:border-1'
            type='submit'
            variant='outlined'
            disabled={!(isValid && dirty)}
            fullWidth
          >
            Submit
          </Button>
        </Grid>
      </Box>
    </>
  );
};

export default Form;
