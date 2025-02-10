import * as React from 'react';

import { RadioGroup, Radio } from '@mui/material';
import { FormControlLabel } from './form-control-label.js';
import { FormControl } from './form-control.js';
import { FormLabel } from './form-label.js';

export function Example() {
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
