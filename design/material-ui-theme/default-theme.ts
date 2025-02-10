import { createTheme } from './create-theme.js';
import type { ThemeOptions } from './theme-options.js';
import { getDefaultFonts } from './get-default-fonts.js';
import { darkScheme } from './dark-scheme.js';
import { lightScheme } from './light-scheme.js';

export function defaultTheme(options?: ThemeOptions): ThemeOptions {
  return createTheme({
    cssVariables: {
      colorSchemeSelector: '.mode-%s',
    },
    colorSchemes: {
      light: lightScheme,
      dark: darkScheme,
    },
    components: {
      MuiCssBaseline: {
        /**
         * global CSS overrides
         * immediately load the default fonts
         * */
        styleOverrides: getDefaultFonts(),
      },
      /**
       * use the react-router-dom Link component as the default component to handle routing
       */
      // MuiLink: {
      //   defaultProps: {
      //     component: RouterLink,
      //   } as LinkProps,
      // },
      // MuiButtonBase: {
      //   defaultProps: {
      //     LinkComponent: RouterLink as LinkProps['component'],
      //   },
      // },
      // MuiListItemButton: {
      //   defaultProps: {
      //     component: RouterLink as LinkProps['component'],
      //   },
      // },
      // MuiMenuItem: {
      //   defaultProps: {
      //     component: RouterLink as LinkProps['component'],
      //   },
      // },
    },
    typography: {
      fontFamily: 'Outfit, sans-serif',
      /* this is the custom typography variant */
      handwriting: {
        fontFamily: 'Handlee, cursive',
      },
    },
    ...options,
  });
}
