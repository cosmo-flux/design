import {
  Pagination as BasePagination,
  type PaginationProps as BasePaginationProps,
  type PaginationRenderItemParams,
  type PaginationPropsVariantOverrides,
  type PaginationPropsSizeOverrides,
  type PaginationPropsColorOverrides,
  type PaginationClasses,
} from '@mui/material';
import type { SxProps } from '@mui/system';
import type { OverridableStringUnion } from '@mui/types';
import type { Theme as ThemeOptions } from '@mui/material/styles';
import classNames from 'classnames';
import type { UsePaginationItem } from './use-pagination.js';
import styles from './pagination.module.scss';

export interface PaginationProps extends BasePaginationProps {
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<PaginationClasses>;
  /**
   * The active color.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'standard'
   */
  color?: OverridableStringUnion<
    'primary' | 'secondary' | 'standard',
    PaginationPropsColorOverrides
  >;
  /**
   * Accepts a function which returns a string value that provides a user-friendly name for the current page.
   * This is important for screen reader users.
   *
   * For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).
   * @param {string} type The link or button type to format ('page' | 'first' | 'last' | 'next' | 'previous' | 'start-ellipsis' | 'end-ellipsis'). Defaults to 'page'.
   * @param {number} page The page number to format.
   * @param {bool} selected If true, the current page is selected.
   * @returns {string}
   */
  getItemAriaLabel?: (
    type: UsePaginationItem['type'],
    page: number,
    selected: boolean
  ) => string;

  /**
   * Render the item.
   * @param {PaginationRenderItemParams} params The props to spread on a PaginationItem.
   * @returns {ReactNode}
   * @default (item) => <PaginationItem {...item} />
   */
  renderItem?: (params: PaginationRenderItemParams) => React.ReactNode;
  /**
   * The shape of the pagination items.
   * @default 'circular'
   */
  shape?: 'circular' | 'rounded';
  /**
   * The size of the component.
   * @default 'medium'
   */
  size?: OverridableStringUnion<
    'small' | 'medium' | 'large',
    PaginationPropsSizeOverrides
  >;
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<ThemeOptions>;
  /**
   * The variant to use.
   * @default 'text'
   */
  variant?: OverridableStringUnion<
    'text' | 'outlined',
    PaginationPropsVariantOverrides
  >;
  /**
   * A custom className to apply to the root component.
   */
  className?: string;
}

export function Pagination({ className, ...rest }: PaginationProps) {
  return (
    <BasePagination
      className={classNames(styles.pagination, className)}
      {...rest}
    />
  );
}
