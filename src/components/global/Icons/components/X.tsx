import { SvgIconProps, useTheme } from '@mui/material';

export default function X({ ...rest }: SvgIconProps) {
  const { palette } = useTheme();

  return (
    <svg
      width='40'
      height='41'
      viewBox='0 0 40 41'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...rest}
    >
      <path
        d='M26.3263 10.8667H29.6998L22.3297 19.2902L31 30.7527H24.2112L18.894 23.8007L12.8099 30.7527H9.43443L17.3174 21.7428L9 10.8667H15.9611L20.7674 17.221L26.3263 10.8667ZM25.1423 28.7335H27.0116L14.9454 12.7798H12.9395L25.1423 28.7335Z'
        fill={palette['on-surface']}
      />
    </svg>
  );
}
