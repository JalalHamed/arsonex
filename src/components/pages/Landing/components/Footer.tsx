import { Stack, Typography } from '@mui/material';
import { Icon } from 'components/global';
import { FC } from 'react';
import { FOOTER_LINKS, SOCIAL_MEDIAS } from '../constants';

const Footer: FC = () => {
  return (
    <Stack gap='48px' p={{ xs: '24px', sm: 0 }}>
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        justifyContent='space-between'
      >
        <Stack gap='16px'>
          <Typography variant='title-large' color='on-surface'>
            با ما در ارتباط باشید
          </Typography>
          <Stack direction='row' gap='4px' alignItems='center'>
            <Icon id='Email' />
            <Typography variant='label-medium' color='on-surface'>
              support@arsonex.com
            </Typography>
          </Stack>
          <Stack direction='row' gap='4px' alignItems='center'>
            <Icon id='Phone' style={{ width: '16px', height: '16px' }} />
            <Typography variant='label-medium' color='on-surface'>
              021-92004581
            </Typography>
          </Stack>
          <Stack direction='row' gap='4px' alignItems='center'>
            <Icon id='Location' />
            <Typography variant='label-medium' color='on-surface'>
              خیابان ۱۵ خرداد بازار بین الحرمین کوچه شیخ رضا پلاک ۴۶
            </Typography>
          </Stack>
          <Stack direction='row' gap='4px' mt='-4px'>
            {SOCIAL_MEDIAS.map((item) => (
              <Icon id={item} style={{ cursor: 'pointer' }} />
            ))}
          </Stack>
        </Stack>
        <Stack
          direction='row'
          gap='24px'
          justifyContent='space-between'
          flexWrap='wrap'
        >
          {FOOTER_LINKS.map((item) => (
            <Stack key={item.title} gap='16px'>
              <Typography variant='title-large' color='on-surface'>
                {item.title}
              </Typography>
              <Stack gap='12px'>
                {item.links.map((link) => (
                  <Stack
                    key={link.title}
                    gap='4px'
                    direction='row'
                    alignItems='center'
                  >
                    <Typography variant='label-medium' color='on-surface'>
                      {link.title}
                    </Typography>
                    {link?.note && (
                      <Typography
                        variant='label-small'
                        color='primary.main'
                        border='1px solid'
                        borderColor='primary.main'
                        p='3px 8px'
                        borderRadius='4px'
                        height='24px'
                      >
                        {link.note}
                      </Typography>
                    )}
                  </Stack>
                ))}
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Stack>
      <Stack direction='row' gap='4px' mx='auto' alignItems='center'>
        <Icon id='CopyRight' />
        <Typography>
          1399 تا امروز، تمامی حقوق (مادی و معنوی) این وب سایت برای آرسونیکس
          محفوظ است.
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Footer;
