import { useState } from 'react';
import { TextField } from '@cosmo-flux/design.inputs.text-field';
import { Autocomplete, createFilterOptions } from './autocomplete.js';
import { top100Films, type FilmOptionType } from './mock-data.dev.js';

export function ComboBox() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Movie" />}
    />
  );
}

export function Grouped() {
  const options = top100Films.map((option) => {
    const firstLetter = option.label[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
      ...option,
    };
  });

  return (
    <Autocomplete
      id="grouped-demo"
      options={options.sort(
        (a, b) => -b.firstLetter.localeCompare(a.firstLetter)
      )}
      groupBy={(option) => option.firstLetter}
      // @ts-ignore
      getOptionLabel={(option) => option.label}
      sx={{ width: 300 }}
      renderInput={(params) => (
        <TextField {...params} label="With categories" />
      )}
    />
  );
}

const filter = createFilterOptions<any>({});

export function FreeSoloCreateOption() {
  const [value, setValue] = useState<FilmOptionType | null>(null);

  return (
    <Autocomplete
      // @ts-ignore
      value={value}
      onChange={(event, newValue) => {
        if (typeof newValue === 'string') {
          setValue({
            label: newValue,
          });
          // @ts-ignore
        } else if (newValue && newValue.inputValue) {
          // Create a new value from the user input
          setValue({
            // @ts-ignore
            label: newValue.inputValue,
          });
        } else {
          // @ts-ignore
          setValue(newValue);
        }
      }}
      filterOptions={(options, params) => {
        const filtered = filter(options, params);

        const { inputValue } = params;
        // Suggest the creation of a new value
        const isExisting = options.some(
          (option) => inputValue === option.label
        );
        if (inputValue !== '' && !isExisting) {
          filtered.push({
            inputValue,
            title: `Add "${inputValue}"`,
          });
        }

        return filtered;
      }}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      id="free-solo-with-text-demo"
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      options={top100Films}
      getOptionLabel={(option) => {
        // Value selected with enter, right from the input
        if (typeof option === 'string') {
          return option;
        }
        // Add "xxx" option created dynamically
        if (option.inputValue) {
          return option.inputValue;
        }
        // Regular option
        return option.label;
      }}
      renderOption={(props, option) => {
        const { key, ...optionProps } = props;
        return (
          <li key={key} {...optionProps}>
            {option.label}
          </li>
        );
      }}
      sx={{ width: 300 }}
      freeSolo
      renderInput={(params) => (
        <TextField {...params} label="Free solo with text demo" />
      )}
    />
  );
}
