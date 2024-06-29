import { SvgIconProps } from '@mui/material';
import {
  Blog,
  Close,
  Hamburger,
  Logo,
  LogoSolo,
  Markets,
  Moon,
  Phone,
  Register,
} from './components';
import { TIcons } from './types';

const Icon = ({ ...rest }: SvgIconProps) => {
  return (
    <>
      {
        {
          Logo: <Logo {...rest} />,
          Register: <Register {...rest} />,
          Hamburger: <Hamburger {...rest} />,
          Close: <Close {...rest} />,
          Phone: <Phone {...rest} />,
          LogoSolo: <LogoSolo {...rest} />,
          Blog: <Blog {...rest} />,
          Markets: <Markets {...rest} />,
          Moon: <Moon {...rest} />,
        }[rest.id as TIcons]
      }
    </>
  );
};

export default Icon;
