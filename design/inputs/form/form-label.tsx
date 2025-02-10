import {
  FormLabel as BaseFormLabel,
  type FormLabelProps as BaseFormLabelProps,
  type FormLabelClasses,
  type FormLabelPropsColorOverrides,
} from '@mui/material';
import type { OverridableStringUnion } from '@mui/types';
import classNames from 'classnames';
import styles from './form.module.scss';

export interface FormLabelProps extends BaseFormLabelProps {
  /**
   * The content of the component.
   */
  children?: React.LabelHTMLAttributes<HTMLLabelElement>['children'];
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<FormLabelClasses>;
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   */
  color?: OverridableStringUnion<
    'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning',
    FormLabelPropsColorOverrides
  >;
  /**
   * If `true`, the label should be displayed in a disabled state.
   */
  disabled?: boolean;
  /**
   * If `true`, the label is displayed in an error state.
   */
  error?: boolean;
  /**
   * If `true`, the label should use filled classes key.
   */
  filled?: boolean;
  /**
   * If `true`, the input of this label is focused (used by `FormGroup` components).
   */
  focused?: boolean;
  /**
   * If `true`, the label will indicate that the `input` is required.
   */
  required?: boolean;
  /**
   * A custom classname to style the label.
   */
  className?: string;
}

export function FormLabel({ className, children, ...rest }: FormLabelProps) {
  return (
    <BaseFormLabel
      className={classNames(styles.formLabel, className)}
      {...rest}
    >
      {children}
    </BaseFormLabel>
  );
}
