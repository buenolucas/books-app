import {getFontStyleObject} from './utils/font';

const Theme = {};

// ------------------------------------------------------------
// Sizing
// ------------------------------------------------------------
Theme.spacing = {
  xTiny: 4,
  tiny: 8,
  small: 16,
  base: 24,
  large: 48,
  xLarge: 64,
};

Theme.specifications = {
  headerHeight: 56,
  bookCoverAspectRation: 0.69402985075,
};
// ------------------------------------------------------------
// Colors
// ------------------------------------------------------------

const colors = {
  paleGrey: '#effaff',
  paleGreyTwo: '#f3f6fd',
  slateGray: '#595a5c',
  robinEgg: '#56c8ff',
  darkSky: '#47b7ed',
  steel: '#86878b',
  darkGrey: '#2d2d2e',
  lightPeriwinkle: '#dee1e6',
  slateGray: '#595a5c',
  ice: '#f2fdf6',
  white: '#FFFFFF',
};

Theme.gray = {
  darkest: '#121212',
  darker: '#1a1a1a',
  dark: '#353535',
  light: '#828282',
  lighter: '#cfcfcf',
  lightest: '#f8f8f8',
};

Theme.colors = {
  ...colors,
  primary: colors.robinEgg,
  primaryVariant: colors.darkSky,
  text: colors.slateGray,
  background: colors.white,
  buttonPrimary: colors.robinEgg,
  buttonDefault: colors.paleGrey,
};

// ------------------------------------------------------------
// Typography
// ------------------------------------------------------------
Theme.typography = {
  largeTitle: {
    fontSize: 22,
    ...getFontStyleObject({weight: 'Medium'}),
  },
  header: {
    fontSize: 14,
    letterSpacing: 0.5,
    ...getFontStyleObject({weight: 'Medium'}),
  },
  body: {
    fontSize: 14,
    ...getFontStyleObject({weight: 'Regular'}),
  },
  caption1: {
    fontSize: 18,
  },
  input: {
    fontSize: 15,
    ...getFontStyleObject({weight: 'Regular'}),
  },
  caption1: {
    fontSize: 15,
    ...getFontStyleObject({weight: 'Medium'}),
  },
  caption2: {
    fontSize: 14,
    ...getFontStyleObject({weight: 'Medium'}),
  },
};

export default Theme;
