import { SvgIconProps } from '@mui/material';

export default function Tether({ ...rest }: SvgIconProps) {
  return (
    <svg
      width='24'
      height='25'
      viewBox='0 0 24 25'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...rest}
    >
      <rect y='0.962891' width='24' height='24' rx='8' fill='#ABECD8' />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M13.473 13.4643V13.4628C13.3905 13.4688 12.9652 13.4943 12.0165 13.4943C11.259 13.4943 10.7257 13.4718 10.5382 13.4628V13.465C7.62222 13.3368 5.44572 12.829 5.44572 12.2215C5.44572 11.6148 7.62222 11.107 10.5382 10.9765V12.9595C10.7287 12.973 11.2747 13.0053 12.0292 13.0053C12.9345 13.0053 13.3882 12.9678 13.473 12.9603V10.978C16.383 11.1078 18.5542 11.6155 18.5542 12.2215C18.5542 12.829 16.383 13.3353 13.473 13.4643ZM13.473 10.7718V8.99726H17.5335V6.29126H6.47772V8.99726H10.5382V10.771C7.23822 10.9225 4.75647 11.5765 4.75647 12.3595C4.75647 13.1425 7.23822 13.7958 10.5382 13.948V19.6345H13.473V13.9465C16.7677 13.795 19.2435 13.1418 19.2435 12.3595C19.2435 11.5773 16.7677 10.924 13.473 10.7718Z'
        fill='#0E7C5A'
      />
    </svg>
  );
}
