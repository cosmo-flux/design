import {
  Card as BaseCard,
  type CardProps as BaseCardProps,
  type CardClasses,
} from '@mui/material';
import type { SxProps } from '@mui/system';
import type { Theme as ThemeOptions } from '@mui/material/styles';
import classNames from 'classnames';
import styles from './card.module.scss';

export interface CardProps extends BaseCardProps {
  /**
   * The content of the component.
   */
  children: NonNullable<React.ReactNode>;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<CardClasses>;
  /**
   * If `true`, the card will use raised styling.
   * @default false
   */
  raised?: boolean;
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<ThemeOptions>;
  /**
   * A custom className to apply to the root element.
   */
  className?: string;
}

export function Card({ className, children, ...rest }: CardProps) {
  return (
    <BaseCard className={classNames(styles.card, className)} {...rest}>
      {children}
    </BaseCard>
  );
}
