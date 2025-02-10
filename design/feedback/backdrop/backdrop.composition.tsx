import * as React from 'react';
import { CircularProgress } from '@mui/material';
import { Button } from '@cosmo-flux/design.inputs.button';
import { Backdrop } from './backdrop.js';

export function SimpleBackdrop() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <Button onClick={handleOpen}>Show backdrop</Button>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme!.zIndex!.drawer! + 1 }}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
