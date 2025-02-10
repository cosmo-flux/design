import {
  ImageListItemBar as BaseImageListItemBar,
  type ImageListItemBarProps as BaseImageListItemBarProps,
  type ImageListItemBarClasses,
} from '@mui/material';
import type { SxProps } from '@mui/system';
import type { Theme as ThemeOptions } from '@mui/material/styles';
import classNames from 'classnames';
import styles from './image-list.module.scss';

export interface ImageListItemBarProps extends BaseImageListItemBarProps {
  /**
   * An IconButton element to be used as secondary action target
   * (primary action target is the item itself).
   */
  actionIcon?: React.ReactNode;
  /**
   * Position of secondary action IconButton.
   * @default 'right'
   */
  actionPosition?: 'left' | 'right';
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<ImageListItemBarClasses>;
  /**
   * Position of the title bar.
   * @default 'bottom'
   */
  position?: 'below' | 'top' | 'bottom';
  /**
   * String or element serving as subtitle (support text).
   */
  subtitle?: React.ReactNode;
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<ThemeOptions>;
  /**
   * Title to be displayed.
   */
  title?: React.ReactNode;
  /**
   * A custom classname to style the image list item bar.
   */
  className?: string;
}

export function ImageListItemBar({
  className,
  children,
  ...rest
}: ImageListItemBarProps) {
  return (
    <BaseImageListItemBar
      className={classNames(styles.imageListItemBar, className)}
      {...rest}
    >
      {children}
    </BaseImageListItemBar>
  );
}
