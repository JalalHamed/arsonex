import { SvgIconProps, useTheme } from '@mui/material';

export default function Hamburger({ ...rest }: SvgIconProps) {
  const { palette } = useTheme();

  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...rest}
    >
      <g clipPath='url(#clip0_3306_31202)'>
        <path
          d='M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z'
          fill={palette['on-surface']}
        />
      </g>
      <defs>
        <clipPath id='clip0_3306_31202'>
          <rect width='24' height='24' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
}
