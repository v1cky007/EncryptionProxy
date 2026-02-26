import MainLayout from "../layouts/MainLayout";
import AlertsPanel from "../components/AlertsPanel";
import SecurityAlertCard from "../components/SecurityAlertCard";
import { useWS } from "../context/WSContext";

export default function Security() {
  const { alerts } = useWS();

  return (
    <MainLayout>
      <SecurityAlertCard count={alerts.length} />
      <AlertsPanel logs={alerts} />
    </MainLayout>
  );
}
