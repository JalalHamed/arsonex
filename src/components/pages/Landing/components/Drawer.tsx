import {
  Button,
  Drawer,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import { CustomSwitch, Icon } from 'components/global';
import { Dispatch, FC, SetStateAction } from 'react';
import { useThemeModeAtom } from 'state';
import { DRAWER_BUTTONS } from '../constants';

const MobileDrawer: FC<{
  isDrawerOpen: boolean;
  setIsDrawerOpen: Dispatch<SetStateAction<boolean>>;
}> = ({ isDrawerOpen, setIsDrawerOpen }) => {
  const [themeMode, setThemeMode] = useThemeModeAtom();
  const { palette } = useTheme();

  return (
    <Drawer
      anchor='top'
      open={isDrawerOpen}
      onClose={() => setIsDrawerOpen(false)}
    >
      <Stack
        bgcolor='surface-container-lowest'
        p='24px'
        gap='16px'
        height='100vh'
      >
        <Stack
          direction='row'
          justifyContent='space-between'
          alignItems='center'
          pb='16px'
        >
          <Icon id='Logo' />
          <IconButton onClick={() => setIsDrawerOpen(false)}>
            <Icon id='Close' />
          </IconButton>
        </Stack>
        <Stack gap='16px'>
          {DRAWER_BUTTONS.map((button) => (
            <Button
              key={button.title}
              startIcon={<Icon id={button.icon} />}
              sx={{ justifyContent: 'flex-start', p: '12px' }}
            >
              <Typography color='on-surface' variant='label-large'>
                {button.title}
              </Typography>
            </Button>
          ))}
        </Stack>
        <Stack
          mt='8px'
          py='8px'
          direction='row'
          justifyContent='space-between'
          alignItems='center'
        >
          <Stack direction='row' gap='8px'>
            <Icon id='Moon' />
            <Typography color='on-surface' variant='label-large'>
              تغییر تم
            </Typography>
          </Stack>
          <CustomSwitch
            checked={themeMode === 'light'}
            onChange={() =>
              setThemeMode(themeMode === 'dark' ? 'light' : 'dark')
            }
          />
        </Stack>
        <Stack
          direction='row'
          gap='16px'
          position='fixed'
          width='100%'
          p='24px'
          sx={{ bottom: 0, left: '50%', transform: 'translate(-50%)' }}
        >
          <Button
            variant='outlined'
            sx={{
              height: '48px',
              borderRadius: '12px',
              p: '12px',
              borderColor: palette['outline'],
              flex: 1,
            }}
          >
            ورود
          </Button>
          <Button
            variant='contained'
            sx={{
              height: '48px',
              p: '12px',
              borderRadius: '12px',
              flex: 1,
            }}
          >
            ثبت نام
          </Button>
        </Stack>
      </Stack>
    </Drawer>
  );
};

export default MobileDrawer;
