import {
  AlertTitle as BaseAlertTitle,
  type AlertTitleProps as BaseAlertTitleProps,
  type AlertTitleClasses,
} from '@mui/material';
import type { SxProps } from '@mui/system';
import type { Theme as ThemeOptions } from '@mui/material/styles';

export interface AlertTitleProps extends BaseAlertTitleProps {
  /**
   * The content of the alert title.
   */
  children?: React.ReactNode;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<AlertTitleClasses>;
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<ThemeOptions>;
  /**
   * A custom classname to style the alert title.
   */
  className?: string;
}

export function AlertTitle({ children, ...rest }: AlertTitleProps) {
  return <BaseAlertTitle {...rest}>{children}</BaseAlertTitle>;
}
