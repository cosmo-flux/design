import {
  LinearProgress as BaseLinearProgress,
  type LinearProgressProps as BaseLinearProgressProps,
  type LinearProgressClasses,
  type LinearProgressPropsColorOverrides,
} from '@mui/material';
import type { SxProps } from '@mui/system';
import type { Theme as ThemeOptions } from '@mui/material/styles';
import type { OverridableStringUnion } from '@mui/types';
import classNames from 'classnames';
import styles from './progress.module.scss';

export interface LinearProgressProps extends BaseLinearProgressProps {
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<LinearProgressClasses>;
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color?: OverridableStringUnion<
    | 'primary'
    | 'secondary'
    | 'error'
    | 'info'
    | 'success'
    | 'warning'
    | 'inherit',
    LinearProgressPropsColorOverrides
  >;
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<ThemeOptions>;
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value?: number;
  /**
   * The value for the buffer variant.
   * Value between 0 and 100.
   */
  valueBuffer?: number;
  /**
   * The variant to use.
   * Use indeterminate or query when there is no progress value.
   * @default 'indeterminate'
   */
  variant?: 'determinate' | 'indeterminate' | 'buffer' | 'query';
  /**
   * A custom className to apply to the root component.
   */
  className?: string;
}

export function LinearProgress({ className, ...rest }: LinearProgressProps) {
  return (
    <BaseLinearProgress
      className={classNames(styles.linearProgress, className)}
      {...rest}
    />
  );
}
