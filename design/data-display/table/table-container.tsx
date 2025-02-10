import {
  TableContainer as BaseTableContainer,
  type TableContainerProps as BaseTableContainerProps,
  type TableContainerClasses,
} from '@mui/material';
import type { SxProps } from '@mui/system';
import type { Theme as ThemeOptions } from '@mui/material/styles';
import classNames from 'classnames';
import styles from './table.module.scss';

export interface TableContainerProps extends BaseTableContainerProps {
  /**
   * The content of the component, normally `Table`.
   */
  children?: React.ReactNode;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<TableContainerClasses>;
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<ThemeOptions>;
  /**
   * a custom className for the root element
   */
  className?: string;
}

export function TableContainer({
  className,
  children,
  ...rest
}: TableContainerProps) {
  return (
    <BaseTableContainer
      className={classNames(styles.tableContainer, className)}
      {...rest}
    >
      {children}
    </BaseTableContainer>
  );
}
