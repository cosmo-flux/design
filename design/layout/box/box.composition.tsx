import * as React from 'react';
import { Box } from './box.js';

/**
 * The Box component renders as a <div> by default, but you can swap in any other valid HTML tag or React component using the component prop.
 * The demo below replaces the <div> with a <section> element:
 */
export function BoxBasic() {
  return (
    <Box component="section" sx={{ p: 2, border: '1px dashed grey' }}>
      This Box renders as an HTML section element.
    </Box>
  );
}

/**
 * As a CSS utility component, the Box supports all MUI System properties. You can use them as props directly on the component.
 */
export function BoxSystemProps() {
  return (
    <Box
      height={200}
      width={200}
      my={4}
      display="flex"
      alignItems="center"
      gap={4}
      p={2}
      sx={{ border: '2px solid grey' }}
    >
      This Box uses MUI System props for quick customization.
    </Box>
  );
}
