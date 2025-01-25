import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import Routes from "./routes/routes.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Routes />
  </StrictMode>
);
