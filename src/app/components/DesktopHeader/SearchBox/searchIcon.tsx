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
    width={width || size}
    {...props}
  >
    <path d="M11 2a9 9 0 0 1 6.866 14.82l-.159.18 4.243 4.243-.707.707L17 17.708A9 9 0 1 1 11 2zm0 1a8 8 0 1 0 0 16 8 8 0 0 0 0-16z"></path>
  </svg>
);
