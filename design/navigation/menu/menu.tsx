import {
  Menu as BaseMenu,
  type MenuProps as BaseMenuProps,
  type MenuClasses,
} from '@mui/material';
import type { PopoverProps } from '@mui/material/Popover';
import type { SxProps } from '@mui/system';
import type { Theme as ThemeOptions } from '@mui/material/styles';
import classNames from 'classnames';
import type { MenuListProps } from './menu-list.js';
import styles from './menu.module.scss';

export interface MenuProps extends BaseMenuProps {
  /**
   * An HTML element, or a function that returns one.
   * It's used to set the position of the menu.
   */
  anchorEl?: PopoverProps['anchorEl'];
  /**
   * If `true` (Default) will focus the `[role="menu"]` if no focusable child is found. Disabled
   * children are not focusable. If you set this prop to `false` focus will be placed
   * on the parent modal container. This has severe accessibility implications
   * and should only be considered if you manage focus otherwise.
   * @default true
   */
  autoFocus?: boolean;
  /**
   * Menu contents, normally `MenuItem`s.
   */
  children?: React.ReactNode;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<MenuClasses>;
  /**
   * When opening the menu will not focus the active item but the `[role="menu"]`
   * unless `autoFocus` is also set to `false`. Not using the default means not
   * following WAI-ARIA authoring practices. Please be considerate about possible
   * accessibility implications.
   * @default false
   */
  disableAutoFocusItem?: boolean;
  /**
   * Props applied to the [`MenuList`](/material-ui/api/menu-list/) element.
   * @default {}
   */
  MenuListProps?: Partial<MenuListProps>;
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`, `"tabKeyDown"`.
   */
  onClose?: PopoverProps['onClose'];
  /**
   * If `true`, the component is shown.
   */
  open: boolean;
  /**
   * `classes` prop applied to the [`Popover`](/material-ui/api/popover/) element.
   */
  PopoverClasses?: PopoverProps['classes'];
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<ThemeOptions>;
  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus.
   * @default 'selectedMenu'
   */
  variant?: 'menu' | 'selectedMenu';
  /**
   * A custom className to apply to the root component.
   */
  className?: string;
}

export function Menu({ className, children, ...rest }: MenuProps) {
  return (
    <BaseMenu className={classNames(styles.menu, className)} {...rest}>
      {children}
    </BaseMenu>
  );
}
