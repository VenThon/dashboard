"use client";

import { useEffect } from "react";

import { useParams, useRouter } from "next/navigation";

import { MockdataStaff, staff } from "@/app/[locale]/mockData/staff";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

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

import { Gender } from "../../../(components)/filter-staff";
import { PhoneNumberInput } from "../../../(components)/phone-input";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  gender: z.nativeEnum(Gender, {
    required_error: "Gender is required",
  }),
  position: z.string().min(2, "Position is required"),
  email: z.string().email("Invalid email"),
  phoneNumber: z.string().min(6, "Phone number is required"),
  description: z.string().min(20).max(100),
});

type FormValues = z.infer<typeof formSchema>;

export default function StaffEditPage() {
  const router = useRouter();
  const { id } = useParams<{ id: string }>();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      gender: undefined,
      position: "",
      email: "",
      phoneNumber: "",
      description: "",
    },
  });

  useEffect(() => {
    if (!id) return;

    const staffData: staff | undefined = MockdataStaff.find(
      (item) => item.id === id,
    );

    if (!staffData) {
      toast.error("Staff not found");
      router.push("/dashboard/staff");
      return;
    }

    form.reset({
      name: staffData.staffName,
      gender: staffData.gender,
      position: staffData.position,
      email: staffData.email,
      phoneNumber: staffData.phoneNumber,
      description: staffData.description,
    });
  }, [id, form, router]);

  function onSubmit(values: FormValues) {
    const updatedStaff = {
      id,
      ...values,
    };
    console.log("Updated staff (mock):", updatedStaff);

    toast.success("Staff updated successfully (mock)");
    router.push("/dashboard/staff");
  }

  return (
    <section>
      <Button
        variant="outline"
        className="text-primary"
        onClick={() => router.push("/dashboard/staff")}
      >
        <ChevronLeft />
        <span>Back</span>
      </Button>

      <Card className="mt-6 w-full">
        <CardHeader>
          <CardTitle className="text-2xl text-[#058248]">Edit Staff</CardTitle>
          <CardDescription>
            Update staff personal information and role.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form id="staff-edit-form" onSubmit={form.handleSubmit(onSubmit)}>
            <FieldGroup>
              <div className="flex gap-4">
                <Controller
                  name="name"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <div className="flex gap-3">
                        <UserRoundPen className="h-5 w-5 text-orange-400" />
                        <FieldLabel>Name</FieldLabel>
                      </div>
                      <Input {...field} placeholder="Full name" />

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
                        <FieldLabel>Gender</FieldLabel>
                      </div>

                      <Select
                        key={field.value}
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger aria-invalid={fieldState.invalid}>
                          <SelectValue placeholder="Select gender" />
                        </SelectTrigger>

                        <SelectContent>
                          {Object.values(Gender).map((gender) => (
                            <SelectItem key={gender} value={gender}>
                              {gender}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>

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
                        <FieldLabel>Position</FieldLabel>
                      </div>
                      <Input {...field} placeholder="Position" />
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
                        <FieldLabel>Email</FieldLabel>
                      </div>
                      <Input {...field} placeholder="Email" />
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
                      <FieldLabel>Phone Number</FieldLabel>
                    </div>
                    <div
                      className={cn(
                        "border-input bg-background flex h-10 w-full items-center rounded-md border",
                        "px-3 py-2 text-sm",
                        "ring-offset-background",
                        "focus-within:ring-ring focus-within:ring-2 focus-within:ring-offset-2 focus-within:outline-none",
                      )}
                    >
                      <PhoneNumberInput
                        value={field.value}
                        onChange={field.onChange}
                      />
                    </div>
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
                      <FieldLabel>Description</FieldLabel>
                    </div>
                    <InputGroup>
                      <InputGroupTextarea
                        {...field}
                        rows={6}
                        className="resize-none"
                        placeholder="Staff description"
                      />
                      <InputGroupAddon align="block-end">
                        <InputGroupText>
                          {field.value.length}/500
                        </InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>

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
          <Field className="flex justify-end" orientation="horizontal">
            <Button
              variant="outline"
              className="text-primary"
              onClick={() => router.push("/dashboard/staff")}
            >
              <ChevronLeft />
              <span>Back</span>
            </Button>
            <Button
              type="submit"
              className="bg-green-500 hover:bg-green-400"
              form="staff-edit-form"
            >
              Update
            </Button>
          </Field>
        </CardFooter>
      </Card>
    </section>
  );
}
