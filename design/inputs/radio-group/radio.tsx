import {
  Radio as BaseRadio,
  type RadioProps as BaseRadioProps,
  type RadioClasses,
} from '@mui/material';
import type { OverridableStringUnion } from '@mui/types';
import type { SxProps } from '@mui/system';
import type { Theme as ThemeOptions } from '@mui/material/styles';
import classNames from 'classnames';
import styles from './radio-group.module.scss';

export interface RadioProps extends BaseRadioProps {
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<RadioClasses>;
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color?: OverridableStringUnion<
    | 'default'
    | 'primary'
    | 'secondary'
    | 'error'
    | 'info'
    | 'success'
    | 'warning',
    {}
  >;
  /**
   * If `true`, the radio will be disabled.
   * @default false
   */
  disabled?: boolean;
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<ThemeOptions>;
  /**
   * A custom classname to style the radio button.
   */
  className?: string;
}

export function Radio({ className, ...rest }: RadioProps) {
  return (
    <BaseRadio className={classNames(styles.radio, className)} {...rest} />
  );
}
