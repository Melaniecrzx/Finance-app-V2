import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { store } from "./app/store.ts";
import { Provider } from "react-redux";
import { SideBarProvider } from "./context/SideBarProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <SideBarProvider>
        <App />
      </SideBarProvider>
    </Provider>
  </StrictMode>,
);
