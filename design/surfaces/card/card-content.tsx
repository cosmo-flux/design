import {
  CardContent as BaseCardContent,
  type CardContentProps as BaseCardContentProps,
  type CardContentClasses,
} from '@mui/material';
import type { SxProps } from '@mui/system';
import type { Theme as ThemeOptions } from '@mui/material/styles';
import classNames from 'classnames';
import styles from './card.module.scss';

export interface CardContentProps extends BaseCardContentProps {
  /**
   * The content of the component.
   */
  children: NonNullable<React.ReactNode>;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<CardContentClasses>;
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<ThemeOptions>;
  /**
   * A custom className to apply to the root element.
   */
  className?: string;
}

export function CardContent({
  className,
  children,
  ...rest
}: CardContentProps) {
  return (
    <BaseCardContent
      className={classNames(styles.cardContent, className)}
      {...rest}
    >
      {children}
    </BaseCardContent>
  );
}
