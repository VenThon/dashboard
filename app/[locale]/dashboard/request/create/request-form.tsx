"use client";

import { REPORT_CATEGORY_OPTIONS } from "@/app/[locale]/mockData/report-category.type";
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

import { useForm } from "react-hook-form";

import { FilesUpload } from "../../(components)/Files-upload";

interface PublicReportFormData {
  report_category: string;
  report_title: string;
  description: string;
  website_url: string;
  agreeTerms: boolean;
  phone_number: string;
  email: string;
  attachement: File[];
}

export default function RequestForm() {
  const form = useForm<PublicReportFormData>({
    defaultValues: {
      report_category: "",
      report_title: "",
      description: "",
      agreeTerms: true,
      website_url: "",
      phone_number: "",
      email: "",
      attachement: [],
    },
  });

  const agreeTerms = form.watch("agreeTerms");
  const router = useRouter();

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
            <div className="mt-6">
              {/* <FormField
                control={form.control}
                name="website_url"
                render={({ field }) => (
                  <FormItem>
                    <FieldLabel
                      label="Website URL or Link (if applicable)"
                      required
                    />
                    <FormControl>
                      <Input
                        {...field}
                        type="url"
                        placeholder="https://example.com"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              /> */}
              <FormField
                control={form.control}
                name="website_url"
                rules={{
                  validate: (value) => {
                    if (!value) return true;
                    try {
                      new URL(value);
                      return true;
                    } catch {
                      return "Please enter a valid URL";
                    }
                  },
                }}
                render={({ field }) => (
                  <FormItem>
                    <FieldLabel label="Website URL (Optional)" />
                    <FormControl>
                      <Input
                        {...field}
                        type="url"
                        placeholder="https://example.com"
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
            <div className="mt-6">
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
            </div>
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
            <div className="mt-6">
              <Button
                className="w-full"
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
