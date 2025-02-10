import {
  DialogActions as BaseDialogActions,
  type DialogActionsProps as BaseDialogActionsProps,
} from '@mui/material';
import type { SxProps } from '@mui/system';
import type { Theme as ThemeOptions } from '@mui/material/styles';
import classNames from 'classnames';
import styles from './dialog.module.scss';

export interface DialogActionsProps extends BaseDialogActionsProps {
  /**
   * Dialog action buttons or other elements.
   */
  children?: React.ReactNode;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<BaseDialogActionsProps['classes']>;
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<ThemeOptions>;
  /**
   * A custom classname to style the dialog actions component.
   */
  className?: string;
}

export function DialogActions({
  className,
  children,
  ...rest
}: DialogActionsProps) {
  return (
    <BaseDialogActions
      className={classNames(styles.dialogActions, className)}
      {...rest}
    >
      {children}
    </BaseDialogActions>
  );
}
