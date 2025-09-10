"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { DataTable } from "@/components/data-table";
import { Button } from "@/components/ui/button";
import {
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { PaginationWithLinks } from "@/components/ui/pagination-link";

import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import { BadgePlus, Eye, XIcon } from "lucide-react";

interface DataProps {
  no: number;
  name: string;
  gender: string;
  phonenumber: number;
  id: number;
}
const MockData = [
  {
    no: 1,
    name: "Alzakana",
    gender: "M",
    phonenumber: 11222222,
    id: 123,
  },
  {
    no: 2,
    name: "Alzakana",
    gender: "M",
    phonenumber: 11222222,
    id: 123,
  },
  {
    no: 3,
    name: "Alzakana",
    gender: "M",
    phonenumber: 11222222,
    id: 123,
  },
  {
    no: 4,
    name: "Alzakana",
    gender: "M",
    phonenumber: 11222222,
    id: 123,
  },
  {
    no: 5,
    name: "Alzakana",
    gender: "M",
    phonenumber: 11222222,
    id: 123,
  },
  {
    no: 6,
    name: "Alzakana",
    gender: "M",
    phonenumber: 11222222,
    id: 123,
  },
  {
    no: 7,
    name: "Alzakana",
    gender: "M",
    phonenumber: 11222222,
    id: 123,
  },
  {
    no: 8,
    name: "Alzakana",
    gender: "M",
    phonenumber: 11222222,
    id: 123,
  },
  {
    no: 9,
    name: "Alzakana",
    gender: "M",
    phonenumber: 11222222,
    id: 123,
  },
  {
    no: 10,
    name: "Alzakana",
    gender: "M",
    phonenumber: 11222222,
    id: 123,
  },
];

export default function LifecycleListing() {
  const searchParam = useSearchParams();
  const page = Number.parseInt(searchParam.get("page") || "1");
  const pageSize = Number.parseInt(searchParam.get("pageSize") || "10");
  const totalItems = Number.parseInt(searchParam.get("totalItems") || "10");
  const columns: ColumnDef<DataProps>[] = [
    {
      accessorKey: "no",
      header: "Nº",
      cell: ({ row }) => {
        return <section>{row.original.no}</section>;
      },
    },
    {
      accessorKey: "name",
      header: "FullName",
      cell: ({ row }) => {
        return <section>{row.original.name}</section>;
      },
    },
    {
      accessorKey: "gender",
      header: "Gender",
      cell: ({ row }) => {
        return <section>{row.original.gender}</section>;
      },
    },
    {
      accessorKey: "phonenumber",
      header: "Phonenumber",
      cell: ({ row }) => {
        return <section>{row.original.phonenumber}</section>;
      },
    },
    {
      id: "actions",
      header: () => <span className="text-center">Actions</span>,
      enableHiding: false,
      cell: ({ row }) => {
        return (
          <section>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-16 p-0">
                  <span className="sr-only">Open menu</span>
                  <div className="flex size-7 items-center justify-center rounded-2xl bg-[#058248]">
                    <Eye className="text-white" />
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuGroup>
                  <Link href="#">Details</Link>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </section>
        );
      },
    },
  ];
  return (
    <section>
      <div className="rounded-xl border bg-gray-50 p-7 dark:bg-black">
        <h1 className="text-3xl font-bold dark:text-gray-600">
          Life Cycle Page
        </h1>
        <div className="mt-5 flex items-center justify-between">
          <div className="relative w-full flex-1 md:max-w-sm">
            <Input placeholder="Search..." />
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="absolute top-1/2 right-1 h-7 w-7 -translate-y-1/2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
            >
              <XIcon className="h-4 w-4" />
              <span className="sr-only">Clear</span>
            </Button>
          </div>
          <Button className="bg-[#058248] px-4 py-2 whitespace-nowrap transition-colors hover:bg-blue-800 dark:text-white">
            <BadgePlus />
            <Link href="/dashboard/lifecycle/create">Create New</Link>
          </Button>
        </div>
      </div>

      <div className="mt-4">
        <DataTable data={MockData} columns={columns} />
      </div>
      <div className="mt-5 flex justify-between">
        <div>Showing Result{totalItems}</div>
        <div>
          <PaginationWithLinks
            page={page}
            pageSize={pageSize}
            totalCount={totalItems}
          />
        </div>
      </div>
    </section>
  );
}
