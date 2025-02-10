import {
  DialogTitle as BaseDialogTitle,
  type DialogTitleProps as BaseDialogTitleProps,
  type DialogTitleClasses,
} from '@mui/material';
import type { SxProps } from '@mui/system';
import type { Theme as ThemeOptions } from '@mui/material/styles';
import classNames from 'classnames';
import styles from './dialog.module.scss';

export interface DialogTitleProps extends BaseDialogTitleProps {
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<DialogTitleClasses>;
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

export function DialogTitle({
  className,
  children,
  ...rest
}: DialogTitleProps) {
  return (
    <BaseDialogTitle
      className={classNames(styles.dialogTitle, className)}
      {...rest}
    >
      {children}
    </BaseDialogTitle>
  );
}
