import {
  FormHelperText as BaseFormHelperText,
  type FormHelperTextProps as BaseFormHelperTextProps,
  type FormHelperTextClasses,
  type FormHelperTextPropsVariantOverrides,
} from '@mui/material';
import type { OverridableStringUnion } from '@mui/types';
import classNames from 'classnames';
import styles from './form.module.scss';

export interface FormHelperTextProps extends BaseFormHelperTextProps {
  /**
   * The content of the component.
   *
   * If `' '` is provided, the component reserves one line height for displaying a future message.
   */
  children?: React.ReactNode;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<FormHelperTextClasses>;
  /**
   * If `true`, the helper text should be displayed in a disabled state.
   */
  disabled?: boolean;
  /**
   * If `true`, helper text should be displayed in an error state.
   */
  error?: boolean;
  /**
   * If `true`, the helper text should use filled classes key.
   */
  filled?: boolean;
  /**
   * If `true`, the helper text should use focused classes key.
   */
  focused?: boolean;
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin?: 'dense';
  /**
   * If `true`, the helper text should use required classes key.
   */
  required?: boolean;

  /**
   * The variant to use.
   */
  variant?: OverridableStringUnion<
    'standard' | 'outlined' | 'filled',
    FormHelperTextPropsVariantOverrides
  >;
  /**
   * A custom classname to style the helper text component.
   */
  className?: string;
}

export function FormHelperText({
  className,
  children,
  ...rest
}: FormHelperTextProps) {
  return (
    <BaseFormHelperText
      className={classNames(styles.formHelperText, className)}
      {...rest}
    >
      {children}
    </BaseFormHelperText>
  );
}
