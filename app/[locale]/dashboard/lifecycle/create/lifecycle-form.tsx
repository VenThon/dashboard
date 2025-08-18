"use client";

import { FileDropzone } from "@/components/FileDropzone";
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

import {
  ChevronLeft,
  MapPinHouse,
  Paperclip,
  PhoneCall,
  Users,
  VenusAndMars,
} from "lucide-react";
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
          <h1 className="text-4xl font-bold text-[#058248] dark:text-white">
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
                        <div className="flex">
                          <Users size={20} className="text-orange-400" />
                          <div className="ml-3 text-[#058248]">
                            <FieldLabel label="Full Name" required />
                          </div>
                        </div>

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
                      <div className="flex">
                        <PhoneCall size={20} className="text-orange-400" />
                        <div className="ml-3 text-[#058248]">
                          <FieldLabel label="Phone number" required />
                        </div>
                      </div>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormDescription>
                        Phone number of this request
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name=""
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex">
                        <VenusAndMars size={20} className="text-orange-400" />
                        <div className="ml-3 text-[#058248]">
                          <FieldLabel label="Gender" required />
                        </div>
                      </div>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormDescription>Input your gender</FormDescription>
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
                      <div className="flex">
                        <MapPinHouse size={20} className="text-orange-400" />
                        <div className="ml-3 text-[#058248]">
                          <FieldLabel label="Address" required />
                        </div>
                      </div>
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
                <div className="flex">
                  <Paperclip size={20} className="text-orange-400" />
                  <div className="ml-3 text-[#058248]">
                    <FieldLabel label="Attachment" required />
                  </div>
                </div>
                <FileDropzone />
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
