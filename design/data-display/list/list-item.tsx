import {
  ListItem as BaseListItem,
  type ListItemProps as BaseListItemProps,
  type ListItemClasses,
} from '@mui/material';
import type { SxProps } from '@mui/system';
import type { Theme as ThemeOptions } from '@mui/material/styles';
import classNames from 'classnames';
import styles from './list.module.scss';

export interface ListItemProps extends BaseListItemProps {
  /**
   * Defines the `align-items` style property.
   * @default 'center'
   */
  alignItems?: 'flex-start' | 'center';
  /**
   * If `true`, the list item is focused during the first mount.
   * Focus will also be triggered if the value changes from false to true.
   * @default false
   * @deprecated checkout [ListItemButton](/material-ui/api/list-item-button/) instead
   */
  autoFocus?: boolean;
  /**
   * The content of the component if a `ListItemSecondaryAction` is used it must
   * be the last child.
   */
  children?: React.ReactNode;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<ListItemClasses>;
  /**
   * The container component used when a `ListItemSecondaryAction` is the last child.
   * @default 'li'
   * @deprecated
   */
  ContainerComponent?: React.ElementType<React.HTMLAttributes<HTMLDivElement>>;
  /**
   * Props applied to the container component if used.
   * @default {}
   * @deprecated
   */
  ContainerProps?: React.HTMLAttributes<HTMLDivElement>;
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used.
   * The prop defaults to the value inherited from the parent List component.
   * @default false
   */
  dense?: boolean;
  /**
   * If `true`, the component is disabled.
   * @default false
   * @deprecated checkout [ListItemButton](/material-ui/api/list-item-button/) instead
   */
  disabled?: boolean;
  /**
   * If `true`, the left and right padding is removed.
   * @default false
   */
  disableGutters?: boolean;
  /**
   * If `true`, all padding is removed.
   * @default false
   */
  disablePadding?: boolean;
  /**
   * If `true`, a 1px light border is added to the bottom of the list item.
   * @default false
   */
  divider?: boolean;
  /**
   * The element to display at the end of ListItem.
   */
  secondaryAction?: React.ReactNode;
  /**
   * Use to apply selected styling.
   * @default false
   * @deprecated checkout [ListItemButton](/material-ui/api/list-item-button/) instead
   */
  selected?: boolean;
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<ThemeOptions>;
}

export function ListItem({ className, children, ...rest }: ListItemProps) {
  return (
    <BaseListItem className={classNames(styles.listItem, className)} {...rest}>
      {children}
    </BaseListItem>
  );
}
