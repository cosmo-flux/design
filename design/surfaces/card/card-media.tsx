import {
  CardMedia as BaseCardMedia,
  type CardMediaProps as BaseCardMediaProps,
  type CardMediaClasses,
} from '@mui/material';
import type { SxProps } from '@mui/system';
import type { Theme as ThemeOptions } from '@mui/material/styles';
import classNames from 'classnames';
import styles from './card.module.scss';

export interface CardMediaProps extends BaseCardMediaProps {
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<CardMediaClasses>;
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<ThemeOptions>;
  /**
   * Image to be displayed.
   */
  image?: string;
  /**
   * The alt text for the image, used for accessibility.
   */
  alt?: string;
  /**
   * If `true`, the image will fill the container while preserving aspect ratio.
   */
  fill?: boolean;
  /**
   * A custom className to apply to the root element.
   */
  className?: string;
}

export function CardMedia({ className, children, ...rest }: CardMediaProps) {
  return (
    <BaseCardMedia
      className={classNames(styles.cardMedia, className)}
      {...rest}
    >
      {children}
    </BaseCardMedia>
  );
}
