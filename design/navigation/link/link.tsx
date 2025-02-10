import {
  Link as BaseLink,
  type LinkProps as BaseLinkProps,
  type LinkClasses,
  type TypographyProps,
} from '@mui/material';
import type { SxProps } from '@mui/system';
import type { Theme as ThemeOptions } from '@mui/material/styles';
import classNames from 'classnames';
import styles from './link.module.scss';

export interface LinkProps extends BaseLinkProps {
  /**
   * The content of the component.
   */
  children?: React.ReactNode;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<LinkClasses>;
  /**
   * The color of the link.
   * @default 'primary'
   */
  color?: TypographyProps['color'];
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<ThemeOptions>;
  /**
   * `classes` prop applied to the [`Typography`](/material-ui/api/typography/) element.
   */
  TypographyClasses?: TypographyProps['classes'];
  /**
   * Controls when the link should have an underline.
   * @default 'always'
   */
  underline?: 'none' | 'hover' | 'always';
  /**
   * Applies the theme typography styles.
   * @default 'inherit'
   */
  variant?: TypographyProps['variant'];
  /**
   * The path to link to (to use with react-router).
   */
  href?: string;
  /**
   * A custom className to apply to the root component.
   */
  className?: string;
}

export function Link({ className, children, ...rest }: LinkProps) {
  return (
    <BaseLink className={classNames(styles.link, className)} {...rest}>
      {children}
    </BaseLink>
  );
}
