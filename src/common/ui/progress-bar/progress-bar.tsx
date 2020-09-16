import ProgressBar from 'react-topbar-progress-indicator';
import { theme } from 'common/styles/theme';

ProgressBar.config({
  barColors: {
    '0': theme.palette.primary,
    '0.7': theme.palette.black,
  },
  shadowBlur: 2,
  barThickness: 2,
});

export { ProgressBar };
