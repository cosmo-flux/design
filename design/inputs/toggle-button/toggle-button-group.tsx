import * as React from 'react';
import {
  ToggleButtonGroup as BaseToggleButtonGroup,
  type ToggleButtonGroupClasses,
} from '@mui/material';
import type { OverridableStringUnion } from '@mui/types';
import type { SxProps } from '@mui/system';
import type { Theme as ThemeOptions } from '@mui/material/styles';
import classNames from 'classnames';
import styles from './toggle-button.module.scss';

export interface ToggleButtonGroupProps {
  /**
   * The content of the component.
   */
  children?: React.ReactNode;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<ToggleButtonGroupClasses>;
  /**
   * The color of the button when it is selected.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'standard'
   */
  color?: OverridableStringUnion<
    | 'standard'
    | 'primary'
    | 'secondary'
    | 'error'
    | 'info'
    | 'success'
    | 'warning'
  >;
  /**
   * If `true`, only allow one of the child ToggleButton values to be selected.
   * @default false
   */
  exclusive?: boolean;
  /**
   * If `true`, the component is disabled. This implies that all ToggleButton children will be disabled.
   * @default false
   */
  disabled?: boolean;
  /**
   * If `true`, the button group will take up the full width of its container.
   * @default false
   */
  fullWidth?: boolean;
  /**
   * Callback fired when the value changes.
   *
   * @param {React.MouseEvent<HTMLElement>} event The event source of the callback.
   * @param {any} value of the selected buttons. When `exclusive` is true
   * this is a single value; when false an array of selected values. If no value
   * is selected and `exclusive` is true the value is null; when false an empty array.
   */
  onChange?: (event: React.MouseEvent<HTMLElement>, value: any) => void;
  /**
   * The component orientation (layout flow direction).
   * @default 'horizontal'
   */
  orientation?: 'horizontal' | 'vertical';
  /**
   * The size of the component.
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<ThemeOptions>;
  /**
   * The currently selected value within the group or an array of selected
   * values when `exclusive` is false.
   *
   * The value must have reference equality with the option in order to be selected.
   */
  value?: any;
  /**
   * A custom classname to style the toggle button group.
   */
  className?: string;
}

export function ToggleButtonGroup({
  className,
  children,
  ...rest
}: ToggleButtonGroupProps) {
  return (
    <BaseToggleButtonGroup
      className={classNames(styles.toggleButtonGroup, className)}
      {...rest}
    >
      {' '}
      {children}{' '}
    </BaseToggleButtonGroup>
  );
}
