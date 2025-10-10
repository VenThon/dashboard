import DashboardLayout from "@/components/layout/dashboard-layout";

import SubjectListing from "./subject-listing";

export default function Page() {
  return (
    <DashboardLayout>
      <SubjectListing />
    </DashboardLayout>
  );
}
