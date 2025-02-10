import {
  SnackbarContent as BaseSnackbarContent,
  type SnackbarContentProps as BaseSnackbarContentProps,
  type SnackbarContentClasses,
} from '@mui/material';
import type { PaperProps } from '@cosmo-flux/design.surfaces.paper';
import type { SxProps } from '@mui/system';
import type { Theme as ThemeOptions } from '@mui/material/styles';
import classNames from 'classnames';
import styles from './snackbar.module.scss';

export interface SnackbarContentProps extends BaseSnackbarContentProps {
  /**
   * The action to display. It renders after the message, at the end of the snackbar.
   */
  action?: React.ReactNode;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<SnackbarContentClasses>;
  /**
   * The message to display.
   */
  message?: React.ReactNode;
  /**
   * The ARIA role attribute of the element.
   * @default 'alert'
   */
  role?: PaperProps['role'];
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<ThemeOptions>;
  /**
   * A custom classname to style the snackbar content.
   */
  className?: string;
}

export function SnackbarContent({ className, ...props }: SnackbarContentProps) {
  return (
    <BaseSnackbarContent
      className={classNames(styles.snackbarContent, className)}
      {...props}
    />
  );
}
