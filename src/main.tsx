import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { SideBarProvider } from "./context/SideBarProvider.jsx";
import { PotsProvider } from "./context/PotsContext.jsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SideBarProvider>
      <PotsProvider>
        <App />
      </PotsProvider>
    </SideBarProvider>
  </StrictMode>,
);
