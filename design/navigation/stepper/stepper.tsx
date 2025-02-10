import {
  Stepper as BaseStepper,
  type StepperProps as BaseStepperProps,
  type StepperClasses,
  type Orientation,
} from '@mui/material';
import type { SxProps } from '@mui/system';
import type { Theme as ThemeOptions } from '@mui/material/styles';
import classNames from 'classnames';
import styles from './stepper.module.scss';

export interface StepperProps extends BaseStepperProps {
  /**
   * Set the active step (zero based index).
   * Set to -1 to disable all the steps.
   * @default 0
   */
  activeStep?: number;
  /**
   * If set to 'true' and orientation is horizontal,
   * then the step label will be positioned under the icon.
   * @default false
   */
  alternativeLabel?: boolean;
  /**
   * Two or more `<Step />` components.
   */
  children?: React.ReactNode;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<StepperClasses>;
  /**
   * An element to be placed between each step.
   * @default <StepConnector />
   */
  connector?: React.ReactElement<any, any> | null;
  /**
   * If set the `Stepper` will not assist in controlling steps for linear flow.
   * @default false
   */
  nonLinear?: boolean;
  /**
   * The component orientation (layout flow direction).
   * @default 'horizontal'
   */
  orientation?: Orientation;
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<ThemeOptions>;
  /**
   * A custom className to apply to the root element.
   */
  className?: string;
}

export function Stepper({ className, children, ...rest }: StepperProps) {
  return (
    <BaseStepper className={classNames(styles.stepper, className)} {...rest}>
      {children}
    </BaseStepper>
  );
}
