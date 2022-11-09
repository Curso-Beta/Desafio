import Head from 'next/head'
import { Stack, Typography, Grid } from '@mui/material';
import { Box } from '@mui/system';
import Header from '../components/Header';
import VideoCard from './_videoCard';
import mock from '../mock';

export default function Home() {
  return (
    <Box>
      <Head>
        <title> Home - Curso Beta</title>
        <meta
          name='description'
          content='Curso Beta'
        />
        <link rel='shortcut icon' href='/favicon.ico' />
      </Head>
      <Header />

      <Box mt={5}>
        <Typography variant='h4' color='gray' fontWeight='600'>
        Lista de Vídeos
        </Typography>
        <Stack direction="row" flexWrap='wrap' sx={{ gap: '1rem', mt: 5 }} justifyContent="center">
          {mock?.map((videoProps) => (
            <VideoCard key={videoProps.url} videoProps={videoProps} />
          ))}
        </Stack>
      </Box>
    </Box>
  );
}
