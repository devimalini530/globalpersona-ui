import { createContext, useContext, useState } from "react";
import { campaigns as initialCampaigns } from "../data/mock";

const CampaignContext = createContext();

export function CampaignProvider({ children }) {
  const [campaigns, setCampaigns] = useState(initialCampaigns);

  function addCampaign(newCampaign) {
    setCampaigns([...campaigns, newCampaign]);
  }

  return (
    <CampaignContext.Provider value={{ campaigns, addCampaign }}>
      {children}
    </CampaignContext.Provider>
  );
}

export function useCampaigns() {
  return useContext(CampaignContext);
}
