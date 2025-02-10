import * as React from 'react';
import { Box } from '@cosmo-flux/design.layout.box';
import { ListSubheader } from '@cosmo-flux/design.data-display.list';
import { IconButton } from '@cosmo-flux/design.inputs.button';
import {
  Info as InfoIcon,
  StarBorder as StarBorderIcon,
} from '@mui/icons-material';
import { ImageList } from './image-list.js';
import { ImageListItem } from './image-list-item.js';
import { ImageListItemBar } from './image-list-item-bar.js';
import {
  itemDataDefault,
  itemDataQuilted,
  itemDataWoven,
  itemDataMansory,
  itemDataTitleBar,
  itemDataTitleBarBelowImage,
  itemDataTitleBarBelowImageMansory,
  itemDataCustomImageList,
} from './mock-data.dev.js';

/**
 * Standard image list.
 * Standard image lists are best for items of equal importance. They have a uniform container size, ratio, and spacing.
 */

export function StandardImageList() {
  return (
    <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
      {itemDataDefault.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

function srcsetQuilted(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

/**
 * Quilted image list.
 * Quilted image lists emphasize certain items over others in a collection. They create hierarchy using varied container sizes and ratios.
 */

export function QuiltedImageList() {
  return (
    <ImageList
      sx={{ width: 500, height: 450 }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {itemDataQuilted.map((item) => (
        <ImageListItem
          key={item.img}
          cols={item.cols || 1}
          rows={item.rows || 1}
        >
          <img
            {...srcsetQuilted(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

/**
 * Woven image list.
 * Woven image lists use alternating container ratios to create a rhythmic layout. A woven image list is best for browsing peer content.
 */

export function WovenImageList() {
  return (
    <ImageList
      sx={{ width: 500, height: 450 }}
      variant="woven"
      cols={3}
      gap={8}
    >
      {itemDataWoven.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=161&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

/**
 * Masonry image list.
 * Masonry image lists use dynamically sized container heights that reflect the aspect ratio of each image. This image list is best used for browsing uncropped peer content.
 */

export function MasonryImageList() {
  return (
    <Box sx={{ width: 500, height: 450, overflowY: 'scroll' }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemDataMansory.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

/**
 * Image list with title bars.
 * This example demonstrates the use of the `ImageListItemBar` to add an overlay to each item.
 * The overlay can accommodate a `title`, `subtitle` and secondary action - in this example an `IconButton`.
 */

export function TitlebarImageList() {
  return (
    <ImageList sx={{ width: 500, height: 450 }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">December</ListSubheader>
      </ImageListItem>
      {itemDataTitleBar.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=248&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

/**
 * Title bar below image (standard).
 * The title bar can be placed below the image.
 */

export function TitlebarBelowImageList() {
  return (
    <ImageList sx={{ width: 500, height: 450 }}>
      {itemDataTitleBarBelowImage.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=248&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={<span>by: {item.author}</span>}
            position="below"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

/**
 * Title bar below image (masonry)
 */

export function TitlebarBelowMasonryImageList() {
  return (
    <Box sx={{ width: 500, height: 450, overflowY: 'scroll' }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemDataTitleBarBelowImageMansory.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar position="below" title={item.author} />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

/**
 * Custom image list.
 * In this example the items have a customized `titlebar`, positioned at the top and with a custom gradient titleBackground.
 * The secondary action `IconButton` is positioned on the left. The `gap` prop is used to adjust the gap between items.
 */

function srcsetCustomImageList(
  image: string,
  width: number,
  height: number,
  rows = 1,
  cols = 1
) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${
      height * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export function CustomImageList() {
  return (
    <ImageList
      sx={{
        width: 500,
        height: 450,
        // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
        transform: 'translateZ(0)',
      }}
      rowHeight={200}
      gap={1}
    >
      {itemDataCustomImageList.map((item) => {
        const cols = item.featured ? 2 : 1;
        const rows = item.featured ? 2 : 1;

        return (
          <ImageListItem key={item.img} cols={cols} rows={rows}>
            <img
              {...srcsetCustomImageList(item.img, 250, 200, rows, cols)}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              sx={{
                background:
                  'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                  'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
              }}
              title={item.title}
              position="top"
              actionIcon={
                <IconButton
                  sx={{ color: 'white' }}
                  aria-label={`star ${item.title}`}
                >
                  <StarBorderIcon />
                </IconButton>
              }
              actionPosition="left"
            />
          </ImageListItem>
        );
      })}
    </ImageList>
  );
}
