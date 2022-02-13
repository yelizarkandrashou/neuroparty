if (process.env.REACT_APP_BACKEND_URL === null) throw new Error('Missing env.REACT_APP_BACKEND_URL');

export const backendUrl = process.env.REACT_APP_BACKEND_URL;

export const postNeuroData  = 'api/';
