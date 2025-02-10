import {
  PaginationItem as BasePaginationItem,
  type PaginationItemProps as BasePaginationItemProps,
  type PaginationItemClasses,
  type PaginationItemPropsColorOverrides,
  type PaginationItemPropsSizeOverrides,
  type PaginationItemPropsVariantOverrides,
} from '@mui/material';
import type { SxProps } from '@mui/system';
import type { OverridableStringUnion } from '@mui/types';
import type { Theme as ThemeOptions } from '@mui/material/styles';
import classNames from 'classnames';
import type { UsePaginationItem } from './use-pagination.js';
import styles from './pagination.module.scss';

export interface PaginationItemProps extends BasePaginationItemProps {
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<PaginationItemClasses>;
  /**
   * The active color.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'standard'
   */
  color?: OverridableStringUnion<
    'standard' | 'primary' | 'secondary',
    PaginationItemPropsColorOverrides
  >;
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components?: {
    first?: React.ElementType;
    last?: React.ElementType;
    next?: React.ElementType;
    previous?: React.ElementType;
  };
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled?: boolean;
  /**
   * The current page number.
   */
  page?: React.ReactNode;
  /**
   * If `true` the pagination item is selected.
   * @default false
   */
  selected?: boolean;
  /**
   * The shape of the pagination item.
   * @default 'circular'
   */
  shape?: 'circular' | 'rounded';
  /**
   * The size of the component.
   * @default 'medium'
   */
  size?: OverridableStringUnion<
    'small' | 'medium' | 'large',
    PaginationItemPropsSizeOverrides
  >;
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots?: {
    first?: React.ElementType;
    last?: React.ElementType;
    next?: React.ElementType;
    previous?: React.ElementType;
  };
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<ThemeOptions>;
  /**
   * The type of pagination item.
   * @default 'page'
   */
  type?: UsePaginationItem['type'];
  /**
   * The variant to use.
   * @default 'text'
   */
  variant?: OverridableStringUnion<
    'text' | 'outlined',
    PaginationItemPropsVariantOverrides
  >;
  /**
   * A custom className to apply to the root component.
   */
  className?: string;
}

export function PaginationItem({
  className,
  children,
  ...rest
}: PaginationItemProps) {
  return (
    <BasePaginationItem
      className={classNames(styles.paginationItem, className)}
      {...rest}
    >
      {children}
    </BasePaginationItem>
  );
}
