import {
  ImageList as BaseImageList,
  type ImageListProps as BaseImageListProps,
  type ImageListClasses,
  type ImageListPropsVariantOverrides,
} from '@mui/material';
import type { SxProps } from '@mui/system';
import type { OverridableStringUnion } from '@mui/types';
import type { Theme as ThemeOptions } from '@mui/material/styles';
import classNames from 'classnames';
import styles from './image-list.module.scss';

export interface ImageListProps extends BaseImageListProps {
  /**
   * The content of the component, normally `ImageListItem`s.
   */
  children: NonNullable<React.ReactNode>;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<ImageListClasses>;
  /**
   * Number of columns.
   * @default 2
   */
  cols?: number;
  /**
   * The gap between items in px.
   * @default 4
   */
  gap?: number;
  /**
   * The height of one row in px.
   * @default 'auto'
   */
  rowHeight?: number | 'auto';
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<ThemeOptions>;
  /**
   * The variant to use.
   * @default 'standard'
   */
  variant?: OverridableStringUnion<
    'masonry' | 'quilted' | 'standard' | 'woven',
    ImageListPropsVariantOverrides
  >;
  /**
   * A custom classname to style the image list component.
   */
  className?: string;
}

export function ImageList({ className, children, ...rest }: ImageListProps) {
  return (
    <BaseImageList
      className={classNames(styles.imageList, className)}
      {...rest}
    >
      {children}
    </BaseImageList>
  );
}
