import React, { useState } from "react";
import styles from "./CreateCampaign.module.css";
import { useCampaigns } from "../../context/CampaignContext";
import { useNavigate } from "react-router-dom";

export default function CreateCampaign() {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("Draft");
  const [sent, setSent] = useState(0);
  const [openRate, setOpenRate] = useState(0);

  const { addCampaign, campaigns } = useCampaigns();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    // Unique name check
    const exists = campaigns.some(
      (c) => c.name.toLowerCase() === name.toLowerCase()
    );
    if (exists) {
      alert("❌ Campaign name already exists!");
      return;
    }

    const newCampaign = {
      id: Math.floor(Math.random() * 1000000),
      name,
      status,
      sent,
      openRate,
    };

    addCampaign(newCampaign);
    navigate("/campaigns");
  }

  function handleCancel() {
    navigate("/campaigns");
  }

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Create Campaign</h1>

      <form className={styles.formCard} onSubmit={handleSubmit}>
        <div>
          <label className={styles.label}>Campaign Name</label>
          <input
            className={styles.input}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label className={styles.label}>Status</label>
          <select
            className={styles.select}
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option>Draft</option>
            <option>Active</option>
            <option>Sending</option>
          </select>
        </div>

        <div>
          <label className={styles.label}>Sent</label>
          <input
            type="number"
            className={styles.input}
            value={sent}
            onChange={(e) => setSent(Number(e.target.value))}
            required
          />
        </div>

        <div>
          <label className={styles.label}>Open Rate (%)</label>
          <input
            type="number"
            className={styles.input}
            value={openRate}
            onChange={(e) => setOpenRate(Number(e.target.value))}
            required
          />
        </div>

        <div className={styles.btnRow}>
          <button type="submit" className={styles.btnPrimary}>
            Create
          </button>

          <button
            type="button"
            className={styles.btnCancel}
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
