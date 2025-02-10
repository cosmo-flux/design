import { Box } from '@cosmo-flux/design.layout.box';
import {
  Add as AddIcon,
  Edit as EditIcon,
  Favorite as FavoriteIcon,
  Navigation as NavigationIcon,
} from '@mui/icons-material';
import { Fab } from './floating-action-button.js';

export function FloatingActionButtons() {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
      <Fab color="secondary" aria-label="edit">
        <EditIcon />
      </Fab>
      <Fab variant="extended">
        <NavigationIcon sx={{ mr: 1 }} />
        Navigate
      </Fab>
      <Fab disabled aria-label="like">
        <FavoriteIcon />
      </Fab>
    </Box>
  );
}
export function FloatingActionButtonSize() {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab size="small" color="secondary" aria-label="add">
        <AddIcon />
      </Fab>
      <Fab size="medium" color="secondary" aria-label="add">
        <AddIcon />
      </Fab>
      <Fab color="secondary" aria-label="add">
        <AddIcon />
      </Fab>
    </Box>
  );
}
export function FloatingActionButtonExtendedSize() {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab variant="extended" size="small" color="primary">
        <NavigationIcon sx={{ mr: 1 }} />
        Extended
      </Fab>
      <Fab variant="extended" size="medium" color="primary">
        <NavigationIcon sx={{ mr: 1 }} />
        Extended
      </Fab>
      <Fab variant="extended" color="primary">
        <NavigationIcon sx={{ mr: 1 }} />
        Extended
      </Fab>
    </Box>
  );
}
