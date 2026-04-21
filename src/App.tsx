import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Main from "./layout/Main";

const OverviewPage = lazy(() => import("./pages/OverviewPage"));
const TransactionPage = lazy(() => import("./pages/TransactionPage"));
const PortsPage = lazy(() => import("./pages/PotsPage"));
const BudgetsPage = lazy(() => import("./pages/BudgetsPage"));
const BillsPage = lazy(() => import("./pages/BillsPage"));

const router = createBrowserRouter([
  {
    element: (
      <Suspense fallback={<p>Chargement...</p>}>
        <Main />
      </Suspense>
    ),
    children: [
      {
        children: [
          { path: "/", element: <OverviewPage /> },
          { path: "/transactions", element: <TransactionPage /> },
          { path: "/pots", element: <PortsPage /> },
          { path: "/budgets", element: <BudgetsPage /> },
          { path: "/bills", element: <BillsPage /> },
        ],
      },
    ],
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
