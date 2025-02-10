import {
  TableHead as BaseTableHead,
  type TableHeadProps as BaseTableHeadProps,
  type TableHeadClasses,
} from '@mui/material';
import type { SxProps } from '@mui/system';
import type { Theme as ThemeOptions } from '@mui/material/styles';
import classNames from 'classnames';
import styles from './table.module.scss';

export interface TableHeadProps extends BaseTableHeadProps {
  /**
   * The content of the component, normally `TableRow`.
   */
  children?: React.ReactNode;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<TableHeadClasses>;
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<ThemeOptions>;
  /**
   * a custom className for the root element
   */
  className?: string;
}

export function TableHead({ className, children, ...rest }: TableHeadProps) {
  return (
    <BaseTableHead
      className={classNames(styles.tableHead, className)}
      {...rest}
    >
      {children}
    </BaseTableHead>
  );
}
