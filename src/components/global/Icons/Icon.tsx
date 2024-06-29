import { SvgIconProps } from '@mui/material';
import {
  Blog,
  Close,
  DecreaseChart,
  Hamburger,
  IncreaseChart,
  Logo,
  LogoSolo,
  Markets,
  Moon,
  Phone,
  Register,
  Tether,
  Toman,
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
          Toman: <Toman {...rest} />,
          Tether: <Tether {...rest} />,
          IncreaseChart: <IncreaseChart {...rest} />,
          DecreaseChart: <DecreaseChart {...rest} />,
        }[rest.id as TIcons]
      }
    </>
  );
};

export default Icon;
