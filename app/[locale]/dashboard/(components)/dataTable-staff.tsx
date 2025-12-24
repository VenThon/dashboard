import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";

import { ColumnDef } from "@tanstack/react-table";
import { SquarePen, Trash2 } from "lucide-react";

import { staff } from "../../mockData/staff";
import { StaffViewDetailDialog } from "../staff/view/staff-view-dialog";

export const columnsDataTableStaff: ColumnDef<staff>[] = [
  {
    accessorKey: "id",
    header: "Nº",
    enableHiding: false,
    cell: ({ row, table }) => {
      return (
        <div className="ml-2">
          {(table
            .getSortedRowModel()
            ?.flatRows?.findIndex((flatRow) => flatRow.id === row.id) || 0) + 1}
        </div>
      );
    },
  },
  {
    accessorKey: "staffName",
    header: "Full Name",
    cell: ({ row }) => {
      return <section>{row.original.staffName}</section>;
    },
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => {
      return <section>{row.original.email}</section>;
    },
  },
  {
    accessorKey: "phoneNumber",
    header: "Phone Number",
    cell: ({ row }) => {
      return <section>{row.original.phoneNumber}</section>;
    },
  },
  {
    accessorKey: "position",
    header: "Position",
    cell: ({ row }) => {
      return <section>{row.original.position}</section>;
    },
  },
  {
    accessorKey: "imageURl",
    header: "Image",
    cell: ({ row }) => {
      return <section>{row.original.imageURl}</section>;
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
    id: "actions",
    header: () => <span className="flex justify-center">Actions</span>,
    enableHiding: false,
    cell: ({ row }) => {
      return (
        <section className="flex items-center justify-center">
          <Link href={`/dashboard/staff/edit/${row.original.id}`}>
            <Button
              asChild
              className="h-8 bg-[#058248] hover:bg-green-600 sm:w-auto dark:text-white"
            >
              <span className="flex items-center gap-2">
                <SquarePen className="size-4 font-bold text-white" />
              </span>
            </Button>
          </Link>
          <Button
            asChild
            className="ml-1.5 h-8 bg-[#058248] hover:bg-green-600 sm:w-auto dark:text-white"
          >
            <StaffViewDetailDialog data={row.original} />
          </Button>

          <Link href={`/dashboard/staff/delete/${row.original.id}`}>
            <Button
              asChild
              className="ml-1.5 h-8 bg-[#058248] hover:bg-green-600 sm:w-auto dark:text-white"
            >
              <span className="flex items-center gap-2">
                <Trash2 className="size-4 font-bold text-white" />
              </span>
            </Button>
          </Link>
        </section>
      );
    },
  },
];
