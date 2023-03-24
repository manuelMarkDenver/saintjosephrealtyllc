import { Snackbar, Alert } from '@mui/material';

interface Props {
  open: boolean;
  handleClose: any;
  message: string;
}

const CustomSnackbar = (props: Props) => {
  const { open, handleClose, message } = props;
  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity='success' sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default CustomSnackbar;
