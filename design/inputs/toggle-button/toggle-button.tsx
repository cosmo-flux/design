import * as React from 'react';
import {
  ToggleButton as BaseToggleButton,
  type ToggleButtonProps as BaseToggleButtonProps,
  type ToggleButtonClassKey,
} from '@mui/material';
import type { OverridableStringUnion } from '@mui/types';
import type { SxProps } from '@mui/system';
import type { Theme as ThemeOptions } from '@mui/material/styles';
import classNames from 'classnames';
import styles from './toggle-button.module.scss';

export interface ToggleButtonProps extends BaseToggleButtonProps {
  /**
   * The content of the component.
   */
  children: React.ReactNode;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<Record<ToggleButtonClassKey, string>>;
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled?: boolean;
  /**
   * If `true`, the button will be rendered in an active state.
   * @default false
   */
  selected?: boolean;
  /**
   * The size of the component.
   * @default 'medium'
   */
  size?: OverridableStringUnion<
    'small' | 'medium' | 'large',
    Record<string, never>
  >;
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<ThemeOptions>;
  /**
   * A custom classname to style the button.
   */
  className?: string;
}

export function ToggleButton({
  className,
  children,
  ...rest
}: ToggleButtonProps) {
  return (
    <BaseToggleButton
      className={classNames(styles.toggleButton, className)}
      {...rest}
    >
      {children}
    </BaseToggleButton>
  );
}
