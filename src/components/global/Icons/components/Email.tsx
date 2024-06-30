import { SvgIconProps, useTheme } from '@mui/material';

export default function Email({ ...rest }: SvgIconProps) {
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
      <g clipPath='url(#clip0_3306_17053)'>
        <path
          d='M14.6667 4.96273C14.6667 4.22939 14.0667 3.62939 13.3334 3.62939H2.66671C1.93337 3.62939 1.33337 4.22939 1.33337 4.96273V12.9627C1.33337 13.6961 1.93337 14.2961 2.66671 14.2961H13.3334C14.0667 14.2961 14.6667 13.6961 14.6667 12.9627V4.96273ZM13.3334 4.96273L8.00004 8.28939L2.66671 4.96273H13.3334ZM13.3334 12.9627H2.66671V6.29606L8.00004 9.62939L13.3334 6.29606V12.9627Z'
          fill={palette['on-surface']}
        />
      </g>
      <defs>
        <clipPath id='clip0_3306_17053'>
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
