import {
  DialogContent as BaseDialogContent,
  type DialogContentProps as BaseDialogContentProps,
  type DialogContentClasses,
} from '@mui/material';
import type { SxProps } from '@mui/system';
import type { Theme as ThemeOptions } from '@mui/material/styles';
import classNames from 'classnames';
import styles from './dialog.module.scss';

export interface DialogContentProps extends BaseDialogContentProps {
  /**
   * Dialog content children, usually the included sub-components.
   */
  children?: React.ReactNode;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<DialogContentClasses>;
  /**
   * Display the top and bottom dividers.
   * @default false
   */
  dividers?: boolean;
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<ThemeOptions>;
  /**
   * A custom classname to style the dialog content component.
   */
  className?: string;
}

export function DialogContent({
  className,
  children,
  ...rest
}: DialogContentProps) {
  return (
    <BaseDialogContent
      className={classNames(styles.dialogContent, className)}
      {...rest}
    >
      {children}
    </BaseDialogContent>
  );
}
