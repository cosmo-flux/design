import {
  TabScrollButton as BaseTabScrollButton,
  type TabScrollButtonProps as BaseTabScrollButtonProps,
  type TabScrollButtonClasses,
} from '@mui/material';
import type { SxProps } from '@mui/system';
import type { Theme as ThemeOptions } from '@mui/material/styles';
import classNames from 'classnames';
import styles from './tabs.module.scss';

export interface TabScrollButtonProps extends BaseTabScrollButtonProps {
  /**
   * The content of the component.
   */
  children?: React.ReactNode;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<TabScrollButtonClasses>;
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots?: {
    StartScrollButtonIcon?: React.ElementType;
    EndScrollButtonIcon?: React.ElementType;
  };
  /**
   * The direction the button should indicate.
   */
  direction: 'left' | 'right';
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled?: boolean;
  /**
   * The component orientation (layout flow direction).
   */
  orientation: 'horizontal' | 'vertical';
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<ThemeOptions>;
  /**
   * A custom className to apply to the root element.
   */
  className?: string;
}

export function TabScrollButton({
  className,
  children,
  ...rest
}: TabScrollButtonProps) {
  return (
    <BaseTabScrollButton
      className={classNames(styles.tabScrollButton, className)}
      {...rest}
    >
      {children}
    </BaseTabScrollButton>
  );
}
