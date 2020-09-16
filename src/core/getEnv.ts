/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-undef */
import * as packageJson from '../../package.json';

export function getEnv() {
  const isAnalyze = process.env.NODE_ENV === 'analyze';
  const isProduction = process.env.NODE_ENV === 'production';
  const isDevelopment = process.env.NODE_ENV === 'development';
  const appVersion = packageJson.version;
  const withHot = !!(module as any).hot && isDevelopment;
  const API_URL = '';
  const PUBLIC_URL = '/';

  return {
    isAnalyze,
    isProduction,
    isDevelopment,
    withHot,
    appVersion,
    API_URL,
    PUBLIC_URL,
  };
}
