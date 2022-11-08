import Head from 'next/head'
import { Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Header from '../components/Header';

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
      <Box
        sx={{ marginTop: '3rem', display: 'flex', justifyContent: 'center' }}
      >
        <Stack sx={{ width: '700px', gap: '1rem' }}>
          <Typography variant='h4' color='gray' fontWeight={600}>
            Beta Cursos
          </Typography>
        </Stack>
      </Box>
      <Box>
        Lista Vídeos
        {}
      </Box>
    </Box>
  );
}
