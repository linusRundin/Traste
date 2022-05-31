import Gilroy from './assets/gilroy.woff2';
import {createTheme} from '@mui/material';

const gilroy = {
  fontFamily: 'Gilroy',
  fontStyle: 'light',
  fontDisplay: 'swap',
  fontWeight: 'light',
  src: `
   url(${Gilroy}) format('woff2')
 `,
};

const theme = createTheme({
  typography: {
    fontFamily: ['Gilroy'],
  },
  palette: {
    primary: {
      main: '#00a8ab',
      contrastText: '#ffffff',
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [gilroy],
      },
    },
  },
});

export default theme;
