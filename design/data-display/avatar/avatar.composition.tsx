import { Stack } from '@cosmo-flux/design.layout.stack';
import { deepOrange, green } from '@mui/material/colors';
import { Assignment as AssignmentIcon } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { Badge } from '@mui/material';
import { Avatar } from './avatar.js';
import { AvatarGroup } from './avatar-group.js';
import { stringAvatar } from './string-avatar.js';

export const ImageAvatar = () => {
  return (
    <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
  );
};

export const StringAvatar = () => {
  return <Avatar alt="Remy Sharp" {...stringAvatar('Remy Sharp')} />;
};

export const GroupAvatars = () => {
  return (
    <AvatarGroup max={4}>
      <Avatar
        alt="Remy Sharp"
        src="https://mui.com/static/images/avatar/1.jpg"
      />
      <Avatar
        alt="Travis Howard"
        src="https://mui.com/static/images/avatar/2.jpg"
      />
      <Avatar
        alt="Cindy Baker"
        src="https://mui.com/static/images/avatar/3.jpg"
      />
      <Avatar
        alt="Agnes Walker"
        src="https://mui.com/static/images/avatar/4.jpg"
      />
      <Avatar
        alt="Trevor Henderson"
        src="https://mui.com/static/images/avatar/5.jpg"
      />
    </AvatarGroup>
  );
};

export function VariantAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar sx={{ bgcolor: deepOrange[500] }} variant="square">
        N
      </Avatar>
      <Avatar sx={{ bgcolor: green[500] }} variant="rounded">
        <AssignmentIcon />
      </Avatar>
    </Stack>
  );
}

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 22,
  height: 22,
  border: `2px solid ${theme.palette.background.paper}`,
}));

export function BadgeAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot"
      >
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      </StyledBadge>
      <Badge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        badgeContent={
          <SmallAvatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        }
      >
        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
      </Badge>
    </Stack>
  );
}
