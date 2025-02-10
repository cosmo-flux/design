import {
  StepConnector as BaseStepConnector,
  type StepConnectorProps as BaseStepConnectorProps,
  type StepConnectorClasses,
} from '@mui/material';
import type { SxProps } from '@mui/system';
import type { Theme as ThemeOptions } from '@mui/material/styles';
import classNames from 'classnames';
import styles from './stepper.module.scss';

export { stepConnectorClasses } from '@mui/material/StepConnector';

export interface StepConnectorProps extends BaseStepConnectorProps {
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<StepConnectorClasses>;
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<ThemeOptions>;
  /**
   * A custom className to apply to the root element.
   */
  className?: string;
}

export function StepConnector({ className, ...rest }: StepConnectorProps) {
  return (
    <BaseStepConnector
      className={classNames(styles.stepConnector, className)}
      {...rest}
    />
  );
}
