import {
  Snackbar as BaseSnackbar,
  type SnackbarProps as BaseSnackbarProps,
  type SnackbarClasses,
} from '@mui/material';
import type { ClickAwayListenerProps } from '@mui/material/ClickAwayListener';
import type { SxProps } from '@mui/system';
import type { Theme as ThemeOptions } from '@mui/material/styles';
import type { SnackbarContentProps } from './snackbar-content.js';
import classNames from 'classnames';
import styles from './snackbar.module.scss';

export interface SnackbarOrigin {
  vertical: 'top' | 'bottom';
  horizontal: 'left' | 'center' | 'right';
}

export type SnackbarCloseReason = 'timeout' | 'clickaway' | 'escapeKeyDown';

export interface SnackbarProps extends BaseSnackbarProps {
  /**
   * The action to display. It renders after the message, at the end of the snackbar.
   */
  action?: SnackbarContentProps['action'];
  /**
   * The anchor of the `Snackbar`.
   * On smaller screens, the component grows to occupy all the available width,
   * the horizontal alignment is ignored.
   * @default { vertical: 'bottom', horizontal: 'left' }
   */
  anchorOrigin?: SnackbarOrigin;
  /**
   * The number of milliseconds to wait before automatically calling the
   * `onClose` function. `onClose` should then set the state of the `open`
   * prop to hide the Snackbar. This behavior is disabled by default with
   * the `null` value.
   * @default null
   */
  autoHideDuration?: number | null;
  /**
   * Replace the `SnackbarContent` component.
   */
  children?: React.ReactElement<any, any>;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<SnackbarClasses>;
  /**
   * Props applied to the `ClickAwayListener` element.
   */
  ClickAwayListenerProps?: Partial<ClickAwayListenerProps>;
  /**
   * Props applied to the [`SnackbarContent`](/material-ui/api/snackbar-content/) element.
   */
  ContentProps?: Partial<SnackbarContentProps>;
  /**
   * If `true`, the `autoHideDuration` timer will expire even if the window is not focused.
   * @default false
   */
  disableWindowBlurListener?: boolean;
  /**
   * When displaying multiple consecutive snackbars using a single parent-rendered
   * `<Snackbar/>`, add the `key` prop to ensure independent treatment of each message.
   * For instance, use `<Snackbar key={message} />`. Otherwise, messages might update
   * in place, and features like `autoHideDuration` could be affected.
   */
  key?: any;
  /**
   * The message to display.
   */
  message?: SnackbarContentProps['message'];
  /**
   * Callback fired when the component requests to be closed.
   * Typically `onClose` is used to set state in the parent component,
   * which is used to control the `Snackbar` `open` prop.
   * The `reason` parameter can optionally be used to control the response to `onClose`,
   * for example ignoring `clickaway`.
   *
   * @param {React.SyntheticEvent<any> | Event} event The event source of the callback.
   * @param {string} reason Can be: `"timeout"` (`autoHideDuration` expired), `"clickaway"`, or `"escapeKeyDown"`.
   */
  onClose?: (
    event: React.SyntheticEvent<any> | Event,
    reason: SnackbarCloseReason
  ) => void;
  /**
   * If `true`, the component is shown.
   */
  open?: boolean;
  /**
   * The number of milliseconds to wait before dismissing after user interaction.
   * If `autoHideDuration` prop isn't specified, it does nothing.
   * If `autoHideDuration` prop is specified but `resumeHideDuration` isn't,
   * we default to `autoHideDuration / 2` ms.
   */
  resumeHideDuration?: number;
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<ThemeOptions>;
  /**
   * A custom className to apply to the root component.
   */
  className?: string;
}

export function Snackbar({ className, children, ...rest }: SnackbarProps) {
  return (
    <BaseSnackbar className={classNames(styles.snackbar, className)} {...rest}>
      {children}
    </BaseSnackbar>
  );
}
