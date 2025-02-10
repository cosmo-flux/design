import {
  InputLabel as BaseInputLabel,
  type InputLabelProps as BaseInputLabelProps,
  type InputLabelClasses,
  type InputLabelPropsSizeOverrides,
} from '@mui/material';
import type { OverridableStringUnion } from '@mui/types';
import type { FormLabelProps } from '@cosmo-flux/design.inputs.form';
import classNames from 'classnames';
import styles from './input.module.scss';

export interface InputLabelProps extends BaseInputLabelProps {
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<InputLabelClasses>;
  color?: FormLabelProps['color'];
  /**
   * If `true`, the transition animation is disabled.
   * @default false
   */
  disableAnimation?: boolean;
  /**
   * If `true`, the component is disabled.
   */
  disabled?: boolean;
  /**
   * If `true`, the label is displayed in an error state.
   */
  error?: boolean;
  /**
   * If `true`, the `input` of this label is focused.
   */
  focused?: boolean;
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin?: 'dense';
  /**
   * if `true`, the label will indicate that the `input` is required.
   */
  required?: boolean;
  /**
   * If `true`, the label is shrunk.
   */
  shrink?: boolean;
  /**
   * The size of the component.
   * @default 'normal'
   */
  size?: OverridableStringUnion<
    'small' | 'normal',
    InputLabelPropsSizeOverrides
  >;
  /**
   * The variant to use.
   */
  variant?: 'standard' | 'outlined' | 'filled';
  /**
   * A custom classname to style the label.
   */
  className?: string;
}

export function InputLabel({ className, children, ...rest }: InputLabelProps) {
  return (
    <BaseInputLabel
      className={classNames(styles.inputLabel, className)}
      {...rest}
    >
      {children}
    </BaseInputLabel>
  );
}
