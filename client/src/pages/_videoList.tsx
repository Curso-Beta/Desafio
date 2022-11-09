import { Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import VideoCard from './_videoCard';

export default function VideoList({ list }: { list: Array<any>}) {
  return (
    <Box mt={5}>
      <Typography variant='h4' color='gray' fontWeight='600'>
      Lista de Vídeos
      </Typography>
      <Stack direction="row" flexWrap='wrap' sx={{ gap: '3rem', mt: 5 }} justifyContent="center">
        {list?.map((videoProps) => (
          <VideoCard key={videoProps.url} videoProps={videoProps} />
        ))}
      </Stack>
    </Box>
  );
}
