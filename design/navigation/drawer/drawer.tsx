import {
  Drawer as BaseDrawer,
  type DrawerProps as BaseDrawerProps,
  type DrawerClasses,
} from '@mui/material';
import type { SxProps } from '@mui/system';
import type { Theme as ThemeOptions } from '@mui/material/styles';
import classNames from 'classnames';
import styles from './drawer.module.scss';

export interface DrawerProps extends BaseDrawerProps {
  /**
   * The content of the component.
   */
  children: NonNullable<React.ReactNode>;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<DrawerClasses>;
  /**
   * If `true`, the drawer is open.
   * @default false
   */
  open: boolean;
  /**
   * The anchor from which the drawer will slide in.
   * @default 'left'
   */
  anchor?: 'left' | 'top' | 'right' | 'bottom';
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   */
  onClose?: (event: React.SyntheticEvent) => void;
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<ThemeOptions>;
  /**
   * The variant to use.
   * @default 'temporary'
   */
  variant?: 'permanent' | 'persistent' | 'temporary';
  /**
   * A custom className to apply to the root component.
   */
  className?: string;
}

export function Drawer({ className, children, ...rest }: DrawerProps) {
  return (
    <BaseDrawer className={classNames(styles.drawer, className)} {...rest}>
      {children}
    </BaseDrawer>
  );
}
