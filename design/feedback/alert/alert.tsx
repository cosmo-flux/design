import {
  Alert as BaseAlert,
  type AlertProps as BaseAlertProps,
  type AlertColor,
} from '@mui/material';
import type { SxProps } from '@mui/system';
import type { OverridableStringUnion } from '@mui/types';
import type { Theme as ThemeOptions } from '@mui/material/styles';
import classNames from 'classnames';
import styles from './alert.module.scss';

export interface AlertProps extends BaseAlertProps {
  /**
   * The content of the alert.
   */
  children?: React.ReactNode;
  /**
   * The severity of the alert. This defines the color and icon used.
   * @default 'success'
   */
  severity?: OverridableStringUnion<
    'error' | 'info' | 'success' | 'warning',
    AlertColor
  >;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: BaseAlertProps['classes'];
  /**
   * The variant to use.
   * @default 'standard'
   */
  variant?: 'filled' | 'outlined' | 'standard';
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<ThemeOptions>;
  /**
   * A custom classname to style the alert component.
   */
  className?: string;
}

export function Alert({ className, children, ...rest }: AlertProps) {
  return (
    <BaseAlert className={classNames(styles.alert, className)} {...rest}>
      {children}
    </BaseAlert>
  );
}
