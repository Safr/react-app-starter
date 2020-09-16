/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

interface IProps {
  width: string;
  height: string;
  fill: string;
  rest?: any;
}

function Logo({ width, height, fill = '#000', ...rest }: IProps): React.ReactElement {
  return (
    <svg width={width} height={height} viewBox="0 0 48 48" {...rest}>
      <path
        fill={fill}
        fillRule="evenodd"
        d="M32.144 24.593c-.875-1.2-2.856-3.701-2.856-5.274a2.858 2.858 0 015.714 0c0 1.573-1.977 4.074-2.858 5.274zM24.66 35.356L12.79 18.212h5.37l9.184 13.268-2.683 3.876zm7.486-20.978a4.953 4.953 0 00-4.956 4.94c0 2.53 2.505 5.394 3.674 7.078l-2.249 3.242L19.57 16.57a1.052 1.052 0 00-.864-.452h-7.92a1.046 1.046 0 00-.863 1.644l13.87 20.026a1.052 1.052 0 001.726 0s8.132-11.712 8.463-12.163c1.532-2.084 3.116-4.24 3.116-6.31a4.952 4.952 0 00-4.952-4.936v-.001zM23.932 2.093c-12.098.035-21.877 9.872-21.842 21.97.035 12.099 9.87 21.877 21.968 21.842C36.133 45.871 45.902 36.073 45.902 24c-.03-12.113-9.859-21.913-21.97-21.91v.003zm0 45.907C10.677 47.962-.036 37.186 0 23.932.036 10.677 10.812-.038 24.066 0 37.296.036 48 10.77 48 24c-.035 13.266-10.8 24.003-24.068 24z"
      />
    </svg>
  );
}

export { Logo };
