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
import { MoreHorizontal, Search } from "lucide-react";

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
  {
    no: 11,
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
      header: "No",
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
      header: "Action",
      enableHiding: false,
      cell: ({ row }) => {
        return (
          <section>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <span className="sr-only">Open menu</span>
                  <MoreHorizontal />
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
      <h1 className="text-3xl font-bold text-blue-600">Life Cycle Page</h1>
      <div className="mt-5 flex items-center justify-end gap-3">
        <div className="relative w-full max-w-md">
          <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
          <Input
            type="search"
            placeholder="Search here..."
            className="focus-visible:ring-primary/50 rounded-lg py-2 pr-4 pl-8 focus-visible:ring-2"
          />
        </div>
        <Button
          variant="destructive"
          className="hover:bg-destructive/90 px-4 py-2 whitespace-nowrap transition-colors"
        >
          Create new
        </Button>
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
