import React from "react";
import { Link } from "react-router-dom";
import styles from "./Campaigns.module.css";
import { useCampaigns } from "../../context/CampaignContext";

export default function Campaigns() {
  const { campaigns } = useCampaigns();

  return (
    <div>
      <div className={styles.header}>
        <h1>Campaigns</h1>

        <Link to="/campaigns/new" className={styles.createBtn}>
          + Create Campaign
        </Link>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Sent</th>
            <th>Open Rate</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {campaigns.map((c) => (
            <tr key={c.id}>
              <td>{c.name}</td>
              <td>{c.status}</td>
              <td>{c.sent}</td>
              <td>{c.openRate}%</td>
              <td>
                <Link to={`/campaigns/${c.id}`} className={styles.viewLink}>
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
