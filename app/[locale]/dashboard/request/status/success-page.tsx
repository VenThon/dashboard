"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRouter } from "@/i18n/navigation";

import { CircleCheckBig } from "lucide-react";

export default function SuccessPage() {
  const router = useRouter();
  return (
    <section>
      <Card className="mx-auto w-full max-w-xl px-4">
        <CardHeader className="text-center">
          <div className="flex justify-center">
            <CircleCheckBig className="size-16 font-semibold text-[#14e661]" />
          </div>
          <CardTitle className="mt-2 text-xl font-semibold sm:text-2xl">
            Report Submitted Successfully
          </CardTitle>
          <CardDescription className="text-md">
            Your report has been received and assigning a tracking number
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Card className="border-none bg-[#f9fafb] p-4 text-center">
            <p className="m-0 text-lg">Your Ticket ID</p>
            <p className="m-0 text-2xl font-bold text-[#2563eb] sm:text-3xl">
              RPT-539094
            </p>
            <p className="text-muted-foreground text-md">
              Save this ID to track your report status
            </p>
          </Card>
          <p className="text-muted-foreground text-md mt-3 text-center">
            Your report will be reviewed by the appropriate government agency
            within 2-3 business days
          </p>
        </CardContent>

        <CardFooter className="flex justify-center gap-3">
          <Button
            variant="secondary"
            onClick={() => router.push("/dashboard/request/create")}
          >
            Track This Report
          </Button>
          <Button
            variant="outline"
            onClick={() => router.push("/dashboard/request")}
          >
            Return to listing request page
          </Button>
        </CardFooter>
      </Card>
    </section>
  );
}
