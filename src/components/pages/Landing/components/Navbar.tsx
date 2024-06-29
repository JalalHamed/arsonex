import { Button, IconButton, Stack, Typography, useTheme } from '@mui/material';
import { CustomSwitch, Icon } from 'components/global';
import { Dispatch, FC, SetStateAction } from 'react';
import { useThemeModeAtom } from 'state';
import { NAVBAR_BUTTONS } from '../constants';

const Navbar: FC<{ setIsDrawerOpen: Dispatch<SetStateAction<boolean>> }> = ({
  setIsDrawerOpen,
}) => {
  const { palette } = useTheme();
  const [themeMode, setThemeMode] = useThemeModeAtom();

  return (
    <Stack direction='row' justifyContent='space-between' alignItems='center'>
      <Stack direction='row' alignItems='center' gap='4px'>
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
      <Stack direction='row' gap='8px' display={{ xs: 'none', md: 'flex' }}>
        {NAVBAR_BUTTONS.map((button) => (
          <Button key={button.title} sx={{ minWidth: '80px' }}>
            <Typography variant='label-large' color='on-surface'>
              {button.title}
            </Typography>
          </Button>
        ))}
      </Stack>
      <Stack direction='row' gap='16px' alignItems='center'>
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
