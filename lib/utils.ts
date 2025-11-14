import { type ClassValue, clsx } from "clsx";
import { Locale, format } from "date-fns";
import { enUS } from "date-fns/locale";
import { km } from "date-fns/locale/km";
import { twMerge } from "tailwind-merge";

interface FormatDateOptions {
  formatStr?: string;
  localeCode?: string;
  isUtc?: boolean;
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(
  input: string | Date,

  options: FormatDateOptions = {},
): string {
  const { formatStr = "yyyy-MM-dd", localeCode = "en" } = options;

  const date = new Date(input);
  if (isNaN(date.getTime())) return "";

  const localeMap: Record<string, Locale> = {
    en: enUS,
    km: km,
  };

  const selectedLocale = localeMap[localeCode.split("-")[0]] || enUS;

  return format(date, formatStr, {
    locale: selectedLocale,
  });
}
