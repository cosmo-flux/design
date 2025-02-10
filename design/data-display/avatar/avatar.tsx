import {
  Avatar as BaseAvatar,
  type AvatarProps as BaseAvatarProps,
  type AvatarPropsVariantOverrides,
  type AvatarClasses,
} from '@mui/material';
import type { OverridableStringUnion } from '@mui/types';
import type { SxProps } from '@mui/system';
import type { Theme as ThemeOptions } from '@mui/material/styles';
import classNames from 'classnames';
import styles from './avatar.module.scss';

export interface AvatarProps extends BaseAvatarProps {
  /**
   * Used in combination with `src` or `srcSet` to
   * provide an alt attribute for the rendered `img` element.
   */
  alt?: string;
  /**
   * Used to render icon or text elements inside the Avatar if `src` is not set.
   * This can be an element, or just a string.
   */
  children?: React.ReactNode;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<AvatarClasses>;
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attributes) applied to the `img` element if the component is used to display an image.
   * It can be used to listen for the loading error event.
   * @deprecated Use `slotProps.img` instead. This prop will be removed in v7. [How to migrate](/material-ui/migration/migrating-from-deprecated-apis/).
   */
  imgProps?: React.ImgHTMLAttributes<HTMLImageElement> & {
    sx?: SxProps<ThemeOptions>;
  };
  /**
   * The `sizes` attribute for the `img` element.
   */
  sizes?: string;
  /**
   * The `src` attribute for the `img` element.
   */
  src?: string;
  /**
   * The `srcSet` attribute for the `img` element.
   * Use this attribute for responsive image display.
   */
  srcSet?: string;
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<ThemeOptions>;
  /**
   * The shape of the avatar.
   * @default 'circular'
   */
  variant?: OverridableStringUnion<
    'circular' | 'rounded' | 'square',
    AvatarPropsVariantOverrides
  >;
  /**
   * A custom classname to style the component.
   */
  className?: string;
}

export const Avatar = ({ className, children, ...rest }: AvatarProps) => {
  return (
    <BaseAvatar className={classNames(styles.avatar, className)} {...rest}>
      {children}
    </BaseAvatar>
  );
};
