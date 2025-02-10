import { Box as BaseBox, type BoxProps as BaseBoxProps } from '@mui/material';
import type { SxProps } from '@mui/system';
import type { Theme as ThemeOptions } from '@mui/material/styles';
import type { ElementType } from 'react';
import classNames from 'classnames';
import styles from './box.module.scss';

export interface BoxProps extends BaseBoxProps {
  /**
   * The content of the component.
   */
  children?: React.ReactNode;
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<ThemeOptions>;
  /**
   * A custom classname to style the button.
   */
  className?: string;
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component?: ElementType;
}

export function Box({ className, children, ...rest }: BoxProps) {
  return (
    <BaseBox className={classNames(styles.box, className)} {...rest}>
      {children}
    </BaseBox>
  );
}
