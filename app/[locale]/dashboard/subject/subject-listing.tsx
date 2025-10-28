"use client";

import { useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link } from "@/i18n/navigation";

import { Ellipsis, Eye, FilePenLine, Plus } from "lucide-react";

import { FilterSubject } from "../(components)/filter-subject";
import { SearchSubjectCreation } from "../(components)/search-subject";

interface SubjectItem {
  id: string;
  subject_name: string;
  grade_level: string;
  ctc_center: string;
  total_chapters: number;
  total_hours: number;
  update_at: number;
}

const subjectDataList: SubjectItem[] = [
  {
    id: "1",
    subject_name: "ICT",
    grade_level: "10",
    ctc_center: "CTC 1",
    total_chapters: 10,
    total_hours: 100,
    update_at: Date.now(),
  },
  {
    id: "2",
    subject_name: "English",
    grade_level: "11",
    ctc_center: "CTC 2",
    total_chapters: 20,
    total_hours: 200,
    update_at: Date.now(),
  },
  {
    id: "3",
    subject_name: "English",
    grade_level: "12",
    ctc_center: "CTC 3",
    total_chapters: 40,
    total_hours: 200,
    update_at: Date.now(),
  },
  {
    id: "4",
    subject_name: "Khmer",
    grade_level: "7",
    ctc_center: "CTC 2",
    total_chapters: 20,
    total_hours: 200,
    update_at: Date.now(),
  },
  {
    id: "5",
    subject_name: "IT",
    grade_level: "8",
    ctc_center: "CTC 1",
    total_chapters: 20,
    total_hours: 200,
    update_at: Date.now(),
  },
  {
    id: "6",
    subject_name: "IT",
    grade_level: "9",
    ctc_center: "CTC 1",
    total_chapters: 20,
    total_hours: 200,
    update_at: Date.now(),
  },
];

export default function SubjectListingData() {
  const searchParams = useSearchParams();
  // const locale = useLocale();

  const page = Number.parseInt(searchParams.get("page") || "1");
  const pageSize = Number.parseInt(searchParams.get("pageSize") || "10");

  const searchQuery = searchParams.get("subject_name")?.toLowerCase() || "";
  const gradeFilter = searchParams.get("grade");

  const filteredSubjects = subjectDataList.filter((item) => {
    const matchesSearch = item.subject_name.toLowerCase().includes(searchQuery);
    const matchesGrade = gradeFilter ? item.grade_level === gradeFilter : true;
    return matchesSearch && matchesGrade;
  });
  // const router = useRouter();

  return (
    <section>
      <h2 className="text-primary text-3xl font-bold">All Subjects</h2>
      <div id="filter-functions" className="mt-6">
        <header className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <SearchSubjectCreation />
          <div className="flex w-full items-center gap-4 md:w-fit">
            <FilterSubject />
            <Link href="/dashboard/subject/create">
              <Button className="border-primary w-full bg-green-600 sm:w-auto dark:text-white">
                <Plus />
                Add New Subject
              </Button>
            </Link>
          </div>
        </header>
        <section id="subject-data-list" className="mt-6">
          {filteredSubjects.length > 0 ? (
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
              {filteredSubjects.map((item, index) => (
                <Card
                  key={`${item.id}-${index}`}
                  className="group hover:bg-accent cursor-pointer"
                >
                  <CardHeader className="flex items-start justify-between gap-2">
                    <CardTitle className="text-primary text-xl font-medium">
                      {item.subject_name}
                    </CardTitle>
                    <DropdownMenu modal={false}>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Ellipsis color="#004282" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-[200px]">
                        <DropdownMenuLabel>Action</DropdownMenuLabel>
                        <DropdownMenuGroup>
                          <DropdownMenuItem asChild>
                            <div className="flex cursor-pointer items-center">
                              <Eye className="mx-2 h-4 w-4" />
                              <span>View Details</span>
                            </div>
                          </DropdownMenuItem>

                          <DropdownMenuItem asChild>
                            <div className="mt-1 flex cursor-pointer items-center">
                              <FilePenLine className="mx-2 h-4 w-4" />
                              <span>Edit</span>
                            </div>
                          </DropdownMenuItem>
                        </DropdownMenuGroup>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-base">
                      {item.total_chapters} Chapters
                    </p>
                    {/* <p className="text-muted-foreground text-xs">
                      Latest update:{" "}
                      {formatDate(new Date(item.update_at), {
                        formatStr: "dd-LLL-yyyy pp",
                        localeCode: locale,
                      })}
                    </p> */}
                  </CardContent>

                  <CardFooter className="flex justify-between gap-2">
                    <p className="text-base font-medium text-orange-600">
                      ថ្នាក់ទី {item.grade_level}
                    </p>
                    <p className="text-primary text-base font-medium">
                      {item.total_hours} Hours
                    </p>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-muted-foreground py-8 text-center">
              No subjects found.
            </div>
          )}
        </section>
      </div>
      <div
        id="footer"
        className="mt-6 grid w-full grid-cols-2 items-center justify-between gap-2 md:grid-cols-2 lg:grid-cols-3"
      >
        <div className="flex w-full items-center gap-2 sm:w-fit">
          <span>Rows per page</span>
          <Select>
            <SelectTrigger className="max-w-sm">
              <SelectValue placeholder="10" defaultValue={10} />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="10">10</SelectItem>
                <SelectItem value="20">50</SelectItem>
                <SelectItem value="30">100</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="flex w-full items-center justify-center">
          <span>
            Page {page} of {pageSize}
          </span>
        </div>

        <Pagination className="col-span-2 mx-0 items-end justify-center md:col-span-2 lg:col-span-1 lg:justify-end">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem className="flex flex-nowrap">
              <PaginationLink href="#">1</PaginationLink>
              <PaginationLink href="#">2</PaginationLink>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </section>
  );
}
