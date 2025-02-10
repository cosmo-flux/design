import {
  ListItemText as BaseListItemText,
  type ListItemTextProps as BaseListItemTextProps,
  type ListItemTextClasses,
} from '@mui/material';
import type { SxProps } from '@mui/system';
import type { Theme as ThemeOptions } from '@mui/material/styles';
import classNames from 'classnames';
import styles from './list.module.scss';

export interface ListItemTextProps extends BaseListItemTextProps {
  /**
   * Alias for the `primary` prop.
   */
  children?: React.ReactNode;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<ListItemTextClasses>;
  /**
   * If `true`, the children won't be wrapped by a Typography component.
   * This can be useful to render an alternative Typography variant by wrapping
   * the `children` (or `primary`) text, and optional `secondary` text
   * with the Typography component.
   * @default false
   */
  disableTypography?: boolean;
  /**
   * If `true`, the children are indented.
   * This should be used if there is no left avatar or left icon.
   * @default false
   */
  inset?: boolean;
  /**
   * The main content element.
   */
  primary?: React.ReactNode;
  /**
   * The secondary content element.
   */
  secondary?: React.ReactNode;
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<ThemeOptions>;
}

export function ListItemText({
  className,
  children,
  ...rest
}: ListItemTextProps) {
  return (
    <BaseListItemText
      className={classNames(styles.listItemText, className)}
      {...rest}
    >
      {children}
    </BaseListItemText>
  );
}
