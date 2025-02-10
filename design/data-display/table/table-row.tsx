import {
  TableRow as BaseTableRow,
  type TableRowProps as BaseTableRowProps,
  type TableRowClasses,
} from '@mui/material';
import type { SxProps } from '@mui/system';
import type { Theme as ThemeOptions } from '@mui/material/styles';
import classNames from 'classnames';
import styles from './table.module.scss';

export interface TableRowProps extends BaseTableRowProps {
  /**
   * Should be valid `<tr>` children such as `TableCell`.
   */
  children?: React.ReactNode;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<TableRowClasses>;
  /**
   * If `true`, the table row will shade on hover.
   * @default false
   */
  hover?: boolean;
  /**
   * If `true`, the table row will have the selected shading.
   * @default false
   */
  selected?: boolean;
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<ThemeOptions>;
}

export function TableRow({ className, children, ...rest }: TableRowProps) {
  return (
    <BaseTableRow className={classNames(styles.tableRow, className)} {...rest}>
      {children}
    </BaseTableRow>
  );
}
