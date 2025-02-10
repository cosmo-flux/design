import {
  CircularProgress as BaseCircularProgress,
  type CircularProgressProps as BaseCircularProgressProps,
  type CircularProgressClasses,
  type CircularProgressPropsColorOverrides,
} from '@mui/material';
import type { SxProps } from '@mui/system';
import type { Theme as ThemeOptions } from '@mui/material/styles';
import type { OverridableStringUnion } from '@mui/types';
import classNames from 'classnames';
import styles from './progress.module.scss';

export interface CircularProgressProps extends BaseCircularProgressProps {
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<CircularProgressClasses>;
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
    CircularProgressPropsColorOverrides
  >;
  /**
   * If `true`, the shrink animation is disabled.
   * This only works if variant is `indeterminate`.
   * @default false
   */
  disableShrink?: boolean;
  /**
   * The size of the component.
   * If using a number, the pixel unit is assumed.
   * If using a string, you need to provide the CSS unit, for example '3rem'.
   * @default 40
   */
  size?: number | string;
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<ThemeOptions>;
  /**
   * The thickness of the circle.
   * @default 3.6
   */
  thickness?: number;
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value?: number;
  /**
   * The variant to use.
   * Use indeterminate when there is no progress value.
   * @default 'indeterminate'
   */
  variant?: 'determinate' | 'indeterminate';
  /**
   * A custom className to apply to the root component.
   */
  className?: string;
}

export function CircularProgress({
  className,
  ...rest
}: CircularProgressProps) {
  return (
    <BaseCircularProgress
      className={classNames(styles.circularProgress, className)}
      {...rest}
    />
  );
}
