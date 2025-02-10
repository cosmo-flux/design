import {
  Breadcrumbs as BaseBreadcrumbs,
  type BreadcrumbsProps as BaseBreadcrumbsProps,
  type BreadcrumbsClasses,
} from '@mui/material';
import type { SxProps } from '@mui/system';
import type { Theme as ThemeOptions } from '@mui/material/styles';
import classNames from 'classnames';
import styles from './breadcrumbs.module.scss';

export interface BreadcrumbsProps extends BaseBreadcrumbsProps {
  /**
   * The content of the component.
   */
  children: NonNullable<React.ReactNode>;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<BreadcrumbsClasses>;
  /**
   * The maximum number of breadcrumbs to display before all are collapsed into an ellipsis.
   * If `0`, all breadcrumbs will be displayed.
   * @default 8
   */
  maxItems?: number;
  /**
   * If `maxItems` is exceeded, the number of breadcrumbs to show after the ellipsis.
   * @default 1
   */
  itemsAfterCollapse?: number;
  /**
   * If `maxItems` is exceeded, the number of breadcrumbs to show before the ellipsis.
   * @default 1
   */
  itemsBeforeCollapse?: number;
  /**
   * Custom separator node or string.
   * @default '/'
   */
  separator?: React.ReactNode;
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<ThemeOptions>;
  /**
   * A custom className to apply to the root component.
   */
  className?: string;
}

export function Breadcrumbs({
  className,
  children,
  ...rest
}: BreadcrumbsProps) {
  return (
    <BaseBreadcrumbs
      className={classNames(styles.breadcrumbs, className)}
      {...rest}
    >
      {children}
    </BaseBreadcrumbs>
  );
}
