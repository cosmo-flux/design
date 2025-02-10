import {
  TableSortLabel as BaseTableSortLabel,
  type TableSortLabelProps as BaseTableSortLabelProps,
  type TableSortLabelClasses,
} from '@mui/material';
import type { SxProps } from '@mui/system';
import type { Theme as ThemeOptions } from '@mui/material/styles';
import classNames from 'classnames';
import styles from './table.module.scss';

export interface TableSortLabelProps extends BaseTableSortLabelProps {
  /**
   * If `true`, the label will have the active styling (should be true for the sorted column).
   * @default false
   */
  active?: boolean;
  /**
   * Label contents, the arrow will be appended automatically.
   */
  children?: React.ReactNode;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<TableSortLabelClasses>;
  /**
   * The current sort direction.
   * @default 'asc'
   */
  direction?: 'asc' | 'desc';
  /**
   * Hide sort icon when active is false.
   * @default false
   */
  hideSortIcon?: boolean;
  /**
   * Sort icon to use.
   * @default ArrowDownwardIcon
   */
  IconComponent?: React.JSXElementConstructor<{
    className: string;
  }>;
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<ThemeOptions>;
}

export function TableSortLabel({
  className,
  children,
  ...rest
}: TableSortLabelProps) {
  return (
    <BaseTableSortLabel
      className={classNames(styles.tableSortLabel, className)}
      {...rest}
    >
      {children}
    </BaseTableSortLabel>
  );
}
