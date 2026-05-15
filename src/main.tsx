import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Toaster
      position="top-center"
      toastOptions={{
        success: {
          iconTheme: {
            primary: '#277c78',
            secondary: '#fff',
          },
          style: {
            color: 'white',
            background: '#333',
          },
        },
        error: {
          style: {
            background: 'red',
          },
        },
      }}
    />{' '}
    <App />
  </StrictMode>,
);
