import {
  InputAdornment as BaseInputAdornment,
  type InputAdornmentProps as BaseInputAdornmentProps,
  type InputAdornmentClasses,
} from '@mui/material';
import classNames from 'classnames';
import styles from './input.module.scss';

export interface InputAdornmentProps extends BaseInputAdornmentProps {
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<InputAdornmentClasses>;
  /**
   * The content of the component, normally an `IconButton` or string.
   */
  children?: React.ReactNode;
  /**
   * Disable pointer events on the root.
   * This allows for the content of the adornment to focus the `input` on click.
   * @default false
   */
  disablePointerEvents?: boolean;
  /**
   * If children is a string then disable wrapping in a Typography component.
   * @default false
   */
  disableTypography?: boolean;
  /**
   * The position this adornment should appear relative to the `Input`.
   */
  position: 'start' | 'end';
  /**
   * The variant to use.
   * Note: If you are using the `TextField` component or the `FormControl` component
   * you do not have to set this manually.
   */
  variant?: 'standard' | 'outlined' | 'filled';
  /**
   * A custom classname to apply to the root element.
   */
  className?: string;
}

export function InputAdornment({
  className,
  children,
  ...rest
}: InputAdornmentProps) {
  return (
    <BaseInputAdornment
      className={classNames(styles.inputAdornment, className)}
      {...rest}
    >
      {children}
    </BaseInputAdornment>
  );
}
