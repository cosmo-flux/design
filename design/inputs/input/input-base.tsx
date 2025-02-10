import {
  InputBase as BaseInputBase,
  type InputBaseProps as BaseInputBaseProps,
} from '@mui/material';
import classNames from 'classnames';
import styles from './input.module.scss';

export interface InputBaseProps extends BaseInputBaseProps {
  /**
   * A custom classname to apply to the root element.
   */
  className?: string;
}

export function InputBase({ className, ...rest }: InputBaseProps) {
  return (
    <BaseInputBase
      className={classNames(styles.inputBase, className)}
      {...rest}
    />
  );
}
