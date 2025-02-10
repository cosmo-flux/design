import * as React from 'react';
import { Stack } from '@cosmo-flux/design.layout.stack';
import { styled } from '@mui/system';
import { Pagination } from './pagination.js';
import { usePagination } from './use-pagination.js';

/**
 * Introduction
 */
export function BasicPagination() {
  return (
    <Stack spacing={2}>
      <Pagination count={10} />
      <Pagination count={10} color="primary" />
      <Pagination count={10} color="secondary" />
      <Pagination count={10} disabled />
    </Stack>
  );
}

/**
 * Outlined pagination
 */
export function PaginationOutlined() {
  return (
    <Stack spacing={2}>
      <Pagination count={10} variant="outlined" />
      <Pagination count={10} variant="outlined" color="primary" />
      <Pagination count={10} variant="outlined" color="secondary" />
      <Pagination count={10} variant="outlined" disabled />
    </Stack>
  );
}

/**
 * Pagination rounded
 */
export function PaginationRounded() {
  return (
    <Stack spacing={2}>
      <Pagination count={10} shape="rounded" />
      <Pagination count={10} variant="outlined" shape="rounded" />
    </Stack>
  );
}

/**
 * Pagination sizes
 */
export function PaginationSize() {
  return (
    <Stack spacing={2}>
      <Pagination count={10} size="small" />
      <Pagination count={10} />
      <Pagination count={10} size="large" />
    </Stack>
  );
}

/**
 * buttons
 */
export function PaginationButtons() {
  return (
    <Stack spacing={2}>
      <Pagination count={10} showFirstButton showLastButton />
      <Pagination count={10} hidePrevButton hideNextButton />
    </Stack>
  );
}

/**
 * Pagination ranges
 */
export function PaginationRanges() {
  return (
    <Stack spacing={2}>
      <Pagination count={11} defaultPage={6} siblingCount={0} />
      <Pagination count={11} defaultPage={6} /> {/* Default ranges */}
      <Pagination
        count={11}
        defaultPage={6}
        siblingCount={0}
        boundaryCount={2}
      />
      <Pagination count={11} defaultPage={6} boundaryCount={2} />
    </Stack>
  );
}

/**
 * For advanced customization use cases, a headless usePagination() hook is exposed.
 * It accepts almost the same options as the Pagination component minus all the props related to the rendering of JSX. The Pagination component is built on this hook.
 */

export function UsePagination() {
  const { items } = usePagination({
    count: 10,
  });

  const List = styled('ul')({
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
  });

  return (
    <nav>
      <List>
        {items.map(({ page, type, selected, ...item }, index) => {
          let children = null;

          if (type === 'start-ellipsis' || type === 'end-ellipsis') {
            // @ts-ignore
            children = '…';
          } else if (type === 'page') {
            // @ts-ignore
            children = (
              <button
                type="button"
                style={{
                  fontWeight: selected ? 'bold' : undefined,
                }}
                {...item}
              >
                {page}
              </button>
            );
          } else {
            // @ts-ignore
            children = (
              <button type="button" {...item}>
                {type}
              </button>
            );
          }

          return <li key={index}>{children}</li>;
        })}
      </List>
    </nav>
  );
}
