import {
  TextField as BaseTextField,
  TextFieldProps as BaseTextFieldProps,
  TextFieldClasses,
} from '@mui/material';
import type { OverridableStringUnion } from '@mui/types';
import type { SxProps } from '@mui/system';
import type { Theme as ThemeOptions } from '@mui/material/styles';
import classNames from 'classnames';
import styles from './text-field.module.scss';

export type TextFieldProps = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<TextFieldClasses>;
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color?: OverridableStringUnion<
    'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning',
    {}
  >;
  /**
   * If `true`, the text field will be disabled.
   * @default false
   */
  disabled?: boolean;
  /**
   * The size of the component.
   * `small` is equivalent to the dense text field styling.
   * @default 'medium'
   */
  size?: 'small' | 'medium';
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant?: 'filled' | 'outlined' | 'standard';
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<ThemeOptions>;
  /**
   * A custom classname to style the text field.
   */
  className?: string;
} & Omit<BaseTextFieldProps, 'color' | 'disabled' | 'size' | 'variant'>;

export function TextField({ className, ...rest }: TextFieldProps) {
  return (
    <BaseTextField
      className={classNames(styles.textField, className)}
      {...rest}
    />
  );
}
