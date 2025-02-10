import {
  AccordionSummary as BaseAccordionSummary,
  type AccordionSummaryProps as BaseAccordionSummaryProps,
  type AccordionSummaryClasses,
} from '@mui/material';
import type { SxProps } from '@mui/system';
import type { Theme as ThemeOptions } from '@mui/material/styles';
import classNames from 'classnames';
import styles from './accordion.module.scss';

export interface AccordionSummaryProps extends BaseAccordionSummaryProps {
  /**
   * The content of the component.
   */
  children: NonNullable<React.ReactNode>;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<AccordionSummaryClasses>;
  /**
   * The icon to display as the expand indicator.
   */
  expandIcon?: React.ReactNode;
  /**
   * If `true`, the expand icon will be displayed at the end of the AccordionSummary.
   * @default false
   */
  expandIconPosition?: 'start' | 'end';
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<ThemeOptions>;
  /**
   * A custom className to apply to the root element.
   */
  className?: string;
}

export function AccordionSummary({
  className,
  children,
  ...rest
}: AccordionSummaryProps) {
  return (
    <BaseAccordionSummary
      className={classNames(styles.accordionSummary, className)}
      {...rest}
    >
      {children}
    </BaseAccordionSummary>
  );
}
