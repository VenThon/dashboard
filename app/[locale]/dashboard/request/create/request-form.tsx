"use client";

import {
  CONTENT_TYPE,
  REPORT_CATEGORY_OPTIONS,
} from "@/app/[locale]/mockData/report-category.type";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
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
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "@/i18n/navigation";

import { Plus, Trash, X } from "lucide-react";
import { useFieldArray, useForm } from "react-hook-form";

import { FilesUpload } from "../../(components)/Files-upload";
import VideoUpload from "../../(components)/video-upload";

interface PublicReportFormData {
  report_category: string;
  report_title: string;
  description: string;
  website_url: {
    url: string;
  }[];
  agreeTerms: boolean;
  phone_number: string;
  email: string;
  attachement: File[];
  content_type: string;
  video: File;
  account_handle?: string;
  hashtag?: string;
  image: File[];
}

export default function RequestForm() {
  const router = useRouter();
  const form = useForm<PublicReportFormData>({
    defaultValues: {
      report_category: "",
      report_title: "",
      description: "",
      agreeTerms: true,
      website_url: [{ url: "" }],
      phone_number: "",
      email: "",
      attachement: [],
      content_type: "",
    },
  });

  const agreeTerms = form.watch("agreeTerms");
  const selectedContentType = form.watch("content_type");
  const {
    fields: websiteURLFields,
    append: appendWebsiteURL,
    remove: removeWebsiteURL,
  } = useFieldArray({
    control: form.control,
    name: "website_url",
  });

  return (
    <section>
      <Card className="mx-auto w-full max-w-2xl px-4">
        <CardHeader>
          <CardTitle className="text-xl font-semibold sm:text-2xl">
            Submit a Report
          </CardTitle>
          <CardDescription>
            Report digital content, websites, or online activities that require
            government attention. All reports are handled confidentially.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <div className="">
              <FormField
                control={form.control}
                name="report_category"
                render={({ field }) => (
                  <FormItem>
                    <FieldLabel label="Report Category" required />
                    <FormControl>
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select Category" />
                        </SelectTrigger>
                        <SelectContent>
                          {REPORT_CATEGORY_OPTIONS.map((reportCategory) => (
                            <SelectItem
                              key={reportCategory.value}
                              value={reportCategory.value}
                            >
                              {reportCategory.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="mt-6">
              <FormField
                control={form.control}
                name="report_title"
                render={({ field }) => (
                  <FormItem>
                    <FieldLabel label="Title" required />
                    <FormControl>
                      <Input
                        type="text"
                        {...field}
                        placeholder="Brief description of the issue"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="mt-6">
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FieldLabel label="Detailed Description" required />
                    <FormControl>
                      <Textarea
                        {...field}
                        className="min-h-[120px]"
                        placeholder="Provide detailed information about the issue, including what you observed and why it's concerning..."
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="mt-6 space-y-4">
              <FieldLabel label="URL to be reported" required />
              {websiteURLFields.map((websiteURL, websiteURLIndex) => (
                <div key={websiteURL.id} className="flex items-start gap-2">
                  <FormField
                    control={form.control}
                    name={`website_url.${websiteURLIndex}.url`}
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormControl>
                          <Input
                            {...field}
                            value={field.value ?? ""}
                            placeholder="https://example.com"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {/* Only show remove button if index > 0 */}
                  {websiteURLIndex > 0 && (
                    <Button
                      type="button"
                      onClick={() => removeWebsiteURL(websiteURLIndex)}
                      className="mt-1 h-8 w-8 rounded-full bg-orange-500 hover:bg-orange-400"
                    >
                      <Trash className="h-4 w-4 font-bold text-white" />
                    </Button>
                  )}
                </div>
              ))}
              <Button
                type="button"
                onClick={() => appendWebsiteURL({ url: "" })}
                disabled={websiteURLFields.length >= 5}
                className="bg-green-700 hover:bg-green-600"
              >
                <Plus className="rounded-full bg-white text-green-900" />
                <span className="text-sm dark:text-white"> Add URL</span>
              </Button>
            </div>
            <div className="mt-6">
              <FormField
                control={form.control}
                name="content_type"
                render={({ field }) => (
                  <FormItem>
                    <FieldLabel label="Content to be reported" />

                    <div className="relative">
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <FormControl>
                          <SelectTrigger className="w-full pr-10">
                            <SelectValue placeholder="Select category of content" />
                          </SelectTrigger>
                        </FormControl>

                        <SelectContent>
                          {CONTENT_TYPE.map((type) => (
                            <SelectItem key={type.value} value={type.value}>
                              {type.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {selectedContentType && (
                        <button
                          type="button"
                          className="text-muted-foreground absolute top-1/2 right-4 flex h-5 w-5 -translate-y-1/2 items-center justify-center rounded-full hover:text-red-500"
                          onClick={() => form.setValue("content_type", "")}
                        >
                          <X size={14} />
                        </button>
                      )}
                    </div>

                    <FormMessage />
                  </FormItem>
                )}
              />
              {selectedContentType === "video" && (
                <div className="mt-2">
                  <FormField
                    control={form.control}
                    name="video"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <VideoUpload
                            value={field.value}
                            onChange={field.onChange}
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              )}
              {selectedContentType === "account_handle" && (
                <div className="mt-2">
                  <FormField
                    control={form.control}
                    name="account_handle"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="@username or account name"
                            {...field}
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              )}
              {selectedContentType === "hashtag" && (
                <div className="mt-2">
                  <FormField
                    control={form.control}
                    name="hashtag"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="#example" {...field} />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              )}
              {selectedContentType === "image" && (
                <div className="mt-2">
                  <FormField
                    control={form.control}
                    name="image"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <FilesUpload
                            value={field.value}
                            onChange={field.onChange}
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              )}
            </div>
            <div className="mt-6">
              <FormField
                control={form.control}
                name="agreeTerms"
                render={({ field }) => (
                  <FormItem className="flex items-start gap-2">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FieldLabel label="Submit anonymously (recommended)" />
                  </FormItem>
                )}
              />
              {!agreeTerms && (
                <Card className="mt-4 bg-[#fefce8] px-4">
                  <span className="text-[#945b25]">
                    Providing contact information is optional but may help with
                    follow-up questions.
                  </span>
                  <div className="mt-2 grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FieldLabel label="Email" />
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="example@email.com"
                              {...field}
                              className="bg-white"
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone_number"
                      render={({ field }) => (
                        <FormItem>
                          <FieldLabel label="Phone Number" />
                          <FormControl>
                            <Input
                              placeholder="012345678"
                              {...field}
                              className="bg-white"
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                </Card>
              )}
            </div>
            {/* <div className="mt-6">
              <FormField
                control={form.control}
                name="attachement"
                render={({ field }) => (
                  <FormItem>
                    <FieldLabel label="Supporting Evidence (Optional)" />
                    <FormControl>
                      <FilesUpload
                        value={field.value}
                        onChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div> */}
            <Card className="mt-6 bg-[#eff6ff]">
              <CardHeader>
                <CardTitle className="text-md font-semibold text-[#2a60ac] sm:text-lg">
                  Privacy Notice
                </CardTitle>
                <CardDescription className="text-[#4968bd]">
                  Your report will be reviewed by authorized government
                  personnel only. If submitted anonymously, no personal
                  information will be stored or tracked.
                </CardDescription>
              </CardHeader>
            </Card>
            <div className="mt-6 flex justify-center gap-2">
              <Button
                variant="outline"
                onClick={() => router.push("/dashboard/request")}
                className="w-[27vw]"
              >
                Back
              </Button>
              <Button
                className="w-[27vw] bg-green-700 hover:bg-green-600"
                onClick={() => router.push("/dashboard/request/status")}
              >
                Submit
              </Button>
            </div>
          </Form>
        </CardContent>
      </Card>
    </section>
  );
}
