import {
  ListItemAvatar as BaseListItemAvatar,
  type ListItemAvatarProps as BaseListItemAvatarProps,
  type ListItemAvatarClasses,
} from '@mui/material';
import type { SxProps } from '@mui/system';
import type { Theme as ThemeOptions } from '@mui/material/styles';
import classNames from 'classnames';
import styles from './list.module.scss';

export interface ListItemAvatarProps extends BaseListItemAvatarProps {
  /**
   * The content of the component, normally an `Avatar`.
   */
  children?: React.ReactNode;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<ListItemAvatarClasses>;
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<ThemeOptions>;
}

export function ListItemAvatar({
  className,
  children,
  ...rest
}: ListItemAvatarProps) {
  return (
    <BaseListItemAvatar
      className={classNames(styles.listItemAvatar, className)}
      {...rest}
    >
      {children}
    </BaseListItemAvatar>
  );
}
