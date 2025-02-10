import * as React from 'react';
import {
  Mail as MailIcon,
  ShoppingCart as ShoppingCartIcon,
  Add as AddIcon,
  Remove as RemoveIcon,
} from '@mui/icons-material';
import { Stack } from '@cosmo-flux/design.layout.stack';
import { styled } from '@mui/material/styles';
import { IconButton, Button } from '@cosmo-flux/design.inputs.button';
import { Box } from '@cosmo-flux/design.layout.box';
import { ButtonGroup } from '@cosmo-flux/design.inputs.button-group';
import { Switch } from '@cosmo-flux/design.inputs.switch';
import { FormControlLabel } from '@cosmo-flux/design.inputs.form';
import { Badge, BadgeProps } from './badge.js';

/**
 * Basic badge
 * An example of a badge containing text, using primary and secondary colors. The badge is applied to its children.
 */
export function SimpleBadge() {
  return (
    <Badge badgeContent={4} color="primary">
      <MailIcon color="action" />
    </Badge>
  );
}

/**
 * Color
 * Use color prop to apply theme palette to component.
 */
export function ColorBadge() {
  return (
    <Stack spacing={2} direction="row">
      <Badge badgeContent={4} color="secondary">
        <MailIcon color="action" />
      </Badge>
      <Badge badgeContent={4} color="success">
        <MailIcon color="action" />
      </Badge>
    </Stack>
  );
}

/**
 * Customization
 * Here is an example of customizing the component.
 */
export function CustomizedBadges() {
  const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));
  return (
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={4} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  );
}
/**
 *  Badge visibility
 * The visibility of badges can be controlled using the invisible prop.
 */
export function BadgeVisibility() {
  const [count, setCount] = React.useState(1);
  const [invisible, setInvisible] = React.useState(false);
  const handleBadgeVisibility = () => {
    setInvisible(!invisible);
  };

  return (
    <Box
      sx={{
        color: 'action.active',
        display: 'flex',
        flexDirection: 'column',
        '& > *': {
          marginBottom: 2,
        },
        '& .MuiBadge-root': {
          marginRight: 4,
        },
      }}
    >
      <div>
        <Badge color="secondary" badgeContent={count}>
          <MailIcon />
        </Badge>
        <ButtonGroup>
          <Button
            aria-label="reduce"
            onClick={() => {
              setCount(Math.max(count - 1, 0));
            }}
          >
            <RemoveIcon fontSize="small" />
          </Button>
          <Button
            aria-label="increase"
            onClick={() => {
              setCount(count + 1);
            }}
          >
            <AddIcon fontSize="small" />
          </Button>
        </ButtonGroup>
      </div>
      <div>
        <Badge color="secondary" variant="dot" invisible={invisible}>
          <MailIcon />
        </Badge>
        <FormControlLabel
          sx={{ color: 'text.primary' }}
          control={
            <Switch checked={!invisible} onChange={handleBadgeVisibility} />
          }
          label="Show Badge"
        />
      </div>
    </Box>
  );
}
/**
 * Maximum value
 * You can use the max prop to cap the value of the badge content.
 */
export function BadgeMax() {
  return (
    <Stack spacing={4} direction="row" sx={{ color: 'action.active' }}>
      <Badge color="secondary" badgeContent={99}>
        <MailIcon />
      </Badge>
      <Badge color="secondary" badgeContent={100}>
        <MailIcon />
      </Badge>
      <Badge color="secondary" badgeContent={1000} max={999}>
        <MailIcon />
      </Badge>
    </Stack>
  );
}
/**
 * Dot badge
 * The dot prop changes a badge into a small dot. This can be used as a notification that something has changed without giving a count.
 */
export function DotBadge() {
  return (
    <Box sx={{ color: 'action.active' }}>
      <Badge color="secondary" variant="dot">
        <MailIcon />
      </Badge>
    </Box>
  );
}
/**
 * Badge overlap
 * You can use the overlap prop to place the badge relative to the corner of the wrapped element.
 */
export function BadgeOverlap() {
  const shapeStyles = { bgcolor: 'primary.main', width: 40, height: 40 };
  const shapeCircleStyles = { borderRadius: '50%' };
  const rectangle = <Box component="span" sx={shapeStyles} />;
  const circle = (
    <Box component="span" sx={{ ...shapeStyles, ...shapeCircleStyles }} />
  );
  return (
    <Stack spacing={3} direction="row">
      <Badge color="secondary" badgeContent=" ">
        {rectangle}
      </Badge>
      <Badge color="secondary" badgeContent=" " variant="dot">
        {rectangle}
      </Badge>
      <Badge color="secondary" overlap="circular" badgeContent=" ">
        {circle}
      </Badge>
      <Badge
        color="secondary"
        overlap="circular"
        badgeContent=" "
        variant="dot"
      >
        {circle}
      </Badge>
    </Stack>
  );
}
