import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import UItheme from './providers/theme.js';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={UItheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>,
)
