import React from 'react';
import { createDocsTemplate } from '@teambit/docs.docs-template';
import { ThemeProvider } from '@cosmo-flux/design.material-ui-theme';

/**
 * provide your component compositions (preview) with the context they need to run.
 * for example, a router, a theme, a data provider, etc.
 * components added here as providers, should be listed as host-dependencies in your host-dependencies.ts file.
 * @see https://bit.dev/docs/react-env/component-previews#composition-providers
 */
export function MyReactProvider({ children }: { children: React.ReactNode }) {
  // force light mode for the preview
  window.localStorage.setItem('mui-mode', 'light');
  return <ThemeProvider>{children}</ThemeProvider>;
}

/**
/**
 * customize the bit documentation template or
 * replace this with one of your own.
 */
export default createDocsTemplate(MyReactProvider);
