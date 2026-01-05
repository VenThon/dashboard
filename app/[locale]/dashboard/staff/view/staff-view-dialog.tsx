import { staff } from "@/app/[locale]/mockData/staff";
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

import {
  CircleUserRound,
  EllipsisVertical,
  Eye,
  NotebookPen,
  SquareUser,
} from "lucide-react";

type Props = {
  data: staff;
};

export function StaffViewDetailDialog({ data }: Props) {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="ml-1.5 h-10 w-10 rounded-full bg-blue-500 p-0 text-white hover:bg-blue-500"
          >
            <Eye className="size-4 text-white" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-xl text-green-400">
              Information deatails of staff
            </DialogTitle>
            <DialogDescription>
              Review the information for this staff below.
            </DialogDescription>
          </DialogHeader>
          <div>
            <div className="flex items-center justify-center">
              <CircleUserRound className="h-28 w-28 text-gray-400" />
            </div>
            <div className="mt-4 flex gap-2.5">
              <SquareUser className="mt-1 h-5 w-5 text-orange-400" />
              <Label className="w-32 text-xl text-green-400">
                Personal Data
              </Label>
            </div>
            <div className="mt-4 space-y-3">
              <div className="flex w-full max-w-md items-center gap-6">
                <Label className="text-muted-foreground w-28">Full Name</Label>
                <div className="flex items-center gap-3">
                  <EllipsisVertical
                    size={16}
                    className="text-muted-foreground"
                  />
                  <span>{data.staffName}</span>
                </div>
              </div>
              <div className="flex w-full max-w-md items-center gap-6">
                <Label className="text-muted-foreground w-28">Gender</Label>
                <div className="flex items-center gap-3">
                  <EllipsisVertical
                    size={16}
                    className="text-muted-foreground"
                  />
                  <span>{data.gender}</span>
                </div>
              </div>
              <div className="flex w-full max-w-md items-center gap-6">
                <Label className="text-muted-foreground w-28">Position</Label>
                <div className="flex items-center gap-3">
                  <EllipsisVertical
                    size={16}
                    className="text-muted-foreground"
                  />
                  <span>{data.position}</span>
                </div>
              </div>
              <div className="flex w-full max-w-md items-center gap-6">
                <Label className="text-muted-foreground w-28">
                  Phone Number
                </Label>
                <div className="flex items-center gap-3">
                  <EllipsisVertical
                    size={16}
                    className="text-muted-foreground"
                  />
                  <span>{data.phoneNumber}</span>
                </div>
              </div>
              <div className="flex w-full max-w-md items-center gap-6">
                <Label className="text-muted-foreground w-28">Email</Label>
                <div className="flex items-center gap-3">
                  <EllipsisVertical
                    size={16}
                    className="text-muted-foreground"
                  />
                  <span>{data.email}</span>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex gap-2.5">
                <NotebookPen className="mt-1 h-5 w-5 text-orange-400" />
                <Label className="w-28 text-xl text-green-400">
                  Description
                </Label>
              </div>
              <div className="mt-1 flex items-center text-sm">
                <span>{data.description}</span>
              </div>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Back</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
