import * as React from 'react';
import {
  Check as CheckIcon,
  CheckCircleOutline as CheckCircleOutlineIcon,
} from '@mui/icons-material';
import { Stack } from '@cosmo-flux/design.layout.stack';
import { Button } from '@cosmo-flux/design.inputs.button';
import { Alert } from './alert.js';
import { AlertTitle } from './alert-title.js';

export function SimpleAlert() {
  return (
    <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
      Here is a gentle confirmation that your action was successful.
    </Alert>
  );
}

export function BasicAlerts() {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="success">This is a success Alert.</Alert>
      <Alert severity="info">This is an info Alert.</Alert>
      <Alert severity="warning">This is a warning Alert.</Alert>
      <Alert severity="error">This is an error Alert.</Alert>
    </Stack>
  );
}

export function FilledAlerts() {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert variant="filled" severity="success">
        This is a filled success Alert.
      </Alert>
      <Alert variant="filled" severity="info">
        This is a filled info Alert.
      </Alert>
      <Alert variant="filled" severity="warning">
        This is a filled warning Alert.
      </Alert>
      <Alert variant="filled" severity="error">
        This is a filled error Alert.
      </Alert>
    </Stack>
  );
}

export function OutlinedAlerts() {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert variant="outlined" severity="success">
        This is an outlined success Alert.
      </Alert>
      <Alert variant="outlined" severity="info">
        This is an outlined info Alert.
      </Alert>
      <Alert variant="outlined" severity="warning">
        This is an outlined warning Alert.
      </Alert>
      <Alert variant="outlined" severity="error">
        This is an outlined error Alert.
      </Alert>
    </Stack>
  );
}

export function IconAlerts() {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
        This success Alert has a custom icon.
      </Alert>
      <Alert icon={false} severity="success">
        This success Alert has no icon.
      </Alert>
      <Alert
        iconMapping={{
          success: <CheckCircleOutlineIcon fontSize="inherit" />,
        }}
      >
        This success Alert uses `iconMapping` to override the default icon.
      </Alert>
    </Stack>
  );
}

export function DescriptionAlerts() {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="success">
        <AlertTitle>Success</AlertTitle>
        This is a success Alert with an encouraging title.
      </Alert>
      <Alert severity="info">
        <AlertTitle>Info</AlertTitle>
        This is an info Alert with an informative title.
      </Alert>
      <Alert severity="warning">
        <AlertTitle>Warning</AlertTitle>
        This is a warning Alert with a cautious title.
      </Alert>
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        This is an error Alert with a scary title.
      </Alert>
    </Stack>
  );
}

/**
 * Add an action to your Alert with the action prop. This lets you insert any element—an HTML tag, an SVG icon, or a React component such as a Material UI Button—after the Alert's message, justified to the right.
 * If you provide an onClose callback to the Alert without setting the action prop, the component will display a close icon (✕) by default.
 */
export function ActionAlerts() {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="warning" onClose={() => {}}>
        This Alert displays the default close icon.
      </Alert>
      <Alert
        severity="success"
        action={
          <Button color="inherit" size="small">
            UNDO
          </Button>
        }
      >
        This Alert uses a Button component for its action.
      </Alert>
    </Stack>
  );
}
