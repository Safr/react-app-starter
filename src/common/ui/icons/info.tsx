/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

interface IProps {
  width: string;
  height: string;
  fill: string;
  rest?: any;
}

function Info({ width, height, fill = '#000', ...rest }: IProps): React.ReactElement {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" {...rest}>
      <path
        fill={fill}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22ZM12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4ZM11 18L11 11L13 11L13 18L11 18ZM11 7L11 9L13 9L13 7L11 7Z"
      />
    </svg>
  );
}

export { Info };
