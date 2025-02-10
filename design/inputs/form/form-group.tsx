import {
  FormGroup as BaseFormGroup,
  type FormGroupProps as BaseFormGroupProps,
  type FormGroupClasses,
} from '@mui/material';
import classNames from 'classnames';
import styles from './form.module.scss';

export interface FormGroupProps extends BaseFormGroupProps {
  /**
   * The content of the component.
   */
  children?: React.ReactNode;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<FormGroupClasses>;
  /**
   * Display group of elements in a compact row.
   * @default false
   */
  row?: boolean;
  /**
   * A custom classname to apply to the root element.
   */
  className?: string;
}

export function FormGroup({ className, children, ...rest }: FormGroupProps) {
  return (
    <BaseFormGroup
      className={classNames(styles.formGroup, className)}
      {...rest}
    >
      {children}
    </BaseFormGroup>
  );
}
