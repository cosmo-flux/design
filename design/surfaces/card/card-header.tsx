import {
  CardHeader as BaseCardHeader,
  type CardHeaderProps as BaseCardHeaderProps,
  type CardHeaderClasses,
} from '@mui/material';
import type { SxProps } from '@mui/system';
import type { Theme as ThemeOptions } from '@mui/material/styles';
import classNames from 'classnames';
import styles from './card.module.scss';

export interface CardHeaderProps extends BaseCardHeaderProps {
  /**
   * The content of the component.
   */
  title: React.ReactNode;
  /**
   * The content of the subtitle.
   */
  subheader?: React.ReactNode;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<CardHeaderClasses>;
  /**
   * The Avatar element to display before the title.
   */
  avatar?: React.ReactNode;
  /**
   * The action to display in the corner of the card.
   */
  action?: React.ReactNode;
  /**
   * If `true`, subheader and title won't wrap to multiple lines.
   */
  disableTypography?: boolean;
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<ThemeOptions>;
  /**
   * A custom className to apply to the root element.
   */
  className?: string;
}

export function CardHeader({ className, ...rest }: CardHeaderProps) {
  return (
    <BaseCardHeader
      className={classNames(styles.cardHeader, className)}
      {...rest}
    />
  );
}
