import {
  TableFooter as BaseTableFooter,
  type TableFooterProps as BaseTableFooterProps,
  type TableFooterClasses,
} from '@mui/material';
import type { SxProps } from '@mui/system';
import type { Theme as ThemeOptions } from '@mui/material/styles';
import classNames from 'classnames';
import styles from './table.module.scss';

export interface TableFooterProps extends BaseTableFooterProps {
  /**
   * The content of the component, normally `TableRow`.
   */
  children?: React.ReactNode;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<TableFooterClasses>;
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<ThemeOptions>;
  /**
   * a custom className for the root element
   */
  className?: string;
}

export function TableFooter({
  className,
  children,
  ...rest
}: TableFooterProps) {
  return (
    <BaseTableFooter
      className={classNames(styles.tableFooter, className)}
      {...rest}
    >
      {children}
    </BaseTableFooter>
  );
}
