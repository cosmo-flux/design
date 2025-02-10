import {
  Table as BaseTable,
  type TableProps as BaseTableProps,
  type TableClasses,
  type TablePropsSizeOverrides,
} from '@mui/material';
import type { SxProps } from '@mui/system';
import type { OverridableStringUnion } from '@mui/types';
import type { Theme as ThemeOptions } from '@mui/material/styles';
import classNames from 'classnames';
import styles from './table.module.scss';

export interface TableProps extends BaseTableProps {
  /**
   * The content of the table, normally `TableHead` and `TableBody`.
   */
  children?: React.ReactNode;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<TableClasses>;
  /**
   * Allows TableCells to inherit padding of the Table.
   * @default 'normal'
   */
  padding?: 'normal' | 'checkbox' | 'none';
  /**
   * Allows TableCells to inherit size of the Table.
   * @default 'medium'
   */
  size?: OverridableStringUnion<'small' | 'medium', TablePropsSizeOverrides>;
  /**
   * Set the header sticky.
   *
   * ⚠️ It doesn't work with IE11.
   * @default false
   */
  stickyHeader?: boolean;
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<ThemeOptions>;
}

export function Table({ className, children, ...rest }: TableProps) {
  return (
    <BaseTable className={classNames(styles.table, className)} {...rest}>
      {children}
    </BaseTable>
  );
}
