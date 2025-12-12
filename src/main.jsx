import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { CampaignProvider } from "./context/CampaignContext";

createRoot(document.getElementById("root")).render(
  <CampaignProvider>
    <App />
  </CampaignProvider>
);
