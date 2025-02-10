import {
  Fab as BaseFab,
  FabProps as BaseFabProps,
  FabClasses,
} from '@mui/material';
import type { OverridableStringUnion } from '@mui/types';
import type { SxProps } from '@mui/system';
import type { Theme as ThemeOptions } from '@mui/material/styles';
import classNames from 'classnames';
import styles from './floating-action-button.module.scss';

export interface FabProps extends BaseFabProps {
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<FabClasses>;
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'default'
   */
  color?: OverridableStringUnion<
    | 'inherit'
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
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'large'
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<ThemeOptions>;
  /**
   * A custom classname to style the FAB.
   */
  className?: string;
  /**
   * If `true`, the FAB will be disabled.
   * @default false
   */
  disabled?: boolean;
  /**
   * If `true`, the FAB will have a circular shape.
   * @default true
   */
  variant?: 'circular' | 'extended';
}

export function Fab({ className, ...rest }: FabProps) {
  return <BaseFab className={classNames(styles.fab, className)} {...rest} />;
}
