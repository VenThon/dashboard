"use client";

import { Button } from "@/components/ui/button";
import { FieldLabel } from "@/components/ui/field-label";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group";

import { Plus, Trash2 } from "lucide-react";
import { Control, useFieldArray } from "react-hook-form";

import { SubjectForm } from "./gradeLevel";

export default function LessonFields({
  control,
  chapterIndex,
}: {
  control: Control<SubjectForm>;
  chapterIndex: number;
}) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: `chapters.${chapterIndex}.lessons`,
  });
  return (
    <div className="mt-7">
      <div className="flex items-end justify-between">
        <FieldLabel label="Lessons" required />
        <Button
          type="button"
          onClick={() =>
            append({
              title: "",
              durationHours: 0,
              order: fields.length + 1,
              description: "",
              objectives: "",
            })
          }
          className="flex h-8 w-28 items-center gap-1.5 bg-[#00C950] px-1.5 text-xs font-medium hover:bg-green-400"
        >
          <Plus className="h-2 w-2 rounded-full bg-white text-[#00C950]" />
          <span className="mt-0.5">Add Lesson</span>
        </Button>
      </div>
      {fields.map((lesson, lessonIndex) => (
        <div
          key={lesson.id}
          className="border-border mt-6 rounded-md border bg-white p-4"
        >
          <div className="mb-4 flex items-center justify-between">
            <span className="rounded-sm bg-[#DCFCE7] px-1.5 py-0.5 text-sm text-[#008236]">
              Lesson {lessonIndex + 1}
            </span>

            {lessonIndex > 0 && (
              <Button
                type="button"
                variant="secondary"
                size="icon"
                onClick={() => remove(lessonIndex)}
                className="hover:bg-destructive/80 h-8 w-8 rounded-full bg-orange-400"
              >
                <Trash2 className="h-3.5 w-3.5 text-white" />
              </Button>
            )}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={control}
              name={`chapters.${chapterIndex}.lessons.${lessonIndex}.title`}
              render={({ field }) => (
                <FormItem>
                  <FieldLabel label="Lesson Name" />
                  <FormControl>
                    <Input type="text" {...field} placeholder="មូលដ្ឋានគ្រឹះ" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name={`chapters.${chapterIndex}.lessons.${lessonIndex}.durationHours`}
              render={({ field }) => (
                <FormItem>
                  <FieldLabel label="Teaching Hours" />
                  <FormControl>
                    <div className="grid grid-cols-3 items-center gap-4 rounded-md border py-1 pl-4">
                      <FieldLabel label="ចំនួនម៉ោង" />
                      <Input
                        type="number"
                        min={0}
                        className="bg-accent h-7 border-none text-center shadow-none outline-none"
                        {...field}
                        onChange={(e) => {
                          const value =
                            e.target.value === "" ? "" : Number(e.target.value);
                          field.onChange(value);
                        }}
                      />
                      <FieldLabel label="hour(s)" />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <FormField
              control={control}
              name={`chapters.${chapterIndex}.lessons.${lessonIndex}.description`}
              render={({ field }) => (
                <FormItem>
                  <FieldLabel label="Descriptions" />
                  <FormControl>
                    <InputGroup>
                      <InputGroupTextarea
                        {...field}
                        placeholder="បំពេញការពិពណ៌នាមេរៀន..."
                      />
                      <InputGroupAddon align="block-end">
                        <InputGroupText className="text-muted-foreground text-xs">
                          120 characters left
                        </InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name={`chapters.${chapterIndex}.lessons.${lessonIndex}.objectives`}
              render={({ field }) => (
                <FormItem>
                  <FieldLabel label="Objectives" />
                  <FormControl>
                    <InputGroup>
                      <InputGroupTextarea
                        {...field}
                        placeholder="បំពេញវត្ថុបំណង៖ក្រោយពីសិក្សាមេរៀននេះចប់..."
                      />
                      <InputGroupAddon align="block-end">
                        <InputGroupText className="text-muted-foreground text-xs">
                          120 characters left
                        </InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
