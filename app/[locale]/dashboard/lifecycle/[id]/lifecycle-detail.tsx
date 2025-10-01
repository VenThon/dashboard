"use client";

import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { FieldLabel } from "@/components/ui/field-label";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import ImageUpload from "@/components/uploadProfile";
import { useRouter } from "@/i18n/navigation";

import {
  ChevronLeft,
  CircleArrowDown,
  MapPinHouse,
  NotebookPen,
  PhoneCall,
  Users,
  VenusAndMars,
} from "lucide-react";
import { useForm } from "react-hook-form";

interface PersonalInfoForm {
  fullName: string;
  phoneNumber: string;
  gender: string;
  description: string;
  address: string;
}

export default function LifecycleDetailsPage() {
  const router = useRouter();
  const form = useForm<PersonalInfoForm>();

  const onSubmit = (data: PersonalInfoForm) => {
    console.log("Form data saved:", data);
  };

  return (
    <div>
      <div className="flex justify-between">
        <Button
          variant="outline"
          onClick={() => router.push("/dashboard/lifecycle")}
        >
          <ChevronLeft />
          Back
        </Button>
        <Button className="bg-[#058248]">
          <CircleArrowDown />
          Download
        </Button>
      </div>
      <Card className="mt-4 w-full p-4">
        <CardHeader>
          <CardTitle className="flex justify-center text-4xl font-bold text-[#058248] dark:text-white">
            Personal Information Details
          </CardTitle>
        </CardHeader>
        <Separator />
        <Tabs defaultValue="information">
          <TabsList>
            <TabsTrigger
              value="information"
              className="flex-1 data-[state=active]:bg-[#058248] data-[state=active]:text-white"
            >
              Information
            </TabsTrigger>
            <TabsTrigger
              value="image"
              className="flex-1 data-[state=active]:bg-[#058248] data-[state=active]:text-white"
            >
              Image
            </TabsTrigger>
          </TabsList>
          <TabsContent value="information">
            <div className="mt-4">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-2">
                    <div className="col-span-1">
                      <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                          <FormItem>
                            <div className="flex">
                              <Users size={20} className="text-orange-400" />
                              <div className="ml-3 text-[#058248]">
                                <FieldLabel label="Full Name" />
                              </div>
                            </div>

                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="phoneNumber"
                      render={({ field }) => (
                        <FormItem>
                          <div className="flex">
                            <PhoneCall size={20} className="text-orange-400" />
                            <div className="ml-3 text-[#058248]">
                              <FieldLabel label="Phone number" />
                            </div>
                          </div>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="gender"
                      render={({ field }) => (
                        <FormItem>
                          <div className="flex">
                            <VenusAndMars
                              size={20}
                              className="text-orange-400"
                            />
                            <div className="ml-3 text-[#058248]">
                              <FieldLabel label="Gender" />
                            </div>
                          </div>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="space-y-6">
                    <FormField
                      control={form.control}
                      name="description"
                      render={({ field }) => (
                        <FormItem>
                          <div className="flex">
                            <NotebookPen
                              size={20}
                              className="text-orange-400"
                            />
                            <div className="ml-3 text-[#058248]">
                              <FieldLabel label="Description" />
                            </div>
                          </div>
                          <FormControl>
                            <Textarea {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="space-y-6">
                    <FormField
                      control={form.control}
                      name="address"
                      render={({ field }) => (
                        <FormItem>
                          <div className="flex">
                            <MapPinHouse
                              size={20}
                              className="text-orange-400"
                            />
                            <div className="ml-3 text-[#058248]">
                              <FieldLabel label="Address" />
                            </div>
                          </div>
                          <FormControl>
                            <Textarea {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                </form>
              </Form>
            </div>
          </TabsContent>
          <TabsContent value="image">
            <ImageUpload />
          </TabsContent>
        </Tabs>
        <CardFooter className="mt-10 flex justify-end">
          <Button
            className="bg-[#058248]"
            onClick={form.handleSubmit(onSubmit)}
          >
            Save
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
