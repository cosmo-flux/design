import {
  MenuItem as BaseMenuItem,
  type MenuItemProps as BaseMenuItemProps,
  type MenuItemClasses,
} from '@mui/material';
import type { SxProps } from '@mui/system';
import type { Theme as ThemeOptions } from '@mui/material/styles';
import classNames from 'classnames';
import styles from './menu.module.scss';

export interface MenuItemProps extends BaseMenuItemProps {
  /**
   * If `true`, the list item is focused during the first mount.
   * Focus will also be triggered if the value changes from false to true.
   * @default false
   */
  autoFocus?: boolean;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<MenuItemClasses>;
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used.
   * The prop defaults to the value inherited from the parent Menu component.
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
   * If `true`, a 1px light border is added to the bottom of the menu item.
   * @default false
   */
  divider?: boolean;
  /**
   * If `true`, the component is selected.
   * @default false
   */
  selected?: boolean;
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<ThemeOptions>;
  /**
   *  A link to navigate with react-router
   */
  href?: string;
  /**
   * A custom className to apply to the root component.
   */
  className?: string;
}

export function MenuItem({ className, children, ...rest }: MenuItemProps) {
  return (
    <BaseMenuItem className={classNames(styles.menuItem, className)} {...rest}>
      {children}
    </BaseMenuItem>
  );
}
