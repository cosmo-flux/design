import {
  Rating as BaseRating,
  type RatingProps as BaseRatingProps,
  type RatingPropsSizeOverrides,
  type IconContainerProps as BaseIconContainerProps,
  type RatingClasses,
} from '@mui/material';
import type { OverridableStringUnion } from '@mui/types';
import type { SxProps } from '@mui/system';
import type { Theme as ThemeOptions } from '@mui/material/styles';
import classNames from 'classnames';
import styles from './rating.module.scss';

export interface IconContainerProps extends BaseIconContainerProps {
  value: number;
}

export interface RatingProps extends BaseRatingProps {
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<RatingClasses>;
  /**
   * The default value. Use when the component is not controlled.
   * @default null
   */
  defaultValue?: number;
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled?: boolean;
  /**
   * The icon to display when empty.
   * @default <StarBorder fontSize="inherit" />
   */
  emptyIcon?: React.ReactNode;
  /**
   * The label read when the rating input is empty.
   * @default 'Empty'
   */
  emptyLabelText?: React.ReactNode;
  /**
   * Accepts a function which returns a string value that provides a user-friendly name for the current value of the rating.
   * This is important for screen reader users.
   *
   * For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).
   * @param {number} value The rating label's value to format.
   * @returns {string}
   * @default function defaultLabelText(value) {
   *   return `${value} Star${value !== 1 ? 's' : ''}`;
   * }
   */
  getLabelText?: (value: number) => string;
  /**
   * If `true`, only the selected icon will be highlighted.
   * @default false
   */
  highlightSelectedOnly?: boolean;
  /**
   * The icon to display.
   * @default <Star fontSize="inherit" />
   */
  icon?: React.ReactNode;
  /**
   * The component containing the icon.
   * @default function IconContainer(props) {
   *   const { value, ...other } = props;
   *   return <span {...other} />;
   * }
   */
  IconContainerComponent?: React.ElementType<IconContainerProps>;
  /**
   * Maximum rating.
   * @default 5
   */
  max?: number;
  /**
   * The name attribute of the radio `input` elements.
   * This input `name` should be unique within the page.
   * Being unique within a form is insufficient since the `name` is used to generated IDs.
   */
  name?: string;
  /**
   * Callback fired when the value changes.
   * @param {React.SyntheticEvent} event The event source of the callback.
   * @param {number|null} value The new value.
   */
  onChange?: (event: React.SyntheticEvent, value: number | null) => void;
  /**
   * Callback function that is fired when the hover state changes.
   * @param {React.SyntheticEvent} event The event source of the callback.
   * @param {number} value The new value.
   */
  onChangeActive?: (event: React.SyntheticEvent, value: number) => void;
  /**
   * The minimum increment value change allowed.
   * @default 1
   */
  precision?: number;
  /**
   * Removes all hover effects and pointer events.
   * @default false
   */
  readOnly?: boolean;
  /**
   * The size of the component.
   * @default 'medium'
   */
  size?: OverridableStringUnion<
    'small' | 'medium' | 'large',
    RatingPropsSizeOverrides
  >;
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<ThemeOptions>;
  /**
   * The rating value.
   */
  value?: number | null;
  /**
   * A custom classname to style the button.
   */
  className?: string;
}

export function Rating({ className, ...rest }: RatingProps) {
  return (
    <BaseRating className={classNames(styles.rating, className)} {...rest} />
  );
}
