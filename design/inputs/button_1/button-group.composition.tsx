import { Box } from '@cosmo-flux/design.layout.box';
import { Button } from '@cosmo-flux/design.inputs.button';
import { ButtonGroup } from './button-group.js';

export function Contained() {
  return (
    <ButtonGroup variant="contained" aria-label="Basic button group">
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
  );
}

export function Text() {
  return (
    <ButtonGroup variant="text" aria-label="Basic button group">
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
  );
}

export function Outlined() {
  return (
    <ButtonGroup variant="outlined" aria-label="Basic button group">
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
  );
}

const buttons = [
  <Button key="one">One</Button>,
  <Button key="two">Two</Button>,
  <Button key="three">Three</Button>,
];

export default function Vertical() {
  return (
    <Box
      sx={{
        display: 'flex',
        '& > *': {
          m: 1,
        },
      }}
    >
      <ButtonGroup orientation="vertical" aria-label="Vertical button group">
        {buttons}
      </ButtonGroup>
      <ButtonGroup
        orientation="vertical"
        aria-label="Vertical button group"
        variant="contained"
      >
        {buttons}
      </ButtonGroup>
      <ButtonGroup
        orientation="vertical"
        aria-label="Vertical button group"
        variant="text"
      >
        {buttons}
      </ButtonGroup>
    </Box>
  );
}
