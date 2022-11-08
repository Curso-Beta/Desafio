import Head from 'next/head'
import { Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Header from '../components/Header';

export default function Home() {
  return (
    <Box>
      <Head>
        <title>Vídeo</title>
        <meta
          name='description'
          content='Você está na Amparo Telefônica, uma empresa com diversos planos que facilitam e dimuem seu custo em ligações. Quer receber um serviço que se encaixe na sua rotina? Venha pra Amparo!'
        />
        <link rel='shortcut icon' href='/favicon.ico' />
      </Head>
      <Header />
      <Box>
        Lista Vídeos
      </Box>
    </Box>
  );
}
