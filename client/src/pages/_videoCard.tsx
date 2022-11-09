import Head from 'next/head'
import { Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';

export default function VideoCard({ videoProps }: { videoProps: { url: string, name: string, description: string}}) {
  return (
    <Box sx={{ width: '650px' }}>
      <Typography variant='body2' color='gray' fontWeight={600}>
        {videoProps.name}
      </Typography>
      <Stack direction="row" sx={{ gap: '1rem' }}>
        <Typography variant='body1' color='gray' fontWeight={500}>
          <iframe src={videoProps.url} title={videoProps.name} />
        </Typography>

        <Typography variant='body1' color='gray' fontWeight={500}>
          {videoProps.description}
        </Typography>
      </Stack>
    </Box>
  );
}
