import {
  FormControl as BaseFormControl,
  type FormControlProps as BaseFormControlProps,
  type FormControlClasses,
  type FormControlPropsColorOverrides,
  type FormControlPropsSizeOverrides,
} from '@mui/material';
import type { OverridableStringUnion } from '@mui/types';
import classNames from 'classnames';
import styles from './form.module.scss';

export interface FormControlProps extends BaseFormControlProps {
  /**
   * The content of the component.
   */
  children?: React.HTMLAttributes<HTMLDivElement>['children'];
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<FormControlClasses>;
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color?: OverridableStringUnion<
    'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning',
    FormControlPropsColorOverrides
  >;
  /**
   * If `true`, the label, input and helper text should be displayed in a disabled state.
   * @default false
   */
  disabled?: boolean;
  /**
   * If `true`, the label is displayed in an error state.
   * @default false
   */
  error?: boolean;
  /**
   * If `true`, the component will take up the full width of its container.
   * @default false
   */
  fullWidth?: boolean;
  /**
   * If `true`, the component is displayed in focused state.
   */
  focused?: boolean;
  /**
   * If `true`, the label is hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   * @default false
   */
  hiddenLabel?: boolean;
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   * @default 'none'
   */
  margin?: 'dense' | 'normal' | 'none';
  /**
   * If `true`, the label will indicate that the `input` is required.
   * @default false
   */
  required?: boolean;
  /**
   * The size of the component.
   * @default 'medium'
   */
  size?: OverridableStringUnion<
    'small' | 'medium',
    FormControlPropsSizeOverrides
  >;
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant?: 'standard' | 'outlined' | 'filled';
}

export function FormControl({
  className,
  children,
  ...rest
}: FormControlProps) {
  return (
    <BaseFormControl
      className={classNames(styles.formControl, className)}
      {...rest}
    >
      {children}
    </BaseFormControl>
  );
}
