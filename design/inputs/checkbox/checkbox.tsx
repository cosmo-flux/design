import {
  Checkbox as BaseCheckbox,
  CheckboxProps as BaseCheckboxProps,
  CheckboxClasses,
} from '@mui/material';
import type { OverridableStringUnion } from '@mui/types';
import type { SxProps } from '@mui/system';
import type { Theme as ThemeOptions } from '@mui/material/styles';
import classNames from 'classnames';
import styles from './checkbox.module.scss';

export interface CheckboxProps extends BaseCheckboxProps {
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<CheckboxClasses>;
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color?: OverridableStringUnion<
    | 'default'
    | 'primary'
    | 'secondary'
    | 'error'
    | 'info'
    | 'success'
    | 'warning',
    {}
  >;
  /**
   * If `true`, the checkbox will be disabled.
   * @default false
   */
  disabled?: boolean;
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<ThemeOptions>;
  /**
   * A custom classname to style the checkbox.
   */
  className?: string;
}

export function Checkbox({ className, ...rest }: CheckboxProps) {
  return (
    <BaseCheckbox
      className={classNames(styles.checkbox, className)}
      {...rest}
    />
  );
}
