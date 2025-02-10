import {
  AppBar as BaseAppBar,
  type AppBarProps as BaseAppBarProps,
  type AppBarClasses,
} from '@mui/material';
import type { SxProps } from '@mui/system';
import type { Theme as ThemeOptions } from '@mui/material/styles';
import classNames from 'classnames';
import styles from './app-bar.module.scss';

export interface AppBarProps extends BaseAppBarProps {
  /**
   * The content of the component.
   */
  children: NonNullable<React.ReactNode>;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<AppBarClasses>;
  /**
   * If `true`, the app bar will position itself at the bottom of the screen.
   * @default false
   */
  position?: 'fixed' | 'absolute' | 'sticky' | 'static' | 'relative';
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default 'primary'
   */
  color?: 'inherit' | 'primary' | 'secondary' | 'default' | 'transparent';
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<ThemeOptions>;
  /**
   * A custom className to apply to the root element.
   */
  className?: string;
}

export function AppBar({ className, children, ...rest }: AppBarProps) {
  return (
    <BaseAppBar className={classNames(styles.appBar, className)} {...rest}>
      {children}
    </BaseAppBar>
  );
}
