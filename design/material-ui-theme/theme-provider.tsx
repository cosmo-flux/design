import { ReactNode } from 'react';
import {
  type ThemeOptions,
  ThemeProvider as BaseThemeProvider,
} from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { defaultTheme } from './default-theme.js';

export interface ThemeProviderProps {
  /**
   * The children to render within the theme.
   */
  children?: ReactNode;
  /**
   * The theme to use.
   */
  theme?: ThemeOptions;

  /**
   * The document used to perform `disableTransitionOnChange` feature
   * @default document
   */
  documentNode?: Document | null;
  /**
   * The default mode when the local storage has no mode yet,
   * requires the theme to have `colorSchemes` with light and dark.
   * @default 'system'
   */
  defaultMode?: 'light' | 'dark' | 'system';
  /**
   * The window that attaches the 'storage' event listener
   * @default window
   */
  storageWindow?: Window | null;
  /**
   * localStorage key used to store application `mode`
   * @default 'mui-mode'
   */
  modeStorageKey?: string;
  /**
   * localStorage key used to store `colorScheme`
   * @default 'mui-color-scheme'
   */
  colorSchemeStorageKey?: string;
  /**
   * Disable CSS transitions when switching between modes or color schemes
   * @default false
   */
  disableTransitionOnChange?: boolean;
}

export function ThemeProvider({
  children,
  theme = defaultTheme(),
  ...props
}: ThemeProviderProps) {
  return (
    <BaseThemeProvider theme={theme} {...props}>
      <>
        <CssBaseline />
        {children}
      </>
    </BaseThemeProvider>
  );
}
