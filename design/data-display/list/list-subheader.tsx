import {
  ListSubheader as BaseListSubheader,
  type ListSubheaderProps as BaseListSubheaderProps,
  type ListSubheaderClasses,
} from '@mui/material';
import type { SxProps } from '@mui/system';
import type { Theme as ThemeOptions } from '@mui/material/styles';
import classNames from 'classnames';
import styles from './list.module.scss';

export interface ListSubheaderProps extends BaseListSubheaderProps {
  /**
   * The content of the component.
   */
  children?: React.ReactNode;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<ListSubheaderClasses>;
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default 'default'
   */
  color?: 'default' | 'primary' | 'inherit';
  /**
   * If `true`, the List Subheader will not have gutters.
   * @default false
   */
  disableGutters?: boolean;
  /**
   * If `true`, the List Subheader will not stick to the top during scroll.
   * @default false
   */
  disableSticky?: boolean;
  /**
   * If `true`, the List Subheader is indented.
   * @default false
   */
  inset?: boolean;
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<ThemeOptions>;
}

export function ListSubheader({
  className,
  children,
  ...rest
}: ListSubheaderProps) {
  return (
    <BaseListSubheader
      className={classNames(styles.listSubheader, className)}
      {...rest}
    >
      {children}
    </BaseListSubheader>
  );
}
