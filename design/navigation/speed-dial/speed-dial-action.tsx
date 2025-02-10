import {
  SpeedDialAction as BaseSpeedDialAction,
  type SpeedDialActionProps as BaseSpeedDialActionProps,
  type SpeedDialActionClasses,
} from '@mui/material';
import type { SxProps } from '@mui/system';
import type { TooltipProps } from '@cosmo-flux/design.data-display.tooltip';
import type { FabProps } from '@cosmo-flux/design.inputs.floating-action-button';
import type { Theme as ThemeOptions } from '@mui/material/styles';
import classNames from 'classnames';
import styles from './speed-dial.module.scss';

export interface SpeedDialActionProps extends BaseSpeedDialActionProps {
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<SpeedDialActionClasses>;
  /**
   * Props applied to the [`Fab`](/material-ui/api/fab/) component.
   * @default {}
   */
  FabProps?: Partial<FabProps>;
  /**
   * Adds a transition delay, to allow a series of SpeedDialActions to be animated.
   * @default 0
   */
  delay?: number;
  /**
   * The icon to display in the SpeedDial Fab.
   */
  icon?: React.ReactNode;
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<ThemeOptions>;
  /**
   * `classes` prop applied to the [`Tooltip`](/material-ui/api/tooltip/) element.
   */
  TooltipClasses?: TooltipProps['classes'];
  /**
   * Placement of the tooltip.
   * @default 'left'
   */
  tooltipPlacement?: TooltipProps['placement'];
  /**
   * Label to display in the tooltip.
   */
  tooltipTitle?: React.ReactNode;
  /**
   * Make the tooltip always visible when the SpeedDial is open.
   * @default false
   */
  tooltipOpen?: boolean;
  /**
   * A custom className to apply to the root component.
   */
  className?: string;
}

export function SpeedDialAction({
  className,
  icon,
  tooltipTitle,
  ...rest
}: SpeedDialActionProps) {
  return (
    <BaseSpeedDialAction
      className={classNames(styles.speedDialAction, className)}
      icon={icon}
      tooltipTitle={tooltipTitle}
      {...rest}
    />
  );
}
