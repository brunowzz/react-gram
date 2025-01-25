import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import Routes from "./routes/routes.tsx";
import { Provider } from "react-redux";
import { store } from "./store.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <Routes />
    </Provider>
  </StrictMode>
);
