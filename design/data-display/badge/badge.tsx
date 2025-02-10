import {
  Badge as BaseBadge,
  type BadgeProps as BaseBadgeProps,
  type BadgeClasses,
  type BadgeOrigin,
  type BadgePropsVariantOverrides,
  type BadgePropsColorOverrides,
} from '@mui/material';
import type { SxProps } from '@mui/system';
import type { OverridableStringUnion } from '@mui/types';
import type { Theme as ThemeOptions } from '@mui/material/styles';
import classNames from 'classnames';
import styles from './badge.module.scss';

export interface BadgeProps extends BaseBadgeProps {
  /**
   * The anchor of the badge.
   * @default {
   *   vertical: 'top',
   *   horizontal: 'right',
   * }
   */
  anchorOrigin?: BadgeOrigin;
  /**
   * The content rendered within the badge.
   */
  badgeContent?: React.ReactNode;
  /**
   * The badge will be added relative to this node.
   */
  children?: React.ReactNode;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<BadgeClasses>;
  /**
   * A custom className to apply to the root component.
   */
  className?: string;
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'default'
   */
  color?: OverridableStringUnion<
    | 'primary'
    | 'secondary'
    | 'default'
    | 'error'
    | 'info'
    | 'success'
    | 'warning',
    BadgePropsColorOverrides
  >;
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `slotProps` prop.
   * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
   *
   * @default {}
   */
  componentsProps?: BadgeProps['slotProps'];
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components?: {
    Root?: React.ElementType;
    Badge?: React.ElementType;
  };
  /**
   * If `true`, the badge is invisible.
   * @default false
   */
  invisible?: boolean;
  /**
   * Max count to show.
   * @default 99
   */
  max?: number;
  /**
   * Wrapped shape the badge should overlap.
   * @default 'rectangular'
   */
  overlap?: 'rectangular' | 'circular';
  /**
   * The components used for each slot inside the Badge.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots?: {
    /**
     * The component that renders the root.
     * @default 'span'
     */
    root?: React.ElementType;
    /**
     * The component that renders the badge.
     * @default 'span'
     */
    badge?: React.ElementType;
  };
  /**
   * Controls whether the badge is hidden when `badgeContent` is zero.
   * @default false
   */
  showZero?: boolean;
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<ThemeOptions>;
  /**
   * The variant to use.
   * @default 'standard'
   */
  variant?: OverridableStringUnion<
    'standard' | 'dot',
    BadgePropsVariantOverrides
  >;
}

export function Badge({ className, children, ...rest }: BadgeProps) {
  return (
    <BaseBadge className={classNames(styles.badge, className)} {...rest}>
      {children}
    </BaseBadge>
  );
}
