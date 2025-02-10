import {
  Grid2 as BaseGrid,
  type Grid2Props as BaseGridProps,
  type GridSpacing,
  type GridDirection,
  type GridWrap,
  type grid2Classes as GridClasses,
} from '@mui/material';
import type { ResponsiveStyleValue } from '@mui/system';
import classNames from 'classnames';
import styles from './grid.module.scss';

export interface GridProps extends BaseGridProps {
  /**
   * Defines the `direction` style property.
   * It is applied for all screen sizes.
   * @default 'row'
   */
  direction?: GridDirection;
  /**
   * Defines the space between the type `item` components.
   * It can only be used on a type `container` component.
   * @default 0
   */
  spacing?: GridSpacing;

  /**
   * A custom classname to style the grid.
   */
  className?: string;
  /**
   * The content of the component.
   */
  children?: React.ReactNode;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<typeof GridClasses>;
  /**
   * The number of columns.
   * @default 12
   */
  columns?: ResponsiveStyleValue<number>;
  /**
   * Defines the horizontal space between the type `item` components.
   * It overrides the value of the `spacing` prop.
   */
  columnSpacing?: ResponsiveStyleValue<GridSpacing>;
  /**
   * If `true`, the component will have the flex *container* behavior.
   * You should be wrapping *items* with a *container*.
   * @default false
   */
  container?: boolean;
  /**
   * Defines the `flex-direction` style property.
   * It is applied for all screen sizes.
   * @default 'row'
   */
  item?: boolean;
  /**
   * Defines the vertical space between the type `item` components.
   * It overrides the value of the `spacing` prop.
   */
  rowSpacing?: ResponsiveStyleValue<GridSpacing>;
  /**
   * Defines the `flex-wrap` style property.
   * It's applied for all screen sizes.
   * @default 'wrap'
   */
  wrap?: GridWrap;
  /**
   * If `true`, it sets `min-width: 0` on the item.
   * Refer to the limitations section of the documentation to better understand the use case.
   * @default false
   */
  zeroMinWidth?: boolean;
}

export function Grid({ className, children, ...rest }: GridProps) {
  return (
    <BaseGrid className={classNames(styles.grid, className)} {...rest}>
      {children}
    </BaseGrid>
  );
}
