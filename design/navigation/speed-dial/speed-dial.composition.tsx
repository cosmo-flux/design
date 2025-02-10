import * as React from 'react';
import { Box } from '@cosmo-flux/design.layout.box';
import {
  Save as SaveIcon,
  FileCopy as FileCopyIcon,
  Print as PrintIcon,
  Share as ShareIcon,
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import {
  FormControl,
  FormControlLabel,
  FormLabel,
} from '@cosmo-flux/design.inputs.form';
import { RadioGroup, Radio } from '@cosmo-flux/design.inputs.radio-group';
import { Switch } from '@cosmo-flux/design.inputs.switch';
import { Backdrop } from '@cosmo-flux/design.feedback.backdrop';
import { SpeedDial, type SpeedDialProps } from './speed-dial.js';
import { SpeedDialIcon } from './speed-dial-icon.js';
import { SpeedDialAction } from './speed-dial-action.js';

const actions = [
  { icon: <FileCopyIcon />, name: 'Copy' },
  { icon: <SaveIcon />, name: 'Save' },
  { icon: <PrintIcon />, name: 'Print' },
  { icon: <ShareIcon />, name: 'Share' },
];

export function BasicSpeedDial() {
  return (
    <Box
      sx={{
        height: 320,
        transform: 'translateZ(0px)',
        flexGrow: 1,
        minWidth: 300,
      }}
    >
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}

/**
 * Playground
 */
export function PlaygroundSpeedDial() {
  const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
    position: 'absolute',
    '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
    '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
      top: theme.spacing(2),
      left: theme.spacing(2),
    },
  }));
  const [direction, setDirection] =
    React.useState<SpeedDialProps['direction']>('up');
  const [hidden, setHidden] = React.useState(false);
  const handleDirectionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDirection(
      (event.target as HTMLInputElement).value as SpeedDialProps['direction']
    );
  };
  const handleHiddenChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHidden(event.target.checked);
  };

  return (
    <Box
      sx={{
        transform: 'translateZ(0px)',
        flexGrow: 1,
        border: '1px solid #ededed',
        padding: 5,
        borderRadius: 5,
      }}
    >
      <FormControlLabel
        control={
          <Switch
            checked={hidden}
            onChange={handleHiddenChange}
            color="primary"
          />
        }
        label="Hidden"
      />
      <FormControl component="fieldset" sx={{ mt: 1, display: 'flex' }}>
        <FormLabel component="legend">Direction</FormLabel>
        <RadioGroup
          aria-label="direction"
          name="direction"
          value={direction}
          onChange={handleDirectionChange}
          row
        >
          <FormControlLabel value="up" control={<Radio />} label="Up" />
          <FormControlLabel value="right" control={<Radio />} label="Right" />
          <FormControlLabel value="down" control={<Radio />} label="Down" />
          <FormControlLabel value="left" control={<Radio />} label="Left" />
        </RadioGroup>
      </FormControl>
      <Box sx={{ position: 'relative', mt: 3, height: 320 }}>
        <StyledSpeedDial
          ariaLabel="SpeedDial playground example"
          hidden={hidden}
          icon={<SpeedDialIcon />}
          direction={direction}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
            />
          ))}
        </StyledSpeedDial>
      </Box>
    </Box>
  );
}
/**
 * Controlled SpeedDial
 */
export function ControlledOpenSpeedDial() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box
      sx={{
        height: 320,
        transform: 'translateZ(0px)',
        flexGrow: 1,
        minWidth: 300,
      }}
    >
      <SpeedDial
        ariaLabel="SpeedDial controlled open example"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={handleClose}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
/**
 * Persistent action tooltips.
 * The SpeedDialActions tooltips can be displayed persistently so that users don't have to long-press to see the tooltip on touch devices.
 * It is enabled here across all devices for demo purposes, but in production it could use the isTouch logic to conditionally set the prop.
 */
export function SpeedDialTooltipOpen() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box
      sx={{
        height: 330,
        transform: 'translateZ(0px)',
        flexGrow: 1,
        minWidth: 300,
      }}
    >
      <Backdrop open={open} />
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            onClick={handleClose}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
