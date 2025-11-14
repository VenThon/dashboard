"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FieldLabel } from "@/components/ui/field-label";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "@/i18n/navigation";

import { ChevronLeft, Plus, Trash2 } from "lucide-react";
import { useFieldArray, useForm } from "react-hook-form";

import { SubjectForm } from "../(components)/gradeLevel";
import LessonFields from "../(components)/lesson-field";
import { GradeLevel } from "../../(components)/filter-subject";

export default function SubjectCreationForm() {
  const router = useRouter();
  const form = useForm<SubjectForm>({
    defaultValues: {
      name: "",
      gradeLevel: undefined,
      durationMs: 0,
      chapters: [
        {
          title: "",
          order: 1,
          lessons: [
            {
              title: "",
              durationHours: 0,
              order: 1,
              description: "",
              objectives: "",
            },
          ],
        },
      ],
    },
  });

  const {
    fields: chapterFields,
    append: appendChapter,
    remove: removeChapter,
  } = useFieldArray({
    control: form.control,
    name: "chapters",
  });
  return (
    <section>
      <Button
        variant="outline"
        className="text-primary dark:text-white"
        onClick={() => router.push("/dashboard/subject")}
      >
        <ChevronLeft />
        <span>Back</span>
      </Button>
      <Card className="mt-6">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-green-600">
            Create New Subject
          </CardTitle>
          <CardDescription>
            Fill in the required fields to create a new subject with chapters
            and lessons.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mt-6">
            <Form {...form}>
              <div className="grid grid-cols-2 items-start gap-4">
                <FormField
                  control={form.control}
                  name="gradeLevel"
                  render={({ field }) => (
                    <FormItem>
                      <FieldLabel label="Grade" required />
                      <FormControl>
                        <Select
                          onValueChange={(value) =>
                            field.onChange(Number(value))
                          }
                          value={field.value ? String(field.value) : ""}
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select grade" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              {(Object.values(GradeLevel) as number[])
                                .sort((a, b) => b - a)
                                .map((gradeLevel) => (
                                  <SelectItem
                                    key={String(gradeLevel)}
                                    value={String(gradeLevel)}
                                  >
                                    {gradeLevel}
                                  </SelectItem>
                                ))}
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FieldLabel label="Subject" required />
                      <FormControl>
                        <Input
                          type="text"
                          {...field}
                          placeholder="e.g., ITC, Mathematics, English"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="mt-6 space-y-5">
                {chapterFields.map((chapter, chapterIndex) => (
                  <Card key={chapter.id}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <FieldLabel
                          label={`Chapter ${chapterIndex + 1}`}
                          required
                        />

                        <div className="flex items-center justify-center">
                          <div className="flex items-center justify-center px-1.5 font-medium">
                            <Button
                              type="button"
                              onClick={() =>
                                appendChapter({
                                  title: "",
                                  order: chapterFields.length + 1,
                                  lessons: [
                                    {
                                      title: "",
                                      durationHours: 0,
                                      order: 1,
                                      description: "",
                                      objectives: "",
                                    },
                                  ],
                                })
                              }
                              className="flex h-8 w-28 items-center justify-center gap-1.5 bg-[#00C950] text-xs text-white"
                            >
                              <Plus className="h-2 w-2 rounded-full bg-white text-green-600" />
                              <span className="mt-0.5">Add Chapter</span>
                            </Button>
                          </div>

                          {chapterIndex > 0 && (
                            <Button
                              type="button"
                              size="icon"
                              onClick={() => removeChapter(chapterIndex)}
                              className="ml-1.5 h-8 w-8 rounded-full bg-orange-400"
                            >
                              <Trash2 className="h-4 w-4 font-bold text-white" />
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <FormField
                        control={form.control}
                        name={`chapters.${chapterIndex}.title`}
                        render={({ field }) => (
                          <FormItem>
                            <FieldLabel label="Chapter Name" />
                            <FormControl>
                              <Input
                                type="text"
                                {...field}
                                placeholder="មូលដ្ឋានគ្រឹះ"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <LessonFields
                        control={form.control}
                        chapterIndex={chapterIndex}
                      />
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="mt-7 flex justify-end gap-4">
                <Button
                  variant="outline"
                  className="text-primary dark:text-white"
                  onClick={() => router.push("/dashboard/subject")}
                >
                  <span>Cancel</span>
                </Button>
                <Button type="submit" className="bg-[#00C950]">
                  Submit
                </Button>
              </div>
            </Form>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
