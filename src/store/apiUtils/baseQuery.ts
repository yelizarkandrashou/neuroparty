import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query';
import * as endpoints from 'store/apiUtils/endpoints';

const baseQuery = fetchBaseQuery({
  baseUrl: endpoints.backendUrl
});

export default baseQuery;
