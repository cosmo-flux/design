import { useState } from 'react';
import {
  FormControlLabel,
  FormControl,
  FormLabel,
  FormControlLabelProps,
} from '@cosmo-flux/design.inputs.form';
import { styled } from '@mui/material/styles';
import { Radio } from './radio.js';
import { RadioGroup, useRadioGroup } from './radio-group.js';

export function RadioButtonsGroup() {
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>
  );
}

export function RowRadioButtonsGroup() {
  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
        <FormControlLabel
          value="disabled"
          disabled
          control={<Radio />}
          label="other"
        />
      </RadioGroup>
    </FormControl>
  );
}

export function ControlledRadioButtonsGroup() {
  const [value, setValue] = useState('female');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
      </RadioGroup>
    </FormControl>
  );
}

export function FormControlLabelPlacement() {
  return (
    <FormControl>
      <FormLabel id="demo-form-control-label-placement">
        Label placement
      </FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-form-control-label-placement"
        name="position"
        defaultValue="top"
      >
        <FormControlLabel
          value="top"
          control={<Radio />}
          label="Top"
          labelPlacement="top"
        />
        <FormControlLabel
          value="start"
          control={<Radio />}
          label="Start"
          labelPlacement="start"
        />
        <FormControlLabel
          value="bottom"
          control={<Radio />}
          label="Bottom"
          labelPlacement="bottom"
        />
        <FormControlLabel value="end" control={<Radio />} label="End" />
      </RadioGroup>
    </FormControl>
  );
}

const StyledFormControlLabel = styled((props: any) => (
  <FormControlLabel {...props} />
))(({ theme, checked }) => ({
  '.MuiFormControlLabel-label': checked && {
    color: theme.palette.primary.main,
  },
}));

function MyFormControlLabel(props: FormControlLabelProps) {
  const radioGroup = useRadioGroup();

  let checked = false;

  if (radioGroup) {
    checked = radioGroup.value === props.value;
  }

  return <StyledFormControlLabel checked={checked} {...props} />;
}

export default function UseRadioGroup() {
  return (
    <RadioGroup name="use-radio-group" defaultValue="first">
      <MyFormControlLabel value="first" label="First" control={<Radio />} />
      <MyFormControlLabel value="second" label="Second" control={<Radio />} />
    </RadioGroup>
  );
}
