import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

import { ShieldAlert, Trash2 } from "lucide-react";

export function StaffDeleteAlertDialog() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant="outline"
          className="ml-1.5 h-10 w-10 rounded-full bg-red-500 p-0 text-white hover:bg-red-600"
        >
          <Trash2 className="size-4 text-white" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="flex items-center justify-center text-red-400">
            <ShieldAlert size={48} className="rounded-full bg-yellow-100 p-2" />
          </AlertDialogTitle>
          <AlertDialogDescription className="mt-0.5 flex justify-center text-xl">
            Delete Staff
          </AlertDialogDescription>
          <AlertDialogDescription className="text-md mt-0.5 text-center">
            You are going to delete this staff member.
            <br />
            Are you sure?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <div className="flex w-full justify-center gap-2">
            <AlertDialogCancel className="min-w-[160px] rounded-xl bg-green-500 text-white hover:bg-green-400 hover:text-white">
              No, keep It
            </AlertDialogCancel>
            <AlertDialogAction className="min-w-[160px] rounded-xl bg-red-500 hover:bg-red-600">
              Yes, Delete
            </AlertDialogAction>
          </div>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
