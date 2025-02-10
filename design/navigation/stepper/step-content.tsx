import {
  StepContent as BaseStepContent,
  type StepContentProps as BaseStepContentProps,
  type StepContentClasses,
} from '@mui/material';
import type { SxProps } from '@mui/system';
import type { Theme as ThemeOptions } from '@mui/material/styles';
import classNames from 'classnames';
import styles from './stepper.module.scss';

export interface StepContentProps extends BaseStepContentProps {
  /**
   * The content of the component.
   */
  children?: React.ReactNode;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<StepContentClasses>;
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<ThemeOptions>;
  /**
   * A custom className to apply to the root element.
   */
  className?: string;
}

export function StepContent({
  className,
  children,
  ...rest
}: StepContentProps) {
  return (
    <BaseStepContent
      className={classNames(styles.stepContent, className)}
      {...rest}
    >
      {children}
    </BaseStepContent>
  );
}
