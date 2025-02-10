import type { CSSProperties } from 'react';
import {
  Typography as BaseTypography,
  type TypographyProps as BaseTypographyProps,
  type TypographyClasses,
} from '@mui/material';
import { OverridableStringUnion } from '@mui/types';
import type {
  TypographyVariantsOptions as BaseTypographyVariantsOptions,
  TypographyVariant as Variant,
} from '@mui/material/styles';
import classNames from 'classnames';
import styles from './typography.module.scss';

interface CustomTypographyPropsVariantOverrides {
  handwriting: true;
}

/**
 * merge the custom variant overrides with the default variant overrides
 */
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides
    extends CustomTypographyPropsVariantOverrides {}
}

export interface TypographyVariantsOptions
  extends BaseTypographyVariantsOptions {
  handwriting?: CSSProperties;
}

export interface TypographyProps extends BaseTypographyProps {
  /**
   * Set the text-align on the component.
   * @default 'inherit'
   */
  align?: 'inherit' | 'left' | 'center' | 'right' | 'justify';
  /**
   * The content of the component.
   */
  children?: React.ReactNode;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<TypographyClasses>;
  /**
   * If `true`, the text will have a bottom margin.
   * @default false
   */
  gutterBottom?: boolean;
  /**
   * If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis.
   *
   * Note that text overflow can only happen with block or inline-block level elements
   * (the element needs to have a width in order to overflow).
   * @default false
   */
  noWrap?: boolean;
  /**
   * If `true`, the element will be a paragraph element.
   * @default false
   */
  paragraph?: boolean;
  variant?: OverridableStringUnion<
    Variant | 'inherit',
    CustomTypographyPropsVariantOverrides
  >;
  /**
   * The component maps the variant prop to a range of different HTML element types.
   * For instance, subtitle1 to `<h6>`.
   * If you wish to change that mapping, you can provide your own.
   * Alternatively, you can use the `component` prop.
   * @default {
   *   h1: 'h1',
   *   h2: 'h2',
   *   h3: 'h3',
   *   h4: 'h4',
   *   h5: 'h5',
   *   h6: 'h6',
   *   subtitle1: 'h6',
   *   subtitle2: 'h6',
   *   body1: 'p',
   *   body2: 'p',
   *   inherit: 'p',
   * }
   */
  variantMapping?: Partial<
    Record<
      OverridableStringUnion<
        Variant | 'inherit',
        CustomTypographyPropsVariantOverrides
      >,
      string
    >
  >;
  /**
   * a custom className to apply to the root component
   */
  className?: string;
}

export function Typography({ className, children, ...rest }: TypographyProps) {
  return (
    <BaseTypography
      className={classNames(styles.typography, className)}
      {...rest}
    >
      {children}
    </BaseTypography>
  );
}
