import Head from 'next/head'
import { Box } from '@mui/system';
import Header from '../components/Header';
import mock from '../mock';
import VideoList from './_videoList';

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

      <VideoList list={mock} />
    </Box>
  );
}
