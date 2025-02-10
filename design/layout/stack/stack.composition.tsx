import React from 'react';
import { Box } from '@mui/material';
import { Stack } from './stack.js';
import { Item } from './docs.dev.js';

export function BasicStack() {
  return (
    <Box sx={{ width: '100%' }}>
      <Stack spacing={2}>
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </Stack>
    </Box>
  );
}

export function DirectionStack() {
  return (
    <div>
      <Stack direction="row" spacing={2}>
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </Stack>
    </div>
  );
}

export function ResponsiveStack() {
  return (
    <div>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </Stack>
    </div>
  );
}
