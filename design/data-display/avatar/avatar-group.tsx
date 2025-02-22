import {
  AvatarGroup as BaseAvatarGroup,
  type AvatarGroupProps as BaseAvatarGroupProps,
  type AvatarGroupClasses,
  type AvatarGroupComponentsPropsOverrides,
  type AvatarGroupPropsVariantOverrides,
} from '@mui/material';
import type { SxProps } from '@mui/system';
import type { OverridableStringUnion } from '@mui/types';
import type { Theme as ThemeOptions } from '@mui/material/styles';
import classNames from 'classnames';
import styles from './avatar.module.scss';
import { Avatar } from './avatar.js';

export interface AvatarGroupProps extends BaseAvatarGroupProps {
  /**
   * The avatars to stack.
   */
  children?: React.ReactNode;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<AvatarGroupClasses>;
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component?: React.ElementType;
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `slotProps` prop.
   * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
   *
   * @default {}
   */
  componentsProps?: {
    additionalAvatar?: React.ComponentPropsWithRef<typeof Avatar> &
      AvatarGroupComponentsPropsOverrides;
  };
  /**
   * Max avatars to show before +x.
   * @default 5
   */
  max?: number;
  /**
   * custom renderer of extraAvatars
   * @param {number} surplus number of extra avatars
   * @returns {React.ReactNode} custom element to display
   */
  renderSurplus?: (surplus: number) => React.ReactNode;
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps?: {
    additionalAvatar?: React.ComponentPropsWithRef<typeof Avatar> &
      AvatarGroupComponentsPropsOverrides;
  };
  /**
   * Spacing between avatars.
   * @default 'medium'
   */
  spacing?: 'small' | 'medium' | number;
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<ThemeOptions>;
  /**
   * The total number of avatars. Used for calculating the number of extra avatars.
   * @default children.length
   */
  total?: number;
  /**
   * The variant to use.
   * @default 'circular'
   */
  variant?: OverridableStringUnion<
    'circular' | 'rounded' | 'square',
    AvatarGroupPropsVariantOverrides
  >;
  /**
   * A custom classname to style the component.
   */
  className?: string;
}

export function AvatarGroup({
  className,
  children,
  ...rest
}: AvatarGroupProps) {
  return (
    <BaseAvatarGroup
      className={classNames(styles.avatarGroup, className)}
      {...rest}
    >
      {children}
    </BaseAvatarGroup>
  );
}
