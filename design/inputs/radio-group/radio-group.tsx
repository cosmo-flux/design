import {
  RadioGroup as BaseRadioGroup,
  useRadioGroup as baseUseRadioGroup,
  type RadioGroupProps as BaseRadioGroupProps,
} from '@mui/material';
import type { SxProps } from '@mui/system';
import type { Theme as ThemeOptions } from '@mui/material/styles';
import classNames from 'classnames';
import styles from './radio-group.module.scss';

export interface RadioGroupProps extends BaseRadioGroupProps {
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<ThemeOptions>;
  /**
   * A custom classname to style the radio group.
   */
  className?: string;
  /**
   * If `true`, the radio group will be disabled.
   */
  disabled?: boolean;
}

export function RadioGroup({ className, ...rest }: RadioGroupProps) {
  return (
    <BaseRadioGroup
      className={classNames(styles.radioGroup, className)}
      {...rest}
    />
  );
}

export const useRadioGroup = () => {
  const radioGroup = baseUseRadioGroup();
  return radioGroup;
};
