"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "@/i18n/navigation";

import { ChevronLeft, CircleArrowDown } from "lucide-react";

export default function StaffEdit() {
  const router = useRouter();
  return (
    <section>
      <div className="flex justify-between">
        <Button
          variant="outline"
          onClick={() => router.push("/dashboard/staff")}
        >
          <ChevronLeft />
          Back
        </Button>
        <Button className="bg-[#058248] hover:bg-green-600">
          <CircleArrowDown />
          Download
        </Button>
      </div>
    </section>
  );
}
