import {
  IconButton as BaseIconButton,
  type IconButtonProps as BaseIconButtonProps,
  type IconButtonClasses,
  type IconButtonPropsColorOverrides,
  type IconButtonPropsSizeOverrides,
} from '@mui/material';
import type { OverridableStringUnion } from '@mui/types';
import type { SxProps } from '@mui/system';
import type { Theme as ThemeOptions } from '@mui/material/styles';
import classNames from 'classnames';
import styles from './button.module.scss';

export interface IconButtonProps extends BaseIconButtonProps {
  /**
   * The content of the component.
   */
  children?: React.ReactNode;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<IconButtonClasses>;
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'default'
   */
  color?: OverridableStringUnion<
    | 'inherit'
    | 'default'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'error'
    | 'info'
    | 'warning',
    IconButtonPropsColorOverrides
  >;
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled?: boolean;
  /**
   * If `true`, the ripple effect is disabled.
   * @default false
   */
  disableRipple?: boolean;
  /**
   * The size of the component.
   * `small` is equivalent to the dense icon button styling.
   * @default 'medium'
   */
  size?: OverridableStringUnion<
    'small' | 'medium' | 'large',
    IconButtonPropsSizeOverrides
  >;
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<ThemeOptions>;
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href?: string;
  /**
   * The button variant.
   * @default 'text'
   */
  variant?: 'text' | 'contained' | 'outlined';
  /**
   * A custom classname to style the button.
   */
  className?: string;
}

export function IconButton({ className, children, ...rest }: IconButtonProps) {
  return (
    <BaseIconButton
      className={classNames(styles.iconButton, className)}
      {...rest}
    >
      {children}
    </BaseIconButton>
  );
}
