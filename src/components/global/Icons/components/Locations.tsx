import { SvgIconProps, useTheme } from '@mui/material';

export default function Location({ ...rest }: SvgIconProps) {
  const { palette } = useTheme();

  return (
    <svg
      width='16'
      height='17'
      viewBox='0 0 16 17'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...rest}
    >
      <g clipPath='url(#clip0_3306_17064)'>
        <path
          d='M8.00004 2.29639C5.42004 2.29639 3.33337 4.38305 3.33337 6.96305C3.33337 10.4631 8.00004 15.6297 8.00004 15.6297C8.00004 15.6297 12.6667 10.4631 12.6667 6.96305C12.6667 4.38305 10.58 2.29639 8.00004 2.29639ZM4.66671 6.96305C4.66671 5.12305 6.16004 3.62972 8.00004 3.62972C9.84004 3.62972 11.3334 5.12305 11.3334 6.96305C11.3334 8.88305 9.41337 11.7564 8.00004 13.5497C6.61337 11.7697 4.66671 8.86305 4.66671 6.96305Z'
          fill={palette['on-surface']}
        />
        <path
          d='M8.00004 8.62972C8.92052 8.62972 9.66671 7.88353 9.66671 6.96305C9.66671 6.04258 8.92052 5.29639 8.00004 5.29639C7.07957 5.29639 6.33337 6.04258 6.33337 6.96305C6.33337 7.88353 7.07957 8.62972 8.00004 8.62972Z'
          fill={palette['on-surface']}
        />
      </g>
      <defs>
        <clipPath id='clip0_3306_17064'>
          <rect
            width='16'
            height='16'
            fill='white'
            transform='translate(0 0.962891)'
          />
        </clipPath>
      </defs>
    </svg>
  );
}
