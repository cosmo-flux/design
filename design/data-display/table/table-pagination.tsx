import {
  TablePagination as BaseTablePagination,
  type TablePaginationProps as BaseTablePaginationProps,
  type TablePaginationClasses,
} from '@mui/material';
import type { SxProps } from '@mui/system';
import type { Theme as ThemeOptions } from '@mui/material/styles';
import classNames from 'classnames';
import styles from './table.module.scss';

export type TablePaginationProps = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<TablePaginationClasses>;
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<ThemeOptions>;
  /**
   * a custom className for the root element
   */
  className?: string;
} & Omit<BaseTablePaginationProps, 'classes' | 'sx'>;

export function TablePagination({ className, ...rest }: TablePaginationProps) {
  return (
    <BaseTablePagination
      className={classNames(styles.tablePagination, className)}
      {...rest}
    />
  );
}
