import React from "react";
import { useParams } from "react-router-dom";
import { useCampaigns } from "../../context/CampaignContext";
import styles from "./CampaignDetail.module.css";

export default function CampaignDetail() {
  const { id } = useParams();
  const { campaigns } = useCampaigns();

  const campaign = campaigns.find((c) => String(c.id) === String(id));

  if (!campaign) return <h2>Campaign not found</h2>;

  return (
    <div>
      <h1 className={styles.title}>{campaign.name}</h1>

      <div className={styles.box}>
        <p><strong>Status:</strong> {campaign.status}</p>
        <p><strong>Sent:</strong> {campaign.sent}</p>
        <p><strong>Open Rate:</strong> {campaign.openRate}%</p>
      </div>
    </div>
  );
}
