import { createTheme, ThemeOptions } from '@mui/material';

const options = (): ThemeOptions => ({
  palette: {
    mode: 'light',
  },
  typography: {
    fontFamily: 'Vin Slab Pro, sans-serif',
    button: {
      textTransform: 'none',
      fontWeight: 400,
      fontSize: '18px',
    },
  },
});

export const mainTheme = createTheme(options());
