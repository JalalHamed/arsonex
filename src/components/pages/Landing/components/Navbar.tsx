import {
  Button,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { CustomSwitch, Icon } from 'components/global';
import { Dispatch, FC, SetStateAction } from 'react';
import { useThemeModeAtom } from 'state';
import { NAVBAR_BUTTONS } from '../constants';

const Navbar: FC<{ setIsDrawerOpen: Dispatch<SetStateAction<boolean>> }> = ({
  setIsDrawerOpen,
}) => {
  const { palette, breakpoints } = useTheme();
  const [themeMode, setThemeMode] = useThemeModeAtom();
  const isMidMdUp = useMediaQuery(breakpoints.up(1120));

  return (
    <Stack
      direction='row'
      justifyContent='space-between'
      alignItems='center'
      width='100%'
      p={{ xs: '16px', sm: '20px', md: '24px' }}
    >
      <Stack
        direction='row'
        alignItems='center'
        gap='4px'
        flex={isMidMdUp ? 1 : 0.39}
      >
        <IconButton
          sx={{ display: { md: 'none' } }}
          onClick={() => setIsDrawerOpen(true)}
        >
          <Icon id='Hamburger' />
        </IconButton>
        <Icon
          id='Logo'
          style={{ cursor: 'pointer' }}
          onClick={() => window.location.replace('/')}
        />
      </Stack>
      <Stack
        direction='row'
        gap='8px'
        display={{ xs: 'none', md: 'flex' }}
        flex={1}
        justifyContent='center'
      >
        {NAVBAR_BUTTONS.map((button) => (
          <Button key={button.title} sx={{ minWidth: '80px' }}>
            <Typography variant='label-large' color='on-surface'>
              {button.title}
            </Typography>
          </Button>
        ))}
      </Stack>
      <Stack
        direction='row'
        gap='16px'
        alignItems='center'
        flex={1}
        justifyContent='flex-end'
      >
        <CustomSwitch
          sx={{ display: { xs: 'none', sm: 'flex' } }}
          checked={themeMode === 'light'}
          onChange={() => setThemeMode(themeMode === 'dark' ? 'light' : 'dark')}
        />
        <Button
          variant='outlined'
          sx={{
            height: '48px',
            borderRadius: '12px',
            p: '12px',
            borderColor: palette['outline'],
            minWidth: '80px',
            display: { xs: 'none', sm: 'flex' },
          }}
        >
          ورود
        </Button>
        <Button
          variant='contained'
          startIcon={<Icon id='Register' />}
          sx={{
            height: '48px',
            borderRadius: '12px',
            p: '12px 16px 12px 12px',
            minWidth: '111px',
          }}
        >
          ثبت نام
        </Button>
      </Stack>
    </Stack>
  );
};

export default Navbar;
