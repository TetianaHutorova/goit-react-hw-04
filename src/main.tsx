import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "modern-normalize";
import App from "./components/App/App.js";
import "./index.css";
import ReactModal from "react-modal";
ReactModal.setAppElement("#root");

createRoot(document.getElementById("root")! as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
