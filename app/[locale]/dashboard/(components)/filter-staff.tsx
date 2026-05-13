"use client";

import { useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "@/i18n/navigation";

import { Check, ListFilter } from "lucide-react";

export const Gender = {
  Male: "Male",
  Female: "Female",
  Other: "Other",
} as const;

export type GenderType = (typeof Gender)[keyof typeof Gender];

export function FilterStaff() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentGender = searchParams.get("gender") as GenderType | null;

  const handleGenderChange = (gender: GenderType | "") => {
    const params = new URLSearchParams(searchParams);

    if (gender) {
      params.set("gender", gender);
    } else {
      params.delete("gender");
    }

    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="flex items-center gap-2 border bg-green-600 hover:bg-green-500 dark:text-white"
        >
          <ListFilter className="h-4 w-4 rounded-full bg-white p-0.5 text-green-700" />
          <span className="text-white">Filter by Gender</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuGroup>
          {/* All */}
          <DropdownMenuItem
            onClick={() => handleGenderChange("")}
            className="flex items-center gap-2"
          >
            {currentGender === null && <Check className="h-4 w-4" />}
            <span>All</span>
          </DropdownMenuItem>

          {/* Gender list */}
          {Object.values(Gender).map((gender) => (
            <DropdownMenuItem
              key={gender}
              onClick={() => handleGenderChange(gender)}
              className="flex items-center gap-2"
            >
              {currentGender === gender && <Check className="h-4 w-4" />}
              <span>{gender}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
