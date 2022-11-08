import Head from 'next/head'
import { Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Header from '../components/Header';

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
      <Box>
        Buscar Vídeo
      </Box>
    </Box>
  );
}
