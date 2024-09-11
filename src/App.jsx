import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';
import HomePage from './Pages/HomePage';
import CoinPage from './Pages/CoinPage';
import Header from './Banner/Header';

// You can customize your theme here
const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#14161a',
    },
    text: {
      primary: '#fff',
    },
  },
});

function App() {
  return (
    
    <ThemeProvider theme={theme}>
      {/* CssBaseline helps apply default styling across the app */}
      <CssBaseline />
      <div>
        <Header/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/coins/:id" element={<CoinPage />} />

        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;

