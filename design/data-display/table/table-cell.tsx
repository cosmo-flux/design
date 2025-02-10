import {
  TableCell as BaseTableCell,
  type TableCellProps as BaseTableCellProps,
  type TableCellClasses,
  type TableCellBaseProps,
  type TableCellPropsSizeOverrides,
  type SortDirection,
  type TableCellPropsVariantOverrides,
} from '@mui/material';
import type { SxProps } from '@mui/system';
import type { OverridableStringUnion } from '@mui/types';
import type { Theme as ThemeOptions } from '@mui/material/styles';
import classNames from 'classnames';
import styles from './table.module.scss';

export interface TableCellProps extends BaseTableCellProps {
  /**
   * Set the text-align on the table cell content.
   *
   * Monetary or generally number fields **should be right aligned** as that allows
   * you to add them up quickly in your head without having to worry about decimals.
   * @default 'inherit'
   */
  align?: 'inherit' | 'left' | 'center' | 'right' | 'justify';
  /**
   * The content of the component.
   */
  children?: React.ReactNode;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<TableCellClasses>;
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component?: React.ElementType<TableCellBaseProps>;
  /**
   * Sets the padding applied to the cell.
   * The prop defaults to the value (`'default'`) inherited from the parent Table component.
   */
  padding?: 'normal' | 'checkbox' | 'none';
  /**
   * Set scope attribute.
   */
  scope?: TableCellBaseProps['scope'];
  /**
   * Specify the size of the cell.
   * The prop defaults to the value (`'medium'`) inherited from the parent Table component.
   */
  size?: OverridableStringUnion<
    'small' | 'medium',
    TableCellPropsSizeOverrides
  >;
  /**
   * Set aria-sort direction.
   */
  sortDirection?: SortDirection;
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<ThemeOptions>;
  /**
   * Specify the cell type.
   * The prop defaults to the value inherited from the parent TableHead, TableBody, or TableFooter components.
   */
  variant?: OverridableStringUnion<
    'head' | 'body' | 'footer',
    TableCellPropsVariantOverrides
  >;
  /**
   * a custom className for the root element
   */
  className?: string;
}

export function TableCell({ className, children, ...rest }: TableCellProps) {
  return (
    <BaseTableCell
      className={classNames(styles.tableCell, className)}
      {...rest}
    >
      {children}
    </BaseTableCell>
  );
}
