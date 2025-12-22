import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

import { CircleUserRound, EllipsisVertical, Eye } from "lucide-react";

export function StaffViewDetailDialog() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="ml-1.5 h-8 bg-[#058248] hover:bg-green-600 sm:w-auto dark:text-white"
          >
            <span className="flex items-center gap-2">
              <Eye className="size-4 font-bold text-white" />
            </span>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Information deatails of staff</DialogTitle>
            <DialogDescription>
              Review the information for this staff below.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="flex items-center justify-center">
              <CircleUserRound className="h-28 w-28 text-green-500" />
            </div>
            <div className="grid grid-cols-4 gap-3">
              <Label>Username</Label>
              <EllipsisVertical size={16} className="mt-1.5" />
              <span className="col-span-2">Limin hor</span>
            </div>
            <div className="grid grid-cols-3 gap-0.5">
              <Label>Gender</Label>
              <EllipsisVertical size={16} className="mt-1.5" />
              <span>Female</span>
            </div>
            <div className="grid grid-cols-3 gap-0.5">
              <Label>Email</Label>
              <EllipsisVertical size={16} className="mt-1.5" />
              <span>liminhor@gmail.com</span>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Leave</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
