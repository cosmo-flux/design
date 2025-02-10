import {
  AccordionActions as BaseAccordionActions,
  type AccordionActionsProps as BaseAccordionActionsProps,
  type AccordionActionsClasses,
} from '@mui/material';
import type { SxProps } from '@mui/system';
import type { Theme as ThemeOptions } from '@mui/material/styles';
import classNames from 'classnames';
import styles from './accordion.module.scss';

export interface AccordionActionsProps extends BaseAccordionActionsProps {
  /**
   * The content of the component.
   */
  children?: React.ReactNode;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<AccordionActionsClasses>;
  /**
   * If `true`, the actions do not have additional margin.
   * @default false
   */
  disableSpacing?: boolean;
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<ThemeOptions>;
  /**
   * A custom className to apply to the root element.
   */
  className?: string;
}

export function AccordionActions({
  className,
  children,
  ...rest
}: AccordionActionsProps) {
  return (
    <BaseAccordionActions
      className={classNames(styles.accordionActions, className)}
      {...rest}
    >
      {children}
    </BaseAccordionActions>
  );
}
