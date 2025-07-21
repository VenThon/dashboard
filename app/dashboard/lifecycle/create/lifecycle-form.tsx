"use client";

import { Button } from "@/components/ui/button";

import { ChevronLeft } from "lucide-react";

export default function LifecycleFormCreate() {
  return (
    <section>
      <div>
        <Button variant="outline">
          <ChevronLeft />
          Back
        </Button>
      </div>
    </section>
  );
}
