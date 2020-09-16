/* eslint-disable @typescript-eslint/no-unused-vars */
import { createPalette, Palette, PaletteInput } from './create-palette';
import { createTypography, Typography, TypographyInput } from './create-typography';
import { zIndex, ZIndex } from './z-index';
import { spacing, Spacing } from './spacing';

interface Animations {
  duration: number;
  easing: string;
}

export interface Theme {
  animations: Animations;
  palette: Palette;
  typography: Typography;
  spacing: Spacing;
  zIndex: ZIndex;
}

export interface ThemeInput {
  palette?: PaletteInput;
  typography?: TypographyInput;
}

const createTheme = (options?: ThemeInput): Theme => {
  const { palette: paletteInput = {}, typography: typographyInput = {} } = options || {};

  const palette = createPalette(paletteInput);
  const typography = createTypography(typographyInput);

  return {
    animations: {
      duration: 100,
      easing: 'ease-in-out',
    },
    palette,
    spacing,
    typography,
    zIndex,
  };
};

export const theme = createTheme();

export function createTransition(
  props = ['all'],
  { duration = theme.animations.duration, easing = theme.animations.easing, delay = 0 } = {},
): string {
  const formatMs = (milliseconds: number) => `${Math.round(milliseconds)}ms`;

  return (Array.isArray(props) ? props : [props])
    .map(
      animatedProp =>
        `${animatedProp} ${
          typeof duration === 'string' ? duration : formatMs(duration)
        } ${easing} ${typeof delay === 'string' ? delay : formatMs(delay)}`,
    )
    .join(',');
}
