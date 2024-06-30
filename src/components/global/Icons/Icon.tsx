import { SvgIconProps } from '@mui/material';
import {
  Blog,
  Close,
  CopyRight,
  DecreaseChart,
  Email,
  Hamburger,
  IncreaseChart,
  Instagram,
  LinkedIn,
  Location,
  Logo,
  LogoSolo,
  Markets,
  Moon,
  Phone,
  Register,
  Telegram,
  Tether,
  Toman,
  X,
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
          Email: <Email {...rest} />,
          Location: <Location {...rest} />,
          Telegram: <Telegram {...rest} />,
          X: <X {...rest} />,
          Instagram: <Instagram {...rest} />,
          LinkedIn: <LinkedIn {...rest} />,
          CopyRight: <CopyRight {...rest} />,
        }[rest.id as TIcons]
      }
    </>
  );
};

export default Icon;
