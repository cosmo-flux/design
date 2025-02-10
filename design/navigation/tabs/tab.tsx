import {
  Tab as BaseTab,
  type TabProps as BaseTabProps,
  type TabClasses,
} from '@mui/material';
import type { SxProps } from '@mui/system';
import type { Theme as ThemeOptions } from '@mui/material/styles';
import classNames from 'classnames';
import styles from './tabs.module.scss';

export interface TabProps extends BaseTabProps {
  /**
   * This prop isn't supported.
   * Use the `component` prop if you need to change the children structure.
   */
  children?: null;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<TabClasses>;
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled?: boolean;
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple?: boolean;
  /**
   * The icon to display.
   */
  icon?: string | React.ReactElement;
  /**
   * The position of the icon relative to the label.
   * @default 'top'
   */
  iconPosition?: 'top' | 'bottom' | 'start' | 'end';
  /**
   * The label element.
   */
  label?: React.ReactNode;
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<ThemeOptions>;
  /**
   * You can provide your own value. Otherwise, we fallback to the child position index.
   */
  value?: any;
  /**
   * Tab labels appear in a single row.
   * They can use a second line if needed.
   * @default false
   */
  wrapped?: boolean;
  /**
   * A custom className to apply to the root element.
   */
  className?: string;
}

export function Tab({ className, label, ...rest }: TabProps) {
  return (
    <BaseTab
      className={classNames(styles.tab, className)}
      label={label}
      {...rest}
    />
  );
}
