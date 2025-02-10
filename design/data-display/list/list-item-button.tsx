import {
  ListItemButton as BaseListItemButton,
  type ListItemButtonProps as BaseListItemButtonProps,
  type ListItemButtonClasses,
} from '@mui/material';
import type { SxProps } from '@mui/system';
import type { Theme as ThemeOptions } from '@mui/material/styles';
import classNames from 'classnames';
import styles from './list.module.scss';

export interface ListItemButtonProps extends BaseListItemButtonProps {
  /**
   * Defines the `align-items` style property.
   * @default 'center'
   */
  alignItems?: 'flex-start' | 'center';
  /**
   * If `true`, the list item is focused during the first mount.
   * Focus will also be triggered if the value changes from false to true.
   * @default false
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
  classes?: Partial<ListItemButtonClasses>;
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used.
   * The prop defaults to the value inherited from the parent List component.
   * @default false
   */
  dense?: boolean;
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled?: boolean;
  /**
   * If `true`, the left and right padding is removed.
   * @default false
   */
  disableGutters?: boolean;
  /**
   * If `true`, a 1px light border is added to the bottom of the list item.
   * @default false
   */
  divider?: boolean;
  /**
   * Use to apply selected styling.
   * @default false
   */
  selected?: boolean;
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<ThemeOptions>;
  /**
   * The URL to link to when the ListItemButton is clicked.
   */
  href?: string;
}

export function ListItemButton({
  className,
  children,
  ...rest
}: ListItemButtonProps) {
  return (
    <BaseListItemButton
      className={classNames(styles.listItemButton, className)}
      {...rest}
    >
      {children}
    </BaseListItemButton>
  );
}
