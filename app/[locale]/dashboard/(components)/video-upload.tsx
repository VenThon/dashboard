"use client";

import { useRef } from "react";

import { UploadCloud, X } from "lucide-react";

interface VideoUploadProps {
  value?: File;
  onChange: (file?: File) => void;
}

export default function VideoUpload({ value, onChange }: VideoUploadProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleFile = (file?: File) => {
    if (!file) return;

    // file validation
    if (file.size > 50 * 1024 * 1024) {
      alert("Video must be under 50MB");
      return;
    }

    onChange(file);
  };

  return (
    <div className="space-y-3">
      <div
        className="border-muted-foreground/30 hover:bg-muted flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed p-6 text-center transition"
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          e.preventDefault();
          const file = e.dataTransfer.files?.[0];
          handleFile(file);
        }}
      >
        <UploadCloud className="text-muted-foreground mb-2 h-8 w-8" />

        <p className="text-sm font-medium">Drag and drop video here</p>

        <p className="text-muted-foreground text-xs">or click to upload</p>

        <input
          ref={inputRef}
          type="file"
          accept="video/mp4,video/webm,video/mov"
          className="hidden"
          onChange={(e) => handleFile(e.target.files?.[0])}
        />
      </div>

      {value && (
        <div className="flex items-center justify-between rounded-md border px-3 py-2 text-sm">
          <span className="truncate">{value.name}</span>

          <button
            type="button"
            onClick={() => onChange(undefined)}
            className="text-muted-foreground hover:text-red-500"
          >
            <X size={16} />
          </button>
        </div>
      )}
    </div>
  );
}
