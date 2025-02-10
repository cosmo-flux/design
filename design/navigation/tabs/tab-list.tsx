import {
  TabList as BaseTabList,
  type TabListProps as BaseTabListProps,
} from '@mui/lab';
import classNames from 'classnames';
import styles from './tabs.module.scss';

export interface TabListProps extends BaseTabListProps {
  /**
   * A list of `<Tab />` elements.
   */
  children?: React.ReactNode;
  /**
   * A custom className to apply to the root element.
   */
  className?: string;
}

export function TabList({ className, children, ...rest }: TabListProps) {
  return (
    <BaseTabList className={classNames(styles.tabList, className)} {...rest}>
      {children}
    </BaseTabList>
  );
}
