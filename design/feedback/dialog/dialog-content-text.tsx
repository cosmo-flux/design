import {
  DialogContentText as BaseDialogContentText,
  type DialogContentTextProps as BaseDialogContentTextProps,
  type DialogContentTextClasses,
} from '@mui/material';
import type { SxProps } from '@mui/system';
import type { Theme as ThemeOptions } from '@mui/material/styles';
import classNames from 'classnames';
import styles from './dialog.module.scss';

export interface DialogContentTextProps extends BaseDialogContentTextProps {
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<DialogContentTextClasses>;
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<ThemeOptions>;
  /**
   * The content of the component, normally text.
   */
  children?: React.ReactNode;
  /**
   * A custom classname to apply to the root element.
   */
  className?: string;
}

export function DialogContentText({
  className,
  children,
  ...rest
}: DialogContentTextProps) {
  return (
    <BaseDialogContentText
      className={classNames(styles.dialogContentText, className)}
      {...rest}
    >
      {children}
    </BaseDialogContentText>
  );
}
