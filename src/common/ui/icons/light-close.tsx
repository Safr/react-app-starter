/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

interface IProps {
  width: string;
  height: string;
  fill: string;
  rest?: any;
}

function LightClose({ width, height, ...rest }: IProps): React.ReactElement {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" {...rest}>
      <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" />
    </svg>
  );
}

export { LightClose };
