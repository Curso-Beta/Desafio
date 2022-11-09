import Head from 'next/head'
import { Box } from '@mui/system';
import Header from '../components/Header';
import mock from '../mock';
import { Stack, Typography } from '@mui/material';

export default function Home() {
  const video = mock[0]
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
      <Stack mt='3rem' alignItems='center' >
        <Box  sx={{width:'80%'}}>
          <Typography variant='h5' color='gray' fontWeight={600}>
            {video.name}
          </Typography>
          <Typography variant='body1' my='1rem' color='gray' fontWeight={500}>
            <iframe width='100%' height='500' src={video.url} title={video.name} />
          </Typography>
          <Typography variant='h6' color='gray' fontWeight={500}>
            <strong>Descrição:</strong>
            {video.description}
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
}
