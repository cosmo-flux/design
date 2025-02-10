import * as React from 'react';
import { Stack } from '@cosmo-flux/design.layout.stack';
import { Box } from '@cosmo-flux/design.layout.box';
import {
  Delete as DeleteIcon,
  Send as SendIcon,
  Alarm as AlarmIcon,
  AddShoppingCart as AddShoppingCartIcon,
} from '@mui/icons-material';
import { Button } from './button.js';
import { IconButton } from './icon-button.js';
import { LoadingButton } from './loading-button.js';

export function BasicButtons() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
  );
}

export function DisableElevation() {
  return (
    <Button variant="contained" disableElevation>
      Disable elevation
    </Button>
  );
}

export function ColorButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <Button color="secondary">Secondary</Button>
      <Button variant="contained" color="success">
        Success
      </Button>
      <Button variant="outlined" color="error">
        Error
      </Button>
    </Stack>
  );
}

export function ButtonSizes() {
  return (
    <Box sx={{ '& button': { m: 1 } }}>
      <div>
        <Button size="small">Small</Button>
        <Button size="medium">Medium</Button>
        <Button size="large">Large</Button>
      </div>
      <div>
        <Button variant="outlined" size="small">
          Small
        </Button>
        <Button variant="outlined" size="medium">
          Medium
        </Button>
        <Button variant="outlined" size="large">
          Large
        </Button>
      </div>
      <div>
        <Button variant="contained" size="small">
          Small
        </Button>
        <Button variant="contained" size="medium">
          Medium
        </Button>
        <Button variant="contained" size="large">
          Large
        </Button>
      </div>
    </Box>
  );
}
export function IconLabelButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <Button variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
    </Stack>
  );
}
export function IconButtons() {
  return (
    <Stack direction="row" spacing={1}>
      <IconButton aria-label="delete">
        <DeleteIcon />
      </IconButton>
      <IconButton aria-label="delete" disabled color="primary">
        <DeleteIcon />
      </IconButton>
      <IconButton color="secondary" aria-label="add an alarm">
        <AlarmIcon />
      </IconButton>
      <IconButton color="primary" aria-label="add to shopping cart">
        <AddShoppingCartIcon />
      </IconButton>
    </Stack>
  );
}
export const LoadingButtonText = () => {
  const [loading, setLoading] = React.useState(false);
  const handleClick = () => {
    if (loading) {
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };
  return (
    <LoadingButton variant="text" loading={loading} onClick={handleClick}>
      Click to load
    </LoadingButton>
  );
};

export const LoadingButtonContained = () => {
  const [loading, setLoading] = React.useState(false);
  const handleClick = () => {
    if (loading) {
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };
  return (
    <LoadingButton variant="contained" loading={loading} onClick={handleClick}>
      Click to load
    </LoadingButton>
  );
};

export const LoadingButtonOutlined = () => {
  const [loading, setLoading] = React.useState(false);
  const handleClick = () => {
    if (loading) {
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };
  return (
    <LoadingButton variant="outlined" loading={loading} onClick={handleClick}>
      Click to load
    </LoadingButton>
  );
};
