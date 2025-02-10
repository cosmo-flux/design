import {
  Toolbar as BaseToolbar,
  type ToolbarProps as BaseToolbarProps,
  type ToolbarClasses,
  type ToolbarPropsVariantOverrides,
} from '@mui/material';
import type { SxProps } from '@mui/system';
import type { OverridableStringUnion } from '@mui/types';
import type { Theme as ThemeOptions } from '@mui/material/styles';
import classNames from 'classnames';
import styles from './app-bar.module.scss';

export interface ToolbarProps extends BaseToolbarProps {
  /**
   * The content of the component.
   */
  children: NonNullable<React.ReactNode>;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<ToolbarClasses>;
  /**
   * If `true`, the component will have a gutter for padding.
   * @default true
   */
  disableGutters?: boolean;
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<ThemeOptions>;
  /**
   * The variant to use.
   * @default 'regular'
   */
  variant?: OverridableStringUnion<
    'regular' | 'dense',
    ToolbarPropsVariantOverrides
  >;
  /**
   * A custom className to apply to the root element.
   */
  className?: string;
}

export function Toolbar({ className, children, ...rest }: ToolbarProps) {
  return (
    <BaseToolbar className={classNames(styles.toolbar, className)} {...rest}>
      {children}
    </BaseToolbar>
  );
}
