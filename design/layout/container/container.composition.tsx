import * as React from 'react';
import { CssBaseline, Box } from '@mui/material';
import { Container } from './container.js';

/**
 * A fluid container width is bounded by the maxWidth prop value.
 */
export function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
      </Container>
    </React.Fragment>
  );
}

/**
 * If you prefer to design for a fixed set of sizes instead of trying to accommodate a fully fluid viewport, you can set the fixed prop.
 * The max-width matches the min-width of the current breakpoint.
 */
export function FixedContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
      </Container>
    </React.Fragment>
  );
}
