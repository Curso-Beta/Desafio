import Head from 'next/head'
import { Stack } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Box } from '@mui/system';
import { TextField } from '@mui/material';
import Header from '../components/Header';
import MUIButton from '../components/UI/MUIButton';
import mock from '../mock';
import VideoList from './_videoList';

export default function Home() {
  return (
    <Box>
      <Head>
        <title>Busca</title>
        <meta
          name='description'
          content='Curso Beta'
        />
        <link rel='shortcut icon' href='/favicon.ico' />
      </Head>
      <Header />
      <Stack direction='row' mt='3rem' justifyContent='center' >
        <Box sx={{width:'80%'}}>
          <TextField
            variant='outlined'
            color='secondary'
            margin='none'
            fullWidth
            label='Faça sua Busca'
          />
        </Box>
        <MUIButton
            bgColor='#0081a6'
            variant='contained'
            size='small'
            sx={{ marginRight: '1.5rem' }}
          >
            <SearchIcon></SearchIcon>
        </MUIButton>
      </Stack>

      <VideoList list={mock} />

    </Box>
  );
}
