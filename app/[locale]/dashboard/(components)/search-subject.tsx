"use client";

import React, { useCallback, useEffect, useState } from "react";

import { useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "@/i18n/navigation";

import { useDebouncedCallback } from "@mantine/hooks";
import { XIcon } from "lucide-react";

export function SearchSubjectCreation() {
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");

  const router = useRouter();
  useEffect(() => {
    const value = searchParams.get("subject_name") || "";
    setSearchQuery(value);
  }, [searchParams]);

  const buildSearchParams = useCallback(
    (searchValue: string) => {
      const newSearchParams = new URLSearchParams(searchParams);
      newSearchParams.set("page", "1");
      newSearchParams.set("subject_name", searchValue);
      return newSearchParams.toString();
    },
    [searchParams],
  );

  const updateUrl = useDebouncedCallback((value: string) => {
    const queryString = buildSearchParams(value);
    router.push(`?${queryString}`, { scroll: false });
  }, 400);

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    updateUrl(value);
  };

  const clearSearch = () => {
    const params = new URLSearchParams(searchParams);
    params.delete("subject_name");
    router.push(`?${params}`);
    setSearchQuery("");
  };

  return (
    <div className="relative w-full flex-1 md:max-w-sm">
      <Input
        placeholder="Search by subject"
        className="w-full sm:max-w-lg"
        value={searchQuery}
        onChange={onSearch}
      />
      <Button
        type="button"
        variant="ghost"
        size="icon"
        className="absolute top-1/2 right-1 h-7 w-7 -translate-y-1/2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
        onClick={clearSearch}
      >
        <XIcon className="h-4 w-4" />
        <span className="sr-only">Clear</span>
      </Button>
    </div>
  );
}
