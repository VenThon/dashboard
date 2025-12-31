"use client";

import * as React from "react";

import { useRouter } from "next/navigation";

import { FileDropzone } from "@/components/FileDropzone";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  ChevronLeft,
  MailPlus,
  Paperclip,
  PhoneCall,
  SquarePen,
  SquaresExclude,
  UserRoundPen,
  VenusAndMars,
} from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

const formSchema = z.object({
  staffName: z
    .string()
    .min(5, "Bug title must be at least 5 characters.")
    .max(32, "Bug title must be at most 32 characters."),
  gender: z.string(),
  position: z.string(),
  email: z.string(),
  phoneNumber: z.string(),
  description: z
    .string()
    .min(20, "Description must be at least 20 characters.")
    .max(100, "Description must be at most 100 characters."),
});

export default function StaffFormCreate() {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      staffName: "",
      gender: "",
      position: "",
      email: "",
      description: "",
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    toast("You submitted the following values:", {
      description: (
        <pre className="bg-code text-code-foreground mt-2 w-[320px] overflow-x-auto rounded-md p-4">
          <code>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
      position: "bottom-right",
      classNames: {
        content: "flex flex-col gap-2",
      },
      style: {
        "--border-radius": "calc(var(--radius)  + 4px)",
      } as React.CSSProperties,
    });
  }

  return (
    <section>
      <Button
        variant="outline"
        className="text-primary dark:text-white"
        onClick={() => router.push("/dashboard/staff")}
      >
        <ChevronLeft />
        <span>Back</span>
      </Button>

      <Card className="mt-6 w-full">
        <CardHeader>
          <CardTitle className="text-2xl text-[#058248]">
            Create New Staff
          </CardTitle>
          <CardDescription>
            Create a new staff profile by entering personal details, assigning a
            role, and setting access permissions.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form id="form-rhf-demo" onSubmit={form.handleSubmit(onSubmit)}>
            <FieldGroup>
              <div className="flex gap-4">
                <Controller
                  name="staffName"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <div className="flex gap-3">
                        <UserRoundPen className="h-5 w-5 text-orange-400" />
                        <FieldLabel
                          className="text-[#058248]"
                          htmlFor="form-rhf-demo-title"
                        >
                          Name
                        </FieldLabel>
                      </div>
                      <Input
                        {...field}
                        id="form-rhf-demo-title"
                        aria-invalid={fieldState.invalid}
                        placeholder="Input your name"
                        autoComplete="off"
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
                <Controller
                  name="gender"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <div className="flex gap-3">
                        <VenusAndMars className="text-orange-400" />
                        <FieldLabel
                          className="text-[#058248]"
                          htmlFor="form-rhf-demo-title"
                        >
                          Gender
                        </FieldLabel>
                      </div>
                      <Input
                        {...field}
                        id="form-rhf-demo-title"
                        aria-invalid={fieldState.invalid}
                        placeholder="Input your gender"
                        autoComplete="off"
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
              </div>
              <div className="flex gap-4">
                <Controller
                  name="position"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <div className="flex gap-3">
                        <SquaresExclude className="h-5 w-5 text-orange-400" />
                        <FieldLabel
                          className="text-[#058248]"
                          htmlFor="form-rhf-demo-title"
                        >
                          Position
                        </FieldLabel>
                      </div>
                      <Input
                        {...field}
                        id="form-rhf-demo-title"
                        aria-invalid={fieldState.invalid}
                        placeholder="Input your position"
                        autoComplete="off"
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
                <Controller
                  name="email"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <div className="flex gap-3">
                        <MailPlus className="h-5 w-5 text-orange-400" />
                        <FieldLabel
                          className="text-[#058248]"
                          htmlFor="form-rhf-demo-title"
                        >
                          Email{" "}
                        </FieldLabel>
                      </div>

                      <Input
                        {...field}
                        id="form-rhf-demo-title"
                        aria-invalid={fieldState.invalid}
                        placeholder="Input your email"
                        autoComplete="off"
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
              </div>
              <Controller
                name="phoneNumber"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <div className="flex gap-3">
                      <PhoneCall className="h-5 w-5 text-orange-400" />
                      <FieldLabel
                        className="text-[#058248]"
                        htmlFor="form-rhf-demo-title"
                      >
                        Phone Number
                      </FieldLabel>
                    </div>

                    <Input
                      {...field}
                      id="form-rhf-demo-title"
                      aria-invalid={fieldState.invalid}
                      placeholder="Input your phone number"
                      autoComplete="off"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="description"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <div className="flex gap-3">
                      <SquarePen className="h-5 w-5 text-orange-400" />
                      <FieldLabel
                        className="text-[#058248]"
                        htmlFor="form-rhf-demo-description"
                      >
                        Description
                      </FieldLabel>
                    </div>

                    <InputGroup>
                      <InputGroupTextarea
                        {...field}
                        id="form-rhf-demo-description"
                        placeholder="Write decription about new staff infomation"
                        rows={6}
                        className="min-h-24 resize-none"
                        aria-invalid={fieldState.invalid}
                      />
                      <InputGroupAddon align="block-end">
                        <InputGroupText className="tabular-nums">
                          {field.value.length}/100 characters
                        </InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>
                    <FieldDescription>
                      Include steps to reproduce, expected behavior, and what
                      actually happened.
                    </FieldDescription>
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <div className="mt-4">
                <div className="flex">
                  <Paperclip size={20} className="text-orange-400" />
                  <div className="ml-3 text-[#058248]">
                    <FieldLabel htmlFor="form-rhf-demo-description">
                      Attachment
                    </FieldLabel>
                  </div>
                </div>
                <FileDropzone />
              </div>
            </FieldGroup>
          </form>
        </CardContent>
        <CardFooter>
          <Field orientation="horizontal">
            <Button
              type="button"
              variant="secondary"
              onClick={() => form.reset()}
            >
              Reset
            </Button>
            <Button
              type="submit"
              className="bg-green-500 hover:bg-green-400"
              form="form-rhf-demo"
            >
              Submit
            </Button>
          </Field>
        </CardFooter>
      </Card>
    </section>
  );
}
