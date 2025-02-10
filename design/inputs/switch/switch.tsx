import {
  Switch as BaseSwitch,
  SwitchProps as BaseSwitchProps,
  SwitchClasses,
  SwitchPropsColorOverrides,
  SwitchPropsSizeOverrides,
} from '@mui/material';
import type { OverridableStringUnion } from '@mui/types';
import type { SxProps } from '@mui/system';
import type { Theme as ThemeOptions } from '@mui/material/styles';
import classNames from 'classnames';
import styles from './switch.module.scss';

export interface SwitchProps extends BaseSwitchProps {
  /**
   * The icon to display when the component is checked.
   */
  checkedIcon?: React.ReactNode;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<SwitchClasses>;
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color?: OverridableStringUnion<
    | 'primary'
    | 'secondary'
    | 'error'
    | 'info'
    | 'success'
    | 'warning'
    | 'default',
    SwitchPropsColorOverrides
  >;
  /**
   * If `true`, the component is disabled.
   */
  disabled?: boolean;
  /**
   * The icon to display when the component is unchecked.
   */
  icon?: React.ReactNode;
  /**
   * The size of the component.
   * `small` is equivalent to the dense switch styling.
   * @default 'medium'
   */
  size?: OverridableStringUnion<'small' | 'medium', SwitchPropsSizeOverrides>;
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<ThemeOptions>;
  /**
   * The value of the component. The DOM API casts this to a string.
   * The browser uses "on" as the default value.
   */
  value?: unknown;
}

export function Switch({ className, ...rest }: SwitchProps) {
  return (
    <BaseSwitch className={classNames(styles.switch, className)} {...rest} />
  );
}
