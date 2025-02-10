import {
  AccordionDetails as BaseAccordionDetails,
  type AccordionDetailsProps as BaseAccordionDetailsProps,
  type AccordionDetailsClasses,
} from '@mui/material';
import type { SxProps } from '@mui/system';
import type { Theme as ThemeOptions } from '@mui/material/styles';
import classNames from 'classnames';
import styles from './accordion.module.scss';

export interface AccordionDetailsProps extends BaseAccordionDetailsProps {
  /**
   * The content of the component.
   */
  children: NonNullable<React.ReactNode>;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<AccordionDetailsClasses>;
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<ThemeOptions>;
  /**
   * A custom className to apply to the root element.
   */
  className?: string;
}

export function AccordionDetails({
  className,
  children,
  ...rest
}: AccordionDetailsProps) {
  return (
    <BaseAccordionDetails
      className={classNames(styles.accordionDetails, className)}
      {...rest}
    >
      {children}
    </BaseAccordionDetails>
  );
}
