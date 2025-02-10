import * as React from 'react';
import { Button, IconButton } from '@cosmo-flux/design.inputs.button';
import { Close as CloseIcon } from '@mui/icons-material';
import { Grid } from '@cosmo-flux/design.layout.grid';
import { Box } from '@cosmo-flux/design.layout.box';
import { Stack } from '@cosmo-flux/design.layout.stack';
import {
  Snackbar,
  type SnackbarCloseReason,
  type SnackbarOrigin,
} from './snackbar.js';
import { SnackbarContent } from './snackbar-content.js';

/**
 * Introduction
 */
export function SimpleSnackbar() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
      <Button onClick={handleClick}>Open Snackbar</Button>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Note archived"
        action={action}
      />
    </div>
  );
}

/**
 * Positions
 * Use the anchorOrigin prop to control the Snackbar's position on the screen.
 */

interface State extends SnackbarOrigin {
  open: boolean;
}

export function PositionedSnackbar() {
  const [state, setState] = React.useState<State>({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });
  const { vertical, horizontal, open } = state;

  const handleClick = (newState: SnackbarOrigin) => () => {
    setState({ ...newState, open: true });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const buttons = (
    <React.Fragment>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          onClick={handleClick({ vertical: 'top', horizontal: 'center' })}
        >
          Top-Center
        </Button>
      </Box>
      <Grid container justifyContent="center">
        <Grid
          item
          size={{
            xs: 6,
          }}
        >
          <Button
            onClick={handleClick({ vertical: 'top', horizontal: 'left' })}
          >
            Top-Left
          </Button>
        </Grid>
        <Grid
          item
          size={{
            xs: 6,
          }}
          textAlign="right"
        >
          <Button
            onClick={handleClick({ vertical: 'top', horizontal: 'right' })}
          >
            Top-Right
          </Button>
        </Grid>
        <Grid
          item
          size={{
            xs: 6,
          }}
        >
          <Button
            onClick={handleClick({ vertical: 'bottom', horizontal: 'left' })}
          >
            Bottom-Left
          </Button>
        </Grid>
        <Grid
          item
          size={{
            xs: 6,
          }}
          textAlign="right"
        >
          <Button
            onClick={handleClick({ vertical: 'bottom', horizontal: 'right' })}
          >
            Bottom-Right
          </Button>
        </Grid>
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          onClick={handleClick({ vertical: 'bottom', horizontal: 'center' })}
        >
          Bottom-Center
        </Button>
      </Box>
    </React.Fragment>
  );

  return (
    <Box sx={{ width: 500 }}>
      {buttons}
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message="I love snacks"
        key={vertical + horizontal}
      />
    </Box>
  );
}

/**
 * Content
 * Use the Snackbar Content component to add text and actions to the Snackbar.
 */

export function LongTextSnackbar() {
  const action = (
    <Button color="secondary" size="small">
      lorem ipsum dolorem
    </Button>
  );

  return (
    <Stack spacing={2} sx={{ maxWidth: 600 }}>
      <SnackbarContent message="I love snacks." action={action} />
      <SnackbarContent
        message={
          'I love candy. I love cookies. I love cupcakes. \
          I love cheesecake. I love chocolate.'
        }
      />
      <SnackbarContent
        message="I love candy. I love cookies. I love cupcakes."
        action={action}
      />
      <SnackbarContent
        message={
          'I love candy. I love cookies. I love cupcakes. \
          I love cheesecake. I love chocolate.'
        }
        action={action}
      />
    </Stack>
  );
}

/**
 * Automatic dismiss
 * Use the `autoHideDuration` prop to automatically trigger the Snackbar's `onClose` function after a set period of time (in milliseconds).
 */
export function AutohideSnackbar() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleClick}>Open Snackbar</Button>
      <Snackbar
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
        message="This Snackbar will be dismissed in 5 seconds."
      />
    </div>
  );
}
