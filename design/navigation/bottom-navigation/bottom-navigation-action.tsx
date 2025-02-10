import {
  BottomNavigationAction as BaseBottomNavigationAction,
  type BottomNavigationActionProps as BaseBottomNavigationActionProps,
  type BottomNavigationActionClasses,
} from '@mui/material';
import type { SxProps } from '@mui/system';
import type { Theme as ThemeOptions } from '@mui/material/styles';
import classNames from 'classnames';
import styles from './bottom-navigation.module.scss';

export interface BottomNavigationActionProps
  extends BaseBottomNavigationActionProps {
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<BottomNavigationActionClasses>;
  /**
   * The icon to display within the button.
   */
  icon?: React.ReactNode;
  /**
   * The label element.
   */
  label?: React.ReactNode;
  /**
   * If `true`, the `BottomNavigationAction` will show its label.
   * @default false
   */
  showLabel?: boolean;
  /**
   * The value of the action item.
   */
  value?: any;
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<ThemeOptions>;
  /**
   * A custom className to apply to the root component.
   */
  className?: string;
}

export function BottomNavigationAction({
  className,
  icon,
  label,
  ...rest
}: BottomNavigationActionProps) {
  return (
    <BaseBottomNavigationAction
      className={classNames(styles.bottomNavigationAction, className)}
      icon={icon}
      label={label}
      {...rest}
    />
  );
}
