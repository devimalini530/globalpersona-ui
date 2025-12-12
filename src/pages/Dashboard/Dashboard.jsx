import React from "react";
import styles from "./Dashboard.module.css";
import Card from "../_shared/Card";
import { useCampaigns } from "../../context/CampaignContext";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const { campaigns } = useCampaigns();

  const total = campaigns.length;
  const active = campaigns.filter((c) => c.status === "Active").length;
  const draft = campaigns.filter((c) => c.status === "Draft").length;
  const sending = campaigns.filter((c) => c.status === "Sending").length;

  const recent = [...campaigns].reverse();

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Dashboard</h1>

      {/* TOP COLORED CARDS */}
      <div className={styles.cards}>
        <Card className={styles.totalCard}>
          <h3>Total Campaigns</h3>
          <p className={styles.value}>{total}</p>
        </Card>

        <Card className={styles.activeCard}>
          <h3>Active</h3>
          <p className={styles.value}>{active}</p>
        </Card>

        <Card className={styles.draftCard}>
          <h3>Draft</h3>
          <p className={styles.value}>{draft}</p>
        </Card>

        <Card className={styles.sendingCard}>
          <h3>Sending</h3>
          <p className={styles.value}>{sending}</p>
        </Card>
      </div>

      {/* RECENT CAMPAIGNS */}
      <div className={styles.recentBox}>
        <h2 className={styles.recentTitle}>Recent Campaigns</h2>

        <table className={styles.table}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Status</th>
              <th>Sent</th>
              <th>Open Rate</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {recent.map((c) => (
              <tr key={c.id}>
                <td>{c.name}</td>

                <td>
                  <span
                    className={`${styles.badge} ${
                      c.status === "Active"
                        ? styles.active
                        : c.status === "Draft"
                        ? styles.draft
                        : styles.sendingBadge
                    }`}
                  >
                    {c.status}
                  </span>
                </td>

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
    </div>
  );
}
