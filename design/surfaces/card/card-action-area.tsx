import {
  CardActionArea as BaseCardActionArea,
  type CardActionAreaProps as BaseCardActionAreaProps,
  type CardActionAreaClasses,
} from '@mui/material';
import type { SxProps } from '@mui/system';
import type { Theme as ThemeOptions } from '@mui/material/styles';
import classNames from 'classnames';
import styles from './card.module.scss';

export interface CardActionAreaProps extends BaseCardActionAreaProps {
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<CardActionAreaClasses>;
  focusVisibleClassName?: string;
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<ThemeOptions>;
  /**
   * A custom className to apply to the root element.
   */
  className?: string;
}

export function CardActionArea({
  className,
  children,
  ...rest
}: CardActionAreaProps) {
  return (
    <BaseCardActionArea
      className={classNames(styles.cardActionArea, className)}
      {...rest}
    >
      {children}
    </BaseCardActionArea>
  );
}
