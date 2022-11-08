import Image from 'next/image';
import { Box } from '@mui/system';
import MUIButton from '../UI/MUIButton';

export default function NavHeader() {
  return (
    <Box display='flex' justifyContent='space-between' width='100%'>
        <Box ml='10' style={{backgroundColor: 'black'}}>
          <Image src='/logo_branca.png' alt='' width='120' height='50' />
        </Box>
      <Box m={'1rem'}>
          <MUIButton
            bgColor='#0081a6'
            variant='contained'
            size='small'
            sx={{ marginRight: '1.5rem' }}
          >
            Home
          </MUIButton>
          <MUIButton bgColor='#bc384b' variant='contained' size='small'>
            Busque por um vídeo
          </MUIButton>
      </Box>
    </Box>
  );
}
