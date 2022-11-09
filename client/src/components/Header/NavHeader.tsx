import Image from 'next/image';
import { Box } from '@mui/system';
import { Stack, Typography } from '@mui/material';
import MUIButton from '../UI/MUIButton';
import Link from 'next/link';

export default function NavHeader() {
  return (
    <Box display='flex' justifyContent='space-between' width='100%'>
        <Box>
          <Typography variant='h4' color='gray' fontWeight={600}>
            Beta Cursos
          </Typography>
        </Box>
      <Box m={'1rem'}>
        <Link href='/'>
          <MUIButton
            bgColor='#0081a6'
            variant='contained'
            size='small'
            sx={{ marginRight: '1.5rem' }}
          >
            Home
          </MUIButton>
        </Link>
        <Link href='/search'>
          <MUIButton bgColor='#bc384b' variant='contained' size='small'>
            Busque por um vídeo
          </MUIButton>
        </Link>
        <Link href='/video'>
          <MUIButton bgColor='#bc384b' variant='contained' size='small'>
            Vídeo
          </MUIButton>
        </Link>
      </Box>
    </Box>
  );
}
