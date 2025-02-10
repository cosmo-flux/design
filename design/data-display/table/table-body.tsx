import {
  TableBody as BaseTableBody,
  type TableBodyProps as BaseTableBodyProps,
  type TableBodyClasses,
} from '@mui/material';
import type { SxProps } from '@mui/system';
import type { Theme as ThemeOptions } from '@mui/material/styles';
import classNames from 'classnames';
import styles from './table.module.scss';

export interface TableBodyProps extends BaseTableBodyProps {
  /**
   * The content of the component, normally `TableRow`.
   */
  children?: React.ReactNode;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<TableBodyClasses>;
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<ThemeOptions>;
  /**
   * a custom className for the root element
   */
  className?: string;
}

export function TableBody({ className, children, ...rest }: TableBodyProps) {
  return (
    <BaseTableBody
      className={classNames(styles.tableBody, className)}
      {...rest}
    >
      {children}
    </BaseTableBody>
  );
}
