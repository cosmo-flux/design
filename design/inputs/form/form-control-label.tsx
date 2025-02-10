import {
  FormControlLabel as BaseFormControlLabel,
  type FormControlLabelClasses,
  type InternalStandardProps as StandardProps,
} from '@mui/material';
import type { SxProps } from '@mui/system';
import type { TypographyProps } from '@cosmo-flux/design.data-display.typography';
import type { Theme as ThemeOptions } from '@mui/material/styles';
import classNames from 'classnames';
import styles from './form.module.scss';

export interface FormControlLabelProps
  extends StandardProps<
    React.LabelHTMLAttributes<HTMLLabelElement>,
    'children' | 'onChange'
  > {
  /**
   * If `true`, the component appears selected.
   */
  checked?: boolean;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<FormControlLabelClasses>;
  /**
   * The props used for each slot inside.
   * @default {}
   */
  componentsProps?: {
    /**
     * Props applied to the Typography wrapper of the passed label.
     * This is unused if disableTypography is true.
     * @default {}
     */
    typography?: TypographyProps;
  };
  /**
   * A control element. For instance, it can be a `Radio`, a `Switch` or a `Checkbox`.
   */
  control: React.ReactElement<any, any>;
  /**
   * If `true`, the control is disabled.
   */
  disabled?: boolean;
  /**
   * If `true`, the label is rendered as it is passed without an additional typography node.
   */
  disableTypography?: boolean;
  /**
   * Pass a ref to the `input` element.
   */
  inputRef?: React.Ref<any>;
  /**
   * A text or an element to be used in an enclosing label element.
   */
  label: React.ReactNode;
  /**
   * The position of the label.
   * @default 'end'
   */
  labelPlacement?: 'end' | 'start' | 'top' | 'bottom';
  name?: string;
  /**
   * Callback fired when the state is changed.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange?: (event: React.SyntheticEvent, checked: boolean) => void;
  /**
   * If `true`, the label will indicate that the `input` is required.
   */
  required?: boolean;
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps?: {
    /**
     * Props applied to the Typography wrapper of the passed label.
     * This is unused if disableTypography is true.
     * @default {}
     */
    typography?: TypographyProps;
  };
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<ThemeOptions>;
  /**
   * The value of the component.
   */
  value?: unknown;
  /**
   * A custom classname to style the form control label component.
   */
  className?: string;
}

export function FormControlLabel({
  className,
  label,
  ...rest
}: FormControlLabelProps) {
  return (
    <BaseFormControlLabel
      className={classNames(styles.formControlLabel, className)}
      {...rest}
      label={label}
    />
  );
}
