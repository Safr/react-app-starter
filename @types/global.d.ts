import '@testing-library/jest-dom/extend-expect';
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
declare module '*.woff' {
  const url: string;
  // eslint-disable-next-line import/no-default-export
  export default url;
}

declare module '*.ttf' {
  const url: string;
  // eslint-disable-next-line import/no-default-export
  export default url;
}

declare module '*.eot' {
  const url: string;
  // eslint-disable-next-line import/no-default-export
  export default url;
}

declare module '*.svg' {
  const url: string;
  // eslint-disable-next-line import/no-default-export
  export default url;
}

declare module '*.png' {
  const url: string;
  // eslint-disable-next-line import/no-default-export
  export default url;
}

declare module '*.gif' {
  const url: string;
  // eslint-disable-next-line import/no-default-export
  export default url;
}

declare module 'react-hot-loader';
declare module 'stylelint';
declare module 'favicons-webpack-plugin';
declare module 'circular-dependency-plugin';

declare let module: Record<string, unknown>;
