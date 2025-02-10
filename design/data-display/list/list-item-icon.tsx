import {
  ListItemIcon as BaseListItemIcon,
  type ListItemIconProps as BaseListItemIconProps,
  type ListItemIconClasses,
} from '@mui/material';
import type { SxProps } from '@mui/system';
import type { Theme as ThemeOptions } from '@mui/material/styles';
import classNames from 'classnames';
import styles from './list.module.scss';

export interface ListItemIconProps extends BaseListItemIconProps {
  /**
   * The content of the component, normally `Icon`, `SvgIcon`,
   * or a `@mui/icons-material` SVG icon element.
   */
  children?: React.ReactNode;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<ListItemIconClasses>;
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<ThemeOptions>;
}

export function ListItemIcon({
  className,
  children,
  ...rest
}: ListItemIconProps) {
  return (
    <BaseListItemIcon
      className={classNames(styles.listItemIcon, className)}
      {...rest}
    >
      {children}
    </BaseListItemIcon>
  );
}
