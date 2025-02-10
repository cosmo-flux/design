import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Card,
  CardContent,
  Paper,
  Container,
  Box,
  Select,
  MenuItem,
} from '@mui/material';
import { ThemeProvider } from './theme-provider.js';
import { useColorScheme } from '@mui/material/styles';
import { defaultTheme } from './default-theme.js';

function DarkModeToggle() {
  const { mode, setMode } = useColorScheme();

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

export const ExtendedDefaultThemeDemo = () => {
  window.localStorage.setItem('mui-mode', 'light');

  return (
    <ThemeProvider
      theme={defaultTheme({ palette: { primary: { main: '#946cc9' } } })}
    >
      <Container>
        {/* AppBar to showcase primary color and typography */}
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Theme Demo
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
  );
};
