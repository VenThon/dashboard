"use client";

import { useSearchParams } from "next/navigation";

import { DataTable } from "@/components/data-table";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PaginationWithLinks } from "@/components/ui/pagination-link";
import { Link } from "@/i18n/navigation";

import { FileDown, FileJson, Plus } from "lucide-react";

import { columnsDataTableStaff } from "../(components)/dataTable-staff";
import { downloadCSV } from "../(components)/downloadStaff-csv";
import { downloadJSON } from "../(components)/downloadStaff-json";
import { FilterStaff } from "../(components)/filter-staff";
import { SearchAllStaff } from "../(components)/search-staff";
import { MockdataStaff } from "../../mockData/staff";

export default function StaffList() {
  const searchParam = useSearchParams();
  const page = Number.parseInt(searchParam.get("page") || "1");
  const pageSize = Number.parseInt(searchParam.get("pageSize") || "10");
  const totalItems = MockdataStaff.length;

  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedData = MockdataStaff.slice(startIndex, endIndex);
  return (
    <section>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">List all staff</CardTitle>
          <CardDescription className="mt-4 flex justify-between">
            <SearchAllStaff />
            <div className="grid grid-cols-4 gap-2">
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
              <Button
                className="flex items-center justify-center bg-green-600 hover:bg-green-500 sm:w-auto dark:text-white"
                onClick={() => downloadCSV(MockdataStaff, "staff.csv")}
              >
                <FileDown className="font-extrabold" />
                <span>Download CSV</span>
              </Button>
              <Button
                className="bg-green-600 hover:bg-green-500 sm:w-auto dark:text-white"
                onClick={() => downloadJSON(MockdataStaff, "staff.json")}
              >
                <FileJson className="font-extrabold" />
                <span>Download JSON</span>
              </Button>
            </div>
          </CardDescription>
        </CardHeader>
      </Card>
      <div className="mt-10">
        <div>
          <DataTable columns={columnsDataTableStaff} data={paginatedData} />
        </div>
        <div className="mt-5 flex justify-between">
          <div className="text-md font-bold text-gray-700">
            Showing {startIndex + 1}-{Math.min(endIndex, totalItems)} of{" "}
            {totalItems} Items
          </div>
          <div>
            <PaginationWithLinks
              page={page}
              pageSize={pageSize}
              totalCount={totalItems}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
