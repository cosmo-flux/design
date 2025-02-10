import * as React from 'react';
import { Stack, Box } from '@mui/material';
import { Slider } from './slider.js';
import { VolumeDown, VolumeUp } from '@mui/icons-material';

export function ContinuousSlider() {
  const [value, setValue] = React.useState<number>(30);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };

  return (
    <Box sx={{ width: 200 }}>
      <Stack
        spacing={2}
        direction="row"
        sx={{
          alignItems: 'center',
          mb: 1,
        }}
      >
        <VolumeDown />
        <Slider aria-label="Volume" value={value} onChange={handleChange} />
        <VolumeUp />
      </Stack>
      <Slider disabled defaultValue={30} aria-label="Disabled slider" />
    </Box>
  );
}

export function SliderSizes() {
  return (
    <Box sx={{ width: 300 }}>
      <Slider
        size="small"
        defaultValue={70}
        aria-label="Small"
        valueLabelDisplay="auto"
      />
      <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
    </Box>
  );
}

function valuetext(value: number) {
  return `${value}°C`;
}

export function DiscreteSlider() {
  return (
    <Box sx={{ width: 300 }}>
      <Slider
        aria-label="Temperature"
        defaultValue={30}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        shiftStep={30}
        step={10}
        marks
        min={10}
        max={110}
      />
      <Slider defaultValue={30} step={10} marks min={10} max={110} disabled />
    </Box>
  );
}

export function DiscreteSliderSteps() {
  return (
    <Box sx={{ width: 300 }}>
      <Slider
        aria-label="Small steps"
        defaultValue={0.00000005}
        getAriaValueText={valuetext}
        step={0.00000001}
        marks
        min={-0.00000005}
        max={0.0000001}
        valueLabelDisplay="auto"
      />
    </Box>
  );
}

const marks = [
  {
    value: 0,
    label: '0°C',
  },
  {
    value: 20,
    label: '20°C',
  },
  {
    value: 37,
    label: '37°C',
  },
  {
    value: 100,
    label: '100°C',
  },
];

export function DiscreteSliderMarks() {
  return (
    <Box sx={{ width: 300 }}>
      <Slider
        aria-label="Custom marks"
        defaultValue={20}
        getAriaValueText={valuetext}
        step={10}
        valueLabelDisplay="auto"
        marks={marks}
      />
    </Box>
  );
}

export function DiscreteSliderLabel() {
  return (
    <Box sx={{ width: 300 }}>
      <Slider
        aria-label="Always visible"
        defaultValue={80}
        getAriaValueText={valuetext}
        step={10}
        marks={marks}
        valueLabelDisplay="on"
      />
    </Box>
  );
}

export default function RangeSlider() {
  const [value, setValue] = React.useState<number[]>([20, 37]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <Box sx={{ width: 300 }}>
      <Slider
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
    </Box>
  );
}

export function VerticalSlider() {
  return (
    <Stack sx={{ height: 300 }} spacing={1} direction="row">
      <Slider
        aria-label="Temperature"
        orientation="vertical"
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        defaultValue={30}
      />
      <Slider
        aria-label="Temperature"
        orientation="vertical"
        defaultValue={30}
        valueLabelDisplay="auto"
        disabled
      />
      <Slider
        getAriaLabel={() => 'Temperature'}
        orientation="vertical"
        getAriaValueText={valuetext}
        defaultValue={[20, 37]}
        valueLabelDisplay="auto"
        marks={marks}
      />
    </Stack>
  );
}
