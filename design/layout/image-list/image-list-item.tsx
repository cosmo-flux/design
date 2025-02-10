import {
  ImageListItem as BaseImageListItem,
  type ImageListItemProps as BaseImageListItemProps,
  type ImageListItemClasses,
} from '@mui/material';
import type { SxProps } from '@mui/system';
import type { Theme as ThemeOptions } from '@mui/material/styles';
import classNames from 'classnames';
import styles from './image-list.module.scss';

export interface ImageListItemProps extends BaseImageListItemProps {
  /**
   * The content of the component, normally an `<img>`.
   */
  children?: React.ReactNode;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<ImageListItemClasses>;
  /**
   * Width of the item in number of grid columns.
   * @default 1
   */
  cols?: number;
  /**
   * Height of the item in number of grid rows.
   * @default 1
   */
  rows?: number;
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<ThemeOptions>;
  /**
   * A custom classname to style the image list item.
   */
  className?: string;
}

export function ImageListItem({
  className,
  children,
  ...rest
}: ImageListItemProps) {
  return (
    <BaseImageListItem
      className={classNames(styles.imageListItem, className)}
      {...rest}
    >
      {children}
    </BaseImageListItem>
  );
}
