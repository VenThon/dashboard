import DashboardLayout from "@/components/layout/dashboard-layout";

import LifecycleListing from "./lifecycle-listing";

export default function Page() {
  return (
    <DashboardLayout>
      <LifecycleListing />
    </DashboardLayout>
  );
}
