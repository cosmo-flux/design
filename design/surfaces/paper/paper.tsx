import {
  Paper as BasePaper,
  type PaperProps as BasePaperProps,
  type PaperClasses,
  type PaperPropsVariantOverrides,
} from '@mui/material';
import type { SxProps } from '@mui/system';
import type { OverridableStringUnion } from '@mui/types';
import type { Theme as ThemeOptions } from '@mui/material/styles';
import classNames from 'classnames';
import styles from './paper.module.scss';

export interface PaperProps extends BasePaperProps {
  /**
   * The content of the component.
   */
  children?: React.ReactNode;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<PaperClasses>;
  /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It accepts values between 0 and 24 inclusive.
   * @default 1
   */
  elevation?: number;
  /**
   * If `true`, rounded corners are disabled.
   * @default false
   */
  square?: boolean;
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<ThemeOptions>;
  /**
   * The variant to use.
   * @default 'elevation'
   */
  variant?: OverridableStringUnion<
    'elevation' | 'outlined',
    PaperPropsVariantOverrides
  >;
  /**
   * A custom className to apply to the root element.
   */
  className?: string;
}

export function Paper({ className, children, ...rest }: PaperProps) {
  return (
    <BasePaper className={classNames(styles.paper, className)} {...rest}>
      {children}
    </BasePaper>
  );
}
