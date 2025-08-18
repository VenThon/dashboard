"use client";

import { useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { Upload, X } from "lucide-react";

export function FileDropzone() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<File[]>([]);

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFiles((prevFiles) => [...prevFiles, ...Array.from(e.target.files!)]);
    }
  };

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  return (
    <div className="mt-4">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
        accept=".jpg,.jpeg,.png,.pdf,.docx,.csv"
        multiple
      />

      <Card
        className="cursor-pointer rounded-lg border-2 border-dashed border-gray-300 transition-colors hover:bg-gray-50"
        onClick={handleClick}
      >
        <CardContent className="p-6">
          <div className="flex flex-col items-center justify-center space-y-4 p-8 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
              <Upload className="h-6 w-6 text-gray-500" />
            </div>

            <div className="space-y-1">
              <h3 className="text-lg font-medium">
                {files.length > 0
                  ? `${files.length} file(s) selected`
                  : "Choose a file or drag & drop it here"}
              </h3>
              <p className="text-sm text-gray-500">
                Supported formats: JPG, JPEG, PNG, PDF, DOCX, CSV
              </p>
            </div>

            <Button
              variant="outline"
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleClick();
              }}
            >
              {files.length > 0 ? "Add More Files" : "Select Files"}
            </Button>
          </div>
        </CardContent>
      </Card>

      {files.length > 0 && (
        <div className="mt-4 space-y-2">
          {files.map((file, index) => (
            <div
              key={index}
              className="flex items-center justify-between rounded border p-3"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded bg-gray-100">
                  <span className="text-xs text-gray-500">
                    {file.name.split(".").pop()?.toUpperCase()}
                  </span>
                </div>
                <div>
                  <p className="line-clamp-1 text-sm font-medium">
                    {file.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {(file.size / 1024).toFixed(2)} KB
                  </p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                onClick={(e) => {
                  e.stopPropagation();
                  removeFile(index);
                }}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
