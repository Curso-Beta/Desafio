import Head from 'next/head'
import { Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';

export default function Home() {
  return (
    <Box
      sx={{ marginTop: '3rem', display: 'flex', justifyContent: 'center' }}
    >
      <Stack sx={{ width: '700px', gap: '1rem' }}>
        <Typography variant='h4' color='gray' fontWeight={600}>
          Beta Cursos
        </Typography>
      </Stack>
    </Box>
  );
}
