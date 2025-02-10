import * as React from 'react';
import { Card } from '@cosmo-flux/design.surfaces.card';
import { Box } from '@cosmo-flux/design.layout.box';
import { Chip } from '@cosmo-flux/design.data-display.chip';
import { Stack } from '@cosmo-flux/design.layout.stack';
import { Typography } from '@cosmo-flux/design.data-display.typography';
import { List, ListItem, ListItemText } from '@mui/material';
import {
  FormatAlignLeft as FormatAlignLeftIcon,
  FormatAlignCenter as FormatAlignCenterIcon,
  FormatAlignRight as FormatAlignRightIcon,
  FormatBold as FormatBoldIcon,
  FormatItalic as FormatItalicIcon,
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { Divider } from './divider.js';

/**
 * Introduction
 */
export function Introduction() {
  return (
    <Card variant="outlined" sx={{ maxWidth: 360 }}>
      <Box sx={{ p: 2 }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography gutterBottom variant="h5" component="div">
            Toothbrush
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            $4.50
          </Typography>
        </Stack>
        <Typography color="text.secondary" variant="body2">
          Pinstriped cornflower blue cotton blouse takes you on a walk to the
          park or just down the hall.
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ p: 2 }}>
        <Typography gutterBottom variant="body2">
          Select type
        </Typography>
        <Stack direction="row" spacing={1}>
          <Chip color="primary" label="Soft" size="small" />
          <Chip label="Medium" size="small" />
          <Chip label="Hard" size="small" />
        </Stack>
      </Box>
    </Card>
  );
}

/**
 * The Divider component supports three variants: fullWidth (default), inset, and middle.
 */
export function DividerVariants() {
  const style = {
    py: 0,
    width: '100%',
    maxWidth: 360,
    borderRadius: 2,
    border: '1px solid',
    borderColor: 'divider',
    backgroundColor: 'background.paper',
  };
  return (
    <List sx={style}>
      <ListItem>
        <ListItemText primary="Full width variant below" />
      </ListItem>
      <Divider component="li" />
      <ListItem>
        <ListItemText primary="Inset variant below" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemText primary="Middle variant below" />
      </ListItem>
      <Divider variant="middle" component="li" />
      <ListItem>
        <ListItemText primary="List item" />
      </ListItem>
    </List>
  );
}
/**
 * Use the `orientation` prop to change the Divider from horizontal to vertica
 */
export function VerticalDividers() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 1,
        bgcolor: 'background.paper',
        color: 'text.secondary',
        '& svg': {
          m: 1,
        },
        '& hr': {
          mx: 0.5,
        },
      }}
    >
      <FormatAlignLeftIcon />
      <FormatAlignCenterIcon />
      <FormatAlignRightIcon />
      <Divider orientation="vertical" flexItem />
      <FormatBoldIcon />
    </Box>
  );
}

/**
 * Use the flexItem prop to display the Divider when it's being used in a flex container.
 */
export function FlexDivider() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 2,
        bgcolor: 'background.paper',
        color: 'text.secondary',
        '& svg': {
          m: 1,
        },
      }}
    >
      <FormatBoldIcon />
      <Divider orientation="vertical" variant="middle" flexItem />
      <FormatItalicIcon />
    </Box>
  );
}

/**
 * Use the textAlign prop to align elements that are wrapped by the Divider.
 */
export function DividerText() {
  const content = (
    <p>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}</p>
  );

  const Root = styled('div')(({ theme }) => ({
    width: '100%',
    ...theme.typography.body2,
    color: theme.palette.text.secondary,
    '& > :not(style) ~ :not(style)': {
      marginTop: theme.spacing(2),
    },
  }));

  return (
    <Root>
      {content}
      <Divider>CENTER</Divider>
      {content}
      <Divider textAlign="left">LEFT</Divider>
      {content}
      <Divider textAlign="right">RIGHT</Divider>
      {content}
      <Divider>
        <Chip label="Chip" size="small" />
      </Divider>
      {content}
    </Root>
  );
}
/**
 * When using the Divider to separate items in a List, use the component prop to render it as an <li>—otherwise it won't be a valid HTML element.
 */
export function ListDividers() {
  const style = {
    p: 0,
    width: '100%',
    maxWidth: 360,
    borderRadius: 2,
    border: '1px solid',
    borderColor: 'divider',
    backgroundColor: 'background.paper',
  };

  return (
    <List sx={style} aria-label="mailbox folders">
      <ListItem>
        <ListItemText primary="Inbox" />
      </ListItem>
      <Divider component="li" />
      <ListItem>
        <ListItemText primary="Drafts" />
      </ListItem>
      <Divider component="li" />
      <ListItem>
        <ListItemText primary="Trash" />
      </ListItem>
      <Divider component="li" />
      <ListItem>
        <ListItemText primary="Spam" />
      </ListItem>
    </List>
  );
}
/**
 * The demo below shows how to combine the props `variant="middle"` and `orientation="vertical`".
 */
export function VerticalDividerMiddle() {
  return (
    <Card
      variant="outlined"
      sx={{
        display: 'flex',
        color: 'text.secondary',
        '& svg': {
          m: 1,
        },
        '& hr': {
          mx: 0.5,
        },
      }}
    >
      <FormatAlignLeftIcon />
      <FormatAlignCenterIcon />
      <FormatAlignRightIcon />
      <Divider orientation="vertical" variant="middle" flexItem />
      <FormatBoldIcon />
    </Card>
  );
}
