"use client";

import type { CountryCode, E164Number } from "libphonenumber-js";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

type PhoneInputProps = {
  value?: string;
  onChange: (value?: E164Number) => void;
  defaultCountry?: CountryCode;
};

export function PhoneNumberInput({
  value,
  onChange,
  defaultCountry = "KH",
}: PhoneInputProps) {
  return (
    <PhoneInput
      international
      defaultCountry={defaultCountry}
      value={value}
      onChange={onChange}
      className="flex w-full"
      // inputClass={cn(
      //   "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm",
      //   "ring-offset-background placeholder:text-muted-foreground",
      //   "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
      // )}
    />
  );
}
