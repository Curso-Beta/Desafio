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
            Ligações de um jeito simples e{' '}
            <span style={{ color: '#44b161' }}>eficiente.</span>
          </Typography>
          <Typography color='#555'>
            Você está na Amparo Telefônica, uma empresa com diversos planos que
            facilitam e dimuem seu custo em ligações. Venha receber um serviço
            que se encaixe na sua rotina.
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
