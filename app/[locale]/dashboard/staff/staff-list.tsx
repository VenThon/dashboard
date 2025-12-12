"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "@/i18n/navigation";

import { Plus } from "lucide-react";

import { FilterStaff } from "../(components)/filter-staff";
import { SearchAllStaff } from "../(components)/search-staff";

export default function StaffList() {
  return (
    <section>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">List all staff</CardTitle>
          <CardDescription className="mt-4 flex justify-between">
            <SearchAllStaff />
            <div className="grid grid-cols-2 gap-2">
              <FilterStaff />
              <Link href="/dashboard/staff/create">
                <Button className="border-primary w-full bg-green-600 sm:w-auto dark:text-white">
                  <Plus className="rounded-full bg-white text-green-600" />
                  <span>Create New</span>
                </Button>
              </Link>
            </div>
          </CardDescription>
        </CardHeader>
      </Card>
      <Card className="mt-10"></Card>
    </section>
  );
}
