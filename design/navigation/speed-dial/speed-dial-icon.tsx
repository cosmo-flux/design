import {
  SpeedDialIcon as BaseSpeedDialIcon,
  type SpeedDialIconProps as BaseSpeedDialIconProps,
  type SpeedDialIconClasses,
} from '@mui/material';
import type { SxProps } from '@mui/system';
import type { Theme as ThemeOptions } from '@mui/material/styles';
import classNames from 'classnames';
import styles from './speed-dial.module.scss';

export interface SpeedDialIconProps extends BaseSpeedDialIconProps {
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<SpeedDialIconClasses>;
  /**
   * The icon to display.
   */
  icon?: React.ReactNode;
  /**
   * The icon to display in the SpeedDial Floating Action Button when the SpeedDial is open.
   */
  openIcon?: React.ReactNode;
  /**
   * @ignore
   * If `true`, the component is shown.
   */
  open?: boolean;
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<ThemeOptions>;
  /**
   * A custom className to apply to the root element.
   */
  className?: string;
}

export function SpeedDialIcon({
  className,
  icon,
  openIcon,
  ...rest
}: SpeedDialIconProps) {
  return (
    <BaseSpeedDialIcon
      className={classNames(styles.speedDialIcon, className)}
      icon={icon}
      openIcon={openIcon}
      {...rest}
    />
  );
}
