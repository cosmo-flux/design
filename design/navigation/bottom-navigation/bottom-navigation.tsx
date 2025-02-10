import {
  BottomNavigation as BaseBottomNavigation,
  type BottomNavigationProps as BaseBottomNavigationProps,
  type BottomNavigationClasses,
} from '@mui/material';
import type { SxProps } from '@mui/system';
import type { Theme as ThemeOptions } from '@mui/material/styles';
import classNames from 'classnames';
import styles from './bottom-navigation.module.scss';

export interface BottomNavigationProps extends BaseBottomNavigationProps {
  /**
   * The content of the component.
   */
  children?: React.ReactNode;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<BottomNavigationClasses>;
  /**
   * Callback fired when the value changes.
   *
   * @param {React.SyntheticEvent} event The event source of the callback. **Warning**: This is a generic event not a change event.
   * @param {any} value We default to the index of the child.
   */
  onChange?: (event: React.SyntheticEvent, value: any) => void;
  /**
   * If `true`, all `BottomNavigationAction`s will show their labels.
   * By default, only the selected `BottomNavigationAction` will show its label.
   * @default false
   */
  showLabels?: boolean;
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<ThemeOptions>;
  /**
   * The value of the currently selected `BottomNavigationAction`.
   */
  value?: any;
  /**
   * A custom className to apply to the root component.
   */
  className?: string;
}

export function BottomNavigation({
  className,
  children,
  ...rest
}: BottomNavigationProps) {
  return (
    <BaseBottomNavigation
      className={classNames(styles.bottomNavigation, className)}
      {...rest}
    >
      {children}
    </BaseBottomNavigation>
  );
}
