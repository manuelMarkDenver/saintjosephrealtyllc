import Link from 'next/link'
import { Container, Stack, Typography, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const TopBar = () => {
  return (
    <Container maxWidth="xl" className="text-white flex justify-end py-1">
      <Stack direction="row" spacing={{ xs: 1, md: 2 }} className="flex items-end">
        <Typography variant="caption" className="text-xs text-center text-gray-300">
          Toll Free (888)781-6227
        </Typography>
        <Typography variant="caption" className="text-xs text-center text-gray-300">
          Efax (857)557-7188
        </Typography>
        <Typography variant="caption" className="text-xs text-center text-gray-300">
          Local (857)557-6558
        </Typography>
        <IconButton className='p-0 m-0 flex justify-center items-center'>
          <Link
            href="https://www.facebook.com/profile.php?id=100090794007749&mibextid=LQQJ4d"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon className="text-gray-300 text-xl" />
          </Link>
        </IconButton>
        <IconButton className='p-0 m-0 flex justify-center items-center'>
          <Link
            href="https://www.instagram.com/saintjosephrealtyllc/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon className="text-gray-300 text-xl" />
          </Link>
        </IconButton>
      </Stack>
    </Container>
  );
};

export default TopBar;
