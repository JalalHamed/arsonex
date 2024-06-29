import { Switch, styled } from '@mui/material';

export const CustomSwitch = styled(Switch)(({ theme }) => ({
  width: 56,
  height: 32,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    margin: 2,
    padding: 0,
    transform: 'translateX(22px)',
    '&.Mui-checked': {
      transform: 'translateX(2px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml,<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 3.15385L15 1" stroke="%23FFE900" stroke-width="2" stroke-linecap="round"/><path d="M15 29L15 26.8462" stroke="%23FFE900" stroke-width="2" stroke-linecap="round"/><path d="M3.15385 15L1 15" stroke="%23FFE900" stroke-width="2" stroke-linecap="round"/><path d="M28.9995 15L26.8457 15" stroke="%23FFE900" stroke-width="2" stroke-linecap="round"/><path d="M6.62261 23.3764L5.09961 24.8994" stroke="%23FFE900" stroke-width="2" stroke-linecap="round"/><path d="M24.9 5.10054L23.377 6.62354" stroke="%23FFE900" stroke-width="2" stroke-linecap="round"/><path d="M6.62261 6.62359L5.09961 5.10059" stroke="%23FFE900" stroke-width="2" stroke-linecap="round"/><path d="M24.9 24.8995L23.377 23.3765" stroke="%23FFE900" stroke-width="2" stroke-linecap="round"/><circle cx="15" cy="15" r="10" fill="%23FFE900"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#082037' : '#3BAAEF',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: 'transparent',
    width: 28,
    height: 28,
    '&::before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml,<svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 -4.80825e-07C5.5 3.5 7 10.5 9.5 13.5C11.5 15.9 17 18 21 15.5C20.5 17.5 17.0751 22 11 22C4.92487 22 -2.15273e-07 17.0751 -4.80825e-07 11C-7.46378e-07 4.92487 4.92487 -2.15273e-07 11 -4.80825e-07Z" fill="%23ECECEC"/></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#082037' : '#3BAAEF',
    borderRadius: '100px',
  },
}));
