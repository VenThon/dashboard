import DashboardLayout from "@/components/layout/dashboard-layout";

import { LifeCycleChartAreaLegend } from "./(component)/Lifecycle-legend";
import { LifecycleChartLine } from "./(component)/Lifecycle-linechart";
import { LifeCycleChartLineMultiple } from "./(component)/Lifecycle-linechartMultiple";
import { LifeCycleChartPieDonutText } from "./(component)/Lifecycle-piechartDonutText";
import { LifecycleBarchart } from "./(component)/lifecycle-barchart";

export default function Page() {
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold text-[#058248]">Analytics Data</h1>
      <div className="mt-6 grid grid-cols-3 gap-4">
        <LifecycleBarchart />
        <LifeCycleChartLineMultiple />
        <LifeCycleChartPieDonutText />
      </div>
      <div className="mt-6 grid grid-cols-2 gap-4">
        <LifecycleChartLine />
        <LifeCycleChartAreaLegend />
      </div>
    </DashboardLayout>
  );
}
