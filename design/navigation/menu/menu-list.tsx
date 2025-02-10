import {
  MenuList as BaseMenuList,
  type MenuListProps as BaseMenuListProps,
} from '@mui/material';
import classNames from 'classnames';
import styles from './menu.module.scss';

export interface MenuListProps extends BaseMenuListProps {
  /**
   * If `true`, will focus the `[role="menu"]` container and move into tab order.
   * @default false
   */
  autoFocus?: boolean;
  /**
   * If `true`, will focus the first menuitem if `variant="menu"` or selected item
   * if `variant="selectedMenu"`.
   * @default false
   */
  autoFocusItem?: boolean;
  /**
   * MenuList contents, normally `MenuItem`s.
   */
  children?: React.ReactNode;
  /**
   * If `true`, will allow focus on disabled items.
   * @default false
   */
  disabledItemsFocusable?: boolean;
  /**
   * If `true`, the menu items will not wrap focus.
   * @default false
   */
  disableListWrap?: boolean;
  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus
   * and the vertical alignment relative to the anchor element.
   * @default 'selectedMenu'
   */
  variant?: 'menu' | 'selectedMenu';
  /**
   * A custom className to apply to the root component.
   */
  className?: string;
}

export function MenuList({ className, children, ...rest }: MenuListProps) {
  return (
    <BaseMenuList className={classNames(styles.menuList, className)} {...rest}>
      {children}
    </BaseMenuList>
  );
}
