/**
 * This file is used only for documentation purposes
 */

import { styled } from '@mui/material/styles';
import { Paper } from '@mui/material';

export const Item: any = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));
