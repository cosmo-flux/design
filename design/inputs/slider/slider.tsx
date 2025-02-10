import {
  Slider as BaseSlider,
  type SliderProps as BaseSliderProps,
  type SliderClasses,
} from '@mui/material';
import type { OverridableStringUnion } from '@mui/types';
import type { SxProps } from '@mui/system';
import type { Theme as ThemeOptions } from '@mui/material/styles';
import classNames from 'classnames';
import styles from './slider.module.scss';

export interface SliderProps extends BaseSliderProps {
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<SliderClasses>;
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color?: OverridableStringUnion<
    'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning',
    {}
  >;
  /**
   * If `true`, the slider will be disabled.
   * @default false
   */
  disabled?: boolean;
  /**
   * The size of the slider.
   * @default 'medium'
   */
  size?: 'small' | 'medium';
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<ThemeOptions>;
  /**
   * A custom classname to style the slider component.
   */
  className?: string;
}

export function Slider({ className, ...rest }: SliderProps) {
  return (
    <BaseSlider className={classNames(styles.slider, className)} {...rest} />
  );
}
