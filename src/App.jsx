import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Sidebar from './components/Sidebar/Sidebar'
import Header from './components/Header/Header'
import Dashboard from './pages/Dashboard/Dashboard'
import Campaigns from './pages/Campaigns/Campaigns'
import CreateCampaign from './pages/CreateCampaign/CreateCampaign'
import CampaignDetail from './pages/CampaignDetail/CampaignDetail'
import Contacts from './pages/Contacts/Contacts'
import Settings from './pages/Settings/Settings'
import styles from './App.module.css'

export default function App() {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <Sidebar />
        <div className={styles.main}>
          <Header />
          <div className={styles.content}>
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/campaigns" element={<Campaigns />} />
              <Route path="/campaigns/new" element={<CreateCampaign />} />
              <Route path="/campaigns/:id" element={<CampaignDetail />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="*" element={<div style={{ padding: 24 }}>Page not found</div>} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}
