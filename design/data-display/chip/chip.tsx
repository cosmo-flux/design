import {
  Chip as BaseChip,
  type ChipProps as BaseChipProps,
  type ChipClasses,
  type ChipPropsColorOverrides,
  type ChipPropsVariantOverrides,
  type ChipPropsSizeOverrides,
} from '@mui/material';
import type { SxProps } from '@mui/system';
import type { OverridableStringUnion } from '@mui/types';
import type { Theme as ThemeOptions } from '@mui/material/styles';
import classNames from 'classnames';
import styles from './chip.module.scss';

export interface ChipProps extends BaseChipProps {
  /**
   * The Avatar element to display.
   */
  avatar?: React.ReactElement;
  /**
   * This prop isn't supported.
   * Use the `component` prop if you need to change the children structure.
   */
  children?: null;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<ChipClasses>;
  /**
   * If `true`, the chip will appear clickable, and will raise when pressed,
   * even if the onClick prop is not defined.
   * If `false`, the chip will not appear clickable, even if onClick prop is defined.
   * This can be used, for example,
   * along with the component prop to indicate an anchor Chip is clickable.
   * Note: this controls the UI and does not affect the onClick event.
   */
  clickable?: boolean;
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'default'
   */
  color?: OverridableStringUnion<
    | 'default'
    | 'primary'
    | 'secondary'
    | 'error'
    | 'info'
    | 'success'
    | 'warning',
    ChipPropsColorOverrides
  >;
  /**
   * Override the default delete icon element. Shown only if `onDelete` is set.
   */
  deleteIcon?: React.ReactElement;
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled?: boolean;
  /**
   * Icon element.
   */
  icon?: React.ReactElement;
  /**
   * The content of the component.
   */
  label?: React.ReactNode;
  /**
   * Callback fired when the delete icon is clicked.
   * If set, the delete icon will be shown.
   */
  onDelete?: React.EventHandler<any>;
  /**
   * The size of the component.
   * @default 'medium'
   */
  size?: OverridableStringUnion<'small' | 'medium', ChipPropsSizeOverrides>;
  /**
   * If `true`, allows the disabled chip to escape focus.
   * If `false`, allows the disabled chip to receive focus.
   * @default false
   */
  skipFocusWhenDisabled?: boolean;
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<ThemeOptions>;
  /**
   *  @ignore
   */
  tabIndex?: number;
  /**
   * The variant to use.
   * @default 'filled'
   */
  variant?: OverridableStringUnion<
    'filled' | 'outlined',
    ChipPropsVariantOverrides
  >;
  /**
   * The link of the `Chip` when clickable.
   */
  href?: string;
}

export function Chip({ className, children, ...rest }: ChipProps) {
  return (
    <BaseChip className={classNames(styles.chip, className)} {...rest}>
      {children}
    </BaseChip>
  );
}
