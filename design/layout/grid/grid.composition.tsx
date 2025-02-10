import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Box } from '@cosmo-flux/design.layout.box';
import { Paper } from '@mui/material';
import {
  FormLabel,
  FormControl,
  FormControlLabel,
} from '@cosmo-flux/design.inputs.form';
import { Radio, RadioGroup } from '@cosmo-flux/design.inputs.radio-group';
import { Grid } from './grid.js';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid
          item
          size={{
            xs: 8,
          }}
        >
          <Item>xs=8</Item>
        </Grid>
        <Grid
          item
          size={{
            xs: 4,
          }}
        >
          <Item>xs=4</Item>
        </Grid>
        <Grid
          item
          size={{
            xs: 4,
          }}
        >
          <Item>xs=4</Item>
        </Grid>
        <Grid
          item
          size={{
            xs: 8,
          }}
        >
          <Item>xs=8</Item>
        </Grid>
      </Grid>
    </Box>
  );
}

export function FullWidthGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid
          item
          size={{
            xs: 6,
            md: 8,
          }}
        >
          <Item>xs=6 md=8</Item>
        </Grid>
        <Grid
          item
          size={{
            xs: 6,
            md: 4,
          }}
        >
          <Item>xs=6 md=4</Item>
        </Grid>
        <Grid
          item
          size={{
            xs: 6,
            md: 4,
          }}
        >
          <Item>xs=6 md=4</Item>
        </Grid>
        <Grid
          item
          size={{
            xs: 6,
            md: 8,
          }}
        >
          <Item>xs=6 md=8</Item>
        </Grid>
      </Grid>
    </Box>
  );
}

export function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(2);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSpacing(Number((event.target as HTMLInputElement).value));
  };

  return (
    <Grid sx={{ flexGrow: 1 }} container spacing={2}>
      <Grid
        item
        size={{
          xs: 12,
        }}
      >
        <Grid container justifyContent="center" spacing={spacing}>
          {[0, 1, 2].map((value) => (
            <Grid key={value} item>
              <Paper
                sx={(theme) => ({
                  height: 140,
                  width: 100,
                  backgroundColor: '#fff',
                  ...theme.applyStyles('dark', {
                    backgroundColor: '#1A2027',
                  }),
                })}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid
        item
        size={{
          xs: 12,
        }}
      >
        <Paper sx={{ p: 2 }}>
          <Grid container>
            <Grid item>
              <FormControl component="fieldset">
                <FormLabel component="legend">spacing</FormLabel>
                <RadioGroup
                  name="spacing"
                  aria-label="spacing"
                  value={spacing.toString()}
                  onChange={handleChange}
                  row
                >
                  {[0, 0.5, 1, 2, 3, 4, 8, 12].map((value) => (
                    <FormControlLabel
                      key={value}
                      value={value.toString()}
                      control={<Radio />}
                      label={value.toString()}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}

export function RowAndColumnSpacing() {
  return (
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid
          item
          size={{
            xs: 6,
          }}
        >
          <Item>1</Item>
        </Grid>
        <Grid
          item
          size={{
            xs: 6,
          }}
        >
          <Item>2</Item>
        </Grid>
        <Grid
          item
          size={{
            xs: 6,
          }}
        >
          <Item>3</Item>
        </Grid>
        <Grid
          item
          size={{
            xs: 6,
          }}
        >
          <Item>4</Item>
        </Grid>
      </Grid>
    </Box>
  );
}

export function AutoGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item size="grow">
          <Item>xs</Item>
        </Grid>
        <Grid
          item
          size={{
            xs: 6,
          }}
        >
          <Item>xs=6</Item>
        </Grid>
        <Grid item size="grow">
          <Item>xs</Item>
        </Grid>
      </Grid>
    </Box>
  );
}

export function VariableWidthGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item size="auto">
          <Item>variable width content</Item>
        </Grid>
        <Grid
          item
          size={{
            xs: 6,
          }}
        >
          <Item>xs=6</Item>
        </Grid>
        <Grid item size="grow">
          <Item>xs</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
