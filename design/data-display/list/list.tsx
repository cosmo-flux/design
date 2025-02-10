import {
  List as BaseList,
  type ListProps as BaseListProps,
  type ListClasses,
} from '@mui/material';
import type { SxProps } from '@mui/system';
import type { Theme as ThemeOptions } from '@mui/material/styles';
import classNames from 'classnames';
import styles from './list.module.scss';

export interface ListProps extends BaseListProps {
  /**
   * The content of the component.
   */
  children?: React.ReactNode;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<ListClasses>;
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used for
   * the list and list items.
   * The prop is available to descendant components as the `dense` context.
   * @default false
   */
  dense?: boolean;
  /**
   * If `true`, vertical padding is removed from the list.
   * @default false
   */
  disablePadding?: boolean;
  /**
   * The content of the subheader, normally `ListSubheader`.
   */
  subheader?: React.ReactNode;
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<ThemeOptions>;
}

export function List({ className, children, ...rest }: ListProps) {
  return (
    <BaseList className={classNames(styles.list, className)} {...rest}>
      {children}
    </BaseList>
  );
}
