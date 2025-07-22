"use client";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

import { ChevronLeft } from "lucide-react";

export default function LifecycleFormCreate() {
  const router = useRouter();
  return (
    <section>
      <div>
        <Button
          variant="outline"
          onClick={() => router.push("/dashboard/lifecycle")}
        >
          <ChevronLeft />
          Back
        </Button>
      </div>
    </section>
  );
}
