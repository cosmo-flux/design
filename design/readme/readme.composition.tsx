import React from 'react';
import { AppBar, Toolbar } from '@cosmo-flux/design.surfaces.app-bar';
import { Typography } from '@cosmo-flux/design.data-display.typography';
import { Button } from '@cosmo-flux/design.inputs.button';
import { Card, CardContent } from '@cosmo-flux/design.surfaces.card';
import { Paper } from '@cosmo-flux/design.surfaces.paper';
import { Container } from '@cosmo-flux/design.layout.container';
import { Box } from '@cosmo-flux/design.layout.box';
import { Select } from '@cosmo-flux/design.inputs.select';
import { MenuItem } from '@cosmo-flux/design.navigation.menu';

import {
  ThemeProvider,
  defaultTheme,
} from '@cosmo-flux/design.material-ui-theme';
import { useColorScheme } from '@mui/material/styles';
import Readme from './index.js';

export const PreviewMDX = () => <Readme />;

function DarkModeToggle() {
  const { mode, setMode } = useColorScheme();

  if (!mode) {
    return null;
  }

  return (
    <Select
      value={mode ?? 'light'}
      onChange={(event) =>
        setMode(event.target.value as 'system' | 'light' | 'dark')
      }
      sx={{
        color: 'white', // Text color
        '.MuiSelect-select': {
          color: 'white', // This applies to the select button
        },
        '.MuiOutlinedInput-notchedOutline': {
          borderColor: 'white', // Change the border color to white
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
          borderColor: 'white', // Change the border color on hover
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderColor: 'white', // Keep border color white when focused
        },
        '.MuiSelect-iconOutlined': {
          color: 'white', // Change the icon color to white
        },
      }}
    >
      <MenuItem value="system">System</MenuItem>
      <MenuItem value="light">Light</MenuItem>
      <MenuItem value="dark">Dark</MenuItem>
    </Select>
  );
}

export const ThemeDemo = () => {
  window.localStorage.setItem('mui-mode', 'light');

  return (
    <div style={{ paddingBottom: 15 }}>
      <ThemeProvider theme={defaultTheme()}>
        <Container>
          {/* AppBar to showcase primary color and typography */}
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                MUI Scope Demo
              </Typography>
              <DarkModeToggle />
            </Toolbar>
          </AppBar>

          {/* Paper to highlight background and text color */}
          <Paper elevation={3} sx={{ padding: 2, marginTop: 4 }}>
            <Typography variant="h5" gutterBottom>
              Primary Color Typography
            </Typography>
            <Typography variant="body1" paragraph>
              This is a demonstration of the body text. It shows how the theme
              applies to typical content.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button variant="contained" color="primary">
                Primary Button
              </Button>
              <Button variant="outlined" color="secondary">
                Secondary Button
              </Button>
            </Box>
          </Paper>

          {/* Card to showcase secondary color and other elements */}
          <Card sx={{ marginTop: 4 }}>
            <CardContent>
              <Typography
                variant="h6"
                gutterBottom
                sx={{
                  color: 'text.secondary',
                }}
              >
                Card Title
              </Typography>
              <Typography variant="body2">
                This card demonstrates secondary color and text styles in a
                contained layout.
              </Typography>
            </CardContent>
          </Card>
        </Container>
      </ThemeProvider>
    </div>
  );
};
