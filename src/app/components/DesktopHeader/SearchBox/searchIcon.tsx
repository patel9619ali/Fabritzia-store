import React from 'react';

type SearchIconProps = React.SVGProps<SVGSVGElement> & {
  size?: number;
  strokeWidth?: number;
  width?: number;
  height?: number;
};

export const SearchIcon: React.FC<SearchIconProps> = ({
  size = 24,
  strokeWidth = 1.5,
  width,
  height,
  ...props
}) => (
  <svg
    aria-hidden="true"
    fill="#000"
    focusable="false"
    height={height || size}
    role="presentation"
    viewBox="0 0 24 24"
    // viewBox="0 -960 960 960"
    width={width || size}
    {...props}
  >
    <path d="M11 2a9 9 0 0 1 6.866 14.82l-.159.18 4.243 4.243-.707.707L17 17.708A9 9 0 1 1 11 2zm0 1a8 8 0 1 0 0 16 8 8 0 0 0 0-16z"></path>
    {/* <path d="M765-144 526-383q-30 22-65.79 34.5-35.79 12.5-76.18 12.5Q284-336 214-406t-70-170q0-100 70-170t170-70q100 0 170 70t70 170.03q0 40.39-12.5 76.18Q599-464 577-434l239 239-51 51ZM384-408q70 0 119-49t49-119q0-70-49-119t-119-49q-70 0-119 49t-49 119q0 70 49 119t119 49Z"></path> */}
  </svg>
);
