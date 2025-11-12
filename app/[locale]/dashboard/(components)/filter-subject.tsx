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

export const GradeLevel = {
  GRADE_7: 7,
  GRADE_8: 8,
  GRADE_9: 9,
  GRADE_10: 10,
  GRADE_11: 11,
  GRADE_12: 12,
} as const;

export type GradeLevelType = (typeof GradeLevel)[keyof typeof GradeLevel];

export function FilterSubject() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentGradeParam = searchParams.get("grade");
  const currentGrade = currentGradeParam ? Number(currentGradeParam) : null;

  const handleGradeLevelChange = (grade: GradeLevelType | "") => {
    const params = new URLSearchParams(searchParams);

    if (grade) {
      params.set("grade", grade.toString());
    } else {
      params.delete("grade");
    }

    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="text-primary flex items-center gap-2 border bg-green-600 dark:text-white"
        >
          <ListFilter className="h-4 w-4 rounded-full bg-white p-0.5 font-semibold text-green-700" />
          <span className="text-white">Filter by grade</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuItem
            onClick={() => handleGradeLevelChange("")}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-2">
              {currentGrade === null && <Check className="h-4 w-4" />}
              <span>All</span>
            </div>
          </DropdownMenuItem>
          {Object.values(GradeLevel).map((grade) => (
            <DropdownMenuItem
              key={grade}
              onClick={() => handleGradeLevelChange(grade)}
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                {currentGrade === grade && <Check className="h-4 w-4" />}
                <span>Grade {grade}</span>
              </div>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
