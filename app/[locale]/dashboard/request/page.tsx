import DashboardLayout from "@/components/layout/dashboard-layout";

import RequestListing from "./request-listing";

export default function Page() {
  return (
    <DashboardLayout>
      <RequestListing />
    </DashboardLayout>
  );
}
