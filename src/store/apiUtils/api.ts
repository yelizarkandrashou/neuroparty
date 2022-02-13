import { createApi } from '@reduxjs/toolkit/query/react';
import baseQuery from './baseQuery';

export const api = createApi({
  baseQuery,
  endpoints: () => ({}),
});
