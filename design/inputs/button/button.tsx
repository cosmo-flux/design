import {
  Button as BaseButton,
  type ButtonProps as BaseButtonProps,
  type ButtonClasses,
  type ButtonPropsColorOverrides,
  type ButtonPropsSizeOverrides,
  type ButtonPropsVariantOverrides,
} from '@mui/material';
import type { OverridableStringUnion } from '@mui/types';
import type { SxProps } from '@mui/system';
import type { Theme as ThemeOptions } from '@mui/material/styles';
import classNames from 'classnames';
import styles from './button.module.scss';

export { ButtonClasses };

export interface ButtonProps extends BaseButtonProps {
  /**
   * The content of the component.
   */
  children?: React.ReactNode;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<ButtonClasses>;
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color?: OverridableStringUnion<
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'error'
    | 'info'
    | 'warning',
    ButtonPropsColorOverrides
  >;
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled?: boolean;
  /**
   * If `true`, no elevation is used.
   * @default false
   */
  disableElevation?: boolean;
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple?: boolean;
  /**
   * Element placed after the children.
   */
  endIcon?: React.ReactNode;
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth?: boolean;
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href?: string;
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size?: OverridableStringUnion<
    'small' | 'medium' | 'large',
    ButtonPropsSizeOverrides
  >;
  /**
   * Element placed before the children.
   */
  startIcon?: React.ReactNode;
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<ThemeOptions>;
  /**
   * The variant to use.
   * @default 'text'
   */
  variant?: OverridableStringUnion<
    'text' | 'outlined' | 'contained',
    ButtonPropsVariantOverrides
  >;
  /**
   * A custom classname to style the button.
   */
  className?: string;
}

export function Button({ className, children, ...rest }: ButtonProps) {
  return (
    <BaseButton className={classNames(styles.button, className)} {...rest}>
      {children}
    </BaseButton>
  );
}
