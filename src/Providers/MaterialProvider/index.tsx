import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { ReactElement } from 'react';
import { Toaster } from 'react-hot-toast';
import { mainTheme } from 'shared/theme';

const MaterialProvider = ({ children }: { children: ReactElement }): ReactElement => (
  <ThemeProvider theme={mainTheme}>
    <CssBaseline />
    <Toaster />
    {children}
  </ThemeProvider>
);

export default MaterialProvider;
