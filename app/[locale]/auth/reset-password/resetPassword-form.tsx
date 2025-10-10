"use client";

import { createElement, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

import { EyeIcon, EyeOffIcon } from "lucide-react";

export function ResetPasswordForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Reset Password</h1>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-3">
          <Label htmlFor="newpassword">New password</Label>
          <Input id="password" type="password" required />
        </div>
        <div className="grid gap-3">
          <div className="flex items-center">
            <Label htmlFor="confirmnewpassword">Confirm new password</Label>
          </div>
          <div className="relative">
            <Input
              placeholder="Confirm Password"
              type={passwordVisibility ? "text" : "password"}
              autoComplete="current-password"
            />
            <div
              className="text-muted-foreground absolute inset-y-0 right-0 flex cursor-pointer items-center p-3"
              onClick={() => setPasswordVisibility(!passwordVisibility)}
            >
              {createElement(passwordVisibility ? EyeOffIcon : EyeIcon, {
                className: "h-4 w-4",
              })}
            </div>
          </div>
        </div>
        <Button type="submit" className="w-full bg-[#058248]">
          Change
        </Button>
      </div>
    </form>
  );
}
