import LocaleSwitcher from "@/components/lang/local-switcher";

import { SignUpForm } from "./signup-form";

export default function Page() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="hidden items-center justify-center bg-blue-100 lg:flex">
        <div className="flex size-20 items-center justify-center rounded-full border border-yellow-400 bg-yellow-100">
          Alybaba
        </div>
      </div>
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-end">
          <LocaleSwitcher />
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <SignUpForm />
          </div>
        </div>
      </div>
    </div>
  );
}
