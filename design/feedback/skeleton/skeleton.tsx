import {
  Skeleton as BaseSkeleton,
  type SkeletonProps as BaseSkeletonProps,
  type SkeletonClasses,
  type SkeletonPropsVariantOverrides,
} from '@mui/material';
import type { OverridableStringUnion } from '@mui/types';
import type { SxProps } from '@mui/system';
import type { Theme as ThemeOptions } from '@mui/material/styles';
import classNames from 'classnames';
import styles from './skeleton.module.scss';

export interface SkeletonProps extends BaseSkeletonProps {
  /**
   * The animation.
   * If `false` the animation effect is disabled.
   * @default 'pulse'
   */
  animation?: 'pulse' | 'wave' | false;
  /**
   * Optional children to infer width and height from.
   */
  children?: React.ReactNode;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<SkeletonClasses>;
  /**
   * Height of the skeleton.
   * Useful when you don't want to adapt the skeleton to a text element but for instance a card.
   */
  height?: number | string;
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<ThemeOptions>;
  /**
   * The type of content that will be rendered.
   * @default 'text'
   */
  variant?: OverridableStringUnion<
    'text' | 'rectangular' | 'rounded' | 'circular',
    SkeletonPropsVariantOverrides
  >;
  /**
   * Width of the skeleton.
   * Useful when the skeleton is inside an inline element with no width of its own.
   */
  width?: number | string;
  /**
   * A custom classname to style the skeleton.
   */
  className?: string;
}

export function Skeleton({ className, ...rest }: SkeletonProps) {
  return (
    <BaseSkeleton
      className={classNames(styles.skeleton, className)}
      {...rest}
    />
  );
}
