import {
  StepIcon as BaseStepIcon,
  type StepIconProps as BaseStepIconProps,
  type StepIconClasses,
} from '@mui/material';
import type { SxProps } from '@mui/system';
import type { Theme as ThemeOptions } from '@mui/material/styles';
import classNames from 'classnames';
import styles from './stepper.module.scss';

export interface StepIconProps extends BaseStepIconProps {
  /**
   * Whether this step is active.
   * @default false
   */
  active?: boolean;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<StepIconClasses>;
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed?: boolean;
  /**
   * If `true`, the step is marked as failed.
   * @default false
   */
  error?: boolean;
  /**
   * The label displayed in the step icon.
   */
  icon: React.ReactNode;
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<ThemeOptions>;
  /**
   * A custom className to apply to the root element.
   */
  className?: string;
}

export function StepIcon({ className, ...rest }: StepIconProps) {
  return (
    <BaseStepIcon
      className={classNames(styles.stepIcon, className)}
      {...rest}
    />
  );
}
