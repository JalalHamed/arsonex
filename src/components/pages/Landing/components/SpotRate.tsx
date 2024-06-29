import {
  Button,
  Paper,
  Stack,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { ContainedTabs, Icon } from 'components/global';
import { FC, useState } from 'react';
import { formatNumber } from 'utils';
import { SPOT_RATE_FILTERS, UNIT_PRICE } from '../constants';
import MockData from '../mockdata.json';

const SpotRate: FC = () => {
  const [tabSwitchValue, setTabSwitchValue] = useState<'toman' | 'tether'>(
    'toman'
  );
  const [filterValue, setFilterValue] = useState<
    'most_profit' | 'most_popular' | 'newest'
  >('most_profit');
  const { breakpoints } = useTheme();
  const isMdUp = useMediaQuery(breakpoints.up('md'));
  const isLgUp = useMediaQuery(breakpoints.up('lg'));

  const getVariant = () => {
    if (isLgUp) return 'display-small';
    if (isMdUp) return 'heading-large';
    return 'heading-medium';
  };

  return (
    <Stack alignItems='center' gap={{ xs: '16px', sm: '20px', md: '24px' }}>
      <Stack
        bgcolor='surface-container-low'
        p='24px'
        gap='32px'
        borderRadius={{ sm: '32px' }}
        width='100%'
      >
        <Typography
          textAlign='center'
          color='on-secondary-container'
          variant={getVariant()}
          display={{ xs: 'inline-flex', lg: 'none' }}
          mx='auto'
        >
          نرخ لحظه‌ای رمزارزها
        </Typography>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          gap={{ xs: '24px', md: 0 }}
          justifyContent='space-between'
          alignItems='center'
        >
          <Stack
            direction='row'
            bgcolor='surface-container'
            borderRadius='16px'
            p='16px'
            alignItems='center'
            gap='8px'
            width={{ xs: '100%', md: 'fit-content' }}
            justifyContent={{ xs: 'center', md: 'flex-start' }}
          >
            <Typography variant='label-medium' color='on-surface'>
              قیمت واحد:
            </Typography>
            <ContainedTabs
              value={tabSwitchValue}
              onChange={(_, newValue) => setTabSwitchValue(newValue)}
            >
              {UNIT_PRICE.map((unit) => (
                <Tab
                  key={unit.value}
                  value={unit.value}
                  label={
                    <Stack direction='row' alignItems='center' gap='8px'>
                      <Typography variant='label-medium' color='on-surface'>
                        {unit.label}
                      </Typography>
                      <Icon id={unit.icon} />
                    </Stack>
                  }
                  sx={{ borderRadius: '8px' }}
                />
              ))}
            </ContainedTabs>
          </Stack>
          <Typography
            textAlign='center'
            color='on-secondary-container'
            variant={getVariant()}
            display={{ xs: 'none', lg: 'inline-flex' }}
          >
            نرخ لحظه‌ای رمزارزها
          </Typography>
          <Stack
            direction='row'
            bgcolor='surface-container'
            p='16px'
            borderRadius='16px'
            width={{ xs: '100%', md: 'fit-content' }}
            justifyContent={{ xs: 'center', md: 'flex-end' }}
          >
            <ContainedTabs
              value={filterValue}
              onChange={(_, newValue) => setFilterValue(newValue)}
            >
              {SPOT_RATE_FILTERS.map((item) => (
                <Tab
                  key={item.value}
                  value={item.value}
                  label={
                    <Typography variant='label-medium' color='on-surface'>
                      {item.label}
                    </Typography>
                  }
                  sx={{ borderRadius: '8px' }}
                />
              ))}
            </ContainedTabs>
          </Stack>
        </Stack>
        <TableContainer
          component={Paper}
          sx={{
            bgcolor: 'surface-container-low',
          }}
        >
          <Table>
            <TableHead>
              <TableRow
                sx={{
                  bgcolor: 'surface-container',
                }}
              >
                <TableCell>
                  <Typography variant='title-medium' color='on-surface'>
                    ارز
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='title-medium' color='on-surface'>
                    قیمت واحد
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='title-medium' color='on-surface'>
                    تغییرات{isMdUp ? ' 24 ساعته' : ''}
                  </Typography>
                </TableCell>
                <TableCell sx={{ display: { xs: 'none', md: 'table-cell' } }} />
                <TableCell sx={{ display: { xs: 'none', md: 'table-cell' } }} />
              </TableRow>
            </TableHead>
            <TableBody>
              {MockData.map((coin) => (
                <TableRow key={coin.symbol}>
                  <TableCell>
                    <Stack direction='row' gap='8px' alignItems='center'>
                      <img
                        src={coin.logo_uri}
                        alt={coin.symbol}
                        style={{ borderRadius: '50px' }}
                        width='48px'
                        height='48px'
                        loading='lazy'
                      />
                      <Stack gap='4px'>
                        <Typography color='on-surface' variant='label-large'>
                          {coin.name}
                        </Typography>
                        <Typography
                          color='on-surface-variant'
                          variant='label-medium'
                        >
                          {coin.symbol}
                        </Typography>
                      </Stack>
                    </Stack>
                  </TableCell>
                  <TableCell>
                    <Stack direction='row' gap='4px'>
                      <Typography
                        variant='label-large'
                        color='on-surface'
                        dir='ltr'
                      >
                        {formatNumber(coin.price[tabSwitchValue])}
                      </Typography>
                      <Icon
                        id={
                          tabSwitchValue.charAt(0).toUpperCase() +
                          tabSwitchValue.slice(1)
                        }
                      />
                    </Stack>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant='label-large'
                      color={
                        coin.changes['24h'] >= 0 ? 'success.main' : 'error.main'
                      }
                      dir='ltr'
                    >
                      {formatNumber(coin.changes['24h'] * 100)}%
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ display: { xs: 'none', md: 'table-cell' } }}>
                    <Icon
                      id={
                        coin.changes['24h'] >= 0
                          ? 'IncreaseChart'
                          : 'DecreaseChart'
                      }
                    />
                  </TableCell>
                  <TableCell sx={{ display: { xs: 'none', md: 'table-cell' } }}>
                    <Button
                      variant='outlined'
                      sx={{
                        borderColor: 'outline',
                        borderRadius: '8px',
                        p: '8px',
                      }}
                    >
                      خرید و فروش
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>
      <Button
        variant='contained'
        sx={{ width: 'fit-content', borderRadius: '12px', p: '12px' }}
      >
        مشاهده همه ارزها
      </Button>
    </Stack>
  );
};

export default SpotRate;
