import {
  Button,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import Image from 'next/image';
import { FC } from 'react';
import HeroBackground from '/public/images/hero-background.jpg';
import HeroImage from '/public/images/hero-image.jpg';

const Hero: FC = () => {
  const { breakpoints } = useTheme();
  const isSmUp = useMediaQuery(breakpoints.up('sm'));
  const isMdUp = useMediaQuery(breakpoints.up('md'));
  const isLgUp = useMediaQuery(breakpoints.up('lg'));

  const getVariant = () => {
    if (isLgUp) return 'display-medium';
    if (isMdUp) return 'display-small';
    if (isSmUp) return 'heading-large';
    return 'heading-medium';
  };

  return (
    <Stack>
      <Stack
        sx={{
          backgroundImage: `url(${HeroBackground.src})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
        borderRadius={{ sm: '32px' }}
        minHeight={isMdUp ? '694px' : '505px'}
      >
        <Stack
          p={{ lg: '24px', md: '20px', xs: '16px' }}
          width='100%'
          gap='24px'
          color='primary-fixed'
          alignItems='center'
          textAlign='center'
          mt='40px'
        >
          <Typography variant={getVariant()}>
            معامله ارز دیجیتال و جابجایی بین‌المللی فیات
          </Typography>
          <Typography
            variant={isSmUp ? 'body-large' : 'body-medium'}
            maxWidth='684px'
          >
            در آرسونیکس، ارزهای دیجیتال یا ارزهای رایج مانند دلار، پوند، لیر و
            ریال را سریع و امن معامله کنید و به‌راحتی ارزهای رایج را از یک کشور
            به کشور دیگر منتقل کنید.
          </Typography>
          <Button variant='contained' sx={{ borderRadius: '12px', p: '12px' }}>
            <Typography variant='label-large' color='on-primary'>
              همین حالا امتحان کنید
            </Typography>
          </Button>
        </Stack>
      </Stack>
      <Stack
        maxWidth='1155px'
        mx='auto'
        px={{ md: '60px', xs: '30px' }}
        mt={{ md: '-350px', xs: '-100px' }}
      >
        <Image
          src={HeroImage}
          alt='hero-image'
          style={{
            borderRadius: '24px',
            boxShadow:
              '0 40px 80px 0 rgba(3, 4, 27, 0.15), 0 8px 20px 0 rgba(0, 0, 0, 0.15)',
            width: '100%',
          }}
          loading='lazy'
        />
      </Stack>
    </Stack>
  );
};

export default Hero;
