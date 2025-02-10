import {
  ButtonGroup as BaseButtonGroup,
  ButtonGroupProps as BaseButtonGroupProps,
  ButtonGroupClasses,
} from '@mui/material';
import type { OverridableStringUnion } from '@mui/types';
import type { SxProps } from '@mui/system';
import type { Theme as ThemeOptions } from '@mui/material/styles';
import classNames from 'classnames';
import styles from './button-group.module.scss';

export interface ButtonGroupProps extends BaseButtonGroupProps {
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<ButtonGroupClasses>;
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
    | 'error'
    | 'info'
    | 'success'
    | 'warning',
    {}
  >;
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<ThemeOptions>;
  /**
   * A custom classname to style the button group.
   */
  className?: string;
  /**
   * If `true`, the button group will have a disabled state.
   * @default false
   */
  disabled?: boolean;
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant?: 'text' | 'outlined' | 'contained';
}

export function ButtonGroup({ className, ...rest }: ButtonGroupProps) {
  return (
    <BaseButtonGroup
      className={classNames(styles.buttonGroup, className)}
      {...rest}
    />
  );
}
