import * as React from 'react';
import {
  Done as DoneIcon,
  Delete as DeleteIcon,
  Face as FaceIcon,
  TagFaces as TagFacesIcon,
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { Paper } from '@cosmo-flux/design.surfaces.paper';
import { Box } from '@cosmo-flux/design.layout.box';
import { Avatar } from '@cosmo-flux/design.data-display.avatar';
import { Stack } from '@cosmo-flux/design.layout.stack';
import { Chip } from './chip.js';

/**
 * The Chip component supports outlined and filled styling.
 */
export function BasicChips() {
  return (
    <Stack direction="row" spacing={1}>
      <Chip label="Chip Filled" />
      <Chip label="Chip Outlined" variant="outlined" />
    </Stack>
  );
}

/**
 *
 * Chips with the `onClick` prop defined change appearance on focus, hover, and click.
 */
export function ClickableChips() {
  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  return (
    <Stack direction="row" spacing={1}>
      <Chip label="Clickable" onClick={handleClick} />
      <Chip label="Clickable" variant="outlined" onClick={handleClick} />
    </Stack>
  );
}

/**
 * Chips with the `onDelete` prop defined will display a delete icon which changes appearance on hover.
 */
export function DeletableChips() {
  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  return (
    <Stack direction="row" spacing={1}>
      <Chip label="Deletable" onDelete={handleDelete} />
      <Chip label="Deletable" variant="outlined" onDelete={handleDelete} />
    </Stack>
  );
}

/**
 * Chips with both the `onClick` and `onDelete` props defined will change appearance on focus, hover, and click, and display a delete icon which changes appearance on hover.
 */
export function ClickableAndDeletableChips() {
  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  return (
    <Stack direction="row" spacing={1}>
      <Chip
        label="Clickable Deletable"
        onClick={handleClick}
        onDelete={handleDelete}
      />
      <Chip
        label="Clickable Deletable"
        variant="outlined"
        onClick={handleClick}
        onDelete={handleDelete}
      />
    </Stack>
  );
}

/**
 * Chips clickable with a link.
 */
export function ClickableLinkChips() {
  return (
    <Stack direction="row" spacing={1}>
      <Chip label="Clickable Link" component="a" href="#basic-chip" clickable />
      <Chip
        label="Clickable Link"
        component="a"
        href="#basic-chip"
        variant="outlined"
        clickable
      />
    </Stack>
  );
}

/**
 * Custom delete icon.
 */
export function CustomDeleteIconChips() {
  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  return (
    <Stack direction="row" spacing={1}>
      <Chip
        label="Custom delete icon"
        onClick={handleClick}
        onDelete={handleDelete}
        deleteIcon={<DoneIcon />}
      />
      <Chip
        label="Custom delete icon"
        onClick={handleClick}
        onDelete={handleDelete}
        deleteIcon={<DeleteIcon />}
        variant="outlined"
      />
    </Stack>
  );
}

/**
 * Chip with an avatar.
 */
export function AvatarChips() {
  return (
    <Stack direction="row" spacing={1}>
      <Chip avatar={<Avatar>M</Avatar>} label="Avatar" />
      <Chip
        avatar={<Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />}
        label="Avatar"
        variant="outlined"
      />
    </Stack>
  );
}

/**
 * Chip with an icon.
 */
export function IconChips() {
  return (
    <Stack direction="row" spacing={1}>
      <Chip icon={<FaceIcon />} label="With Icon" />
      <Chip icon={<FaceIcon />} label="With Icon" variant="outlined" />
    </Stack>
  );
}

/**
 * You can use the color prop to define a color from theme palette.
 */
export function ColorChips() {
  return (
    <Stack spacing={1} alignItems="center">
      <Stack direction="row" spacing={1}>
        <Chip label="primary" color="primary" />
        <Chip label="success" color="success" />
      </Stack>
      <Stack direction="row" spacing={1}>
        <Chip label="primary" color="primary" variant="outlined" />
        <Chip label="success" color="success" variant="outlined" />
      </Stack>
    </Stack>
  );
}

/**
 *  You can use the size prop to define a small Chip.
 **/
export function SizesChips() {
  return (
    <Stack direction="row" spacing={1}>
      <Chip label="Small" size="small" />
      <Chip label="Small" size="small" variant="outlined" />
    </Stack>
  );
}

/**
 * By default, Chips displays labels only in a single line. To have them support multiline content, use the sx prop to add height:auto to the Chip component, and whiteSpace: normal to the label styles.
 */
export function MultilineChips() {
  return (
    <Box sx={{ width: 100 }}>
      <Chip
        sx={{
          height: 'auto',
          '& .MuiChip-label': {
            display: 'block',
            whiteSpace: 'normal',
          },
        }}
        label="This is a chip that has multiple lines."
      />
    </Box>
  );
}

interface ChipData {
  key: number;
  label: string;
}

const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

/**
 * An example of rendering multiple chips from an array of values.
 * Deleting a chip removes it from the array. Note that since no onClick prop is defined, the Chip can be focused, but does not gain depth while clicked or touched.
 */
export default function ChipsArray() {
  const [chipData, setChipData] = React.useState<readonly ChipData[]>([
    { key: 0, label: 'Angular' },
    { key: 1, label: 'jQuery' },
    { key: 2, label: 'Polymer' },
    { key: 3, label: 'React' },
    { key: 4, label: 'Vue.js' },
  ]);

  const handleDelete = (chipToDelete: ChipData) => () => {
    setChipData((chips) =>
      chips.filter((chip) => chip.key !== chipToDelete.key)
    );
  };

  return (
    <Paper
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        listStyle: 'none',
        p: 0.5,
        m: 0,
      }}
      component="ul"
    >
      {chipData.map((data) => {
        let icon;

        if (data.label === 'React') {
          icon = <TagFacesIcon />;
        }

        return (
          <ListItem key={data.key}>
            <Chip
              icon={icon}
              label={data.label}
              onDelete={data.label === 'React' ? undefined : handleDelete(data)}
            />
          </ListItem>
        );
      })}
    </Paper>
  );
}
