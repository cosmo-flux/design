import {
  StepLabel as BaseStepLabel,
  type StepLabelProps as BaseStepLabelProps,
  type StepLabelClasses,
} from '@mui/material';
import type { SxProps } from '@mui/system';
import type { Theme as ThemeOptions } from '@mui/material/styles';
import classNames from 'classnames';
import type { StepIconProps } from './step-icon.js';
import styles from './stepper.module.scss';

export interface StepLabelProps extends BaseStepLabelProps {
  /**
   * In most cases will simply be a string containing a title for the label.
   */
  children?: React.ReactNode;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<StepLabelClasses>;
  /**
   * The props used for each slot inside.
   * @default {}
   */
  componentsProps?: {
    /**
     * Props applied to the label element.
     * @default {}
     */
    label?: React.HTMLProps<HTMLSpanElement>;
  };
  /**
   * If `true`, the step is marked as failed.
   * @default false
   */
  error?: boolean;
  /**
   * Override the default label of the step icon.
   */
  icon?: React.ReactNode;
  /**
   * The optional node to display.
   */
  optional?: React.ReactNode;
  /**
   * Props applied to the [`StepIcon`](/material-ui/api/step-icon/) element.
   */
  StepIconProps?: Partial<StepIconProps>;
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<ThemeOptions>;
  /**
   * A custom className to apply to the root element.
   */
  className?: string;
}

export function StepLabel({ className, children, ...rest }: StepLabelProps) {
  return (
    <BaseStepLabel
      className={classNames(styles.stepLabel, className)}
      {...rest}
    >
      {children}
    </BaseStepLabel>
  );
}
