import * as React from 'react';
import { Box } from '@cosmo-flux/design.layout.box';
import { Grid } from '@cosmo-flux/design.layout.grid';
import { Stack } from '@cosmo-flux/design.layout.stack';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { Paper } from './paper.js';

/**
 * Introduction
 */
export function SimplePaper() {
  return (
    <Box
      sx={{
        backgroundColor: '#fafbfc',
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 128,
          height: 128,
        },
      }}
    >
      <Paper elevation={0} />
      <Paper />
      <Paper elevation={3} />
    </Box>
  );
}

/**
 * Use the elevation prop to establish hierarchy through the use of shadows. The Paper component's default elevation level is 1. The prop accepts values from 0 to 24. The higher the number, the further away the Paper appears to be from its background.
 * In dark mode, increasing the elevation also makes the background color lighter. This is done by applying a semi-transparent gradient with the background-image CSS property.
 */

export function Elevation() {
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 60,
    lineHeight: '60px',
  }));
  const darkTheme = createTheme({ palette: { mode: 'dark' } });
  const lightTheme = createTheme({ palette: { mode: 'light' } });

  return (
    <Grid container spacing={2}>
      {[lightTheme, darkTheme].map((theme, index) => (
        <Grid
          item
          size={{
            xs: 6,
          }}
          key={index}
        >
          <ThemeProvider theme={theme}>
            <Box
              sx={{
                p: 2,
                borderRadius: 2,
                bgcolor: 'background.default',
                display: 'grid',
                gridTemplateColumns: { md: '1fr 1fr' },
                gap: 2,
              }}
            >
              {[0, 1, 2, 3, 4, 6, 8, 12, 16, 24].map((elevation) => (
                <Item key={elevation} elevation={elevation}>
                  {`elevation=${elevation}`}
                </Item>
              ))}
            </Box>
          </ThemeProvider>
        </Grid>
      ))}
    </Grid>
  );
}
/**
 * Set the `variant` prop to "outlined" for a flat, outlined Paper with no shadows
 */
export function Variants() {
  const DemoPaper = styled(Paper)(({ theme }) => ({
    width: 120,
    height: 120,
    padding: theme.spacing(2),
    ...theme.typography.body2,
    textAlign: 'center',
  }));
  return (
    <Stack direction="row" spacing={2}>
      <DemoPaper variant="elevation">default variant</DemoPaper>
      <DemoPaper variant="outlined">outlined variant</DemoPaper>
    </Stack>
  );
}
/**
 * The Paper component features rounded corners by default. Add the `square` prop for square corners
 */
export function SquareCorners() {
  const DemoPaper = styled(Paper)(({ theme }) => ({
    width: 120,
    height: 120,
    padding: theme.spacing(2),
    ...theme.typography.body2,
    textAlign: 'center',
  }));

  return (
    <Stack direction="row" spacing={2}>
      <DemoPaper square={false}>rounded corners</DemoPaper>
      <DemoPaper square>square corners</DemoPaper>
    </Stack>
  );
}
