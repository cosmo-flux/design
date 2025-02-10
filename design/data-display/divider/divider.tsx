import {
  Divider as BaseDivider,
  type DividerProps as BaseDividerProps,
  type DividerClasses,
  type DividerPropsVariantOverrides,
} from '@mui/material';
import type { SxProps } from '@mui/system';
import type { OverridableStringUnion } from '@mui/types';
import type { Theme as ThemeOptions } from '@mui/material/styles';
import classNames from 'classnames';
import styles from './divider.module.scss';

export interface DividerProps extends BaseDividerProps {
  /**
   * Absolutely position the element.
   * @default false
   */
  absolute?: boolean;
  /**
   * The content of the component.
   */
  children?: React.ReactNode;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<DividerClasses>;
  /**
   * If `true`, a vertical divider will have the correct height when used in flex container.
   * (By default, a vertical divider will have a calculated height of `0px` if it is the child of a flex container.)
   * @default false
   */
  flexItem?: boolean;
  /**
   * If `true`, the divider will have a lighter color.
   * @default false
   * @deprecated Use <Divider sx={{ opacity: 0.6 }} /> (or any opacity or color) instead. [How to migrate](/material-ui/migration/migrating-from-deprecated-apis/)
   */
  light?: boolean;
  /**
   * The component orientation.
   * @default 'horizontal'
   */
  orientation?: 'horizontal' | 'vertical';
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<ThemeOptions>;
  /**
   * The text alignment.
   * @default 'center'
   */
  textAlign?: 'center' | 'right' | 'left';
  /**
   * The variant to use.
   * @default 'fullWidth'
   */
  variant?: OverridableStringUnion<
    'fullWidth' | 'inset' | 'middle',
    DividerPropsVariantOverrides
  >;
}

export function Divider({ className, children, ...rest }: DividerProps) {
  return (
    <BaseDivider className={classNames(styles.divider, className)} {...rest}>
      {children}
    </BaseDivider>
  );
}
