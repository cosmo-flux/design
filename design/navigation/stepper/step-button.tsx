import {
  StepButton as BaseStepButton,
  type StepButtonProps as BaseStepButtonProps,
  type StepButtonClasses,
} from '@mui/material';
import type { SxProps } from '@mui/system';
import type { Theme as ThemeOptions } from '@mui/material/styles';
import classNames from 'classnames';
import styles from './stepper.module.scss';

export interface StepButtonProps extends BaseStepButtonProps {
  /**
   * Can be a `StepLabel` or a node to place inside `StepLabel` as children.
   */
  children?: React.ReactNode;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<StepButtonClasses>;
  /**
   * The icon displayed by the step label.
   */
  icon?: React.ReactNode;
  /**
   * The optional node to display.
   */
  optional?: React.ReactNode;
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<ThemeOptions>;
  /**
   * A custom className to apply to the root element.
   */
  className?: string;
}

export function StepButton({ className, children, ...rest }: StepButtonProps) {
  return (
    <BaseStepButton
      className={classNames(styles.stepButton, className)}
      {...rest}
    >
      {children}
    </BaseStepButton>
  );
}
