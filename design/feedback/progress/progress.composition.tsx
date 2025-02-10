import * as React from 'react';
import { Box } from '@cosmo-flux/design.layout.box';
import { Stack } from '@cosmo-flux/design.layout.stack';
import { green } from '@mui/material/colors';
import { Button } from '@cosmo-flux/design.inputs.button';
import { Fab } from '@cosmo-flux/design.inputs.floating-action-button';
import { Check as CheckIcon, Save as SaveIcon } from '@mui/icons-material';
import { Typography } from '@cosmo-flux/design.data-display.typography';
import {
  CircularProgress,
  type CircularProgressProps,
} from './circular-progress.js';
import { LinearProgress, LinearProgressProps } from './linear-progress.js';

/**
 * Circular Indeterminate Progress Indicator
 */
export function CircularIndeterminate() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
  );
}

/**
 * Circular Color Progress Indicator
 */
export function CircularColor() {
  return (
    <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
      <CircularProgress color="secondary" />
      <CircularProgress color="success" />
      <CircularProgress color="inherit" />
    </Stack>
  );
}

/**
 * Circular Determinate Progress Indicator
 */

export function CircularDeterminate() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Stack spacing={2} direction="row">
      <CircularProgress variant="determinate" value={25} />
      <CircularProgress variant="determinate" value={50} />
      <CircularProgress variant="determinate" value={75} />
      <CircularProgress variant="determinate" value={100} />
      <CircularProgress variant="determinate" value={progress} />
    </Stack>
  );
}

/**
 * Circular Static Progress Indicator
 */

export function CircularIntegration() {
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const timer = React.useRef<ReturnType<typeof setTimeout>>();

  const buttonSx = {
    ...(success && {
      bgcolor: green[500],
      '&:hover': {
        bgcolor: green[700],
      },
    }),
  };

  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const handleButtonClick = () => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      timer.current = setTimeout(() => {
        setSuccess(true);
        setLoading(false);
      }, 2000);
    }
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ m: 1, position: 'relative' }}>
        <Fab
          aria-label="save"
          color="primary"
          sx={buttonSx}
          onClick={handleButtonClick}
        >
          {success ? <CheckIcon /> : <SaveIcon />}
        </Fab>
        {loading && (
          <CircularProgress
            size={68}
            sx={{
              color: green[500],
              position: 'absolute',
              top: -6,
              left: -6,
              zIndex: 1,
            }}
          />
        )}
      </Box>
      <Box sx={{ m: 1, position: 'relative' }}>
        <Button
          variant="contained"
          sx={buttonSx}
          disabled={loading}
          onClick={handleButtonClick}
        >
          Accept terms
        </Button>
        {loading && (
          <CircularProgress
            size={24}
            sx={{
              color: green[500],
              position: 'absolute',
              top: '50%',
              left: '50%',
              marginTop: '-12px',
              marginLeft: '-12px',
            }}
          />
        )}
      </Box>
    </Box>
  );
}

/**
 * Circular with Label Progress Indicator
 */

export function CircularWithValueLabel() {
  function CircularProgressWithLabel(
    props: CircularProgressProps & { value: number }
  ) {
    return (
      <Box sx={{ position: 'relative', display: 'inline-flex' }}>
        <CircularProgress variant="determinate" {...props} />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography
            variant="caption"
            component="div"
            color="text.secondary"
          >{`${Math.round(props.value)}%`}</Typography>
        </Box>
      </Box>
    );
  }

  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return <CircularProgressWithLabel value={progress} />;
}

/**
 * Linear Progress Indicator
 */

export function LinearIndeterminate() {
  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgress />
    </Box>
  );
}

/**
 * Linear Progress Indicator Colors
 */

export function LinearColor() {
  return (
    <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
      <LinearProgress color="secondary" />
      <LinearProgress color="success" />
      <LinearProgress color="inherit" />
    </Stack>
  );
}

/**
 * Linear Determinate Progress Indicator
 */

export function LinearDeterminate() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgress variant="determinate" value={progress} />
    </Box>
  );
}

/**
 * Linear Buffer Progress Indicator
 */

export function LinearBuffer() {
  const [progress, setProgress] = React.useState(0);
  const [buffer, setBuffer] = React.useState(10);

  const progressRef = React.useRef(() => {});
  React.useEffect(() => {
    progressRef.current = () => {
      if (progress > 100) {
        setProgress(0);
        setBuffer(10);
      } else {
        const diff = Math.random() * 10;
        const diff2 = Math.random() * 10;
        setProgress(progress + diff);
        setBuffer(progress + diff + diff2);
      }
    };
  });

  React.useEffect(() => {
    const timer = setInterval(() => {
      progressRef.current();
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} />
    </Box>
  );
}

/**
 * Linear Progress with Label Indicator
 */

export function LinearWithValueLabel() {
  function LinearProgressWithLabel(
    props: LinearProgressProps & { value: number }
  ) {
    return (
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ width: '100%', mr: 1 }}>
          <LinearProgress variant="determinate" {...props} />
        </Box>
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="body2" color="text.secondary">{`${Math.round(
            props.value
          )}%`}</Typography>
        </Box>
      </Box>
    );
  }

  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 10 : prevProgress + 10
      );
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgressWithLabel value={progress} />
    </Box>
  );
}
