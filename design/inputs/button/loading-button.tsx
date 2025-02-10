import {
  LoadingButton as BaseLoadingButton,
  type LoadingButtonProps as BaseLoadingButtonProps,
} from '@mui/lab';
import type { SxProps } from '@mui/system';
import type { Theme as ThemeOptions } from '@mui/material/styles';
import classNames from 'classnames';
import styles from './button.module.scss';
import type { ButtonClasses } from './button.js';

export interface LoadingButtonProps extends BaseLoadingButtonProps {
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<ButtonClasses> & {
    /** Styles applied to the root element. */
    root?: string;
    /** Styles applied to the root element if `loading={true}`. */
    loading?: string;
    /** Styles applied to the loadingIndicator element. */
    loadingIndicator?: string;
    /** Styles applied to the loadingIndicator element if `loadingPosition="center"`. */
    loadingIndicatorCenter?: string;
    /** Styles applied to the loadingIndicator element if `loadingPosition="start"`. */
    loadingIndicatorStart?: string;
    /** Styles applied to the loadingIndicator element if `loadingPosition="end"`. */
    loadingIndicatorEnd?: string;
    /** Styles applied to the endIcon element if `loading={true}` and `loadingPosition="end"`. */
    endIconLoadingEnd?: string;
    /** Styles applied to the startIcon element if `loading={true}` and `loadingPosition="start"`. */
    startIconLoadingStart?: string;
  };
  /**
   * If `true`, the loading indicator is shown and the button becomes disabled.
   * @default false
   */
  loading?: boolean;
  /**
   * Element placed before the children if the button is in loading state.
   * The node should contain an element with `role="progressbar"` with an accessible name.
   * By default we render a `CircularProgress` that is labelled by the button itself.
   * @default <CircularProgress color="inherit" size={16} />
   */
  loadingIndicator?: React.ReactNode;
  /**
   * The loading indicator can be positioned on the start, end, or the center of the button.
   * @default 'center'
   */
  loadingPosition?: 'start' | 'end' | 'center';
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<ThemeOptions>;
  /**
   * The URL to link to when the button is clicked.
   */
  href?: string;
  /**
   * A custom classname to style the button.
   */
  className?: string;
}

export function LoadingButton({
  className,
  children,
  ...rest
}: LoadingButtonProps) {
  return (
    <BaseLoadingButton
      className={classNames(styles.button, className)}
      {...rest}
    >
      {children}
    </BaseLoadingButton>
  );
}
