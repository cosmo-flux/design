import {
  CardActions as BaseCardActions,
  type CardActionsProps as BaseCardActionsProps,
  type CardActionsClasses,
} from '@mui/material';
import type { SxProps } from '@mui/system';
import type { Theme as ThemeOptions } from '@mui/material/styles';
import classNames from 'classnames';
import styles from './card.module.scss';

export interface CardActionsProps extends BaseCardActionsProps {
  /**
   * The content of the component.
   */
  children: NonNullable<React.ReactNode>;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<CardActionsClasses>;
  /**
   * If `true`, the actions do not have additional margin.
   * @default false
   */
  disableSpacing?: boolean;
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<ThemeOptions>;
  /**
   * A custom className to apply to the root element.
   */
  className?: string;
}

export function CardActions({
  className,
  children,
  ...rest
}: CardActionsProps) {
  return (
    <BaseCardActions
      className={classNames(styles.cardActions, className)}
      {...rest}
    >
      {children}
    </BaseCardActions>
  );
}
