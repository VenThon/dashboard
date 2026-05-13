"use client";

import { useRef } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { Upload, X } from "lucide-react";

type FilesUploadProps = {
  value?: File[];
  onChange?: (files: File[]) => void;
};

export function FilesUpload({ value = [], onChange }: FilesUploadProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const files = value;

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    onChange?.([...files, ...Array.from(e.target.files)]);
  };

  const removeFile = (index: number) => {
    onChange?.(files.filter((_, i) => i !== index));
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
        className="cursor-pointer rounded-lg border-2 border-dashed transition-colors hover:bg-gray-50"
        onClick={handleClick}
      >
        <CardContent>
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
              <Upload className="h-6 w-6 text-gray-500" />
            </div>

            <h3 className="text-md font-medium">
              {files.length > 0
                ? `${files.length} file(s) selected`
                : "Drag and drop files here, or click to select"}
            </h3>

            <p className="text-muted-foreground text-sm">
              Supported formats: JPG, JPEG, PNG, PDF, DOCX, CSV
            </p>

            <Button
              variant="outline"
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleClick();
              }}
            >
              {files.length > 0 ? "Add more files" : "Select files"}
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
              <div>
                <p className="line-clamp-1 text-sm font-medium">{file.name}</p>
                <p className="text-muted-foreground text-xs">
                  {(file.size / 1024).toFixed(2)} KB
                </p>
              </div>

              <Button
                variant="ghost"
                size="icon"
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
