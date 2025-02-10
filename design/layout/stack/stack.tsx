import {
  Stack as BaseStack,
  type StackProps as BaseStackProps,
} from '@mui/material';
import type { SxProps, ResponsiveStyleValue } from '@mui/system';
import type { Theme as ThemeOptions } from '@mui/material/styles';
import classNames from 'classnames';
import styles from './stack.module.scss';

export interface StackProps extends BaseStackProps {
  /**
   * The content of the component.
   */
  children?: React.ReactNode;
  /**
   * Defines the `flex-direction` style property.
   * It is applied for all screen sizes.
   * @default 'column'
   */
  direction?: ResponsiveStyleValue<
    'row' | 'row-reverse' | 'column' | 'column-reverse'
  >;
  /**
   * Defines the space between immediate children.
   * @default 0
   */
  spacing?: ResponsiveStyleValue<number | string>;
  /**
   * Add an element between each child.
   */
  divider?: React.ReactNode;
  /**
   * If `true`, the CSS flexbox `gap` is used instead of applying `margin` to children.
   *
   * While CSS `gap` removes the [known limitations](https://mui.com/joy-ui/react-stack/#limitations),
   * it is not fully supported in some browsers. We recommend checking https://caniuse.com/?search=flex%20gap before using this flag.
   *
   * To enable this flag globally, follow the [theme's default props](https://mui.com/material-ui/customization/theme-components/#default-props) configuration.
   * @default false
   */
  useFlexGap?: boolean;
  /**
   * The system prop, which allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<ThemeOptions>;
  /**
   * A custom classname to style the button.
   */
  className?: string;
}

export function Stack({ className, children, ...rest }: StackProps) {
  return (
    <BaseStack className={classNames(styles.stack, className)} {...rest}>
      {children}
    </BaseStack>
  );
}
