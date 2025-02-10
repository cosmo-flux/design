import {
  Dialog as BaseDialog,
  type DialogProps as BaseDialogProps,
  type DialogClasses,
} from '@mui/material';
import type { ModalProps } from '@mui/material/Modal';
import type { SxProps, Breakpoint } from '@mui/system';
import type { Theme as ThemeOptions } from '@mui/material/styles';
import classNames from 'classnames';
import styles from './dialog.module.scss';

export interface DialogProps extends BaseDialogProps {
  /**
   * The id(s) of the element(s) that describe the dialog.
   */
  'aria-describedby'?: string;
  /**
   * The id(s) of the element(s) that label the dialog.
   */
  'aria-labelledby'?: string;
  /**
   * Dialog children, usually the included sub-components.
   */
  children?: React.ReactNode;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<DialogClasses>;
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown?: boolean;
  /**
   * If `true`, the dialog is full-screen.
   * @default false
   */
  fullScreen?: boolean;
  /**
   * If `true`, the dialog stretches to `maxWidth`.
   *
   * Notice that the dialog width grow is limited by the default margin.
   * @default false
   */
  fullWidth?: boolean;
  /**
   * Determine the max-width of the dialog.
   * The dialog width grows with the size of the screen.
   * Set to `false` to disable `maxWidth`.
   * @default 'sm'
   */
  maxWidth?: Breakpoint | false;
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose?: ModalProps['onClose'];
  /**
   * If `true`, the component is shown.
   */
  open: ModalProps['open'];
  /**
   * Determine the container for scrolling the dialog.
   * @default 'paper'
   */
  scroll?: 'body' | 'paper';
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<ThemeOptions>;
}

export function Dialog({ className, children, ...rest }: DialogProps) {
  return (
    <BaseDialog className={classNames(styles.dialog, className)} {...rest}>
      {children}
    </BaseDialog>
  );
}
