// src/app/routes/AppRoutes.tsx
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { AppShell } from "../layout/AppShell";
import { PaymentsPage } from "@/features/payments/pages/PaymentsPage";
import { ReportsPage } from "@/features/reports/pages/ReportsPage";
import { HelpPage } from "@/features/help/pages/HelpPage";
import { SettingsPage } from "@/features/settings/pages/SettingsPage";

export function AppRoutes() {
  return (
    <HashRouter>
      <AppShell>
        <Routes>
          <Route path="/" element={<Navigate to="/payments" replace />} />
          <Route path="/payments" element={<PaymentsPage />} />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="/help" element={<HelpPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </AppShell>
    </HashRouter>
  );
}
