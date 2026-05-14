import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { AuthProvider } from './context/AuthContext.tsx';
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
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
    </AuthProvider>
  </StrictMode>,
);
