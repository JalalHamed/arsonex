import {
  Button,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import HeroBackground from 'assets/images/hero-background.jpg';
import HeroImage from 'assets/images/hero-image.jpg';
import { FC } from 'react';

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
    <Stack mt='24px' position='relative'>
      <img
        src={HeroBackground}
        alt='hero-background'
        style={{
          width: '100%',
          maxWidth: '1392px',
          maxHeight: '694px',
          borderRadius: '32px',
          margin: '0 auto',
          minHeight: isMdUp ? 'unset' : '505px',
        }}
        loading='lazy'
      />
      <Stack
        p='24px'
        position='absolute'
        width='100%'
        sx={{ top: '40px' }}
        gap='24px'
        color='primary-fixed'
        alignItems='center'
        textAlign='center'
      >
        <Typography variant={getVariant()}>
          معامله ارز دیجیتال و جابجایی بین‌المللی فیات
        </Typography>
        <Typography
          variant={isSmUp ? 'body-large' : 'body-medium'}
          maxWidth='684px'
        >
          در آرسونیکس، ارزهای دیجیتال یا ارزهای رایج مانند دلار، پوند، لیر و
          ریال را سریع و امن معامله کنید و به‌راحتی ارزهای رایج را از یک کشور به
          کشور دیگر منتقل کنید.
        </Typography>
        <Button variant='contained' sx={{ borderRadius: '12px', p: '12px' }}>
          <Typography variant='label-large' color='on-primary'>
            همین حالا امتحان کنید
          </Typography>
        </Button>
        <Stack maxWidth='1155px'>
          <img
            src={HeroImage}
            alt='hero-image'
            style={{
              borderRadius: '24px',
              marginTop: '44px',
              boxShadow:
                '0 40px 80px 0 rgba(3, 4, 27, 0.15), 0 8px 20px 0 rgba(0, 0, 0, 0.15)',
              width: '100%',
            }}
            loading='lazy'
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Hero;
