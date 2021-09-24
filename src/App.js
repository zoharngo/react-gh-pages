import { createContext, useContext, useState, useMemo } from 'react';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { IconButton, Paper } from '@mui/material';
import Box from '@mui/material/Box';
import EnhancedTable from './components/enhanced-table/enhanced-table';
import RestaurantGrid from './components/restaurant-grid/restaurant-grid';
import RestaurantProvider from './store/restaurant-provider';
import Leadgen from './components/leadgen/leadgen';

const ColorModeContext = createContext({ toggleColorMode: () => {} });

function App() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <RestaurantProvider>
      <Box sx={{ width: '100vw', height: '100vh' }}>
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'flex-start',
            bgcolor: 'background.default',
            color: 'text.primary',
            p: 3,
          }}
        >
          {theme.palette.mode} mode
          <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color='inherit'>
            {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Box>
        <Box
          component='div'
          sx={{
            bgcolor: 'background.default',
            flexDirection: 'row',
            display: 'flex',
            padding: '50px',
            boxSizing: 'border-box',
          }}
        >
          <Box component='div' sx={{ flex: 4, boxSizing: 'border-box', height: 'fit-content' }}>
            <EnhancedTable />
          </Box>
          <Paper
            elevation={3}
            component='div'
            sx={{
              padding: '10px',
              flex: 3,
              boxSizing: 'border-box',
              marginRight: '5vw',
              marginLeft: '5vw',
            }}
          >
            <RestaurantGrid numberOfTables={17} />
          </Paper>
          <Paper elevation={3} component='div' sx={{ flex: 2, boxSizing: 'border-box', height: 'fit-content' }}>
            <Leadgen />
          </Paper>
        </Box>
      </Box>
    </RestaurantProvider>
  );
}

function AppContextWrapper() {
  const [mode, setMode] = useState('light');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default AppContextWrapper;
