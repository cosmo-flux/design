import React from 'react';
import {
  Select as BaseSelect,
  SelectProps as BaseSelectProps,
  type SelectClasses,
  type SelectChangeEvent,
} from '@mui/material';
import type { MenuProps } from '@cosmo-flux/design.navigation.menu';
import type { InputProps } from '@mui/material/Input';
import type { SxProps } from '@mui/system';
import type { Theme as ThemeOptions } from '@mui/material/styles';
import classNames from 'classnames';
import styles from './select.module.scss';

export type { SelectClasses, SelectChangeEvent };

export interface SelectInputProps<Value = unknown> {
  autoFocus?: boolean;
  autoWidth: boolean;
  defaultOpen?: boolean;
  disabled?: boolean;
  error?: boolean;
  IconComponent?: React.ElementType;
  inputRef?: (
    ref:
      | HTMLSelectElement
      | { node: HTMLInputElement; value: SelectInputProps<Value>['value'] }
  ) => void;
  MenuProps?: Partial<MenuProps>;
  multiple: boolean;
  name?: string;
  native: boolean;
  onBlur?: React.FocusEventHandler<any>;
  onChange?: (event: SelectChangeEvent<Value>, child: React.ReactNode) => void;
  onClose?: (event: React.SyntheticEvent) => void;
  onFocus?: React.FocusEventHandler<any>;
  onOpen?: (event: React.SyntheticEvent) => void;
  open?: boolean;
  readOnly?: boolean;
  renderValue?: (value: SelectInputProps<Value>['value']) => React.ReactNode;
  SelectDisplayProps?: React.HTMLAttributes<HTMLDivElement>;
  sx?: SxProps<ThemeOptions>;
  tabIndex?: number;
  value?: Value;
  variant?: 'standard' | 'outlined' | 'filled';
}

export type SelectProps<Value = unknown> = {
  /**
   * If `true`, the width of the popover will automatically be set according to the items inside the
   * menu, otherwise it will be at least the width of the select input.
   * @default false
   */
  autoWidth?: boolean;
  /**
   * The option elements to populate the select with.
   * Can be some `MenuItem` when `native` is false and `option` when `native` is true.
   *
   * ⚠️The `MenuItem` elements **must** be direct descendants when `native` is false.
   */
  children?: React.ReactNode;
  /**
   * Override or extend the styles applied to the component.
   * @default {}
   */
  classes?: Partial<SelectClasses>;
  /**
   * If `true`, the component is initially open. Use when the component open state is not controlled (i.e. the `open` prop is not defined).
   * You can only use it when the `native` prop is `false` (default).
   * @default false
   */
  defaultOpen?: boolean;
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue?: Value;
  /**
   * If `true`, a value is displayed even if no items are selected.
   *
   * In order to display a meaningful value, a function can be passed to the `renderValue` prop which
   * returns the value to be displayed when no items are selected.
   *
   * ⚠️ When using this prop, make sure the label doesn't overlap with the empty displayed value.
   * The label should either be hidden or forced to a shrunk state.
   * @default false
   */
  displayEmpty?: boolean;
  /**
   * The icon that displays the arrow.
   * @default ArrowDropDownIcon
   */
  IconComponent?: React.ElementType;
  /**
   * The `id` of the wrapper element or the `select` element when `native`.
   */
  id?: string;
  /**
   * An `Input` element; does not have to be a material-ui specific `Input`.
   */
  input?: React.ReactElement<any, any>;
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * When `native` is `true`, the attributes are applied on the `select` element.
   */
  inputProps?: InputProps['inputProps'];
  /**
   * See [OutlinedInput#label](/material-ui/api/outlined-input/#props)
   */
  label?: React.ReactNode;
  /**
   * The ID of an element that acts as an additional label. The Select will
   * be labelled by the additional label and the selected value.
   */
  labelId?: string;
  /**
   * Props applied to the [`Menu`](/material-ui/api/menu/) element.
   */
  MenuProps?: Partial<MenuProps>;
  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   * @default false
   */
  multiple?: boolean;
  /**
   * If `true`, the component uses a native `select` element.
   * @default false
   */
  native?: boolean;
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {SelectChangeEvent<Value>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (any).
   * **Warning**: This is a generic event, not a change event, unless the change event is caused by browser autofill.
   * @param {object} [child] The react element that was selected when `native` is `false` (default).
   */
  onChange?: SelectInputProps<Value>['onChange'];
  /**
   * Callback fired when the component requests to be closed.
   * Use it in either controlled (see the `open` prop), or uncontrolled mode (to detect when the Select collapses).
   *
   * @param {object} event The event source of the callback.
   */
  onClose?: (event: React.SyntheticEvent) => void;
  /**
   * Callback fired when the component requests to be opened.
   * Use it in either controlled (see the `open` prop), or uncontrolled mode (to detect when the Select expands).
   *
   * @param {object} event The event source of the callback.
   */
  onOpen?: (event: React.SyntheticEvent) => void;
  /**
   * If `true`, the component is shown.
   * You can only use it when the `native` prop is `false` (default).
   */
  open?: boolean;
  /**
   * Render the selected value.
   * You can only use it when the `native` prop is `false` (default).
   *
   * @param {any} value The `value` provided to the component.
   * @returns {ReactNode}
   */
  renderValue?: (value: Value) => React.ReactNode;
  /**
   * Props applied to the clickable div element.
   */
  SelectDisplayProps?: React.HTMLAttributes<HTMLDivElement>;
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<ThemeOptions>;
  /**
   * The `input` value. Providing an empty string will select no options.
   * Set to an empty string `''` if you don't want any of the available options to be selected.
   *
   * If the value is an object it must have reference equality with the option in order to be selected.
   * If the value is not an object, the string representation must match with the string representation of the option in order to be selected.
   */
  value?: Value | '';
  /**
   * A custom className to apply to the component.
   */
  className?: string;
} & Omit<
  BaseSelectProps<Value>,
  | 'classes'
  | 'variant'
  | 'autoWidth'
  | 'children'
  | 'defaultOpen'
  | 'defaultValue'
  | 'displayEmpty'
  | 'IconComponent'
  | 'id'
  | 'input'
  | 'inputProps'
  | 'label'
  | 'labelId'
  | 'MenuProps'
  | 'multiple'
  | 'native'
  | 'onChange'
  | 'onClose'
  | 'onOpen'
  | 'open'
  | 'renderValue'
  | 'SelectDisplayProps'
  | 'sx'
  | 'value'
  | 'className'
>;

export function Select({ className, ...rest }: SelectProps) {
  return (
    <BaseSelect className={classNames(styles.select, className)} {...rest} />
  );
}
