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

export default function RequestListing() {
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
                <Button
                  asChild
                  className="w-full bg-green-600 hover:bg-green-500 sm:w-auto dark:text-white"
                >
                  <span className="flex items-center gap-2">
                    <Plus className="rounded-full bg-white text-green-600" />
                    <span>Create New</span>
                  </span>
                </Button>
              </Link>
            </div>
          </CardDescription>
        </CardHeader>
      </Card>
    </section>
  );
}
