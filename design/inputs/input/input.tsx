import {
  Input as BaseInput,
  type InputProps as BaseInputProps,
  type InputClasses,
} from '@mui/material';
import classNames from 'classnames';
import type { SxProps } from '@mui/system';
import type { Theme as ThemeOptions } from '@mui/material/styles';
import styles from './input.module.scss';

export interface InputProps extends BaseInputProps {
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<InputClasses>;
  /**
   * If `true`, the `input` will not have an underline.
   */
  disableUnderline?: boolean;
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<ThemeOptions>;
  /**
   * A custom classname to style the input component.
   */
  className?: string;
}

export function Input({ className, ...rest }: InputProps) {
  return (
    <BaseInput className={classNames(styles.input, className)} {...rest} />
  );
}
