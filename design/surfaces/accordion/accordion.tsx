import {
  Accordion as BaseAccordion,
  type AccordionProps as BaseAccordionProps,
  type AccordionClasses,
} from '@mui/material';
import type { SxProps } from '@mui/system';
import type { Theme as ThemeOptions } from '@mui/material/styles';
import classNames from 'classnames';
import styles from './accordion.module.scss';

export type { AccordionSlots } from '@mui/material/Accordion';

export interface AccordionProps extends BaseAccordionProps {
  /**
   * The content of the component.
   */
  children: NonNullable<React.ReactNode>;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<AccordionClasses>;
  /**
   * If `true`, expands the accordion by default.
   * @default false
   */
  defaultExpanded?: boolean;
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled?: boolean;
  /**
   * If `true`, it removes the margin between two expanded accordion items and the increase of height.
   * @default false
   */
  disableGutters?: boolean;
  /**
   * If `true`, expands the accordion, otherwise collapse it.
   * Setting this prop enables control over the accordion.
   */
  expanded?: boolean;
  /**
   * Callback fired when the expand/collapse state is changed.
   *
   * @param {React.SyntheticEvent} event The event source of the callback. **Warning**: This is a generic event not a change event.
   * @param {boolean} expanded The `expanded` state of the accordion.
   */
  onChange?: (event: React.SyntheticEvent, expanded: boolean) => void;
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<ThemeOptions>;
  /**
   * A custom className to apply to the root element.
   */
  className?: string;
}

export function Accordion({ className, children, ...rest }: AccordionProps) {
  return (
    <BaseAccordion
      className={classNames(styles.accordion, className)}
      {...rest}
    >
      {children}
    </BaseAccordion>
  );
}
