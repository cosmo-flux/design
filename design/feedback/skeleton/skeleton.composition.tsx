import * as React from 'react';
import { Stack } from '@cosmo-flux/design.layout.stack';
import { Box } from '@cosmo-flux/design.layout.box';
import { Grid } from '@cosmo-flux/design.layout.grid';
import {
  Typography,
  type TypographyProps,
} from '@cosmo-flux/design.data-display.typography';
import {
  Card,
  CardHeader,
  CardContent,
  CardMedia,
} from '@cosmo-flux/design.surfaces.card';
import { Avatar } from '@cosmo-flux/design.data-display.avatar';
import { IconButton } from '@cosmo-flux/design.inputs.button';
import { MoreVert as MoreVertIcon } from '@mui/icons-material';
import { youtubeMockData } from './data.dev.js';
import { Skeleton } from './skeleton.js';

interface MediaProps {
  loading?: boolean;
}

/**
 * Skeleton shapes
 */
export function ShapeVariants() {
  return (
    <Stack spacing={1}>
      {/* For variant="text", adjust the height via font-size */}
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />

      {/* For other variants, adjust the size with `width` and `height` */}
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rectangular" width={210} height={60} />
      <Skeleton variant="rounded" width={210} height={60} />
    </Stack>
  );
}

/**
 * Skeleton animation
 */
export function Animations() {
  return (
    <Box sx={{ width: 300 }}>
      <Skeleton />
      <Skeleton animation="wave" />
      <Skeleton animation={false} />
    </Box>
  );
}

/**
 * Pulsate example
 */

export function PulsateAnimation() {
  function Media(props: MediaProps) {
    const { loading = false } = props;

    return (
      <Grid container wrap="nowrap">
        {(loading ? Array.from(new Array(3)) : youtubeMockData).map(
          (item, index) => (
            <Box key={index} sx={{ width: 210, marginRight: 0.5, my: 5 }}>
              {item ? (
                <img
                  style={{ width: 210, height: 118 }}
                  alt={item.title}
                  src={item.src}
                />
              ) : (
                <Skeleton variant="rectangular" width={210} height={118} />
              )}
              {item ? (
                <Box sx={{ pr: 2 }}>
                  <Typography gutterBottom variant="body2">
                    {item.title}
                  </Typography>
                  <Typography
                    display="block"
                    variant="caption"
                    color="text.secondary"
                  >
                    {item.channel}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {`${item.views} • ${item.createdAt}`}
                  </Typography>
                </Box>
              ) : (
                <Box sx={{ pt: 0.5 }}>
                  <Skeleton />
                  <Skeleton width="60%" />
                </Box>
              )}
            </Box>
          )
        )}
      </Grid>
    );
  }

  return (
    <Box sx={{ overflow: 'hidden' }}>
      <Media loading />
      <Media />
    </Box>
  );
}

/**
 * Wave example
 */
interface MediaProps {
  loading?: boolean;
}

export function WaveAnimation() {
  function Media(props: MediaProps) {
    const { loading = false } = props;

    return (
      <Card sx={{ maxWidth: 345, m: 2 }}>
        <CardHeader
          avatar={
            loading ? (
              <Skeleton
                animation="wave"
                variant="circular"
                width={40}
                height={40}
              />
            ) : (
              <Avatar
                alt="Ted talk"
                src="https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg"
              />
            )
          }
          action={
            loading ? null : (
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            )
          }
          title={
            loading ? (
              <Skeleton
                animation="wave"
                height={10}
                width="80%"
                style={{ marginBottom: 6 }}
              />
            ) : (
              'Ted'
            )
          }
          subheader={
            loading ? (
              <Skeleton animation="wave" height={10} width="40%" />
            ) : (
              '5 hours ago'
            )
          }
        />
        {loading ? (
          <Skeleton
            sx={{ height: 190 }}
            animation="wave"
            variant="rectangular"
          />
        ) : (
          <CardMedia
            component="img"
            // @ts-ignore
            height="140"
            image="https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/72bda89f-9bbf-4685-910a-2f151c4f3a8a/NicolaSturgeon_2019T-embed.jpg?w=512"
            alt="Nicola Sturgeon on a TED talk stage"
          />
        )}
        <CardContent>
          {loading ? (
            <React.Fragment>
              <Skeleton
                animation="wave"
                height={10}
                style={{ marginBottom: 6 }}
              />
              <Skeleton animation="wave" height={10} width="80%" />
            </React.Fragment>
          ) : (
            <Typography variant="body2" color="text.secondary" component="p">
              {
                "Why First Minister of Scotland Nicola Sturgeon thinks GDP is the wrong measure of a country's success:"
              }
            </Typography>
          )}
        </CardContent>
      </Card>
    );
  }
  return (
    <div>
      <Media loading />
      <Media />
    </div>
  );
}

/**
 * Inferring dimensions
 */

export function InfferingDimensions() {
  const variants = [
    'h1',
    'h3',
    'body1',
    'caption',
  ] as readonly TypographyProps['variant'][];

  function TypographyDemo(props: { loading?: boolean }) {
    const { loading = false } = props;

    return (
      <div>
        {variants.map((variant) => (
          <Typography component="div" key={variant} variant={variant}>
            {loading ? <Skeleton /> : variant}
          </Typography>
        ))}
      </div>
    );
  }
  return (
    <Grid container spacing={8}>
      <Grid item size="grow">
        <TypographyDemo loading />
      </Grid>
      <Grid item size="grow">
        <TypographyDemo />
      </Grid>
    </Grid>
  );
}
