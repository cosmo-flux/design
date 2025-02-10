import {
  TabPanel as BaseTabPanel,
  type TabPanelProps as BaseTabPanelProps,
  type TabPanelClasses,
} from '@mui/lab';
import type { SxProps } from '@mui/system';
import type { Theme as ThemeOptions } from '@mui/material/styles';
import classNames from 'classnames';
import styles from './tabs.module.scss';

export interface TabPanelProps extends BaseTabPanelProps {
  /**
   * The content of the component.
   */
  children?: React.ReactNode;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<TabPanelClasses>;
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<ThemeOptions>;
  /**
   * The `value` of the corresponding `Tab`. Must use the index of the `Tab` when
   * no `value` was passed to `Tab`.
   */
  value: string;
  /**
   * A custom className to apply to the root element.
   */
  className?: string;
}

export function TabPanel({ className, children, ...rest }: TabPanelProps) {
  return (
    <BaseTabPanel className={classNames(styles.tabPanel, className)} {...rest}>
      {children}
    </BaseTabPanel>
  );
}
