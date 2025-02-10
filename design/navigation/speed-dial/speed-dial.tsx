import {
  SpeedDial as BaseSpeedDial,
  type SpeedDialProps as BaseSpeedDialProps,
  type SpeedDialClasses,
  type CloseReason,
  type OpenReason,
} from '@mui/material';
import type { SxProps } from '@mui/system';
import type { FabProps } from '@mui/material/Fab';
import type { Theme as ThemeOptions } from '@mui/material/styles';
import classNames from 'classnames';
import styles from './speed-dial.module.scss';

export interface SpeedDialProps extends BaseSpeedDialProps {
  /**
   * SpeedDialActions to display when the SpeedDial is `open`.
   */
  children?: React.ReactNode;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<SpeedDialClasses>;
  /**
   * The aria-label of the button element.
   * Also used to provide the `id` for the `SpeedDial` element and its children.
   */
  ariaLabel: string;
  /**
   * The direction the actions open relative to the floating action button.
   * @default 'up'
   */
  direction?: 'up' | 'down' | 'left' | 'right';
  /**
   * If `true`, the SpeedDial is hidden.
   * @default false
   */
  hidden?: boolean;
  /**
   * Props applied to the [`Fab`](/material-ui/api/fab/) element.
   * @default {}
   */
  FabProps?: Partial<FabProps>;
  /**
   * The icon to display in the SpeedDial Fab. The `SpeedDialIcon` component
   * provides a default Icon with animation.
   */
  icon?: React.ReactNode;
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"toggle"`, `"blur"`, `"mouseLeave"`, `"escapeKeyDown"`.
   */
  onClose?: (event: React.SyntheticEvent<{}>, reason: CloseReason) => void;
  /**
   * Callback fired when the component requests to be open.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"toggle"`, `"focus"`, `"mouseEnter"`.
   */
  onOpen?: (event: React.SyntheticEvent<{}>, reason: OpenReason) => void;
  /**
   * If `true`, the component is shown.
   */
  open?: boolean;
  /**
   * The icon to display in the SpeedDial Fab when the SpeedDial is open.
   */
  openIcon?: React.ReactNode;
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<ThemeOptions>;
  /**
   * The component used for the transition.
   * [Follow this guide](/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Zoom
   */
  /**
   * A custom className to apply to the root element.
   */
  className?: string;
}

export function SpeedDial({ className, children, ...rest }: SpeedDialProps) {
  return (
    <BaseSpeedDial
      className={classNames(styles.speedDial, className)}
      {...rest}
    >
      {children}
    </BaseSpeedDial>
  );
}
