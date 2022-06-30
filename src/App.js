import {Provider} from 'react-redux';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {green} from '@mui/material/colors';
import {
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Container,
} from '@mui/material';

import {RestaurantScreen} from './components/RestaurantScreen';

import store from './store';

const theme = createTheme({
  palette: {primary: green},
});

export default function App() {
  return (
    <div>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6">Opinion Ate</Typography>
            </Toolbar>
          </AppBar>
          <Container>
            <RestaurantScreen />
          </Container>
        </ThemeProvider>
      </Provider>
    </div>
  );
}
