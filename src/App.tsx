import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ClipLoader } from 'react-spinners';
import ProtectedRoute from './components/Authentification/ProtectedRoute.tsx';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

import Main from './layout/Main.tsx';

const AuthPage = lazy(() => import('./pages/AuthPage.tsx'));
const OverviewPage = lazy(() => import('./pages/OverviewPage.tsx'));
const TransactionPage = lazy(() => import('./pages/TransactionPage.tsx'));
const PortsPage = lazy(() => import('./pages/PotsPage'));
const BudgetsPage = lazy(() => import('./pages/BudgetsPage.tsx'));
const BillsPage = lazy(() => import('./pages/BillsPage.tsx'));

const router = createBrowserRouter([
  {
    path: '/auth',
    element: (
      <Suspense fallback={<p>Chargement...</p>}>
        <AuthPage />
      </Suspense>
    ),
  },
  {
    element: <ProtectedRoute />, // ← ajoute ici
    children: [
      {
        element: (
          <Suspense fallback={<ClipLoader color="#277c78" size={35} />}>
            <Main />
          </Suspense>
        ),
        children: [
          { path: '/', element: <OverviewPage /> },
          { path: '/transactions', element: <TransactionPage /> },
          { path: '/pots', element: <PortsPage /> },
          { path: '/budgets', element: <BudgetsPage /> },
          { path: '/bills', element: <BillsPage /> },
        ],
      },
    ],
  },
]);

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
