import {
  Autocomplete as BaseAutocomplete,
  type AutocompleteProps as BaseAutocompleteProps,
  type AutocompleteRenderInputParams,
  type AutocompleteClasses,
  createFilterOptions as baseCreateFilterOptions,
} from '@mui/material';
import type { OverridableStringUnion } from '@mui/types';
import type { SxProps } from '@mui/system';
import type { Theme } from '@mui/material/styles';
import classNames from 'classnames';
import styles from './autocomplete.module.scss';

export function createFilterOptions<T>(
  options: Parameters<typeof baseCreateFilterOptions>[0]
) {
  return baseCreateFilterOptions<T>(options);
}

export interface AutocompleteProps<
  T, // The type of the options.
  Multiple extends boolean | undefined = undefined, // Whether the Autocomplete is in multiple-selection mode.
  DisableClearable extends boolean | undefined = undefined, // Whether the clear button is disabled.
  FreeSolo extends boolean | undefined = undefined // Whether free solo mode is enabled.
> extends BaseAutocompleteProps<T, Multiple, DisableClearable, FreeSolo> {
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<AutocompleteClasses>;
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<Theme>;
  /**
   * The color of the component.
   * You can define custom colors in your theme's palette and reference them here.
   */
  color?: OverridableStringUnion<
    | 'default'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'error'
    | 'info'
    | 'warning',
    {}
  >;
  /**
   * A custom classname to style the autocomplete.
   */
  className?: string;
  /**
   * Render the input component.
   */
  renderInput: (params: AutocompleteRenderInputParams) => React.ReactNode;
}

export function Autocomplete<
  T,
  Multiple extends boolean | undefined = undefined,
  DisableClearable extends boolean | undefined = undefined,
  FreeSolo extends boolean | undefined = undefined
>({
  renderInput,
  className,
  ...rest
}: AutocompleteProps<T, Multiple, DisableClearable, FreeSolo>) {
  return (
    <BaseAutocomplete
      className={classNames(styles.autocomplete, className)}
      renderInput={renderInput}
      {...rest}
    />
  );
}
