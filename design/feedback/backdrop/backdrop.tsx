import {
  Backdrop as BaseBackdrop,
  type BackdropProps as BaseBackdropProps,
  type BackdropClasses,
} from '@mui/material';
import type { TransitionProps } from '@mui/material/transitions';
import type { SxProps } from '@mui/system';
import type { Theme as ThemeOptions } from '@mui/material/styles';
import classNames from 'classnames';
import styles from './backdrop.module.scss';

export interface BackdropProps extends BaseBackdropProps {
  /**
   * The content of the backdrop.
   */
  children?: React.ReactNode;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<BackdropClasses>;
  /**
   * If `true`, the backdrop is open.
   */
  open: boolean;
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<ThemeOptions>;
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration?: TransitionProps['timeout'];
  /**
   * A custom classname to style the backdrop component.
   */
  className?: string;
}

export function Backdrop({ className, children, ...rest }: BackdropProps) {
  return (
    <BaseBackdrop className={classNames(styles.backdrop, className)} {...rest}>
      {children}
    </BaseBackdrop>
  );
}
