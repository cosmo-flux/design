import * as React from 'react';
import { Box } from '@cosmo-flux/design.layout.box';
import { MenuItem } from '@cosmo-flux/design.navigation.menu';
import {
  Input,
  InputLabel,
  InputAdornment,
} from '@cosmo-flux/design.inputs.input';
import { FormControl } from '@cosmo-flux/design.inputs.form';
import { AccountCircle } from '@mui/icons-material';
import { TextField } from './text-field.js';

/**
 * Introduction
 */
export function BasicTextFields() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
    >
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="standard-basic" label="Standard" variant="standard" />
    </Box>
  );
}

/**
 * Validation
 * The error prop toggles the error state. The `helperText` prop can then be used to provide feedback to the user about the error.
 */
export function ValidationTextFields() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
    >
      <div>
        <TextField
          error
          id="outlined-error"
          label="Error"
          defaultValue="Hello World"
        />
        <TextField
          error
          id="outlined-error-helper-text"
          label="Error"
          defaultValue="Hello World"
          helperText="Incorrect entry."
        />
      </div>
      <div>
        <TextField
          error
          id="filled-error"
          label="Error"
          defaultValue="Hello World"
          variant="filled"
        />
        <TextField
          error
          id="filled-error-helper-text"
          label="Error"
          defaultValue="Hello World"
          helperText="Incorrect entry."
          variant="filled"
        />
      </div>
      <div>
        <TextField
          error
          id="standard-error"
          label="Error"
          defaultValue="Hello World"
          variant="standard"
        />
        <TextField
          error
          id="standard-error-helper-text"
          label="Error"
          defaultValue="Hello World"
          helperText="Incorrect entry."
          variant="standard"
        />
      </div>
    </Box>
  );
}

/**
 * Multiline.
 * The multiline prop transforms the text field into a TextareaAutosize element.
 * Unless the rows prop is set, the height of the text field dynamically matches its content (using TextareaAutosize).
 * You can use the minRows and maxRows props to bound it.
 */
export function MultilineTextFields() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
    >
      <div>
        <TextField
          id="outlined-multiline-flexible"
          label="Multiline"
          multiline
          maxRows={4}
        />
        <TextField
          id="outlined-textarea"
          label="Multiline Placeholder"
          placeholder="Placeholder"
          multiline
        />
        <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue="Default Value"
        />
      </div>
      <div>
        <TextField
          id="filled-multiline-flexible"
          label="Multiline"
          multiline
          maxRows={4}
          variant="filled"
        />
        <TextField
          id="filled-textarea"
          label="Multiline Placeholder"
          placeholder="Placeholder"
          multiline
          variant="filled"
        />
        <TextField
          id="filled-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue="Default Value"
          variant="filled"
        />
      </div>
      <div>
        <TextField
          id="standard-multiline-flexible"
          label="Multiline"
          multiline
          maxRows={4}
          variant="standard"
        />
        <TextField
          id="standard-textarea"
          label="Multiline Placeholder"
          placeholder="Placeholder"
          multiline
          variant="standard"
        />
        <TextField
          id="standard-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue="Default Value"
          variant="standard"
        />
      </div>
    </Box>
  );
}

/**
 * Select
 * The select prop makes the text field use the Select component internally.
 */
export function SelectTextFields() {
  const currencies = [
    {
      value: 'USD',
      label: '$',
    },
    {
      value: 'EUR',
      label: '€',
    },
    {
      value: 'BTC',
      label: '฿',
    },
    {
      value: 'JPY',
      label: '¥',
    },
  ];
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
    >
      <div>
        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          defaultValue="EUR"
          helperText="Please select your currency"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="outlined-select-currency-native"
          select
          label="Native select"
          defaultValue="EUR"
          SelectProps={{
            native: true,
          }}
          helperText="Please select your currency"
        >
          {currencies.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
      </div>
      <div>
        <TextField
          id="filled-select-currency"
          select
          label="Select"
          defaultValue="EUR"
          helperText="Please select your currency"
          variant="filled"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="filled-select-currency-native"
          select
          label="Native select"
          defaultValue="EUR"
          SelectProps={{
            native: true,
          }}
          helperText="Please select your currency"
          variant="filled"
        >
          {currencies.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
      </div>
      <div>
        <TextField
          id="standard-select-currency"
          select
          label="Select"
          defaultValue="EUR"
          helperText="Please select your currency"
          variant="standard"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="standard-select-currency-native"
          select
          label="Native select"
          defaultValue="EUR"
          SelectProps={{
            native: true,
          }}
          helperText="Please select your currency"
          variant="standard"
        >
          {currencies.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
      </div>
    </Box>
  );
}

/**
 * Icons
 */
export function InputWithIcon() {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <FormControl variant="standard">
        <InputLabel htmlFor="input-with-icon-adornment">
          With a start adornment
        </InputLabel>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
        />
      </FormControl>
      <TextField
        id="input-with-icon-textfield"
        label="TextField"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="With sx" variant="standard" />
      </Box>
    </Box>
  );
}
