"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FieldLabel } from "@/components/ui/field-label";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "@/i18n/navigation";

import { ChevronLeft } from "lucide-react";
import { useForm } from "react-hook-form";

export default function CreateRequestForm() {
  const router = useRouter();
  const form = useForm({});

  return (
    <div className="mx-auto md:mx-2">
      <div>
        <Button
          variant="outline"
          onClick={() => router.push("/dashboard/lifecycle")}
        >
          <ChevronLeft />
          Back
        </Button>
      </div>
      <Card className="mt-4 w-full p-4">
        <div className="mt-4 flex w-full justify-center">
          <h1 className="text-primary text-4xl font-bold dark:text-white">
            Create Personal Information
          </h1>
        </div>

        <Separator />

        <div className="mt-4">
          <Form {...form}>
            <form className="space-y-6">
              <div className="grid grid-cols-2">
                <div className="col-span-1">
                  <FormField
                    control={form.control}
                    name=""
                    render={({ field }) => (
                      <FormItem>
                        <FieldLabel label="Full Name" required />
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormDescription>Name of this request</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name=""
                  render={({ field }) => (
                    <FormItem>
                      <FieldLabel label="Phone Number" required />
                      <FormControl>
                        <Input type="number" {...field} min={0} />
                      </FormControl>
                      <FormDescription>Phone number +855()</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name=""
                  render={({ field }) => (
                    <FormItem>
                      <FieldLabel label="Gender" required />
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormDescription>Name of this request</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="space-y-6">
                <FormField
                  control={form.control}
                  name=""
                  render={({ field }) => (
                    <FormItem>
                      <FieldLabel label="Address" required />
                      <FormControl>
                        <Textarea
                          placeholder="Please enter your local address"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Additional information about the request
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="mt-4">
                <FormItem>
                  <FieldLabel label="Attachment" required />
                  <div className="mt-4">
                    <p className="text-sm">
                      Supported formates: JPG, JPEG, PNG
                    </p>
                  </div>

                  <FormControl>
                    <Input id="" type="file" />
                  </FormControl>
                </FormItem>
              </div>

              <div className="flex w-full justify-end">
                <Button variant="destructive">Submit</Button>
              </div>
            </form>
          </Form>
        </div>
      </Card>
    </div>
  );
}
